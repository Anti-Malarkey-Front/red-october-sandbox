# Red October: Fall of Empire

[![Test and publish the game](https://github.com/evarnimtb-netizen/red-october/actions/workflows/pages.yml/badge.svg)](https://github.com/evarnimtb-netizen/red-october/actions/workflows/pages.yml)
[![Licence: MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](LICENSE)

**A strategy game of the Russian Revolution, 1917-1921, for the browser.** Lead one of the socialist parties that history defeated (the Mensheviks, the Socialist Revolutionaries or the Left SRs) from the fall of the Tsar to the end of the Civil War, and try to save something of what was won in February 1917 from a military dictatorship, a White victory, or a Bolshevik one-party state.

**▶ Play it now: https://evarnimtb-netizen.github.io/red-october/** (no installation; works on phones)

Red October is a fork of Autumn Chen's [*Social Democracy: An Alternate History*](https://github.com/aucchen/social_democracy_alternate_history), built on the Dendry interactive-fiction engine.

## The game

In March 1917 Russia's largest parties were not the Bolsheviks but the moderate socialists: the SRs won the only free national election Russia ever held, and the Mensheviks led the Petrograd Soviet. Within five years both were banned. You take over one of them on the morning after the Tsar's fall.

- **Three campaigns** on one shared timeline, each with its own currents, advisors, cards, events and endings: the **Mensheviks** (hard), the **SRs** (normal) and the **Left SRs** (hard).
- **69 turns** from March 1917 to December 1921: two-week turns until the calendar reform of February 1918, monthly after.
- **About 80 events** on their historical dates (the April Crisis, the July Days, Kornilov, October, the Constituent Assembly, Brest-Litovsk, Komuch, the Civil War, Kronstadt, the NEP), with choices and wording that change by party, and a real fork at October: a Bolshevik takeover, an all-socialist government, or an Assembly that governs.
- **38 cards in three decks** and **29 historical advisors** (Martov, Dan, Tsereteli, Chernov, Spiridonova, Steinberg and more), four of them on your council at a time.
- **A living country:** bread, the ruble, the war, the land, the Bolsheviks, the Right and the soviets drift month by month; a Cabinet sets standing policy while your party governs.
- **Alliances and fault lines** between the three parties and the Bolsheviks, which break at Brest-Litovsk, Komuch, the July 1918 rising and Kolchak's coup unless relations are strong.
- **An opposition that answers back:** the Kadets, the generals and the Bolsheviks sanction or revolt against your policies, and every contested law can be phased in, decreed, or forced through.
- **12 endings and 16 achievements**, from Kornilov's Russia to Soviet democracy, with a recap of your whole run.
- Parliament charts, a phone layout, dark mode, and period photographs and recordings from 1917-1921.

The full description of the game, every system, event, card, advisor and ending, is in **[docs/game-description.md](docs/game-description.md)**.

## Running it locally

You need Node.js 20+ and Python 3.9+.

```bash
npm install
npm run build      # compile the scenes into out/html
npm run serve      # then open http://localhost:8000
```

Add `?debug` to the address to see the hidden numbers in the sidebar.

## Development

```bash
npm test           # everything CI runs: unit tests, generated-file check, full games for every party and strategy
npm run fuzz       # 5,000 games with random settings -> docs/reports/fuzz-report.md
npm run balance    # endings by party, difficulty and strategy -> docs/reports/balance.md
npm run play -- new sr normal    # play from the command line
```

```
source/          the game: scenes (events, cards, advisors, the turn loop) and the rules model (source/model.js)
out/html/        the web page: index.html, game.js, ui.js, game.css, pictures, music
tools/build/     generators for advisors, the Cabinet, contested laws, card art
tools/assets/    fetching and wiring the period art and music
tools/test/      unit tests, the headless playtester and bots, fuzz and balance reports, CI script
docs/            the game description, design plan, architecture, testing, reports, credits
```

Start with **[CONTRIBUTING.md](CONTRIBUTING.md)**, then [docs/architecture.md](docs/architecture.md) and [docs/testing.md](docs/testing.md). Every push to `main` is tested and, if the tests pass, published to GitHub Pages.

## Documentation

| | |
|---|---|
| [Game description](docs/game-description.md) | Everything in the game, in detail |
| [Design plan](docs/design-plan.md) | The original plan and its historical research |
| [Contributing](CONTRIBUTING.md) | Setting up, making changes, conventions |
| [Architecture](docs/architecture.md) · [Testing](docs/testing.md) | How the code fits together and how it is tested |
| [Changelog](CHANGELOG.md) | What changed, and when |
| [Reports](docs/README.md#reports) | Balance, fuzz testing and playtest reports |

## Credits and licence

Red October is by Eva (2026), on the work of Autumn Chen (*Social Democracy*, 2024) and Ian Millington (Dendry). The period photographs and recordings are public domain, from Wikimedia Commons. See [CREDITS.md](CREDITS.md) for everyone and everything, and [LICENSE](LICENSE) for the MIT licence.
