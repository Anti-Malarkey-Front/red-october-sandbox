# Changelog

This changelog covers the Red October fork only and follows the format of [Keep a Changelog](https://keepachangelog.com). The game has no numbered releases yet, so entries are grouped by date, newest first, and the history of the original game is in [docs/upstream/social-democracy-changes.txt](docs/upstream/social-democracy-changes.txt).

## 2026-10-14

### Added

- Tracked achievements. The Achievements page (from the start menu or the end of a game) shows all 36, earned or not, with progress counts and the ones new in this game marked; they are kept in the browser across games, and a notice appears when one is earned. New: one for each of the 12 endings, a win with each party (The Minority Prevails, Land and Liberty, The Third Revolution), Clean Hands (win without force), Against the Current (win on Hard), Shared Power (reach a coalition), To the Bitter End, and two that count across games, Three Roads and Every Road. The list lives in `RO.ACHIEVEMENTS`, and the fuzz report now shows how often each is earned.
- Advisor cards say exactly what each action does: the support, stats, relations, party currents and hidden effects, on the card, on the action and in the council. The text is written by `gen_advisors.py` from the effect code, so it cannot drift from the rules, and an advisor lent to another party speaks of that party's currents and allies.

### Changed

- Relations with the other parties fade more slowly: goodwill above a party's resting point now drifts back at 4% of the gap a month (was 8%), and a formal alliance rests just above the level that holds it, so it is lost only to events and choices, never to drift alone. Quarrels heal at the old pace.

### Fixed

- The "Achievements in this playthrough" page could show the achievements of the previous game played in the same session.

## 2026-10-11

### Added

- A full [game description](docs/game-description.md): the setting, the three parties, every system, every event, card and advisor, and every ending.
- Contributor documentation: [CONTRIBUTING.md](CONTRIBUTING.md), [docs/architecture.md](docs/architecture.md), [docs/testing.md](docs/testing.md), a [documentation index](docs/README.md), [CREDITS.md](CREDITS.md) and this changelog.
- GitHub issue templates (bug report, idea or history note), a pull request checklist and an `.editorconfig`.
- npm scripts for every common task: `build`, `test`, `test:model`, `playtest`, `play`, `fuzz`, `balance`, `generate`, `serve`.
- Project notes for contributors who work on the game with Claude, in `CLAUDE.md`.

### Changed

- The repository is reorganised. The rules model moved from `tools/model.js` to `source/model.js`, beside the scenes it drives. The tools are grouped by purpose in `tools/build/`, `tools/assets/` and `tools/test/`. Reports moved to `docs/reports/`, the art credits to `docs/credits/`, and the original game's changelog to `docs/upstream/`.

### Fixed

- Kuzma Gvozdev and Boris Batursky could never join the council: no event made them available. Both now start with the Mensheviks, as members of the 1917 Soviet leadership.
- Pavel Axelrod arrived only at the Unity Congress, whose own text says he had just left Russia, and so could advise for a single turn. He now arrives with Martov in May 1917, on the same train, and leaves for Stockholm in October.
- Bringing the Assembly election forward "cautiously" charged 2 resources while saying 1. It now says 2: the campaign and the compensation.
- The arena tuning script (`tools/test/tune.js`) had stopped working when alliances were added.

## 2026-10-08

### Added

- Ufa State Conference event (September 1918). An SR party that backed Komuch chooses whether to join the Directory, keep Komuch apart, or wind down the armed struggle. Kolchak's coup follows from that choice, and Komuch's fate is told.
- Left SR route outside the government: in spring 1921, a party that avoided the July rising, stayed legal and kept Soviet democracy alive can trade peace in Tambov for free rural soviets. This unlocks a new Peasant Soviets ending and achievement.
- Party Treasury card for every party, for spending the money that builds up: cooperatives, organisers, press, strike fund, prisoners and famine relief, at 10 to 20 resources a choice.
- Mensheviks get a sidebar warning when the party would be driven abroad by the end of the game, plus a one-time event that explains the ways back.
- Fuzz testing (`tools/fuzz.js`) plays batches of games with random parties, difficulties, play styles and noise, and writes the fuzz report (now `docs/reports/fuzz-report.md`).
- Replayable playtests: a seed setting and noise setting for the playtester, a new `lsr_villages` bot for the Left SR peasant route, and new unit tests (advisors leaving, alliance reasons, the exile warning).

### Changed

- Endings are now reported as Won, Historical or Crushed. Exile counts as the historical ending it is.
- Soviet democracy is pulled towards 60 outside Bolshevik rule and starts at 70, so it measures the party's own work. The thresholds that test it moved with it.
- The game ends in December 1921 instead of turning the calendar to 1922.
- Advisors leave the council when they leave history (abroad, jailed or dead), and the Directory's SRs leave after Kolchak's coup.
- Opposition hostility fades and cools more slowly, so long-standing grievances still bite.
- Sending members to the Red Army now costs members.
- The Opposition tab and the Cabinet say why there is no opposition under the Bolsheviks. Members at the party's limit are marked.
- Peasant organisation is described in plain words rather than numbers.

### Fixed

- All 57 confirmed findings from the second playtest round (six testers, 92 reports) are fixed.
- Party-specific text now reads correctly for SR players: the June 1918 expulsion, six subtitles that named the SRs to SR players, the Cheka denunciation and Denikin.
- The October "stay in the hall" option is closed to Left SRs. Brest-Litovsk now decides for Left SRs before the vote, and a Bolshevik government that takes power in 1918 makes its own peace instead of the March page.
- Kadets no longer resign from a cabinet that has no Kadets in it. The Democratic Conference brings them back.
- The Assembly no longer proclaims a federal republic before the constitution decides, and the 18 January dispersal is told only when the Assembly never met.
- The Constituent Republic ending follows the constitution chosen and what the Bolsheviks actually did.
- The Left SR expulsion fires once its dates have come.
- Party dues come in every month (a quarter of a collection), so resources no longer sit at zero for a year.
- Stale and contradictory text is corrected across the game, including the war, the Assembly, the Whites, NEP dates, the Petrograd vote, Kronstadt and Georgia, seat counts, casualty figures and some names.
- "Neither side" is a plain declaration again, a current that walks out is named, alliances say why they cannot go further, and the Vikzhel score is explained.
- Advisor biographies no longer foretell events, and there is no Cancel after an advisor's action has already happened.
- The Left SRs' Assembly ballot choices are their own.
- The achievements page lists the Soviet Coalition, which it had left out.

## 2026-10-07

### Added

- An ending recap at the end of each game: a run chart drawn with d3, peak support, best election result, contested measures and the opposition's record. Each turn of a game is recorded so the recap can show it.
- Automated tests and continuous integration. Unit tests, playtests and scripted bots run on every push and pull request, and the site is only published when they all pass. A playtest matrix covers each party and difficulty.
- A balance report (now `docs/reports/balance.md`) that shows endings, losses, opposition moves and support for every party, difficulty and scripted strategy.
- A `?debug` option in the address bar that shows the hidden numbers in the sidebar, for playing by hand.
- A command-line player (now `tools/test/play_cli.js`) that plays the game one move at a time.
- Period art and music: 26 advisor portraits and 24 event pictures from 1917 to 1921, and four public-domain recordings, all credited in the game's Credits. Music plays as a shuffled playlist from the start of a game, and Options shows the track playing.
- A red star favicon, with PNG copies and an iPhone home-screen icon.
- A Finance setting in the Cabinet: the printing press, taxes on war profits, a Liberty Loan, or Allied credits. Two new cards, Paying for the Revolution and Money and the Market, cover the ruble.
- Opposition camps have a strength of their own, apart from their anger. A camp below 20 cannot act, acts more readily up to 50, and needs 40 to take up arms.
- Council choices show what each advisor offers. Calling an advisor in asks which council member gives up the seat, and replacing one asks who takes it.
- A saved playtest round workflow with ten Haiku testers, merge, check and report steps, and tools to fetch and place the art from Wikimedia Commons.

### Changed

- Phone layout: at 900 pixels and below, the side panels become drawers opened from a sticky top bar that shows the date, resources and members. Cards become rows with their subtitles visible, and choices and tabs are at least 44 pixels tall. The desktop layout is unchanged.
- Difficulty now changes the game, not just the resources. On Hard, the currents are harder to hold together, the camps anger faster and the generals are stronger. Easy is the reverse.
- Opposition camps wait longer between moves (6 months after a sanction, 9 after a revolt, 10 after a march) and move a little less readily, so an active government faces 5 to 9 moves in a whole game instead of 8 to 10.
- Opposition hostility fades slowly. A standing grievance angers less the longer it stands, and as the Kadets and generals cool, the Right loses strength with them.
- Breaking the Kadets also weakens the Right, and a failed strike against the Kadets costs less army discipline.
- Persecuted parties recruit less and banned parties almost nothing. War weariness eases after the Civil War, the special dues appeal costs members, and the cooperatives give bread and a little ruble.
- Event pictures are on by default. Players whose saved setting predates this are switched on once.
- Member counts are formatted with separators (1,158,000 rather than 1158,000).
- Scripted playtest bots only break a camp at 60% odds or better.

### Fixed

- Opposition bugs found in review: pending opposition events are dropped once the Bolsheviks hold power, the Break answer always makes the attempt and shows its odds, a failed attempt no longer repeats the same event, and a failed attempt cannot take resources below zero.
- Standing Cabinet policies only count against the party while it is in government.
- The Parliament tab shows an elected body only while it still sits, and includes the city soviets.
- The force option lists odds only for the camps a law angers, and the Bolsheviks no longer see it when there is no camp left to break.
- The game crashed on a first visit with no saved font size, which also skipped the rest of the setup. The font size now defaults to 1.1em.
- Dark mode and font size are kept across visits; they were lost on every reload.
- The credits image and music pages were never shown, and now are.
- The game could run on for months by chance at the end of 1921. It now always ends on time.
- Events from 1917 no longer fire under the Bolsheviks. The Left SRs only join the government if they vote for the coalition.
- The Party Press card no longer shows every party's paper when it is returned to the hand.
- Contested measures no longer repeat "by decree" or end with the same sentence.
- Vikzhel shows where the talks stand before you sign, and alliances that cannot go further are marked before you try.
- The Council stays visible (but unavailable) while it is locked, and advisors show what they offer.
- Dozens of contradictions in the text, such as seat counts, election dates and the length of the game, are corrected.
- The Soviet democracy ending now counts the party's programme whenever it was adopted. It had been unreachable.
- The Bundist advisor is Mikhail Liber, not Mark.
- The playtester plays Wait and See when its hand is empty during an advisor cooldown, as a player can.
- Effect blocks written in Dendry shorthand inside JavaScript now work, and the sidebar's Others line shows a seat count rather than a percentage.
- The title banner layout and the sidebar flash on the title page are fixed.

## 2026-10-06

### Added

- A new game, the Russian Revolution from 1917 to 1921, in place of the Weimar Germany setting. It starts in March 1917 and has about 50 events covering dual power, the October Revolution, the Constituent Assembly, the Civil War and NEP.
- Three playable parties: the Mensheviks, the Socialist Revolutionaries and the Left SRs. Each has its own advisors, party cards, events, endings and achievements. The Left SRs start as a faction inside the SR party and can split from it, join the Bolshevik government, and aim for a coalition that lasts.
- A Wait and See card, so an empty hand can never stall the game.
- A party select screen at the start.
- An alliance web between the three playable parties and the Bolsheviks. Cooperation, bloc and coalition levels have real effects on soviet votes, Brest-Litovsk, the spring elections and the Left SR coalition.
- A Parliament tab, drawn as a seat-by-seat hemicycle with d3, and an Opposition tab. The Kadets, the generals and the Bolsheviks can sanction or revolt against the party's policies.
- A Council of four active advisors that can be reshuffled, called in or replaced, and a Cabinet card that sets standing policies on land, food, war, order and labour.
- Unpopular laws can be phased in with compensation, passed by decree, or enforced against opponents when the party is strong enough.
- A new interface: a title banner, party emblems, a bar-chart sidebar with alliance badges and turn-to-turn arrows, and a "What changed" box after each choice.
- A GitHub Pages workflow that builds, checks and deploys the game.
- Placeholder art: card art, advisor portraits and party emblems are plain coloured frames with names until real art is added.
- A text-dump playtest mode for contributors.
- Per-party documentation, and a rewritten README for the Russian game.

### Changed

- The game is forked from Social Democracy and renamed "Red October: Fall of Empire", with a new package identifier, README, credits and a fork credit in the licence.
- Time moves in half-month turns until the February 1918 calendar reform, then monthly. Dates show "Early" or "Late" during half-month turns.
- The centre column is narrower, with a gap before the side panels. Below 900 pixels the sidebar moves above the content instead of squeezing it.
- Card subtitles fit inside the card.

### Fixed

- The side panels no longer flash when the game opens.
- The White victory can now be reached.
- The title banner's diagonal split no longer cuts through the title, and the small date line sits inside its frame.
- Faction labels are capitalised correctly.

### Removed

- The Weimar Germany scenes, including its cards, advisors and events, are removed from the game. The original history remains in the git log.
- The GitHub Pages workflow inherited from the original game.
- Native browser tooltips on cards are removed.

The original Social Democracy game's history (2024) is preserved in the git log and in [docs/upstream/social-democracy-changes.txt](docs/upstream/social-democracy-changes.txt).
