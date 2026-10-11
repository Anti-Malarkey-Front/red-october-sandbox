# Red October: Fall of Empire

A Dendry (dendrynexus) interactive-fiction game, forked from Autumn Chen's *Social Democracy: An Alternate History*, set in the Russian Revolution, February 1917 to December 1921. The player leads the Mensheviks, the SRs or the Left SRs.

- Repo: github.com/evarnimtb-netizen/red-october, branch `main`. Every push runs `.github/workflows/pages.yml` (all the tests, then publishes) to https://evarnimtb-netizen.github.io/red-october/
- Design: `docs/design-plan.md`. What changed when: `changes.txt` and the git log. Latest balance: `docs/balance.md`; latest random-settings test: `docs/fuzz_report.md`.

## Layout

- `source/scenes/*.scene.dry`: the game. `root.scene.dry` sets every quality at the start (flags list, timers list `Q.timers`, advisors). `post_event.scene.dry` runs each turn (drift, dues, opposition, endings, then events). `game_over.scene.dry` resolves and shows the endings and achievements.
  - `events/`: dated events (`tags: event`, `view-if` on `dix`, `priority`, `max-visits: 1`).
  - `party_affairs/`, `coalition_affairs/`, `soviet_affairs/`: the three card decks. `advisors/`: pinned cards (advisors, Cabinet, Council).
- `source/qdisplays/`: word labels for numbers (`[+ legality : legality +]`).
- `tools/model.js`: the global `RO` model (polls, drift, factions, opposition, alliances, laws, `exileRisk`...). It is copied to `out/html/model.js` by `tools/sync_model.sh` (and by `gen_advisors.py`); the two must be identical (a unit test checks).
- `out/html/`: the web page. `ui.js` (sidebar, panels, recap, mobile drawers), `game.js`, `game.css`, `index.html` (bump every `?v=NN` when ui/css/model change). `core.js` and `out/game.json` are built, not committed.

## Generated files: edit the generator, not the output

- `tools/gen_advisors.py` writes `source/scenes/advisors/*` (the table of advisors, bios, actions, Council).
- `tools/gen_cabinet.py` writes `advisors/cabinet.scene.dry` and the policy qdisplays; ongoing policy effects live in `model.js` `policyDrift`.
- `tools/gen_laws.py` + `tools/lawvariants.py`: the three ways to carry out a law (slow / decree / force) in the decks.
- `tools/gen_cards.py`: card SVG art (adds `card-image` to new cards). `fetch_art.py` / `wire_art.py`: period art; credits in `credits_images.txt`, `credits_music.txt`.
- CI fails if running these three generators changes anything (`git diff` check), so run them and commit the result.

## Build and test

```bash
npx dendrynexus make-html          # build out/game.json and out/html/core.js
node tools/test_model.js           # model unit tests
RUNS=20 bash tools/ci.sh           # everything CI runs (its git-diff step fails on uncommitted model.js edits; that is expected locally)
PARTY="Left SRs" DIFF=Normal STRICT=1 node tools/playtest.js 50 cautious   # policies: random | first | cautious | bot:<name>
node tools/fuzz.js 1000 5          # 5,000 games with random settings -> docs/fuzz_report.md (~2 minutes)
node tools/balance_report.js 80    # -> docs/balance.md
node tools/play_cli.js new sr normal   # play from the command line (used by the playtest agents)
```

- `playtest.js` env: `STRICT=1` fails on errors, stuck games, text leaks (`undefined`, `[+`, `[?`) and ambiguous go-to; `SEED=n` replays games exactly; `NOISE=p` makes bots stray; `JSON=file`, `PICKS=1`, `TEXT=file` dump data.
- Scripted strategies are in `tools/bots.js` (per party: men democrat/vikzhelist/opposition/whiteaid/persuader; sr sr_land/sr_komuch/sr_peasant/socializer/breaker; lsr lsr_coalition/lsr_rising/lsr_villages). Add a bot when adding a new route, and add it to `ci.sh`.
- `.claude/workflows/playtest-round.js`: a saved workflow that sends Haiku agents to play with `play_cli.js` and report bugs (`docs/playtest-round-2.md` is the last report).
- To look at the game in the browser, serve `out/html` with `python3 -m http.server` from a Bash background command (the preview tool cannot read ~/Documents), and add `?debug` for the debug overlay.

## Engine pitfalls (dendrynexus)

- When several `go-to` conditions are true, the engine picks one **at random**. Make go-to conditions mutually exclusive (STRICT playtests catch this).
- A card's `subtitle` is not re-evaluated when the card goes back to the hand: keep card subtitles static. Pinned-card subtitles render `[+ +]` badly. Option `unavailable-subtitle` may use `[? if ... ?]`.
- `on-arrival` is either shorthand (`a = 1; b_timer = 3`) or a JS block `{! Q.a = 1; RO.add(Q, {...}); !}`, not both.
- New qualities: add flags to the flags list in `root.scene.dry`, cooldowns to `Q.timers`.
- Time: `dix = (year-1917)*24 + (month-1)*2 + half`; two-week turns until February 1918, then monthly. The game ends after December 1921 (`ending = 'final'`, resolved in `game_over`).

## Conventions

- Prose: plain, period-accurate British English, past or present tense as the surrounding text; party-specific text with `[? if player_party = 'menshevik' : ... ?]` (`'sr'`, `'lsr'`); `pname`, `pname_the`, `partner_name` for party names.
- Endings: crushed (kornilov, right_coup, white), historical (exile, one_party, sr_historical, lsr_historical), won (constituent_republic, all_socialist, soviet_democracy, soviet_coalition, peasant_soviets).
- After a change: build, run the strict playtests (or `ci.sh`), regenerate `docs/balance.md` if balance moved, commit with a descriptive message, push, and check the GitHub run (`gh run list --repo evarnimtb-netizen/red-october`).
