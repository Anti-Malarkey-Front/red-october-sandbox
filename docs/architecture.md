# Architecture

How Red October is put together: the engine, the scenes, the rules model, the web page, and how a build turns them into the game. For setting up and making changes, see [CONTRIBUTING.md](../CONTRIBUTING.md); for the tests, see [testing.md](testing.md).

## Overview

```
source/                         the game
  info.dry                      title, author, IFID
  scenes/*.scene.dry            scenes: events, cards, advisors, the turn loop     ┐
  qdisplays/*.qdisplay.dry      words for numbers                                  ├─ npx dendrynexus make-html ─> out/game.json
  model.js                      the rules (global RO)  ─ tools/build/sync_model.sh ─> out/html/model.js           └─> out/html/core.js
out/html/                       the web page (served as is by GitHub Pages)
  index.html  game.js  ui.js  game.css  d3-*.js  jquery  img/  music/
```

The game is a static web page. There is no server: the state lives in the browser, and saves are kept in the browser's local storage (or copied out as text from Save/Load).

## The engine: Dendry (dendrynexus)

[Dendry](https://github.com/idmillington/dendry) is a scene-based interactive-fiction engine; the game runs on Autumn Chen's fork, [dendrynexus](https://github.com/aucchen/dendrynexus), installed from GitHub by `npm install`. It provides:

- **Scenes** (`*.scene.dry`): a title, text, options, and conditions (`view-if`, `choose-if`) and effects (`on-arrival`) written in a small expression language or as JavaScript blocks `{! ... !}`.
- **Qualities**: the game's state, a flat map of numbers and strings (`Q` in JavaScript). Everything the game knows is a quality.
- **Decks, hands and pinned cards**: scenes tagged as cards are drawn into a hand; pinned cards are always on the table.
- **Events**: scenes tagged `event`, offered by `post_event.events_choice` whenever their `view-if` holds, highest `priority` first.

`npx dendrynexus make-html` compiles every `.dry` file under `source/` into `out/game.json`, and packs it with the engine into `out/html/core.js`. Both are build products and are not committed.

## The scenes

| Folder or file | Role |
|---|---|
| `root.scene.dry` | The title menu, party choice, difficulty and introduction; sets every quality to its starting value (including the flag list and `Q.timers`, the cooldowns). |
| `main.scene.dry` | The turn's main page: the hand, the three decks and the pinned cards. Easy has its own variant with a bigger hand. |
| `post_event.scene.dry` | Runs after every action: advances the calendar, applies the month's drift (`RO.drift`), dues, membership, polls, the opposition's turn and the alliance web, records the turn for the recap, checks the immediate endings, then looks for events. Its `go-to` lines are mutually exclusive by design. |
| `events/` | About 80 dated and conditional events, from the February Revolution to the arrests of August 1921, and the opposition's sanctions and revolts. Most are shared, with party-specific text and options. |
| `party_affairs/`, `coalition_affairs/`, `soviet_affairs/` | The three decks. Coalition Affairs is the 1917 government's agenda; Soviet Affairs is 1918-1921. |
| `advisors/` | One pinned card per advisor (generated), the Cabinet (generated), the Council and Wait and See. |
| `game_over.scene.dry` | Resolves `ending = 'final'` into one of the endings, awards achievements, and shows the ending text, the recap and the achievements page. |
| `status`, `library`, `credits`, `return`, `easy_discard`, `cancel_advisor_action` | Supporting pages. |

The clock is the quality `dix = (year - 1917) * 24 + (month - 1) * 2 + half`. Turns are half a month long until the calendar reform of February 1918, and a month long afterwards (`turn_length`). Events are gated on `dix`, so `dix >= 20` means "from early November 1917".

## The rules: `source/model.js`

The model is plain JavaScript that defines a global `RO` (in the browser) or a CommonJS module (in Node), so the same code runs in the game and in every test. Scenes call it from their JavaScript blocks, for example `RO.add(Q, {rel_bol: 5})` or `RO.law(Q, style, fn, label)`. Its main parts:

- **Parties and voter groups**: the three playable parties' starting values (`PARTY`), the eight parties of the elections, the voter groups and their base support (`BASE`).
- **Support and arenas**: how a party's appeal to each group becomes a share of the vote in each arena (the Congress of Soviets, the Constituent Assembly, the city soviets), and the parliaments drawn in the right-hand panel.
- **Drift**: what happens to bread, the ruble, war weariness, army discipline, land pressure, the Bolsheviks, the Right, Soviet democracy, repression and the Civil War front each month (`drift`, `policyDrift` for the Cabinet's settings).
- **Factions and dissent**: the party's currents, their strength and discontent, and the dissent they add up to.
- **Alliances**: the alliance web between the playable parties and the Bolsheviks (cooperation, bloc, coalition), what blocks it (`allianceBlocker`), and the fault lines that break it.
- **Advisors and the Council**: the advisor table (written by `gen_advisors.py`), who is available when (`ADVISOR_UNTIL`), and reshuffling and swapping.
- **The opposition**: what each camp objects to (`offence`), its hostility and how it fades (`campTarget`, `oppositionTurn`), its strength (`campPower`), and breaking it (`squash`, `breakCamp`, `squashOdds`).
- **Laws**: `RO.law` applies a contested measure phased in, by decree or by force, and records it for the recap.
- **The October fork and the Civil War**: the grievance behind an insurrection (`grievance`, `bolPower`), Kornilov's force and the resistance to it, the White front.
- **Warnings and records**: `exileRisk` for the Menshevik exile warning, `recordTurn` for the recap.

`out/html/model.js` is a copy that the page loads. `tools/build/sync_model.sh` (run by `npm run build`) and `gen_advisors.py` refresh it, and a unit test fails if the two differ.

## The web page: `out/html/`

These files are written by hand and are not touched by the build:

- **`index.html`** loads jQuery, d3, the parliament and line-graph helpers, the model, the engine (`core.js`), `game.js` and `ui.js`. Every local file is loaded with a `?v=NN` cache version; bump it when the file changes.
- **`game.js`** connects the engine to the page: rendering scenes, cards and choices, saving and loading, options (dark mode, font size, pictures, music), and the difficulty and party screens.
- **`ui.js`** draws everything around the story: the left sidebar (Main, Parties, Currents, Support tabs, with bars and turn-to-turn arrows), the right-hand panel (support by class, popularity, the Parliament and Opposition tabs), the "What changed" box after each choice, the parliament charts, the ending recap, music, the mobile top bar and drawers, the exile warning, and the `?debug` overlay of hidden numbers.
- **`game.css`** holds the colour tokens (light and dark), the layout (three columns on a desktop, drawers at 900 pixels and below) and the card styles.
- **`img/`**: `cards/` (generated SVG card art), `portraits/` and `events/` (period photographs), `parties/` (emblems), `title.svg`. **`music/`**: four period recordings.

## Generated content

Some scenes are written by scripts, so that a table of data stays the single source:

| Generator | Writes | From |
|---|---|---|
| `tools/build/gen_advisors.py` | `source/scenes/advisors/*` (every advisor, the Council), the advisor table in `source/model.js` | The advisor table in the script |
| `tools/build/gen_cabinet.py` | `advisors/cabinet.scene.dry`, the policy qdisplays | The policy table in the script (monthly effects live in `model.js`) |
| `tools/build/gen_laws.py` + `lawvariants.py` | The phased / decree / force routers for contested laws in the decks | The laws found in the deck scenes |
| `tools/build/gen_cards.py` | `out/html/img/cards/*.svg`, and a `card-image` line in new cards | The card titles |
| `tools/build/gen_art.py` | `out/html/img/title.svg`, the party emblems | The script |
| `tools/assets/fetch_art.py` | `out/html/img/portraits`, `img/events`, `music/`, `docs/credits/*`, `tools/assets/art_placed.json` | `tools/assets/art_manifest.json` and Wikimedia Commons |
| `tools/assets/wire_art.py` | `face-image` lines in events, the in-game credits pages | `art_placed.json` and the credits |

CI runs the first three generators and fails if their output differs from what is committed.

## Deployment

`.github/workflows/pages.yml` runs on every push and pull request: model unit tests and the generated-files check; full games for every party at Normal and Hard; every scripted strategy. On `main`, once they all pass, it builds the game and publishes `out/html` to GitHub Pages at https://evarnimtb-netizen.github.io/red-october/.
