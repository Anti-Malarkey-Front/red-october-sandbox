#!/usr/bin/env node
// Play Red October from the command line, one move at a time, for testers (people or agents).
// The game is saved to a file after every move (default /tmp/red_october_cli.json; set SAVE=path for another).
//
//   node tools/test/play_cli.js new <men|sr|lsr> [easy|normal|hard]   start a game
//   node tools/test/play_cli.js show                                  the current page, the numbers, and what you can do
//   node tools/test/play_cli.js choose <n>                            pick option n on the page
//   node tools/test/play_cli.js draw <n>                              draw a card from deck n (on the main page)
//   node tools/test/play_cli.js play <n>                              play card n from your hand
//   node tools/test/play_cli.js advisor <n>                           use pinned card n (advisors, the Cabinet, the Council, Wait and See)
//   node tools/test/play_cli.js stats                                 every number the game keeps (for spotting oddities)
//
// Run `npx dendrynexus make-html` first. Each move prints the new page.
var path = require('path');
var fs = require('fs');
global.RO = require('../../source/model.js');
var engine = require('../../node_modules/dendrynexus/lib/engine');
var compiler = require('../../node_modules/dendrynexus/lib/parsers/compiler');

var SAVE = process.env.SAVE || '/tmp/red_october_cli.json';
var game = null;
compiler.convertJSONToGame(fs.readFileSync(path.join(__dirname, '..', '..', 'out', 'game.json')), function(err, g) {
  if (err) { throw err; }
  game = g;
});

function flat(x) {
  if (x === null || x === undefined) { return ''; }
  if (typeof x === 'string' || typeof x === 'number') {
    // the web page draws charts in these placeholders; here they are only named
    return String(x).replace(/<div class="parliament"[^>]*><\/div>/g, '[a parliament chart is drawn here in the browser]')
                    .replace(/<div class="recap"><\/div>/g, '[the run in review is drawn here in the browser]').replace(/<[^>]+>/g, '');
  }
  if (Array.isArray(x)) { return x.map(flat).join(''); }
  if (x.type === 'paragraph') { return flat(x.content) + '\n\n'; }
  if (x.type === 'heading') { return '== ' + flat(x.content) + ' ==\n\n'; }
  if (x.type === 'emphasis-1' || x.type === 'emphasis-2') { return flat(x.content); }
  if (x.content !== undefined) { return flat(x.content); }
  return '';
}

function Ui() { this.text = []; this.choices = null; this.decks = []; this.hand = []; this.pinned = []; this.over = false; }
engine.UserInterface.makeParentOf(Ui);
Ui.prototype.newPage = function() { this.text = []; };
Ui.prototype.displayContent = function(p) { this.text.push(flat(p)); };
Ui.prototype.displayChoices = function(c) { this.choices = c; };
Ui.prototype.displayDecks = function(d) { this.decks = d; };
Ui.prototype.displayHand = function(h) { this.hand = h; };
Ui.prototype.displayPinnedCards = function(c) { this.pinned = c; };
Ui.prototype.removeChoices = function() { this.choices = null; this.decks = []; this.pinned = []; };
Ui.prototype.displayGameOver = function() { this.over = true; };

var ui = new Ui();
var eng = new engine.DendryEngine(ui, game);

function save() { fs.writeFileSync(SAVE, JSON.stringify(eng.getExportableState())); }
function load() {
  if (!fs.existsSync(SAVE)) { console.log('No game in progress. Start one with: node tools/test/play_cli.js new sr normal'); process.exit(1); }
  eng.setState(JSON.parse(fs.readFileSync(SAVE, 'utf8')));
}
function Q() { return eng.state.qualities; }
function pick(re) {
  var c = eng.getCurrentChoices() || [];
  for (var i = 0; i < c.length; i++) { if (c[i].canChoose !== false && re.test(flat(c[i].title))) { eng.choose(i); return true; } }
  return false;
}

var MONTHS = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// the browser's words (out/html/ui.js): print what a player there would see
var LEGALITY = ['banned', 'expelled', 'tolerated', 'legal'];
var ALLIANCE = ['no alliance', 'cooperation', 'bloc', 'coalition'];
function word(v, steps) { for (var i = 0; i < steps.length - 1; i++) { if (v < steps[i][0]) { return steps[i][1]; } } return steps[steps.length - 1][1]; }
var REL_WORDS = [[20, 'hostile'], [40, 'cold'], [60, 'cooperative'], [75, 'friendly'], [1e9, 'close']];
var FRONT_WORDS = [[15, 'Whites contained'], [35, 'Whites on the offensive'], [55, 'front wavering'], [65, 'Whites advancing'], [72, 'Whites near Moscow'], [1e9, 'Moscow lost']];
function antWord(a) { return a < 20 ? 'calm' : (a < 40 ? 'uneasy' : (a < 70 ? 'hostile' : 'on the brink')); }
function thirdLabel(q) { return q.player_party === 'lsr' ? 'Mensheviks' : (q.player_party === 'sr' && !q.lsr_split ? 'Left SR faction' : 'Left SRs'); }
function numbers() {
  // relations and chances are rounded down, as the rules compare them (>= 75 for a coalition, 45% for force)
  var q = Q(), r = Math.round, fl = Math.floor;
  if (!q.started) { return ''; }
  var date = (q.turn_length < 1 ? (q.half_month ? 'Late ' : 'Early ') : '') + MONTHS[q.month] + ' ' + q.year;
  var arena = ({soviets: 'Congress of Soviets', assembly: 'Constituent Assembly', provincial: 'city soviets'})[RO.currentArena(q)];
  var you = q.player_party === 'lsr' && !q.lsr_split ? 'Left SRs (on SR lists)' : (q.pname || q.player_party);
  function rel(label, key, lvl) {
    var v = fl(q[key] || 0);
    return label + ' ' + v + ' ' + word(v, REL_WORDS) + (lvl ? ' (' + ALLIANCE[Math.max(0, Math.min(3, q[lvl] || 0))] + ')' : '');
  }
  var lines = ['--- ' + date + ' · ' + (q.pname || q.player_party) + ' ---',
    'Resources ' + r(q.resources) + ' · Members ' + (r(q.members) * 1000).toLocaleString('en-GB') + (q.members >= (q.mem_cap || 400) - 0.5 ? ' (the most the party can hold)' : '') + ' · Legal status ' + LEGALITY[Math.max(0, Math.min(3, r(q.legality)))] +
      ' · Dissent ' + r(q.dissent * 100) + '% · Support: ' + you + ' ' + r(q.player_poll) + '% (' + arena + ', projected)',
    'Bread ' + r(q.bread) + ' · Ruble ' + r(q.ruble) + ' · War weariness ' + r(q.war_weariness) + ' · Army discipline ' + r(q.army_discipline) +
      ' · Land pressure ' + r(q.land_pressure) + (q.bol_regime ? '' : ' · Bolsheviks ' + r(q.bolshevik) + ' · Right ' + r(q.right_threat)) + ' · Soviet democracy ' + r(q.soviet_democracy) +
      (q.bol_regime ? ' · Repression ' + r(q.repression) : '') +
      (q.bol_regime && q.dix >= 34 ? ' · White front ' + fl(q.white_front) + ' (' + word(q.white_front, FRONT_WORDS) + '; the Whites take Moscow and the game is lost at 72)' : ''),
    'In government: ' + (q.in_coalition && !q.bol_regime ? 'yes' : (q.lsr_in_gov ? 'a few commissariats' : 'no')) + ' · Bolshevik regime: ' + (q.bol_regime ? 'yes' : 'no'),
    'Relations: ' + rel(q.partner_name + ' (main partner)', 'rel_ally', 'ally_lvl') + ' · ' + rel(thirdLabel(q), 'rel_lsr', 'ally_lsr') + ' · ' + rel('Bolsheviks', 'rel_bol', 'ally_bol') + ' · ' + rel('Kadets', 'rel_kad', null) +
      '. (Alliances: cooperation at 40, bloc at 60, coalition at 75.' +
      (q.bol_regime ? {menshevik: ' Bolsheviks at 43: what the 1919 programme and the 1920 demand for free soviets need.', sr: ' Bolsheviks at 33 and 35: what the 1919 peasant programme and the 1920 demand for free soviets need.', lsr: ' Bolsheviks at 38: what the 1921 peasant bargain needs.'}[q.player_party] || '' : '') + ')'];
  var risk = RO.exileRisk(q);
  if (risk) { lines.push('WARNING: ' + (risk.level === 2 ? 'as things stand, the party will be driven abroad when the game ends in December 1921: ' : 'the party is close to exile: ') + risk.reasons.join('; ') + '.'); }
  if (q.bol_regime && q.dix >= 34 && q.white_front >= 60) { lines.push('WARNING: the Whites are close. If the front reaches 72, they take Moscow and the game is lost.'); }
  try {
    var opp = RO.opposition(q), st = r(RO.strength(q));
    if (opp.length) {
      lines.push('Opposition: ' + opp.map(function(c) {
        return c.name + ': ' + antWord(c.ant) + ' ' + r(c.ant) + ' (its strength ' + r(c.power) + (st >= 18 ? '; your chance to break it ' + fl(100 * c.odds) + '%' : '') + ')';
      }).join('; ') + ' · Your strength ' + st + (st >= 18 ? ', enough to strike' : ', too weak to strike'));
      lines.push('  (Hostility: at ' + RO.SANCTION_AT + ' a camp tries sanctions, at ' + RO.REVOLT_AT + ' it takes up arms; it needs strength ' + RO.ACT_FROM + ' to act and ' + RO.ARMS_AT +
        ' to take up arms. At strength 18 you can pass an unpopular law by force; a camp where your chance is under 45% is left alone.)');
    }
  } catch (e) { /* not started */ }
  return lines.join('\n') + '\n';
}

function show() {
  var out = [];
  out.push(ui.text.join('').replace(/\n{3,}/g, '\n\n').trim());
  out.push('');
  if (ui.over || Q().game_over) {
    out.push(numbers());
    out.push('*** THE GAME IS OVER. Ending: ' + Q().ending + ' ***');
  }
  var scene = eng.getCurrentScene();
  if (scene && scene.isHand) {
    out.push(numbers());
    out.push('DECKS (draw <n>):' + (ui.decks.length ? '' : ' none'));
    ui.decks.forEach(function(d, i) { out.push('  ' + i + ') ' + flat(d.title) + (flat(d.subtitle) ? ' - ' + flat(d.subtitle) : '') + (d.canChoose === false ? ' [empty]' : '')); });
    var hand = eng.state.currentHands[eng.state.sceneId] || [];
    out.push('HAND (play <n>): ' + (hand.length ? '' : 'empty - draw a card first'));
    hand.forEach(function(c, i) { out.push('  ' + i + ') ' + flat(c.title) + ' - ' + flat(c.subtitle)); });
    out.push('PINNED (advisor <n>): ' + (Q().pinnedCardsDescription || ''));
    ui.pinned.forEach(function(c, i) { out.push('  ' + i + ') ' + flat(c.title) + ' - ' + flat(c.subtitle) + (c.canChoose === false ? ' [unavailable]' : '')); });
    out.push('Playing a card or an advisor action usually ends the turn.');
  } else if (ui.choices && ui.choices.length) {
    out.push('CHOICES (choose <n>):');
    ui.choices.forEach(function(c, i) {
      out.push('  ' + i + ') ' + flat(c.title) + (flat(c.subtitle) ? '  -- ' + flat(c.subtitle) : '') + (c.canChoose === false ? '  [unavailable]' : ''));
    });
  }
  console.log(out.join('\n'));
}

var cmd = process.argv[2], arg = process.argv[3];
if (cmd === 'new') {
  var party = {men: /Mensheviks/, sr: /Socialist Revolutionaries/, lsr: /Left SRs/}[arg || 'sr'];
  var diff = new RegExp('^' + ((process.argv[4] || 'normal').replace(/^./, function(c) { return c.toUpperCase(); })));
  eng.beginGame();
  pick(/Start game/); pick(party); pick(diff);
  // the party's introduction: keep its text, then begin
  var guard = 0;
  while (!pick(/^Begin/) && guard++ < 5) { if (!pick(/./)) { break; } }
  save(); show();
} else if (cmd === 'show') {
  load(); show();
} else if (cmd === 'stats') {
  load();
  var q = Q(), keys = Object.keys(q).filter(function(k) { return typeof q[k] === 'number'; }).sort();
  console.log(keys.map(function(k) { return k + '=' + Math.round(q[k] * 100) / 100; }).join('  '));
} else if (cmd === 'choose' || cmd === 'draw' || cmd === 'play' || cmd === 'advisor') {
  load();
  var n = parseInt(arg, 10);
  try {
    if (cmd === 'choose') {
      if (eng.getCurrentScene().isHand) { console.log('This is the main page: use draw, play or advisor.'); show(); process.exit(1); }
      var c = eng.getCurrentChoices();
      if (!c || !c[n]) { console.log('No choice ' + arg + '.'); show(); process.exit(1); }
      if (c[n].canChoose === false) { console.log('That choice is unavailable.'); show(); process.exit(1); }
      eng.choose(n);
    } else if (cmd === 'draw') {
      var d = ui.decks[n];
      if (!d) { console.log('No deck ' + arg + '.'); process.exit(1); }
      var card = eng.drawCard(d.id);
      if (!card || !card.id) { console.log('That deck has nothing to draw now.'); }
    } else if (cmd === 'play') {
      var hand = eng.state.currentHands[eng.state.sceneId] || [];
      if (!hand[n]) { console.log('No card ' + arg + ' in hand.'); process.exit(1); }
      eng.playCard(hand[n].id);
    } else {
      var p = ui.pinned[n];
      if (!p) { console.log('No pinned card ' + arg + '.'); process.exit(1); }
      eng.playPinnedCard(p.id);
    }
  } catch (e) {
    console.log('ENGINE ERROR: ' + (e && e.stack || e));
    process.exit(2);
  }
  save(); show();
} else {
  console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(1, 14).join('\n').replace(/^\/\/ ?/gm, ''));
}
