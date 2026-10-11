# Testing and balance

Red October is tested by playing it: thousands of complete games, headless, with random and scripted players. This page describes each tool, what it checks and how to read its output. Run `npm run build` first; every tool reads `out/game.json`.

## The quick reference

```bash
npm test                         # everything CI runs (tools/test/ci.sh)
npm run test:model               # the model's unit tests
PARTY="Left SRs" DIFF=Hard STRICT=1 node tools/test/playtest.js 50 cautious
npm run fuzz                     # 5,000 games with random settings -> docs/reports/fuzz-report.md
npm run balance                  # every party, difficulty and strategy -> docs/reports/balance.md
npm run play -- new sr normal    # play from the command line
```

## Unit tests: `tools/test/test_model.js`

Tests of the rules in `source/model.js` that do not need a whole game: the served copy of the model matches the source; hostility fades and is rekindled; breaking a camp never takes resources below zero; advisors leave when they historically left; alliances explain why they cannot go further; the exile warning appears exactly when it should; and others. Each test builds a small state, calls the model and checks the result.

## The headless playtester: `tools/test/playtest.js`

```bash
node tools/test/playtest.js <games> <policy>
```

It plays complete games through the real engine and the real scenes, from the title menu to the ending.

**Policies**
- `random`: any available option, including backing out of cards.
- `first`: always the first option.
- `cautious`: a random option, but never "Return card", "Never mind" and the like, so the game moves on. The closest thing to an unplanned human player.
- `bot:<name>`: a scripted strategy from `tools/test/bots.js`.

**Environment settings**

| Setting | Effect |
|---|---|
| `PARTY` | `Mensheviks`, `Socialist Revolutionaries` or `Left SRs` (default Mensheviks) |
| `DIFF` | `Easy`, `Normal` or `Hard` (default Normal) |
| `STRICT=1` | Exit with status 1 on an engine error, a game that never ends, text that leaks markup or `undefined`/`NaN`, or an ambiguous `go-to` |
| `SEED=n` | Repeatable games: game *i* uses seed *n + i*, for both the engine and the player. Replays a reported game exactly |
| `NOISE=p` | A bot picks a random option with probability *p* |
| `JSON=file` | One summary per game (ending, date, legality, extremes of every stat, cards played, events seen) |
| `PICKS=1` | With `JSON`, also every choice made and snapshots of the state at key events |
| `TEXT=file` | Every text shown, for reading or searching |
| `VERBOSE=1` | Print each game's moves |

**What STRICT catches**: crashes in scene JavaScript; games stuck with no options; text leaks (`undefined`, `NaN`, unparsed `[+ +]`, `[? ?]`, `{! !}`); and **ambiguous go-to**, when more than one `go-to` condition is true and the engine would pick at random.

## Scripted strategies: `tools/test/bots.js`

Each bot has preferences for choices (patterns tried in order against option titles, or functions of the state) and a priority list of cards and advisors. They exist to prove that each route through the game can be reached, and to measure how often.

| Party | Bots |
|---|---|
| Mensheviks | `democrat` (a socialist government and the Assembly), `vikzhelist` (the all-socialist government), `opposition` (the legal opposition under the Bolsheviks), `whiteaid` (siding with the anti-Bolshevik front), `persuader` |
| SRs | `sr_land` (land reform through the Assembly), `sr_komuch` (Komuch and the People's Army), `sr_peasant` (the peasant soviets), `socializer` (socialising the land through the Cabinet), `breaker` (the same, breaking the opposition by force at good odds) |
| Left SRs | `lsr_coalition` (the coalition with the Bolsheviks), `lsr_rising` (the historical July 1918 rising), `lsr_villages` (outside the government, the peasant soviets and the 1921 bargain) |

Add a bot when you add a route, and add it to `tools/test/ci.sh` and the `bots` job in `.github/workflows/pages.yml`.

## The command-line player: `tools/test/play_cli.js`

Play one move at a time, with the game saved to a file between moves (`SAVE=path`, default `/tmp/red_october_cli.json`). Used by people and by playtest agents.

```bash
node tools/test/play_cli.js new men hard     # men | sr | lsr, easy | normal | hard
node tools/test/play_cli.js show             # the page, the numbers and what you can do
node tools/test/play_cli.js draw 0           # draw from deck 0
node tools/test/play_cli.js play 1           # play card 1 from the hand
node tools/test/play_cli.js advisor 2        # use pinned card 2
node tools/test/play_cli.js choose 0         # pick option 0
node tools/test/play_cli.js stats            # every number the game keeps
```

## Fuzz testing: `tools/test/fuzz.js`

```bash
node tools/test/fuzz.js [batches] [games per batch] [seed]     # npm run fuzz = 1000 batches of 5
```

Each batch draws random settings: a party, a difficulty, a play style (random, first, cautious, or a bot with 0-50% noise, sometimes a bot written for another party). It writes [docs/reports/fuzz-report.md](reports/fuzz-report.md) and the raw data as JSON (`RAW=file`). The report shows:

- **Problems**: crashed batches, engine errors, text leaks, ambiguous go-to and stuck games, each with the seed to replay it.
- **Endings** by party, difficulty, play style and strategy, split into won, historical and crushed.
- **When the games end**, and **the numbers over a game**: the lowest, highest and final value of each stat, and how often it hits the floor or the ceiling.
- **Coverage**: events and cards never reached, or reached in under 2% of games.
- **The most played** cards and actions.

5,000 games take about two minutes.

## The balance report: `tools/test/balance_report.js`

```bash
node tools/test/balance_report.js [games per row]     # npm run balance = 80
```

Plays every party at every difficulty with the cautious player, and every scripted strategy at Normal, and writes [docs/reports/balance.md](reports/balance.md): the endings, the share won, historical and crushed, how often the opposition moves, and peak and final support. Regenerate it when a change moves the numbers, and compare with the committed version.

## Playtest agents

`.claude/workflows/playtest-round.js` is a saved Claude Code workflow that sends a team of Haiku agents to play the game with `play_cli.js`, each with a party, difficulty and style, and to report bugs, contradictions and imbalances. The findings are merged, checked against the code and written to `docs/reports/playtest-round-N.md`. The last report is [playtest-round-2.md](reports/playtest-round-2.md).

## Playing by hand with the hidden numbers

Open the game with `?debug` at the end of the address. The sidebar then shows what the player normally cannot see: the Bolsheviks' power for an insurrection, Kornilov's force against the resistance, each opposition camp's hostility, target and the odds of breaking it, relations and alliance levels, and the Civil War front.

## Continuous integration

`.github/workflows/pages.yml` runs, on every push and pull request:

1. **checks**: build, unit tests, and the generated-files check (runs the advisor, Cabinet and law generators and fails if anything changes).
2. **playtest**: for each party at Normal and Hard, 40 cautious and 20 random games, strict.
3. **bots**: every scripted strategy, 10 games each, strict.

On `main`, when all three pass, the game is built and published to GitHub Pages. `tools/test/ci.sh` runs the same checks locally; its generated-files step also fails while `source/model.js` has uncommitted edits, which is expected.
