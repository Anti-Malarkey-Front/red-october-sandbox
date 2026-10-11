# Contributing to Red October

Thank you for helping. This guide covers setting up, how the code is organised, how to make a change safely, and the conventions the game's text and code follow. For what the game *is*, read the [game description](docs/game-description.md); for how the code fits together in more depth, read [architecture](docs/architecture.md) and [testing](docs/testing.md).

## Setting up

You need Node.js 20 or later, Python 3.9 or later and git.

```bash
git clone https://github.com/evarnimtb-netizen/red-october.git
cd red-october
npm install
npm run build        # compiles the scenes into out/game.json and out/html/core.js, and copies the model
```

Then open `out/html/index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000 --directory out/html
```

and visit http://localhost:8000. Add `?debug` to the address to see the hidden numbers in the sidebar.

## Where things are

| Path | What it holds |
|---|---|
| `source/scenes/` | The game itself, as Dendry scenes: `events/` (dated events), `party_affairs/`, `coalition_affairs/`, `soviet_affairs/` (the three decks), `advisors/` (pinned cards), and the turn machinery (`root`, `main`, `post_event`, `game_over`). |
| `source/qdisplays/` | Words for numbers (for example legality 2 is "tolerated"). |
| `source/model.js` | The rules: support and elections, the monthly drift of every stat, factions, alliances, the opposition, laws, the Civil War. Plain JavaScript, loaded by the game (as the global `RO`) and by every test tool. |
| `out/html/` | The web page. `index.html`, `game.js`, `ui.js`, `game.css` and the d3 charts are written by hand; `core.js` and `model.js` are produced by the build. Pictures in `img/`, recordings in `music/`. |
| `tools/build/` | Generators that write scene files, and the model copy. |
| `tools/assets/` | Fetching period art and music, and wiring it into the scenes. |
| `tools/test/` | Unit tests, the headless playtester and its bots, the command-line player, the fuzz and balance reports, and `ci.sh`. |
| `docs/` | The game description, design plan, architecture and testing guides, reports, credits. See [docs/README.md](docs/README.md). |
| `.github/workflows/pages.yml` | CI: runs every test on each push and pull request, and publishes the game to GitHub Pages from `main`. |

## Making a change

1. **Edit the right file.** Some scenes are generated: edit the generator, never the output.
   - Advisors (`source/scenes/advisors/*`, except `cabinet` and `council` below): `tools/build/gen_advisors.py`.
   - The Cabinet card and the policy words: `tools/build/gen_cabinet.py`. Its monthly effects are in `source/model.js` (`policyDrift`).
   - The three ways of carrying out a contested law: `tools/build/gen_laws.py` and `tools/build/lawvariants.py`.
   - Card art: `tools/build/gen_cards.py`. Title banner and party emblems: `tools/build/gen_art.py`.
   - Period art and music: list them in `tools/assets/art_manifest.json`, then run `tools/assets/fetch_art.py` and `tools/assets/wire_art.py`.
2. **Register new numbers.** A new flag goes in the flags list in `source/scenes/root.scene.dry`; a new cooldown goes in `Q.timers` there.
3. **Rebuild:** `npm run build`. After editing `source/model.js`, the build copies it to `out/html/model.js`; the two must be identical.
4. **Test:** `npm test` runs everything CI runs (see [testing](docs/testing.md)). For a quicker check of one party: `PARTY="Left SRs" STRICT=1 node tools/test/playtest.js 50 cautious`.
5. **Check the balance** if the numbers moved: `npm run balance` rewrites `docs/reports/balance.md`; `npm run fuzz` rewrites `docs/reports/fuzz-report.md`.
6. **Bump the cache version** in `out/html/index.html` (every `?v=NN`) when `ui.js`, `game.css` or the model change, so returning players get the new files.
7. **Commit** with a message that says what changed and why, and update [CHANGELOG.md](CHANGELOG.md).

A new route through the game deserves a scripted bot in `tools/test/bots.js` that plays it, added to `tools/test/ci.sh`, so it stays reachable.

## Dendry pitfalls

- When several `go-to` conditions are true at once, the engine picks one **at random**. Make go-to conditions mutually exclusive; the strict playtests report any that are not.
- A card's `subtitle` is not re-evaluated when the card returns to the hand, so keep card subtitles static. Pinned cards render `[+ ... +]` in subtitles badly. An option's `unavailable-subtitle` may use `[? if ... ?]`.
- `on-arrival` is either shorthand (`a = 1; b_timer = 3`) or a JavaScript block (`{! Q.a = 1; RO.add(Q, {...}); !}`), never both.
- The clock is `dix = (year - 1917) * 24 + (month - 1) * 2 + half`: two-week turns until February 1918, monthly turns after. The game ends after December 1921.

## Writing conventions

- **Prose.** Plain, period-accurate British English. History is told as it happened in our world unless the player has changed it; alternate history is marked by the player's choices, not by anachronism. Name real people and places correctly.
- **Party-specific text** uses `[? if player_party = 'menshevik' : ... ?]` (`'sr'`, `'lsr'`), and `pname`, `pname_the` and `partner_name` for party names, so an event never tells the wrong party's story.
- **Choices say what they cost.** A resource cost goes in the option text (`(10 resources)`); a requirement that is not met says why in `unavailable-subtitle`.
- **Endings** fall into three groups, used by the reports: *crushed* (kornilov, right_coup, white), *historical* (exile, one_party, sr_historical, lsr_historical) and *won* (constituent_republic, all_socialist, soviet_democracy, soviet_coalition, peasant_soviets).
- **Code.** Match the surrounding style: two-space indentation, `var` and function expressions in the model and UI (they run in old browsers too), short comments that explain *why*.

## Reporting a bug

Open an issue with the party, difficulty, date in the game, what you chose, and what went wrong. A save (Save/Load, then copy the text) helps a great deal. If a headless game shows it, the seed is enough: `SEED=1234 PARTY=Mensheviks node tools/test/playtest.js 1 cautious` replays that game exactly.

## Licence

By contributing you agree that your work is released under the [MIT licence](LICENSE), like the rest of the game.
