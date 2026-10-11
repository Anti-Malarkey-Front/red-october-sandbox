# Red October: Fall of Empire

A Dendry (dendrynexus) interactive-fiction strategy game, forked from Autumn Chen's *Social Democracy: An Alternate History*, set in the Russian Revolution, February 1917 to December 1921. The player leads the Mensheviks, the SRs or the Left SRs.

- Repo: github.com/evarnimtb-netizen/red-october, branch `main`. Every push runs `.github/workflows/pages.yml` (all tests, then publishes) to https://evarnimtb-netizen.github.io/red-october/
- Read first, as needed: [CONTRIBUTING.md](CONTRIBUTING.md) (layout, workflow, conventions), [docs/game-description.md](docs/game-description.md) (every system, event, card, advisor, ending), [docs/architecture.md](docs/architecture.md), [docs/testing.md](docs/testing.md). Latest numbers: `docs/reports/balance.md`, `docs/reports/fuzz-report.md`.

## Layout

- `source/scenes/*.scene.dry`: the game. `root.scene.dry` sets every quality at the start (flags list, `Q.timers`, advisors); `post_event.scene.dry` runs each turn (drift, dues, opposition, endings, then events); `game_over.scene.dry` resolves endings and achievements. `events/`, the decks `party_affairs/`, `coalition_affairs/`, `soviet_affairs/`, and `advisors/` (pinned cards).
- `source/model.js`: the global `RO` rules model. Copied to `out/html/model.js` by `tools/build/sync_model.sh` (`npm run build`) and by `gen_advisors.py`; the two must be identical (a unit test checks).
- `out/html/`: the hand-written page (`ui.js`, `game.js`, `game.css`, `index.html`: bump every `?v=NN` when ui/css/model change). `core.js` and `out/game.json` are built, not committed.
- `tools/build/` generators, `tools/assets/` art pipeline, `tools/test/` tests and reports.

## Generated files: edit the generator, not the output

- `tools/build/gen_advisors.py` writes `source/scenes/advisors/*` and the advisor table in `source/model.js`.
- `tools/build/gen_cabinet.py` writes `advisors/cabinet.scene.dry` and the policy qdisplays; monthly policy effects live in `source/model.js` `policyDrift`.
- `tools/build/gen_laws.py` + `lawvariants.py`: the slow / decree / force variants of contested laws.
- `tools/build/gen_cards.py` (card SVGs), `tools/assets/fetch_art.py` and `wire_art.py` (period art; credits in `docs/credits/`).
- CI fails if `npm run generate` changes anything, so run it and commit the result.

## Build and test

```bash
npm run build                       # make-html + model copy
npm run test:model                  # unit tests
npm test                            # everything CI runs (its git-diff step fails on unstaged edits to source/model.js or generated scenes; stage first)
PARTY="Left SRs" DIFF=Normal STRICT=1 node tools/test/playtest.js 50 cautious   # policies: random | first | cautious | bot:<name>
npm run fuzz                        # 5,000 random-setting games -> docs/reports/fuzz-report.md (~2 minutes)
npm run balance                     # -> docs/reports/balance.md
node tools/test/play_cli.js new sr normal   # command-line play (used by the playtest agents)
```

- `playtest.js` env: `STRICT=1` (fail on errors, stuck games, text leaks, ambiguous go-to), `SEED=n` (exact replays), `NOISE=p`, `JSON=file`, `PICKS=1`, `TEXT=file`.
- Bots in `tools/test/bots.js`: men democrat/vikzhelist/opposition/whiteaid/persuader; sr sr_land/sr_komuch/sr_peasant/socializer/breaker; lsr lsr_coalition/lsr_rising/lsr_villages. A new route gets a bot, added to `tools/test/ci.sh` and the `bots` job in `pages.yml`.
- `.claude/workflows/playtest-round.js`: saved workflow of Haiku agents playing with `play_cli.js`; reports go to `docs/reports/`.
- To look at the game in the browser: serve `out/html` with `python3 -m http.server` from a Bash background command (the preview tool cannot read ~/Documents), then add `?debug`.

## Engine pitfalls (dendrynexus)

- Several true `go-to` conditions are resolved **at random**: keep them mutually exclusive (STRICT playtests catch it).
- Card `subtitle`s are not re-evaluated when a card returns to the hand: keep them static. Option `unavailable-subtitle` may use `[? if ... ?]`.
- `on-arrival` is shorthand or a `{! ... !}` JS block, never both.
- New qualities: flags in the `root.scene.dry` flags list, cooldowns in `Q.timers`.
- `dix = (year-1917)*24 + (month-1)*2 + half`; two-week turns until February 1918, then monthly; the game ends after December 1921.

## Conventions

- Plain, period-accurate British English; party-specific text with `[? if player_party = 'menshevik' : ... ?]` (`'sr'`, `'lsr'`) and `pname`, `pname_the`, `partner_name`.
- Endings: crushed (kornilov, right_coup, white), historical (exile, one_party, sr_historical, lsr_historical), won (constituent_republic, all_socialist, soviet_democracy, soviet_coalition, peasant_soviets).
- After a change: build, `npm test`, regenerate the reports if balance moved, update CHANGELOG.md, commit, push, and check the run (`gh run list --repo evarnimtb-netizen/red-october`).
