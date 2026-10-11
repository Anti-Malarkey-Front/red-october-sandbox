# Red October: Fall of Empire: Game Description

*A complete description of the game: what it is, how it plays, and everything in it. For the code behind it, see [architecture.md](architecture.md); for the original plan and its research, see [design-plan.md](design-plan.md).*

**Play it in your browser:** https://evarnimtb-netizen.github.io/red-october/

## Contents

1. [At a glance](#at-a-glance)
2. [The premise](#the-premise)
3. [The three parties](#the-three-parties)
4. [How to play](#how-to-play)
5. [The systems](#the-systems)
6. [The events, 1917](#the-events-1917)
7. [The events, 1918-1921](#the-events-1918-1921)
8. [The opposition and the party's crises](#the-opposition-and-the-partys-crises)
9. [The cards](#the-cards)
10. [The advisors](#the-advisors)
11. [Endings and achievements](#endings-and-achievements)
12. [Difficulty and balance](#difficulty-and-balance)
13. [Presentation](#presentation)
14. [History and its liberties](#history-and-its-liberties)
15. [Glossary](#glossary)

---

## At a glance

| | |
|---|---|
| **Genre** | Narrative political strategy: a card-driven interactive fiction with a simulation underneath |
| **Setting** | Russia, from the February Revolution (March 1917) to December 1921 |
| **You play** | The leadership of one of three socialist parties that history defeated: the Mensheviks, the Socialist Revolutionaries (SRs) or the Left SRs |
| **Goal** | Save something of what was won in February 1917, without a military dictatorship of the Right, a White victory, or a Bolshevik one-party state |
| **Length** | 69 turns (two-week turns until February 1918, then monthly); about an hour a playthrough |
| **Content** | About 80 events, 38 cards in three decks, 29 historical advisors, 12 endings, 16 achievements |
| **Platform** | Any modern browser, desktop or phone; no installation, no account; saves in the browser |
| **Engine** | Dendry (dendrynexus), a fork of Autumn Chen's *Social Democracy: An Alternate History* |
| **Licence** | MIT; the period photographs and recordings are in the public domain |

Red October is a game about a road not taken. In 1917 Russia's largest parties were not the Bolsheviks but the moderate socialists: the SRs won the only free national election Russia held, and the Mensheviks led the Petrograd Soviet. Within five years both were banned, their leaders in prison or abroad. The game puts you at the head of one of them, on the morning after the Tsar's fall, and asks whether you can do better.

## The premise

**March 1917.** Eight days of strikes, bread riots and mutinies have brought down the Romanov dynasty. In the Tauride Palace two authorities have appeared: a Provisional Government of liberals, and the Petrograd Soviet of Workers' and Soldiers' Deputies, in which the Mensheviks and the SRs hold the majority. The Soviet commands the garrison, the railways and the telegraph; the government commands the ministries. Neither can do without the other. This is *dual power*, and the game begins in it.

The war with Germany goes on. Bread is short and the ruble is falling. The peasants want the landlords' land now, not after a Constituent Assembly. The soldiers want peace. The officers want order. And Lenin is on his way home.

From here, the game follows history unless you change it. The great events arrive on their dates: the April Crisis, the First Coalition, the June Offensive, the July Days, Kornilov's march on Petrograd, the October Revolution, the Constituent Assembly, Brest-Litovsk, the Civil War, Kronstadt and the New Economic Policy. Each asks your party for a decision, and each decision moves the numbers that decide the next.

**The core tension.** Before October, your party shares power without controlling it: its ministers own the war, the bread crisis and the delay on the land, and every month in government costs support. If the Bolsheviks take power, your party must oppose them without helping the Whites, and every choice trades the support of workers and peasants against the party's legality, and the party's unity against both.

**What can change.** Almost everything that history decided by a narrow margin is open:
- Whether the moderate socialists take power themselves in July 1917, or force the liberals out of the cabinet.
- Whether Kornilov's cavalry reaches Petrograd.
- Whether the Bolshevik rising of November 1917 succeeds at all; and if it does, whether the Vikzhel talks force an all-socialist government on Lenin.
- Whether the Constituent Assembly is dispersed after a single night, or governs.
- Whether the Left SRs stay in the government, rise against it, or win the villages another way.
- Whether Komuch, the SR government on the Volga, is swallowed by Kolchak's dictatorship.
- Whether the Mensheviks survive as a legal opposition, and whether the soviets ever hold free elections again.

## The three parties

The start menu offers three campaigns on one shared timeline. Most events are shared, with options and wording that change by party; each campaign adds events, cards and advisors of its own, and the other two parties are possible allies.

| | Mensheviks | SRs | Left SRs |
|---|---|---|---|
| **In March 1917** | Lead the Petrograd Soviet; second-largest Soviet party | The largest party in Russia, up to a million members | The left wing inside the SR party, not yet a party |
| **Base** | Workers, railwaymen, Georgia, the intelligentsia | Peasants and soldiers | Peasants, soldiers, the Baltic sailors |
| **Aim** | Democratic socialism; no White or one-party rule | A Constituent Assembly republic, with the land socialised | Soviet power shared among the socialist parties; the land to the peasants now |
| **Signature mechanic** | Legality, and the "no armed struggle" line | The Assembly: its election, whether it survives; armed struggle (Komuch) as a risky road | The split: when to break with the SRs; then seats in Lenin's government and on the Cheka's board |
| **Difficulty** | Hard | Normal | Hard |
| **Starting members** | 60,000 (limit 400,000) | 300,000 (limit 1,200,000) | 40,000 (limit 200,000) |
| **What history did to them** | Banned; leaders exiled in 1922 | Komuch, then Kolchak's coup; the 1922 show trial | Left the government over Brest-Litovsk; crushed after July 1918; activity ceased by May 1921 |

### The Mensheviks

Russia's social democrats, members of the same International as the German SPD. In June 1917 they held 248 delegates at the First Congress of Soviets and the largest bloc on its executive; by November they won 3% in the Constituent Assembly election, nearly half of it in Georgia. That fall is the game.

- **Currents:** the Revolutionary Defencists (Tsereteli and Dan, the majority line: defend the revolution, press the Allies for peace), the Internationalists (Martov: an immediate democratic peace, no coalition with the bourgeoisie), the Right Defencists (Potresov), the trade unionists and cooperators, and the Bund.
- **Advisors:** Martov, Dan, Lidia Dan, Tsereteli, Chkheidze, Skobelev, Gvozdev, Liber, Abramovich, Axelrod, Broido, Khinchuk, Batursky, Zhordania and others (see [The advisors](#the-advisors)).
- **Their own story:** Martov's return, Larin's defection, the Unity Congress, the December 1917 party congress, the 1919 programme ("What is to be done?"), readmission to the soviets in November 1918, the Kronstadt year and the arrests of 1921. Georgia, the Menshevik republic, may survive.
- **The challenge:** staying legal under the Bolsheviks. Strikes, public campaigns and rival assemblies raise the party's standing with the workers and lower it with the Cheka. A party still persecuted at the end of 1921 is driven abroad (the historical ending); the sidebar warns when that is where the party is heading.
- **Roads to a win:** prevent October and govern through the Constituent Assembly; force an all-socialist government through the Vikzhel talks; or survive as a legal opposition and win free soviets and the NEP early (Soviet democracy, the best ending).

### The Socialist Revolutionaries (SRs)

The party of the peasants, heirs of the Narodniks, and the largest party in Russia. They won the Constituent Assembly election outright, and lost everything within a year.

- **Currents:** the Centre (Chernov), the Right SRs (Avksentiev, Breshko-Breshkovskaya), the Right Centre (Gots, Zenzinov), the Left SRs (Spiridonova, Kamkov, Natanson), who break away in November 1917 unless the player keeps them; and, in 1919, the Ufa delegation (Volsky), which rejects armed struggle against the Soviets.
- **Their own story:** Chernov at the Ministry of Agriculture and his resignation, the peasant congresses, the Left SR breakaway, Komuch on the Volga, the Ufa State Conference and the Directory, Kolchak's coup, the Ufa delegation's peace with the Soviets, and the 1920 congress.
- **The challenge:** the Assembly. Its election is the SRs' greatest victory; whether it survives the night of 18 January 1918 decides the rest. After that, armed struggle (the People's Army) is a road to the Whites as much as to the Assembly.
- **Roads to a win:** an Assembly that governs (the Constituent Republic), with the land socialised; an all-socialist government; or free peasant soviets under the NEP.

### The Left SRs

The SRs' left wing, who broke away in November 1917, shared Lenin's government for four months, and rose against it in July 1918. Until the split the player leads a faction, not a party.

- **Currents:** the Kamkov-Spiridonova leadership; the pro-coalition Left SRs (Kolegaev, Natanson, later the Revolutionary Communists); the pro-Bolshevik Left SRs (later the Narodnik Communists); the village organisers.
- **Advisors:** Spiridonova, Kamkov, Natanson, Steinberg (People's Commissar of Justice), Kolegaev (Agriculture), Proshian (Posts and Telegraphs), Aleksandrovich (deputy chairman of the Cheka).
- **Their own story:** the split from the SRs, the Seven Commissars, the Cheka's board, Brest-Litovsk, the German ambassador (July 1918), the last party congress, the squeeze out of the government, and the spring of 1921.
- **Roads to a win:** stay in the government to the end without the rising (the Soviet Coalition); or stay outside it, organise the peasant soviets, keep the party legal, and in March 1921, with Kronstadt and Tambov in revolt, trade peace in the villages for free rural soviets (the Peasant Soviets).

## How to play

### The screen

- **The centre column** tells the story: the event or card you are playing, its choices, and after each choice a **"What changed"** box listing every number it moved.
- **The left sidebar** shows the party and the country:
  - *Main:* the date and phase, resources, members, legal status (with a warning when the party is heading for exile), party dissent, and bars for bread, the ruble, war weariness, army discipline, land pressure, Bolshevik strength, the threat from the Right, Soviet democracy, repression and the Civil War front, each with an arrow showing which way it moved last turn.
  - *Parties:* relations and alliance levels with the other parties.
  - *Currents:* the party's internal factions, their strength and their discontent.
  - *Support:* how your support is built.
- **The right-hand panel** shows your support by class (nine voter groups), your popularity in each arena, the **Parliament** tab (each body as elected, and as it would be if it voted today, drawn seat by seat) and the **Opposition** tab (each camp's hostility, what it objects to, its strength, and the odds of breaking it).
- **On a phone** (900 pixels wide and below), a sticky bar at the top shows the date, resources and members, and the two panels become drawers opened from it.

### A turn

1. **Draw** cards from the three decks into your hand (three cards, four on Easy).
2. **Play** one card from your hand, or use a **pinned card**: an advisor's action, the Cabinet, the Council, or Wait and See. Playing a card or an action usually ends the turn.
3. **The month moves on:** the country drifts (bread, the ruble, the war, the land), dues come in, members join or leave, the polls move, the opposition answers your policies, and alliances strengthen or break.
4. **Events** arrive when their date and conditions come: the great events of the revolution, and the moments your own choices have prepared. Events take priority over the hand.

Turns are half a month long until the calendar reform of February 1918, and a month long afterwards. The game ends in December 1921, or earlier if the party is crushed.

### The decks

- **Party Affairs** (the whole game): the party's own work: dues and the treasury, the press, campaigning, rallies, the party's currents, relations with other parties, international socialism, and each party's own cards.
- **Coalition Affairs** (while your party sits in the 1917 government): the government's agenda: land, food, war, the army, labour, police, the nationalities, finance and the constitution.
- **Soviet Affairs** (1918-1921, under the Bolsheviks): opposition inside a one-party state: the courts, labour rights, the factory assemblies, social welfare, the money and the market, and where the party stands in the Civil War.

On Easy and Normal you can return a card to your hand instead of playing it; on Hard you cannot.

### Pinned cards

- **Advisors:** four historical figures sit on your council at a time; each offers an action, then a cooldown (see [The advisors](#the-advisors)).
- **The Council:** reshuffle the council, call an advisor in (choosing whose seat they take), or replace one.
- **The Cabinet** (while the party governs): set the country's standing policies on land, food, war, order, labour and finance. Each setting has a monthly effect for as long as it stands.
- **Wait and See:** pass the turn, so an empty hand never stalls the game.

### Contested laws

Every measure that angers the propertied classes, the generals or the Bolsheviks can be carried out in one of three ways:
- **Phased in, with compensation:** 60% of the effect, much less anger, and it costs a resource.
- **By decree:** the law as written.
- **By decree, breaking the opposition by force:** only for a strong party or one with strong allies; the odds against each camp it angers are shown before you choose.

### Saving, options and help

- **Save/Load** has eight save slots and two autosaves, kept in the browser; any save can be exported and imported again.
- **Options:** dark mode, font size, event pictures on or off, music on or off (with the track playing shown).
- **The Library** explains the parties, people and terms of 1917.
- Adding `?debug` to the address shows the hidden numbers in the sidebar, for players who want to see the machinery.

---

## The systems

This chapter explains every rule, with the real numbers. The player never needs them (the sidebar puts most of them into words), but they explain why things happen. Everything here lives in `source/model.js` and the turn scenes.

**Conventions.**
- Stats run from 0 to 100 unless stated. Members are in thousands: `60` means 60,000.
- `dix` counts half-months: `dix = (year-1917)*24 + (month-1)*2 + half`. Examples: `4` is March 1917, first half (the start); `20` is early November 1917; `24` is early January 1918; `34` is early June 1918; `72` is January 1920; `92` is early November 1920; `96` is January 1921.
- Rates are given per full month. A turn is a half-month while `turn_length` is 0.5, and every rate is multiplied by `tl` (turn length), so two half-month turns move a stat exactly as one month does.

### The turn

**Two cadences.** Until the calendar reform a turn is half a month (`turn_length = 0.5`). After it, a turn is a month. The switch to `turn_length = 1` is made by the New Calendar event (February 1918).

**When turn processing runs.** The turn is processed in `post_event` only when `Q.month_actions >= 1`. Playing a card or an advisor action counts as the month's action. On any other visit, `post_event` only re-clamps the stats, recalculates the derived numbers, and routes the player.

**The hand.** The main page shows up to 3 cards. On Easy it shows 4 (`main.main_easy`, chosen by `Q.hand_size`). The decks on the main page are:
- Party Affairs (always).
- Coalition Affairs (shown when in coalition, the Bolsheviks are not in power, and the player is not the Left SRs).
- Soviet Affairs (shown when the Bolsheviks rule).
- The advisor action, a pinned card whose text counts down `advisor_action_timer` in months.

Hard sets `discard_disabled`, so cards cannot be returned. Easy and Normal allow it.

**Cooldowns.** Every name in `Q.timers` is a cooldown in months. Each processed turn subtracts `turn_length` from every timer above zero (floor 0). Timers include the advisor, cabinet and opposition timers (`opp_*`, `cow_*`).

**What a processed turn does, in order** (`post_event`, when `month_actions >= 1`):
1. Reset `last_advisor_action`, `last_cabinet_action` and `month_complete`.
2. `turn += 1`, then decrement the cooldowns (above).
3. Half-month flip: if `turn_length < 1` and `half_month` is 0, `half_month` becomes 1 and the month is not complete. Otherwise `half_month` resets to 0 and the month completes.
4. `RO.drift`: the country stats, Bolshevik strength, soviet democracy, repression, the Red Army, the four relations, and the fading of campaign boosts.
5. `RO.alliancesTurn`: alliances whose relations have fallen below their hold level are dropped; blocs feed soviet democracy; coalition-level turmoil feeds dissent; other parties' turmoil fades.
6. `RO.policyDrift`: the Cabinet's standing settings (only in government).
7. `RO.oppositionTurn`: the hostility of the three camps moves, and sanctions or revolts may be flagged.
8. If the month completed: if `year >= 1921` and `month >= 12`, the game ends (`game_end = 1`, `ending = 'final'`). The last turn is December 1921. Otherwise the month advances, and the year advances after December.
9. `dix` is recalculated. `RO.worldTurmoil` adds the historical upheavals of the parties the player does not lead. The phase is set:
   - Phase 1, "Dual power": `dix < 20`.
   - Phase 2, "Assembly crisis": `dix < 25`.
   - Phase 3, "Soviet opposition": `dix < 34`.
   - Phase 4, "Civil War": `dix < 92`.
   - Phase 5, "Kronstadt and NEP": `dix >= 92`.
10. If the month completed: `RO.updateFront` (the White front; see The country).
11. Clamp the stats and recalculate the polls.
12. Membership and dues (see The party).

Then, on every visit: clamp, recalculate the factions, polls and derived numbers, sync the advisors, record the turn for the ending recap, and compute the exile risk. Then the immediate endings (see Endings), then the event check. If a dated event is due (`has_event = 1`), the player goes to `events_choice`. Otherwise the routing is: `game_over` if the game has ended, `main` (3 cards) or `main_easy` (4 cards).

**Note.** Besides this monthly turn, the stats move only through the cards and events the player plays (see [The cards](#the-cards) and the event chapters).

### The party

#### Starting parties

| | Mensheviks | Left SRs | SRs |
|---|---|---|---|
| Members at start (thousand) | 60 | 40 | 300 |
| Membership cap (thousand) | 400 | 200 | 1200 |
| Membership scale (`mem_scale`) | 1 | 0.8 | 2.5 |
| Dues divisor (`mem_div`) | 60 | 40 | 150 |
| Dues income at start (`dues_income`) | 1 | 1 | 2 |
| Resources at start | 3 | 2 | 3 |
| Poll neutral point (`poll_neutral`) | 9 | 3 | 9 |
| Legal status at start | 3 (legal) | 3 | 3 |

The Mensheviks and the SRs begin as a bloc (`ally_lvl = 2`). The Left SRs begin inside the SR party and in a coalition with it (`ally_lvl = 3`). Their relations are in Alliances.

Hard and Easy change the starting resources and dissent (see Difficulty). Income is `dues_income` (a leftover quality, `dues`, is unused).

#### Resources

Resources have no ceiling and cannot fall below 0. They are spent with `RO.pay`, which returns false if the party cannot afford the cost. They rise with dues, the Party Dues card and some events, and fall with the costs of cards and laws (the Party Treasury card spends 10 to 20 at a time).

Resources also count in the party's strength (see Opposition): `2 × min(resources, 5)`. A failed attempt to break a camp costs 1 resource, and a law carried out "slowly" costs 1.

#### Dues

Each turn the party adds `dues_income × 0.25 × tl` to an accumulator, and whole units move into resources. A banned party (legality 0) collects only 25% of that. Over a full month a legal party therefore collects about `dues_income / 4`. At the Mensheviks' starting value of 1, that is one resource every four months. The Party Dues card collects a full `dues_income` at once (or more, with a special appeal).

`dues_income = max(1, round(members / mem_div))`.

#### Members and the limit

Membership changes every turn by:

`Δmembers = tl × mem_scale × ( g − (3 − legality) × 1.5 − repression / 25 )`

- `g` is `0.7 × (player_poll − poll_neutral)` when that is positive, multiplied by a factor for legality: 0.1 (banned), 0.3 (expelled), 0.7 (tolerated), 1 (legal).
- When `g` is negative (the poll is below the neutral point), it is not scaled by legality.
- Members are kept between 3 (thousand) and the cap. The cap is clamped in `clampStats`, and the sidebar shows "at its limit" when the cap is reached.

Examples: a legal Menshevik polling 20% gains `0.7 × 11 = 7.7` thousand a month. A banned party at 0% with no repression loses `6.3 + 4.5 = 10.8` thousand a month.

`player_poll` is the share in the current arena (see Support and elections).

#### Legal status

Status is an integer from 0 to 3 (`legality`). The sidebar names it `banned`, `expelled`, `tolerated` or `legal`.

| Effect | Legal (3) | Tolerated (2) | Expelled (1) | Banned (0) |
|---|---|---|---|---|
| Membership gain, when positive | ×1 | ×0.7 | ×0.3 | ×0.1 |
| Membership drain per month | 0 | 1.5 | 3.0 | 4.5 |
| Dues collected | 100% | 100% | 100% | 25% |
| Campaign boosts | full | full | ×0.6 | ×0.6 |
| Repression growth under the Bolsheviks | +0.3/mo | +0.3/mo | +0.6/mo | +0.6/mo |

Legality also decides the endings and the exile warning (see those sections).

#### Dissent and the currents

Each party has five currents (factions): the main line, the left wing, the right wing, the trade unionists, and a late or special current (the Bund, the Narodnik Communists, the Ufa delegation). Each current has a strength (its share of the party) and a dissent value (0 to 100).

The party's dissent is the strength-weighted average of the dissent values:

`dissent = Σ(strength × dissent) / 10000 × (1 + 0.15 × difficulty) + dissent_extra`, clamped to 0 to 0.95.

`updateFactions` first rescales the five strengths to total 100. Raising one current therefore pushes the others down. The result is shown as a percentage (`dissent_percent`).

Dissent has one direct effect in the model. A campaign boost is multiplied by `(1 − dissent)`, so a party at 50% dissent gains half the usual campaign effect. Dissent is also a word on the sidebar: very low (under 5), low (under 15), medium (under 31), high (under 50), very high.

`dissent_extra` comes from coalition-level allies (see Alliances). It is capped at 0.12 (12 points).

**Starting currents (Mensheviks, normal):**

| Current | Strength | Dissent |
|---|---|---|
| The Revolutionary Defencists (main line) | 50 | 0 |
| The Internationalists (left wing) | 20 | 20 |
| The Right Defencists | 12 | 10 |
| The trade unionists and cooperators | 10 | 5 |
| The Bund | 8 | 5 |

Dissent = (20×20 + 12×10 + 10×5 + 8×5) / 10000 = 6.1%.

The other starting points: the SRs (Centre 30/0, Left SRs 20/25, Right SRs 25/5, Right Centre 25/5, Ufa 0/0) give 7.5%. The Left SRs (leadership 45/0, pro-Bolshevik 20/15, pro-coalition 20/10, village organisers 15/5, Narodnik 0/0) give 5.75%.

Hard adds 10 to every current's dissent and multiplies by 1.15, which takes the Mensheviks to about 18.5%. Easy halves the dissent (rounded) and multiplies by 0.85, which takes the Mensheviks to about 2.7%.

Currents are moved by `RO.fac` (strength and discontent changes), called from most cards and events.

#### Advisors

The council has four seats (`COUNCIL_SIZE`). The pool is the advisors of the party, plus any advisor lent by a coalition ally (see Alliances). Those who leave history drop out (`ADVISOR_UNTIL`: Axelrod from 18, Tsereteli 26, Breshko-Breshkovskaya 46, Natanson 54, Gots 82, and Martov, Abramovich and Chernov from 92). `syncAdvisors` keeps the council full each turn. Changing the council is done by `callAdvisor`, `swapAdvisor`, `replaceAdvisor` and `reshuffleCouncil`, which the Council card calls.

### Support and elections

#### Voter groups and base appeal

Nine voter groups each have a base appeal for each party in March 1917. Each group's appeal sums to 100.

| Group | Bol | LSR | SR | Men | Kad | Pop | Nat | Oth |
|---|---|---|---|---|---|---|---|---|
| Urban workers | 12 | 1 | 22 | 40 | 6 | 3 | 2 | 14 |
| Soldiers and sailors | 8 | 2 | 45 | 22 | 5 | 2 | 5 | 11 |
| Peasants | 2 | 3 | 70 | 3 | 4 | 6 | 8 | 4 |
| Small business and artisans | 1 | 0 | 16 | 8 | 42 | 17 | 8 | 8 |
| Large business and landowners | 0 | 0 | 3 | 1 | 82 | 4 | 5 | 5 |
| Bureaucrats and officials | 2 | 0 | 14 | 14 | 40 | 12 | 7 | 11 |
| Professionals and intelligentsia | 3 | 0 | 24 | 25 | 26 | 15 | 5 | 2 |
| Railway and postal workers | 10 | 1 | 25 | 40 | 8 | 3 | 5 | 8 |
| National minorities | 4 | 1 | 20 | 12 | 4 | 3 | 45 | 11 |

Columns are Bolsheviks, Left SRs, SRs, Mensheviks, Kadets, Popular Socialists and Trudoviks, national parties, and anarchists and others.

#### Party multipliers

Each group's appeal for each party is multiplied by a factor that depends on the country. Let

- `G` = grievance = `(war_weariness + (100 − bread) + land_pressure + (100 − ruble)) / 4`. At the start, `G = 55`.
- `dg = (G − 55) / 45`.
- `blame` = 1 when the party is in coalition, otherwise 0.3.

The factors are:

- Bolsheviks: `exp(2.1 × dg) × (0.4 + bolshevik / 80)`.
- Mensheviks: `exp(−2.8 × blame × dg) × (0.75 + 0.25 × soviet_democracy/100) × (1 − 0.4 × repression/100)`.
- SRs: `exp(−1.0 × blame × dg)` with the same two factors as the Mensheviks.
- Left SRs: `exp(0.9 × dg) × (1 + (land_pressure − 40)/100) × (1 − 0.3 × repression/100)`.
- Kadets: `exp(0.9 × (right_threat − 30)/50) × exp(−0.9 × dg)`.
- Popular Socialists, national parties, anarchists: 1.

In plain English, rising hardship moves voters towards the Bolsheviks and away from the coalition parties. The Mensheviks and SRs lose most when they are in government, and the Kadets gain when the Right is threatening. Soviet democracy and repression both weaken the two socialist coalition parties. Each product is then floored at 0.05 and the row is normalised.

#### Campaign boosts

A campaign adds points to the player's appeal in one group (`boost_workers`, `boost_soldiers`, `boost_peasants`, `boost_railway`, `boost_nations`), or to the middle strata (`boost_middle`). The middle boost is spread over the four middle groups as follows: small business 1, professionals 1, bureaucrats 1, large business 0.3.

The `boost()` helper scales a positive campaign by `(1 − dissent)`, and by 0.6 when legality is 1 or lower. A negative boost is not scaled. Boosts are clamped to −20 … +40 and fade by 5% of their size per month.

#### The arenas

Each arena weights the voter groups differently and applies a bias to some parties.

| Arena | Workers | Soldiers | Peasants | Middle | Railway | Nations | Biases |
|---|---|---|---|---|---|---|---|
| Congress of Soviets | 30 | 40 | 10 | 5 | 5 | 10 | Mensheviks ×1.6, Bolsheviks ×1.3, SRs ×1.15 |
| City dumas | 40 | 10 | 0 | 40 | 5 | 5 | Bolsheviks ×2.2, Mensheviks ×0.6, Kadets ×1.1 |
| Constituent Assembly | 12 | 18 | 50 | 8 | 2 | 10 | Bolsheviks ×1.25, Mensheviks ×0.5, national parties ×1.2, SRs ×0.97 |
| City soviets | 50 | 5 | 10 | 15 | 15 | 5 | none |

The middle weight splits 35% small business, 10% large business, 25% bureaucrats and 30% professionals.

An arena's result is `Σ over groups of (share of party in group × weight × bias)`, normalised to 100.

**Ally votes.** In the Congress of Soviets and the city soviets only, the player receives a share of each ally's vote, including the Bolsheviks: 4% of that party's vote for each alliance level (4% at cooperation, 8% at bloc, 12% at coalition). The Assembly and the dumas give nothing.

#### Polls and popularity

The sidebar poll uses the current arena: the Congress of Soviets in phase 1, the Constituent Assembly in phase 2, and the city soviets from phase 3. `player_poll` is the player's share in that arena, and membership is driven by it.

The Popularity panel shows the player's share in all four arenas and the rank. Rank is 1 plus the number of other parties with a strictly larger share. For a Left SR player before the split, the Left SR row is left out of the ranking, since those votes are counted in the SR lists.

The Support by class panel shows each class's share of the electorate (its weight in the arena) and the party shares within each class. These figures use the arena bias but not the ally votes, so the player's figure there can differ from the poll by a point or two.

#### Parliaments

The bodies and their sizes (`PARL_SIZE`) are the Congress of Soviets (650), the Constituent Assembly (703), the city dumas (200) and the city soviets (400). Seats are allocated by the largest-remainder method. A majority is `floor(total/2) + 1`.

The Parliament tab shows the body as elected when it still sits, and otherwise a projection, "if it voted today". Elections are recorded by `RO.recordParliament` into `Q.parl_*` (called by the election events). The Congress of Soviets sits while `dix < 20`, and the Assembly sits while `assembly_survives` is not 0.

### The country

#### Summary

Starting values are for the Mensheviks at normal difficulty. Rates are per month.

| Stat | Start | Monthly movement (no card or event) | What it feeds |
|---|---|---|---|
| Bread | 30 | −1.8 at war; −0.2 in a republic; −0.4 under the Bolsheviks | grievance; Bolshevik power (−4 at 35 or more) |
| Ruble | 60 | at war −2.6; in a republic moves towards 50 at 5% of the gap, less 0.3 (rests near 44); under the Bolsheviks −1.5 until the NEP, then towards 40 less 0.2 (rests near 36) | grievance |
| War weariness | 70 | at war +1.6; in a republic +0.2; under the Bolsheviks +0.5, then −1.5 from `dix` 94 | grievance |
| Army discipline | 50 | at war −1.3; no drift otherwise | strength; Kornilov; generals' objections |
| Land pressure | 40 | at war +2.2; otherwise +1.0; a land decree −1.0 | grievance; Left SR share; Bolshevik power |
| Bolshevik strength | 20 | before the takeover, grievance-driven (2.1 at `G = 55`); no drift once in power | Bolshevik share and camp; Bolshevik power |
| Threat from the Right | 30 | towards 25 at 4% of the gap | Kadet share; generals' power; Kornilov |
| Soviet democracy | 70 | towards 60 at 10% of the gap; under the Bolsheviks −(0.5 + repression/60) | Menshevik and SR shares; strength; Kornilov resistance; blocs |
| Repression | 0 | under the Bolsheviks +0.6 (legality 1 or lower), otherwise +0.3 | Menshevik, SR and Left SR shares; membership; endings |
| Red Army | 15 | under the Bolsheviks +1.2 until 70 | the White front's target |
| White front | 0 | from June 1918, monthly, 30% of the gap to its target | the White ending; an achievement |

**Note.** The root sets `Q.dissent = 0.1`, but the factions overwrite it at once. The sidebar shows the stats rounded.

#### Bread

- **Moves:** as the table shows. The Cabinet's food setting also moves it (see The government and the Cabinet).
- **Affects:** grievance (weight 1/4 on `100 − bread`); Bolshevik power (−4 when bread is 35 or more); the Bolsheviks' objection to a free grain trade (+2, in coalition only).
- **Sidebar words:** famine (under 15), severe shortages (under 30), shortages (under 50), tight (under 70), adequate.

#### The ruble

- **Moves:** as the table shows. The Cabinet's finance and labour settings also move it.
- **Equilibria:** in a republic `r' = 0.05 (50 − r) − 0.3`, which rests at `r = 44`. Under the Bolsheviks with the NEP, `r' = 0.05 (40 − r) − 0.2`, which rests at `r = 36`. The NEP is entered when `nep_early` is set or from `dix` 100 (March 1921).
- **Affects:** grievance (weight 1/4 on `100 − ruble`), and through it the Bolsheviks' growth and the parties' support.

#### War weariness

- **Moves:** as the table shows. War weariness also rises by 0.6 a month under the Cabinet's war offensive, and by 0.2 when the finance setting is 2 at war.
- **Affects:** grievance (weight 1/4). The sidebar label is "War weariness" at war and "Civil War weariness" otherwise.
- **Note.** The comment in `drift` says the civil war wears on "until Wrangel leaves the Crimea (November 1920)". The code uses `dix >= 94`, which is early December 1920 by the `dix` formula.

#### Army discipline

- **Moves:** at war −1.3 a month; otherwise no monthly drift. The Cabinet's war setting moves it (see that section). Events and squashes move it.
- **Affects:**
  - Strength: `0.25 × (army_discipline − 40)`.
  - Kornilov force: `0.25 × (100 − army_discipline)` (so high discipline lowers the threat).
  - Generals' objection: +1.5 (the soldiers' committees) when discipline is below 35.
  - Breaking a camp: the generals lose 2 discipline on a win, and 3 on a loss; any other camp's loss costs 1.
- The sidebar shows it only while at war and not under the Bolsheviks.

#### Land pressure

- **Moves:** at war +2.2 a month. Otherwise +1.0 a month. A land decree (`land_decree`) gives −1.0 a month and stops the increases. The Cabinet's land and food settings also move it.
- **Affects:**
  - Grievance (weight 1/4).
  - Left SR share: `(1 + (land_pressure − 40) / 100)`.
  - Bolshevik power: −3 for each land committee (up to 3, so −9), and −5 under a land decree.
  - Objections of the Kadets and the generals to the land decree, the land committees and socialisation.

#### Bolshevik strength

- **Before the takeover:**
  - If `assembly_survives` is set (a legitimate elected government): `+0.05 × (30 − bolshevik) + 0.16 × max(0, G − 60)` a month. This pulls the Bolsheviks towards 30, unless the country is in ruins.
  - Otherwise: `+max(0.3, 1.2 + 9 × (G − 50) / 50)` a month. This gives 2.1 a month at `G = 55`, and a floor of 0.3 at `G ≤ 45`.
- **Under the Bolsheviks:** no monthly drift. The Cabinet's labour and order settings move it.
- **Affects:**
  - The Bolshevik party multiplier: `exp(2.1 × dg) × (0.4 + bolshevik/80)`.
  - Bolshevik power (see The October fork): one point for each point.
  - The Bolshevik camp: its strength is `bolshevik` (it cannot act until that reaches 20), and its defence is `8 + 0.4 × bolshevik`.
  - A squash win against the Bolsheviks takes 5 points off their strength.

#### Threat from the Right

- **Moves:** towards 25 at 4% of the gap a month, before the takeover. The Cabinet's land and order settings move it. A fall in the Kadets' or the generals' hostility drains the Right by 0.15 for every point the hostility falls.
- **Affects:**
  - Kadet share: `exp(0.9 × (right_threat − 30) / 50)`.
  - Generals' camp: its strength (`right_threat`) and its campaign strength (`10 + 0.4 × right_threat`).
  - Kadet camp: its strength (`15 + 0.6 × right_threat`, plus 10 if the Kadets are in the government).
  - Kornilov force: `right_threat + …` (see The October fork).
  - Squash results: a win against the Kadets takes off 4, a win against the generals 8, and a loss adds 3 or 6.

#### Soviet democracy

- **Moves:** before the takeover, towards 60 at 10% of the gap a month. Under the Bolsheviks, `−(0.5 + repression/60)` a month. Each coalition bloc (alliance level 2 or more) adds 0.12 a month. The Cabinet's order, food and labour settings move it. A squash win against the generals takes 1 off; a squash loss against any camp takes 2 off.
- **Affects:**
  - Menshevik and SR shares: `(0.75 + 0.25 × soviet_democracy / 100)`.
  - Strength: `(soviet_democracy − 50) / 10`.
  - Kornilov resistance: `(soviet_democracy − 50) / 8`.
  - Endings: the "soviet democracy" ending needs 45 or more.

#### Repression

- **Moves:** under the Bolsheviks, +0.6 a month if legality is 1 or lower, otherwise +0.3. The Cabinet's order and food settings move it. A squash win adds 1 repression (against the Kadets) or 2 (against the Bolsheviks). It has no natural decay; only cards, events and advisors bring it down.
- **Affects:**
  - Menshevik and SR shares: `(1 − 0.4 × repression/100)`. Left SR share: `(1 − 0.3 × repression/100)`.
  - Membership drain: `repression / 25` a turn, multiplied by `tl`.
  - Soviet democracy under the Bolsheviks, through its drift.
  - The "soviet democracy" ending needs repression of 40 or less.
- The sidebar shows it only above 4.

#### The Red Army

- **Moves:** under the Bolsheviks, +1.2 a month while below 70, then no growth. Other changes come from events (Denikin, the Defend the Revolution card).
- **Affects:** the White front's target: `−0.5 × red_army`.

#### The White front

- **Applies:** only under the Bolsheviks, and only from `dix` 34 (June 1918), at each month's end. Before then it does not move.
- **Movement:** the front moves 30% of the gap to its target each month. `target = whitePressure(dix) + 8 × white_aid − 0.5 × red_army`.
- **White pressure by date:** the table below is interpolated linearly between the points.

| dix | Date (early) | Pressure |
|---|---|---|
| 30 | April 1918 | 5 |
| 34 | June 1918 | 25 |
| 44 | November 1918 | 45 |
| 48 | January 1919 | 45 |
| 56 | May 1919 | 60 |
| 66 | October 1919 | 85 |
| 70 | December 1919 | 60 |
| 76 | March 1920 | 35 |
| 84 | July 1920 | 45 |
| 92 | November 1920 | 20 |
| 96 | January 1921 | 8 |
| 200 | (end) | 5 |

- **Affects:** the White ending (front at 72 or more, under the Bolsheviks). The `komuch_without_kolchak` achievement needs the front under 72 at the end. The sidebar shows the front by word: contained (under 15), on the offensive (under 35), wavering (under 55), advancing (under 75), near Moscow (75 or more). The front stat is shown only from `dix` 34 under the Bolsheviks.
- `white_aid` (raised by joining Komuch, the People's Army and the Directory; lowered by refusing them) raises the target by 8 for each point. At the peak of 85, with no Red Army and no aid, the front takes several months to pass 72.

### Alliances

#### The three relations

Each party has three alliance relations, and each has a relation value (0 to 100) and an alliance level (0 to 3).

| Who | Mensheviks | SRs | Left SRs |
|---|---|---|---|
| `ally` | SRs | Mensheviks | SRs |
| `third` | Left SRs | Left SRs | Mensheviks |
| `bol` | Bolsheviks | Bolsheviks | Bolsheviks |

The Kadets' relation (`rel_kad`) has no alliance; it feeds only the Kadets' objections and the Kadet camp's broken-relationship score.

Levels, and what the relation must be for each:

| Level | Name | Enter when | Hold (dropped when relation falls below) |
|---|---|---|---|
| 0 | no alliance | | |
| 1 | cooperation | relation ≥ 40 | 30 |
| 2 | bloc | relation ≥ 60, and the lines are compatible | 50 |
| 3 | coalition | relation ≥ 75, lines compatible, and shared power | 65 |

**Relations drift.** Each relation moves 8% of the gap a month towards its base. Mensheviks: ally 55, Left SRs 30, Bolsheviks 25, Kadets 30. SRs: ally 55, Left SRs 60, Bolsheviks 25, Kadets 35. Left SRs: ally 45, Mensheviks 35, Bolsheviks 40, Kadets 15.

**Left SR start.** The Left SRs start in coalition with the SRs (level 3, relation 55). On the first turn the relation is below the coalition hold (65), so the level drops to 2. Its drift towards 45 then drops it again, to 1 (cooperation), since 45 is below the bloc hold of 50. The alliance only holds if the relation is tended.

#### Forming an alliance

`formalize(Q, who)` raises a level to its target when the target is higher, and records a blocker when it cannot. It never lowers a level. The Inter-Party Relations card calls it.

Compatibility of lines:
- The Bolsheviks: no armed struggle, and `war_line` 1 or lower.
- The Left SRs: no armed struggle, and `war_line` 2 or lower.
- The Mensheviks and SRs: the absolute value of `war_line` is 3 or lower.

Shared power is needed for a coalition:
- The Bolsheviks: `vikzhel_deal`, `assembly_survives`, or `lsr_in_gov`.
- Others: `in_coalition`, `assembly_survives`, `vikzhel_deal`, or `lsr_in_gov`.

`allianceBlocker` reports the reason in the text: `relations`, `lines` or `power`.

#### Coalition effects

- A coalition-level ally's turmoil feeds the player's dissent: `dissent_extra = min(0.12, 0.002 × feed)`, where the feed is the sum of turmoil in the coalition allies' parties. Turmoil fades by 5% a month.
- Each coalition-level ally lends the player one advisor, once (`LEND`). The Mensheviks borrow Chernov (from the SRs) and Spiridonova (from the Left SRs). The SRs borrow Dan and Spiridonova. The Left SRs borrow Chernov and Martov.
- Blocs (level 2 or higher) raise soviet democracy by 0.12 a month each.

**Historical turmoil** (`TURMOIL`, added once when `dix` reaches the date, capped at 100 per party):

| dix | Date (early) | Party | Turmoil |
|---|---|---|---|
| 20 | November 1917 | SRs | 50 |
| 22 | December 1917 | Mensheviks | 45 |
| 22 | December 1917 | Left SRs | 20 |
| 28 | March 1918 | Left SRs | 40 |
| 28 | March 1918 | Bolsheviks | 30 |
| 34 | June 1918 | Mensheviks | 30 |
| 34 | June 1918 | SRs | 40 |
| 36 | July 1918 | Left SRs | 90 |
| 44 | November 1918 | SRs | 40 |
| 66 | October 1919 | SRs | 30 |
| 100 | March 1921 | SRs, Mensheviks, Left SRs | 20 each |

The Left SRs' rising of July 1918 is the 90-point entry. Turmoil counts only through the coalition feed, so only the allies' turmoil reaches the player's dissent.

**Left SR split.** When `lsr_split` is set (by events), the Left SRs' coalition with the SRs is reset to 0, and Chernov's advisor role is removed.

#### Fault lines

`RO.fault(Q, line)` breaks an alliance at a historical moment unless relations are high. A break sets the level to 0 and cuts the relation by 10 (floor 0). The text is returned for the event. The lines are:

| Line | Who it hits | Break when relation is below |
|---|---|---|
| Brest-Litovsk | Bolsheviks | 70 |
| Komuch (the SR government on the Volga) | Mensheviks: the SRs (ally). SR player: the Mensheviks (ally). Left SR player: the SRs (ally). Fires only when the SRs join Komuch | 70 (Mensheviks), 75 (SRs and Left SRs) |
| July rising | Left SR player: the Bolsheviks (threshold 101, so a coalition always ends) and the Mensheviks (75). Mensheviks and SR players: the Left SRs (75). Fires when `lsr_rising` is set (Left SR player), or unless `lsr_uprising_averted` is set (others) | as stated |
| Kolchak's coup | Mensheviks: SRs (70). Left SRs: SRs (75) | as stated |

The Komuch line fires only when the SRs join Komuch. This depends on `armed_struggle`, `komuch_guaranteed`, `komuch_averted` and the party. The July line fires on `lsr_rising` (for the Left SRs) or unless `lsr_uprising_averted` is set (for the others).

### The government and the Cabinet

**When the settings count.** The Cabinet's settings apply only while the party is in the government.
- Full effects apply in a coalition under the Republic (`in_coalition` and not `bol_regime`): all six areas.
- Under the Bolsheviks, only the land and order settings apply, and only where the Left SRs are in the government (`lsr_in_gov`).

The settings (`pol_land`, `pol_food`, `pol_war`, `pol_order`, `pol_labour`, `pol_finance`) are set by the Cabinet card.

**Starting settings:** land 0, food 1 (the grain monopoly), war 0, order 0, labour 0, finance 0.

**Monthly drift** (per month, multiplied by `tl`):

| Area | Setting | Drift | Objections (score) |
|---|---|---|---|
| Land | 0 (default) | none | none |
| | 1 | land pressure −0.4; Right +0.1 | Kadets +1.5; generals +0.8 |
| | 2 | land pressure −0.8; Right +0.25 | Kadets +4.5; generals +2.5; Bolsheviks −1.5 (they like it) |
| Order | 0 (default) | none | none |
| | 1 | Right −0.4; repression +0.3; soviet democracy −0.25; Bolsheviks −0.1 | Kadets −0.5 (like); generals −1.5 (like); Bolsheviks +3 |
| | 2 | soviet democracy +0.25; Right +0.15 | Kadets +0.5; generals +1.5; Bolsheviks −1.5 (like) |
| Food | 0 (free trade) | bread −0.4; ruble +0.3 | Bolsheviks +2 |
| | 1 (default) | none | none |
| | 2 | bread +0.7; repression +0.2; soviet democracy −0.2; land pressure +0.2 | none |
| War (at war only) | 0 (default) | none | Bolsheviks +1 |
| | 1 (push for peace) | war weariness −0.2; army discipline −0.2 | Kadets +2; generals +2.5; Bolsheviks −1.5 (like) |
| | 2 (offensive) | war weariness +0.6; army discipline −0.3 | generals −1 (like); Bolsheviks +3 |
| Labour | 0 (default) | ruble +0.2; Bolsheviks +0.1 | Bolsheviks +1.5 (in coalition) |
| | 1 (eight-hour day) | ruble −0.2; Bolsheviks −0.15 | Kadets +1.5; generals +0.5 |
| | 2 (state regulation) | ruble +0.15; bread +0.1; soviet democracy −0.05 | Kadets +2.5; Bolsheviks −1 (like); generals +0.5 |
| Finance | 0 (default) | none | none |
| | 1 (tax on war profits) | ruble +1.2 | Kadets +2; Bolsheviks −0.5 (like) |
| | 2 (Allied credits) | ruble +1.5 at war, +0.5 otherwise; war weariness +0.2 at war | Kadets −0.5 (like); Bolsheviks +2 |

Objection scores are explained under The opposition. The drift effects of food, war, finance and labour apply only in full coalition.

**Note: the defaults are not all neutral.** The code comment says the defaults "have no ongoing effect". Two defaults do have one:
- Labour 0 (the default) adds +0.2 ruble and +0.1 Bolshevik strength a turn in coalition, and gives the Bolsheviks an objection of +1.5.
- War 0 (the default) gives the Bolsheviks an objection of +1 while at war in coalition.

Together, at the defaults in coalition at war, the Bolsheviks' objections already total 4.0. That is a hostility target of 40.

### The opposition

#### The three camps

| Camp | Active | Strength (power) | Defence (`campStrength`, used for break odds) |
|---|---|---|---|
| Kadets and the propertied | until the Bolsheviks take power | `15 + 0.6 × right_threat`, +10 if Kadets are in government | `8 + 0.3 × hostility` |
| The generals and the Right | until the Bolsheviks take power | `right_threat` | `10 + 0.4 × right_threat + 0.3 × hostility` |
| The Bolsheviks | from late April 1917 (`dix` 7), until the takeover | `bolshevik` | `8 + 0.4 × bolshevik + 0.3 × hostility` |

Each camp's **hostility** (0 to 100) starts at 0.

#### How hostility is computed

Each camp has an objection score, which is the sum of the items below (negative items are things it likes). The total is floored at 0. A positive item is multiplied by 0.6 when a matching `soft_<area>` flag is set (set by events).

The objections, by camp:
- **Kadets:** socialised land (4.5), land committees (1.5), land decree (3), committees (up to 2.5, scaled by their count), eight-hour day (1.5), state regulation (2.5), a peace push (2), amnesty (0.5), emergency measures (−0.5, liked), a cabinet without Kadets (1.5), their ministers in the cabinet (−1.5), a broken relationship (rel_kad below 20: 1), war-profits tax (2), Allied credits (−0.5).
- **Generals:** socialised land (2.5), redistribution of the estates by committees (0.8), land decree (2), committees (up to 1.5), amnesty and broad liberties (1.5), emergency measures (−1.5), a peace push (2.5), offensive (−1), Stockholm talks (1.5), concessions to workers (0.5), a cabinet of soviet parties alone (1), soldiers' committees when discipline is below 35 (1.5).
- **Bolsheviks:** power shared with the bourgeoisie (1.5 in coalition), Kadets in cabinet (2), emergency measures (3), amnesty (−1.5), offensive (3), peace push (−1.5), continuing the war (1), free grain trade (2), employers' hold on industry (1.5), state regulation (−1), socialised land (−1.5), the arrests of July (2, if the flag is set), borrowing from the imperialists (2), war-profits tax (−0.5).

The target is:

`target = clamp( 10 × score × fade × (1 + 0.12 × difficulty), 0, 100 )`

- `fade = max(0.6, 1 − 0.035 × age)`, where `age` is the number of months since the camp's complaints last grew by more than 0.5 points. The fade falls to 0.65 after ten months and reaches its floor of 0.6 at about 11.4 months.
- While a camp is cooling after a successful break, the target is capped at 30.

**Note.** The comment at `oppositionTurn` and in the design says the grievance halves after ten months. The code gives 0.65 at ten months and a floor of 0.6 (a 40% fade at most).

Hostility moves each turn towards its target: 30% of the gap a month when rising, 10% when falling.

**Sanction and revolt scales.** A camp sanctions at hostility 40 and revolts at 70.

- A camp must be strong enough to act. Its readiness is `clamp((power − 20) / 30, 0, 1)`. Below 20 power, it only grumbles.
- A camp needs power 40 to take up arms (`ARMS_AT`).
- A sanction (stage 1) is raised with a chance of about `(0.2 + (hostility − 40)/80) × readiness` a month.
- A revolt (stage 2) needs hostility 70 or more, power 40 or more, and either a previous sanction or revolt (`opp_n` at 1 or more) or hostility of 85 or more. Otherwise a camp at 70 to 84 sanctions for the first time.
- The revolt chance is `(0.2 + (hostility − 70)/80) × readiness` a month.
- A camp in cooldown, or with a pending event, cannot be triggered again.

Under the Bolsheviks no camp is active, since `campActive` returns false for all three.

#### Strength and breaking a camp

The party's strength is:

`strength = 5 × min(militia, 4) + 0.25 × (army_discipline − 40) + 0.15 × boost_soldiers + 0.1 × boost_workers + 2 × min(resources, 5) + allyPower + (5 if bol_armed and not against the Bolsheviks) + (4 if in coalition) + (soviet_democracy − 50) / 10`

where `allyPower = 5 × ally_lvl + 3 × ally_lsr + 4 × ally_bol` (the Bolshevik term is left out when the target is the Bolsheviks).

The Mensheviks at the start have a strength of 20.5 (discipline 2.5, resources 6, alliances 10, soviet democracy 2). The sidebar says 18 is "enough to strike". That threshold is not tested in `model.js`; any check at 18 is in the event files.

The odds of breaking a camp by force are:

`odds = clamp(0.5 + (strength − campStrength) / 40, 0.1, 0.9)`

where `campStrength = 0.3 × hostility + (base)`, with the bases in the table above (Kadets 8; generals `10 + 0.4 × right_threat`; Bolsheviks `8 + 0.4 × bolshevik`).

At the Mensheviks' normal start (strength 20.5, no hostility) the odds are about 81% against the Kadets, 46% against the generals and 61% against the Bolsheviks.

**Outcome of an attempt:**
- **Win:** hostility −45 (floor 0); the camp's own cooldown is 8 months (no new sanction); a 10-month cooling period (target capped at 30). Each camp has its own effects:
  - Kadets: relation −6, repression +1, Right −4, middle-class boost −3, generals' hostility −8.
  - Generals: Right −8, army discipline −2, soviet democracy −1.
  - Bolsheviks: their strength −5, relation −10, repression +2, worker boost −2.
  - If the ally is at bloc level or higher, the ally's name is added ("stood with us").
- **Loss:** hostility +15 (cap 100); soviet democracy −2; discipline −1 (−3 for the generals); Right +3 (+6 for the generals); resources −1. Outside an event, the camp reacts at once: its timer clears and a sanction or revolt is flagged (`ev` 1 or 2, revolt if hostility is 70 or more).

**Breaking in a camp's own event** (the Break option) always makes the attempt, and a loss does not trigger a second reaction until the event's cooldown ends.

#### Laws: slow, by decree, by force

Each contested measure is carried out one of three ways, with `law(Q, style, fn, label)`:

- **Slow:** the law's effects are multiplied by 0.6. Hostility rises by only 40% of the anger (the comment at the function says "a fifth"). It costs 1 resource.
- **Decree:** the law as written.
- **Force:** the law as written. Each camp it angers (see below) is attacked by `squash` in turn. A camp with odds under 45% is left alone ("too strong to touch"). A loss reacts at once, as described under Outcome of an attempt.

**Who a law angers.** The law's own explicit hostility changes count. If it has none, the hostility is derived from the change in its stats: Kadets `1.2 ×` the fall in their relation; generals `2 ×` the rise in the Right; Bolsheviks the fall in their relation. A camp is angered when this is at least 2.

### The October fork and the Civil War

The model gives the numbers. The decisions themselves (whether and when the Bolsheviks take power, when Kornilov marches, and whether the Whites attack) are made by the events (the Kornilov Affair, the October Revolution, the Second Bolshevik Attempt, the generals' plot), which compare these numbers.

**Grievance.** `G = (war_weariness + (100 − bread) + land_pressure + (100 − ruble)) / 4`. It is 55 at the start, which is the neutral point for every party's multiplier, and it drives Bolshevik growth.

**Bolshevik power (the insurrection).**

`bolPower = 14 + bolshevik + 0.5 × (G − 55) − 6 (homogeneous government) − 6 (Assembly election held) − 3 × min(land committees, 3) − 6 (a general peace in sight: stockholm 3 or more) − 4 (bread 35 or more) − 5 (land decree) + 8 (Left SRs back the Bolsheviks)`

At the start (Mensheviks) it is 34. The debug overlay in `ui.js` prints it beside the Kornilov numbers.

**Kornilov's march.**

- `kornilovForce = right_threat + 0.25 × (100 − army_discipline) − 10`. At the start it is 32.5.
- `kornilovResistance(bonus) = 40 + bonus + 5 × min(militia, 4) + 0.2 × boost_railway + 0.25 × boost_soldiers + 5 (homogeneous government) + (soviet_democracy − 50)/8 + 6 (SR player) − 4 × difficulty`. The `bonus` comes from the option chosen in the Kornilov Affair (from 4 for leaving the defence to Kerensky to 22 for the Kronstadt sailors). Without a bonus, at the start it is 42.5 for the Mensheviks, 48.5 for the SRs, 38.5 for the Mensheviks on Hard and 46.5 on Easy.

The Kornilov Affair event (September 1917) compares the two, with the defence bonus of the option chosen; if the force is greater, the game ends at once in the `kornilov` ending.

**The Whites.** Under the Bolsheviks, the front moves by the monthly rule in The country. The White ending comes at a front of 72. The `kornilovForce` and `bolPower` figures are printed by the debug view (`?debug` in the address), which shows the designers where the events draw their numbers.

**Civil War moves.** The Civil War's effect on the other stats:
- While `at_war` is set, whatever the regime: weariness +1.6, bread −1.8, ruble −2.6, discipline −1.3, land pressure +2.2 a month. Otherwise the peacetime rates apply.
- Under the Bolsheviks: the Red Army grows to 70, and repression and soviet democracy move as described.

### The exile warning

`RO.exileRisk(Q)` returns nothing unless all of these hold: the Bolsheviks rule, the player is the Mensheviks, and the game has not ended. Otherwise it returns a level and the reasons:

- **Level 2 (exile as things stand):**
  - Legality at or below the threshold (1 normal, 0 Easy): "the party is expelled from the soviets", or "the party is banned" at 0.
  - Members at or below 20 × `mem_scale` (12 on Easy): "too few members are left".
- **Level 1 (close to exile):**
  - Legality one step above the threshold (2 normal, 1 Easy), between May 1920 (`dix` 80) and August 1921 (`dix` 110, early): the arrests expected in 1921 would leave the party expelled (or banned, on Easy), provided repression is 40 or more, or neither the programme nor the NEP has been adopted.
  - Members at or below 1.5 × that threshold (30 normal, 18 Easy): "the membership is close to collapse".

The sidebar warns with level 2 as "If the war ended now, the party would be driven abroad", and level 1 as "The party is close to exile". The sidebar lists the reasons. Each turn `post_event` stores the level as `exile_risk`, and sets `exile_low_members` when the warning is about membership.

**Note.** The warning uses thresholds of 1 (legality) and 20 (members) on Normal. The immediate `exile` ending uses legality 0 and members of 12 on any difficulty. A Mensheviks player with legality 1 and members of 20 is therefore warned at level 2, but is not yet exiled until the final check at the end of 1921 (or until legality falls to 0 with members at 12 or fewer).

---

## The events, 1917

The 1917 arc opens in early March with dual power already in place: the Petrograd Soviet holds the garrison, the railways and the telegraph, the Provisional Government holds the ministries, and every early event asks whether your party should join the cabinet, stay out of it, or push for a socialist government. The summer weakens the army and the government in turn (Order No. 1, the June Offensive, the July Days), and the Kornilov Affair in September is the one moment where a single outcome ends the game at once if the General's force beats the defence. The autumn settles the endgame: the Petrograd Soviet vote, the Democratic Conference and the October event decide whether the Bolsheviks take power (their calculated strength has to reach 55), and then the Vikzhel talks, the Left SR split, the Constituent Assembly election and the December party congresses decide whether the socialist parties can govern together through the winter of 1917-18.

The events below change the party's **currents**, its internal factions. Each current has a *strength* (its weight in the party) and a *discontent*; the party's dissent is their weighted average. The currents have different names in each party, but the same five roles:

| Role | Mensheviks | SRs | Left SRs |
|---|---|---|---|
| The leadership's line | Revolutionary Defencists | Centre (Chernov) | Kamkov-Spiridonova leadership |
| The left | Internationalists | Left SRs (the Left Centre after the split) | pro-Bolshevik Left SRs |
| The right | Right Defencists | Right SRs | pro-coalition Left SRs |
| The organisers | trade unionists and cooperators | Right Centre (Gots, Zenzinov) | village organisers |
| The fifth | the Bund | the Ufa delegation (from 1919) | Narodnik Communists |

The descriptions use the Menshevik names (Defencists, Internationalists, Right Defencists) for these roles in every party. "Support" means a voter group; "relations" are with the Kadets, the ally, the Left SRs and the Bolsheviks; "Bolshevik standing" is the Bolsheviks' strength in the country.

### The February Revolution (early March 1917)
- File: `february`; Who sees it: Mensheviks and SRs only (not the Left SRs), from early March 1917, once. The choices differ between the two parties.
- What happens: After eight days of strikes and mutinies, Nicholas II has abdicated, and two authorities sit in the Tauride Palace: the liberal Provisional Government and the Petrograd Soviet, where the Mensheviks and SRs have the majority. The Soviet controls the garrison, the railways and the telegraph, the government the ministries, and neither can do without the other. The only socialist in the cabinet is Kerensky, who joined without asking the Soviet.
- Choices:
  - Mensheviks: lead the Soviet as a control body and stay out of the government. Relations with the Kadets +3, with the partner +3, Defencist strength +2. The party stays out of the cabinet.
  - Mensheviks: take ministries in the first cabinet. Relations with the Kadets +6, Bolshevik standing +2, Defencist strength +4, Internationalist strength -2 and discontent +10; one resource point. The party is in government with the Kadets.
  - Mensheviks: demand a Soviet government now (needs relations with the partner at 60 or more). A socialist-only cabinet: relations with the Kadets -20, the threat from the Right +12, rouble -5, Soviet democracy +3, army discipline +2; workers +3, soldiers +3, middle class -5; Internationalist strength +4 and discontent -5; Defencist strength -4 and discontent +8; Right Defencist discontent +10.
  - SRs: back Kerensky as the Soviet's man and keep the party out. Kerensky joins as an individual. Relations with the Kadets +3, with the partner +3, Defencist strength +2, Right Defencist discontent +4. The party stays out.
  - SRs: take ministries for the party. Relations with the Kadets +6, Bolshevik standing +2, Defencist strength +2, Right Defencist strength +3 and discontent -3, Internationalist strength -2 and discontent +10; one resource point. The party is in government with the Kadets.
  - SRs: demand a Soviet government now (needs relations with the partner at 60 or more). The same cabinet as the Mensheviks' version, with Defencist strength +2 and discontent +3, and Right Defencist strength -3 and discontent +10.
- Why it matters: Whether the party is in the cabinet from the first day sets the coalition flags (in government, Kadets in government, socialist-only cabinet) that the First Coalition and the May Cabinet Crisis go on to check.

### The Left Within (early March 1917)
- File: `lsr_start`; Who sees it: Left SRs only, from early March 1917, once.
- What happens: The SR party, which spent the war in prison, exile and at the front, has become the largest party in Russia in a fortnight, and it is divided three ways: the Right SRs (carry the war, share power with the liberals), Chernov's Centre (settle the land at the Assembly), and the left around Spiridonova, Kamkov and Natanson, who say the revolution has not yet begun. You lead the left wing, and the text gives you a year to decide what to do with it.
- Choices:
  - Organise a left caucus inside the party. Peasant support +2, soldier support +1, Defencist strength +2, relations with the partner -2. The left starts meeting separately before every party gathering, but it is not yet a faction.
  - Work through the Soviet's soldiers' section. Soldier support +3, relations with the Bolsheviks +2, union current strength +1. Delegates there are elected from the regimental committees.
  - Wait: the party must not split before the Assembly. Relations with the partner +3, Right Defencist strength +2 and discontent -2, Defencist discontent +3.
- Why it matters: It sets the dual power flag and fixes the Left SRs' early standing with the partner and the Bolsheviks, before the first coalition.

### Order No. 1 (late March 1917)
- File: `order_no_1`; Who sees it: all parties, from late March 1917, once.
- What happens: On 14 March the Soviet executive ordered the Petrograd garrison to elect soldiers' committees in every unit, put weapons under their control, end the compulsory salute off duty, and obey only Duma orders that did not contradict the Soviet. The order has already reached the front, and the text expects between 100,000 and 150,000 men to leave their units within weeks.
- Choices:
  - Leave the order as it is. Army discipline -5, the threat from the Right +4, soldier support +3. The soldiers take it as their charter; the officers do not.
  - Declare that it applies to the Petrograd garrison only. Army discipline -2, the threat from the Right +1, soldier support +1, Defencist strength +1. The clarification reaches the front too late for many regiments.
  - Add that soldiers must obey operational orders. Army discipline -1, soldier support -1, Defencist strength +1, Internationalist discontent +2. This is the best that can be done after the fact.
- Why it matters: The choice sets how much army discipline is lost, and the June Offensive fails if discipline is below 55 when it starts, while the July Days power option needs discipline of 45 or more or an armed militia.

### Peace Without Annexations (early April 1917)
- File: `peace_appeal`; Who sees it: all parties, from early April 1917, once. It also brings Tsereteli in as an advisor.
- What happens: The Soviet's appeal "To the Peoples of the World" calls for a peace without annexations or indemnities, and the Provisional Government does not repeat it. Tsereteli, back from Siberian exile, takes over the Soviet majority with "revolutionary defencism": defend the revolution against Germany while pressing the Allies toward peace. Martov, still abroad, holds to the Zimmerwald line of immediate peace.
- Choices:
  - Adopt revolutionary defencism. War line +2, Defencist strength +8, Internationalist strength -4 and discontent +8, relations with the Kadets +4, with the partner +2. This is majority policy for now.
  - Hold the Zimmerwald line. War line -2, Internationalist strength +8 and discontent -4, Defencist strength -5 and discontent +8, Right Defencist strength -2 and discontent +10, war weariness -3, relations with the Kadets -5, with the Left SRs +3, with the Bolsheviks +2, soldier support +3. The Kadets and the Allied embassy are alarmed.
- Why it matters: It sets the party's war line, which the Unity Congress and the December party congress move again, and it decides which side of the Kadets and the Internationalists the party starts from.

### The April Theses (late April 1917)
- File: `april_theses`; Who sees it: all parties, from late April 1917, once.
- What happens: Lenin reached Petrograd on 16 April in a sealed train that had crossed Germany, and the next day put out his April Theses: no support for the Provisional Government, all power to the soviets, an end to the war, and the confiscation of the landlords' estates. Most Bolsheviks thought them mad, but many provincial Bolsheviks still work in joint committees with the Mensheviks.
- Choices (each party sees two):
  - Mensheviks: dismiss the theses as anarchism. Bolshevik standing +2, relations with the Bolsheviks -3, Defencist strength +1, Internationalist discontent +1.
  - Mensheviks: invite Kamenev's wing to a unity conference. Relations with the Bolsheviks +8, Bolshevik standing -3, Right Defencist discontent +6, Internationalist strength +1 and discontent -2. Sets the flag for Bolshevik unity.
  - SRs: Chernov replies that the Bolsheviks copied the SR land programme and spoiled the rest. Bolshevik standing +1, relations with the Bolsheviks -4, peasant support +2, middle class +1, Right Defencist strength +1 and discontent -2, Internationalist discontent +2.
  - SRs: offer the Bolshevik left a joint programme on the land. Relations with the Bolsheviks +6, Bolshevik standing -1, Right Defencist discontent +8, Internationalist strength +2 and discontent -4. Sets the flag for Bolshevik unity.
  - Left SRs: welcome the land and peace points but keep your distance. Relations with the Bolsheviks +8, Bolshevik standing +2, soldier support +2, peasant support +1, Internationalist strength +3, Right Defencist discontent +6.
  - Left SRs: reject the theses, since the peasants will not follow a party that does not know them. Relations with the Bolsheviks -4, with the partner +3, peasant support +2, Right Defencist strength +1 and discontent -3, Internationalist discontent +4.
- Why it matters: The choices move relations with the Bolsheviks, which the Vikzhel talks and the Seven Commissars offer later read, and the two joint-programme options set the Bolshevik unity flag.

### The April Crisis (early May 1917)
- File: `april_crisis`; Who sees it: all parties, from early May 1917, once.
- What happens: Milyukov's note to the Allies, published on 3 May, promised to fight on to a decisive victory and honour all the tsarist treaties. Armed soldiers and workers marched through Petrograd with banners reading "Down with Milyukov", counter-demonstrations by the middle classes followed the next day, and General Kornilov offered to clear the streets by force, which the Soviet leaders refused. The cabinet is in crisis, and the Soviet must decide whether to bring it down or enter it.
- Choices:
  - Press the government to repudiate the note and restrain the crowds. Relations with the Kadets -4, Soviet democracy +1, the threat from the Right +1, workers +1, soldiers +1, Defencist strength +1. The crowds go home, but the cabinet is weaker.
  - Withdraw support and keep the Soviet in its control role. Sets the flag that the party refused a coalition. Relations with the Kadets -6, the threat from the Right +2, Soviet democracy +1, Internationalist strength +3 and discontent -3, Defencist strength -2 and discontent +5.
  - Demand a coalition with Milyukov out. Sets the flag that the party demanded a coalition. Relations with the Kadets -2, with the partner +3, Defencist strength +3, Internationalist strength -2 and discontent +6.
- Why it matters: It records whether the party refused or demanded a coalition, and the weakened cabinet it describes leads directly into the First Coalition.

### The First Coalition (late May 1917)
- File: `first_coalition`; Who sees it: Mensheviks and SRs only (not the Left SRs), from late May 1917, once. It appears only while the Bolsheviks have not taken power, before November 1917, and only if the party is not already in a coalition.
- What happens: On 18 May the first coalition was formed: Lvov stays as Prime Minister, Kerensky goes to War, Chernov to Agriculture, Tsereteli to Posts and Telegraphs and Skobelev to Labour. Six socialists sit with ten non-socialists. The Soviet executive is divided: Dan and Tsereteli say dual power cannot go on, while Martov, the Internationalists and the Bolsheviks say the socialists will carry the blame for a policy they cannot control.
- Choices:
  - Mensheviks: enter the coalition. Relations with the Kadets +4, with the partner +2, Bolshevik standing +2, Defencist strength +4, Internationalist strength -2 and discontent +10; one resource point. Kadets in government, and Skobelev is pinned as an advisor.
  - Mensheviks: stay out as a control body. Relations with the Kadets -3, with the partner -5, the threat from the Right +2, Internationalist strength +5 and discontent -4, Defencist strength -4 and discontent +10.
  - Mensheviks and SRs: demand a cabinet without the Kadets (needs relations with the partner at 60 or more and a formal bloc, alliance level 2). A socialist-only cabinet: relations with the Kadets -15, the threat from the Right +8, rouble -3, Soviet democracy +3; workers +3, soldiers +2, middle class -4; Defencist strength -3 and discontent +6; Internationalist strength +3 and discontent -5; Right Defencist discontent +8.
  - SRs: Chernov takes Agriculture and the party enters. Relations with the Kadets +4, with the partner +2, Bolshevik standing +2, Defencist strength +3, Right Defencist strength +2 and discontent -2, Internationalist strength -2 and discontent +10; one resource point. Sets the flag that Chernov is in government.
  - SRs: leave the ministries to individuals and stay out. Relations with the Kadets -3, with the partner -5, the threat from the Right +2, Internationalist strength +4 and discontent -3, Defencist strength -4 and discontent +8, Right Defencist strength -3 and discontent +12.
- Why it matters: Entering sets the coalition flags that the May Cabinet Crisis checks, and only the SR entry sets the Chernov government flag that both of Chernov's later events depend on.

### The Coalition (late May 1917)
- File: `lsr_coalition` (title "The Coalition"); Who sees it: Left SRs only, from late May 1917, once. The card places the party in the coalition as it arrives (Chernov in government, Kadets in government); the choices take it out again.
- What happens: On 18 May the first coalition was formed, with Chernov at Agriculture, Kerensky at War, Tsereteli and Skobelev at Posts and Labour. The SR Party Council voted for it by a large majority; the left was in the minority and lost. The party now shares the blame for the war, the bread and the delay on the land, and the left opposed all three.
- Choices:
  - Oppose the coalition inside the party. Leaves the coalition; peasant and soldier support +3 each, relations with the partner -5, relations with the Bolsheviks +3, Right Defencist discontent +6, Defencist strength +1. The faction loses the vote and is reproached for it.
  - Vote with the majority, for the sake of party unity. Relations with the partner +4, peasant and soldier support -2 each, Internationalist discontent +10, Defencist discontent +3. The Bolshevik wing of the faction is furious.
  - Leave the party and found your own (not available once the Left SRs are already a separate party). Leaves the coalition and sets the separate party flag; relations with the partner -15, relations with the Bolsheviks +3, peasant and soldier support +3 each, Internationalist strength +2 and discontent -2, Right Defencist discontent +8; membership falls by 4 (scaled).
- Why it matters: Leaving sets the Left SR split flag, which the November expulsion event, the Constituent Assembly election and the Seven Commissars event all check.

### Martov Returns (late May 1917)
- File: `martov_returns`; Who sees it: Mensheviks only, from late May 1917, once. It also brings Martov and Axelrod, who came on the same train, in as advisors.
- What happens: Martov reached Petrograd on 9 May, through Germany like Lenin, on a train arranged for the exiles. He was received warmly as the party's conscience, and without enthusiasm by Tsereteli and Dan, who have been running the party without him. He opposes the coalition, the war and any alliance with the bourgeoisie, and by the end of the summer his Internationalists may be a third of the party.
- Choices:
  - Bring him into the leadership. Internationalist strength +8 and discontent -8, Defencist discontent +4, Right Defencist discontent +3. Martov is elected to the Central Committee.
  - Keep him at arm's length. Internationalist strength +6 and discontent +8, Defencist discontent -2. Martov leads his own circle and edits the Internationalists' paper, Novaya Zhizn.
- Why it matters: The choice sets how strong the Internationalist current is when the Larin defections and the later party congresses come up.

### The May Cabinet Crisis (late May 1917)
- File: `may_crisis`; Who sees it: Mensheviks and SRs (not the Left SRs), from late May 1917, once. It appears only if the party is in a coalition with the Kadets.
- What happens: The Kadet ministers and the Soviet's ministers disagree about the land, the eight-hour day, the army committees and the date of the Constituent Assembly. The Kadets have begun to talk about resignation, and Tsereteli and Skobelev look for a middle ground, which some of the party call a surrender.
- Choices:
  - Keep the cabinet together, whatever the price. Relations with the Kadets +4, with the partner -2, Defencist strength +2, Internationalist discontent +6.
  - Move toward a government of the Soviet parties alone (needs relations with the partner at 55 or more). The Kadets leave the government: relations with the Kadets -12, the threat from the Right +6, Soviet democracy +2, rouble -2, workers +2, soldiers +2, middle class -3, Internationalist strength +3 and discontent -4, Defencist strength -2 and discontent +5, Right Defencist discontent +6.
- Why it matters: Keeping the Kadets or removing them is a lasting change to the cabinet, and the Democratic Conference's coalition option reads whether the Kadets are in government.

### Chernov at the Ministry of Agriculture (early June 1917)
- File: `sr_chernov_land`; Who sees it: SRs only, from early June 1917, once. It appears only while Chernov is in government and no land decree has been issued (only a Bolshevik takeover issues the decree).
- What happens: Chernov holds the ministry the peasants care about, and he is hampered by his Kadet colleagues, who say no land should be touched until the Assembly decides, and by the peasants, who have begun to take it. A tour of the provinces has shown him land committees in every volost and estates burning. The whole SR programme depends on what he can do in the next few months.
- Choices:
  - Legalise the committees' transfers by decree. Land committees +2, land pressure -10, relations with the Kadets -8, the threat from the Right +4, peasant support +4, soldier support +2, Right Defencist discontent +6, Internationalist discontent -4. The landowners telegraph their complaints to every general.
  - Regulate leases and open the state lands, and leave the estates to the Assembly. Land committees +1, land pressure -4, relations with the Kadets -2, peasant support +2, Internationalist discontent +3. The Kadets accept it, with a sour face.
  - Defer to the Kadet ministers. Land pressure +4, relations with the Kadets +4, peasant support -3, middle class +1, Internationalist discontent +8, Defencist discontent +3. The village delegations go home, and the villages do not wait.
- Why it matters: It sets the land pressure figure and the land committee count, the SRs' main land levers, and Chernov's later resignation depends on whether he is still in government.

### The First Congress of Soviets (late June 1917)
- File: `congress_of_soviets`; Who sees it: all parties except the Left SRs (they have their own version), from late June 1917, once.
- What happens: On 16 June the First All-Russia Congress of Soviets opened in Petrograd, with over 1,000 delegates, 777 of them with a vote. The moderate socialists have the majority. When Tsereteli declared that no party would take the power from the Soviet, Lenin shouted from the floor "There is such a party!" The delegates now vote on the coalition, shown on the floor by the parliament chart. On arrival the Congress records whether the moderate parties have 55 or more of the vote.
- Choices:
  - Back the coalition. Relations with the Kadets +3, Soviet democracy +1, Defencist strength +2, Internationalist discontent +3, middle class +1. The Congress endorses the coalition by a large majority and sets up its Central Executive Committee.
  - Propose that the Congress take power in a democratic coalition (needs relations with the partner at 50 or more). Relations with the Kadets -5, Soviet democracy +3, relations with the partner +2, with the Left SRs +4, with the Bolsheviks +3, the threat from the Right +3, workers +2, soldiers +2, railwaymen +1, Internationalist strength +3 and discontent -4, Defencist strength -2 and discontent +5. The motion is lost, narrowly, to a motion of confidence.
- Why it matters: The power motion is the first public step toward Soviet power by the moderate parties, and its relations shifts with the Left SRs and the Bolsheviks are the groundwork for the Left SR and Bolshevik alignments of July and October.

### The Left Stands Out, Left SR version (late June 1917)
- File: `lsr_congress` (title "The Left Stands Out", the same title as the SR version `sr_left_wing`); Who sees it: Left SRs only, from late June 1917, once.
- What happens: At the same Congress the SRs and Mensheviks hold the majority. Lenin's shout is answered by applause from the Left SRs, who were silent until then. The Left SR delegates are the part of the SR delegation that is enough to be heard but not enough to decide, and their number is worked out from the party's share of the vote on arrival.
- Choices:
  - Vote with the Bolsheviks for all power to the Soviets. Sets the flag that the Left SRs back the Bolsheviks. Relations with the Bolsheviks +6, with the partner -4, Soviet democracy +1, soldier and workers support +3 each, Internationalist strength +3 and discontent -3, Right Defencist discontent +8. The motion is lost, and the SR leaders call it betrayal.
  - Propose a government of all the socialist parties. Relations with the Bolsheviks +3, with the Left SRs +5, with the partner +2, Soviet democracy +2, workers +1, soldiers +1, Right Defencist strength +2 and discontent -2, Defencist strength +1. The Congress does not take it up.
  - Vote with the SR delegation, as the party's rules require. Relations with the partner +4, Internationalist discontent +8, soldier support -2. The Bolshevik wing notices, and so does the Baltic Fleet.
- Why it matters: The Bolshevik vote sets the flag that the Left SRs back the Bolsheviks, which is set again in the July Days, the Democratic Conference and the October Revolution.

### The Left Stands Out, SR version (late June 1917)
- File: `sr_left_wing` (title "The Left Stands Out", the same title as the Left SR version `lsr_congress`); Who sees it: SRs only, from late June 1917, once.
- What happens: At the Congress and at the party's own Third Congress, the Left SRs are a force: Spiridonova, who shot a governor in 1906 and was tortured for it, Kamkov, the party's expert on the village, and Natanson, the old populist. They call for an immediate peace, the land without compensation, and the party's exit from the coalition. They do not yet call for a separate party, but they hold their own meetings.
- Choices:
  - Give the Left SRs a larger place in the party. Internationalist strength +6 and discontent -8, Right Defencist discontent +8, Defencist strength -2 and discontent +2, relations with the Left SRs +6. Spiridonova and Kamkov are given Central Committee places and a column in the party paper.
  - Remind them of party discipline. Internationalist strength -4 and discontent +10, Right Defencist discontent -4, relations with the Left SRs -8. The Left SRs hold another meeting the next evening and invite the press.
  - Say nothing. Internationalist discontent +4. The Left SRs take the silence for what it is.
- Why it matters: The relations with the Left SRs and the Internationalist discontent set here decide whether the November split can be reconciled, since that event needs relations of 55 or more and discontent below 45.

### The June Offensive (early July 1917)
- File: `june_offensive`; Who sees it: all parties, from early July 1917, once.
- What happens: On 1 July, in the middle of the Soviet Congress, the army attacked in Galicia on Kerensky's orders and the Allies' urging. The Petrograd Soviet had planned a demonstration for the same day, the Bolsheviks took over its slogans, and 400,000 marched under "All power to the soviets". Whether the attack fails is decided on arrival: if army discipline is below 55 it fails, and the troops stop, refuse to go on, and lose up to 120 kilometres to a German counter-attack; otherwise it makes modest gains and stalls. (The failure check also looks at whether the government has sounded out Germany, from the War Aims card.)
- On arrival: a failure gives war weariness +8, army discipline -8, Bolshevik standing +4, the threat from the Right +4, soldier support -3; a stall gives war weariness +3, army discipline -3, Bolshevik standing +1.
- Choices:
  - Support it ambiguously, as defence of the revolution (not the Left SRs). Defencist strength +2, Internationalist discontent +5, relations with the Kadets +3, middle class +2, soldier support -2. The Kadets are pleased, and the Internationalists are not.
  - Withhold support, and push for the Stockholm conference (all parties). Internationalist strength +2 and discontent -3, Defencist strength -1 and discontent +4, relations with the Kadets -3, war weariness -2, soldier support +2, workers +1; sets a Stockholm count to 1.
  - Oppose the offensive from the Congress platform (Left SRs only). Soldier support +4, peasant support +2, workers +1, relations with the partner -4, relations with the Bolsheviks +3, war weariness -1, Defencist strength +2 and discontent -1, Right Defencist discontent +4.
  - Organise the soldiers' committees against it (Left SRs only). Soldier support +5, army discipline -2, relations with the partner -3, the threat from the Right +2, a militia gain of 0.5, Internationalist strength +2 and discontent -2. Some regiments refuse to move.
- Why it matters: The offensive leaves the army's discipline and war weariness at the levels the July Days and the Kornilov Affair start from, and a failure raises Bolshevik standing.

### The July Days (late July 1917)
- File: `july_days`; Who sees it: all parties, from late July 1917, once.
- What happens: On 16 July the First Machine Gun Regiment, the Kronstadt sailors and tens of thousands of Putilov workers marched on the Tauride Palace demanding that the Soviet take power. The Bolsheviks hesitated, then joined in the hope of steering it, and a crowd seized Chernov. Loyal troops and a Soviet appeal broke up the demonstration by the 18th, documents claiming that Lenin was a German agent appeared, and the government ordered the Bolshevik leaders arrested.
- Choices:
  - Call on loyal troops, and refuse power (not the Left SRs). Bolshevik standing -8, relations with the Bolsheviks -10, the threat from the Right +6, Soviet democracy -2, relations with the Kadets +3, soldier support -2, workers -1, middle class +2, Defencist strength +3, Internationalist discontent +8. The Bolshevik leaders go into hiding or prison. Sets the repression flag.
  - Take power from the crowd (not the Left SRs; needs relations with the partner at 60 or more, and either an armed militia of at least 1 or army discipline of 45 or more). The Soviet declares itself the government: a socialist-only cabinet, in coalition, the Kadets out. Relations with the Kadets -20, the threat from the Right +12, Soviet democracy +4, Bolshevik standing -4, relations with the Bolsheviks -3, workers -3, soldiers +2, Defencist strength -4 and discontent +6, Internationalist strength +2 and discontent -2, Right Defencist discontent +14. Awards the achievement "There is such a party".
  - Shield the Bolsheviks from arrest (needs relations with the Bolsheviks at 20 or more). Relations with the Bolsheviks +10, Bolshevik standing +3, the threat from the Right -2, Soviet democracy +3, relations with the Kadets -4, Internationalist discontent -4, Defencist discontent +6, Right Defencist discontent +6. The Soviet refuses to sanction the arrests. Sets the flag that the Bolsheviks were freed.
  - Support the sailors' demand for Soviet power, and ask them to go home (Left SRs only). Sets the flag that the Left SRs back the Bolsheviks. Relations with the Bolsheviks +8, with the partner -8, Bolshevik standing +3, the threat from the Right +4, soldier support +3, workers +2, Internationalist strength +3 and discontent -2, Right Defencist discontent +10.
  - Mediate between the crowd and the Soviet executive (Left SRs only). Relations with the partner +2, with the Bolsheviks +3, Soviet democracy +2, the threat from the Right +1, soldier and workers support +1 each, Defencist strength +2, Internationalist discontent +5. Spiridonova speaks to the crowd for an hour, and it goes home.
- Why it matters: The three routes for the other parties set different flags: troops sets the repression flag, shield sets the flag that the Bolsheviks were freed (which changes the Kornilov text), and power makes the Soviet the government and awards the achievement.

### Larin and the Defectors (early August 1917)
- File: `larin`; Who sees it: Mensheviks only, from early August 1917, once. It appears only if Internationalist discontent has reached 25 or more.
- What happens: Yuri Larin, the Internationalist spokesman in the Soviet, announces that he will join the Bolsheviks, and Trotsky has already gone. Some younger Internationalists in the factory districts are asking whether the line of critical support for the coalition can be held, and whether Lenin is right after all.
- Choices:
  - Send Martov to speak at every Internationalist circle. Internationalist discontent -10, membership falls by 3 (scaled), relations with the Left SRs +1. Most circles stay; a few leave anyway.
  - Let them go. Membership falls by 12 (scaled), Internationalist strength -4 and discontent -6, Bolshevik standing +3, workers -2, Defencist discontent +2. The Larin group and about a dozen district organisations go over to the Bolsheviks.
  - Concede to the Internationalists' demands for a new party line. Internationalist strength +5 and discontent -12, Defencist strength -3 and discontent +8, Right Defencist strength -1 and discontent +8, war line -1, relations with the Kadets -3. The Defencists are uneasy.
- Why it matters: Conceding moves the war line and the balance of the factions, both of which the Unity Congress and the December party congress move again.

### The Moscow State Conference (late August 1917)
- File: `moscow_conference`; Who sees it: all parties, from late August 1917, once.
- What happens: Kerensky convened a State Conference at the Bolshoi Theatre in Moscow on 25 to 28 August, with over two thousand delegates from the Duma, the cooperatives, the generals, the industrialists and the Soviets. The Right sat on one side of the hall and the socialists on the other. The Bolsheviks stayed out, and Moscow's workers held a one-day strike against the conference, while General Kornilov arrived to cheering crowds and the Kadets treated him as the saviour of Russia.
- Choices:
  - Attend, and defend the Soviets. Relations with the Kadets -3, the threat from the Right +2, Soviet democracy +1, middle class +1, workers +1, Defencist strength +1. The generals hear the Soviet's speakers in silence and applaud Kornilov.
  - Boycott the conference. Relations with the Kadets -8, the threat from the Right +3, Bolshevik standing -1, relations with the Bolsheviks +2, workers +2, Internationalist strength +2 and discontent -3, Defencist strength -2 and discontent +4. The boycott gives the hall to the Right.
- Why it matters: Either choice raises the threat from the Right just before Kornilov's march, and the boycott raises it more (+3 against +2) and costs more with the Kadets (-8 against -3).

### Chernov Leaves the Government (late August 1917)
- File: `sr_chernov_leaves`; Who sees it: SRs only, from late August 1917, once. It appears only while the Bolsheviks have not taken power and Chernov is still in government.
- What happens: After weeks of attacks by the Kadet and right-wing press, which accused him of defeatism, of land seizures, and of a speech about the Ukraine, Chernov resigned as Minister of Agriculture; Kerensky accepted it, and the land law Chernov had been preparing was left unfinished. The party and the Soviet are alarmed, since the peasants will draw the obvious conclusion if the government can drive out the one minister they trust.
- Choices:
  - Keep him, at the price of the Kadets (needs relations with the partner at 50 or more). The Kadets leave the cabinet, which is now in coalition and socialist-only: relations with the Kadets -10, the threat from the Right +4, Soviet democracy +2, peasant support +3, Right Defencist discontent +8, Internationalist discontent -4. For the first time since February the cabinet has no liberals in it.
  - Let him go, and keep the Kadets. Clears the Chernov government flag; relations with the Kadets +4, land pressure +3, peasant support -3, Internationalist strength +3 and discontent +8, Defencist strength -2 and discontent +4. Chernov returns to the party.
- Why it matters: Letting him go clears the Chernov government flag that the land event checks, and keeping him removes the Kadets from the cabinet, which the Democratic Conference's coalition option later reads.

### The Kornilov Affair (early September 1917)
- File: `kornilov`; Who sees it: all parties, from early September 1917, once. On arrival the model works out the strength of Kornilov's force.
- What happens: On 9 September General Kornilov ordered the Third Cavalry Corps to march on Petrograd. It is not clear whether Kerensky had asked for the troops or had been misled by an intermediary, and by the time it was clear Kerensky had dismissed the general and the general had refused to go. The troops are a few days from the capital, the railways are in union hands that favour the Soviet, the garrison's committees distrust it, and the Bolsheviks, who were hunted in the summer (or who sit in the Soviet's custody if the Soviet refused to hand them over in July), can bring several thousand armed men to the defence.
- Choices:
  - Form a Committee for the Struggle against Counter-Revolution, with the Bolsheviks. A defence bonus of 20. Relations with the Bolsheviks +8, Bolshevik standing +10, the Bolsheviks are armed, Internationalist strength +1 and discontent -2, Defencist discontent +6, Right Defencist discontent +8. The Bolshevik leaders sit on the committee (released from prison if they were held), and the railwaymen stop the cavalry's trains.
  - Use the crisis to form a government without the Kadets (needs relations with the partner at 50 or more). A defence bonus of 10. The Kadets resign, and the cabinet is socialist-only and in coalition: relations with the Kadets -15, Bolshevik standing +4, Soviet democracy +2, Defencist strength -2 and discontent +5, Internationalist strength +2 and discontent -3, Right Defencist discontent +8.
  - Defend the government, and leave the Soviet's role to Kerensky. A defence bonus of 4. Relations with the Kadets +2, the threat from the Right +2, Internationalist discontent +4. Kerensky becomes both the cause and the commander of the defence.
  - Send the Kronstadt sailors and the peasant delegates against the General (Left SRs only). A defence bonus of 22. Relations with the Bolsheviks +6, Bolshevik standing +6, relations with the partner -3, the Bolsheviks are armed, soldier support +3, peasant support +2, Internationalist strength +2 and discontent -2. Within two days thousands of armed men are at Pulkovo, with the Bolsheviks.
- Outcome (after any choice): the game compares the General's force, fixed on arrival, with the resistance the model works out from the defence bonus. If the force is greater, Kornilov wins and the game ends at once in the Kornilov ending: cavalry enters the capital on 14 September, the Soviet is dissolved, its party leaders are arrested or flee, and Kornilov declares a National Defence Council, so Russia is a military dictatorship. If the force is not greater, the cavalry stops at Luga and dissolves, Kornilov is arrested at Mogilev, the threat from the Right falls by 22, army discipline falls by 6, Soviet democracy rises by 3, and soldier and workers support rise by 1 each. The files show no dice roll; the outcome comes from the model's force and resistance figures.
- Why it matters: This is the only 1917 event that can end the game on the spot, and a defeat of the General removes the largest single block of the Right's threat in these events.

### The Petrograd Soviet Votes (late September 1917)
- File: `petrograd_soviet`; Who sees it: all parties, from late September 1917, once.
- What happens: The Bolsheviks brought a resolution on power to the Petrograd Soviet. Whether it passes is decided by Bolshevik standing: at 40 or more it passes (in the text, by 519 votes to 414, with 67 abstentions on 22 September), the Presidium resigns with Chkheidze and Tsereteli, and Trotsky becomes chairman. Below 40 it is narrowly lost, Chkheidze stays in the chair, and the Bolsheviks call for new elections to the Soviet.
- Choices: none. The event resolves on arrival.
- Why it matters: If the Bolsheviks win, Bolshevik standing rises by 5, workers' support falls by 2, Soviet democracy falls by 1, and the Chkheidze advisor is removed; if they lose, Bolshevik standing falls by 2, so this is the point where the rise of the Bolsheviks is first visible in the Soviet itself.

### The Menshevik Unity Congress (late September 1917)
- File: `unity_congress`; Who sees it: Mensheviks only, from late September 1917, once. It also brings Broido in as an advisor.
- What happens: The party's unity congress, held in late summer, brought together the Defencists, the Internationalists and a dozen provincial organisations. The Internationalists say they have a third of the delegates, and they demand a change in the party's line on the war and the coalition. Eva Broido has been elected party secretary, and Pavel Axelrod, in poor health, has gone to Western Europe to lobby the socialist parties.
- Choices:
  - Keep the Defencist majority line. Defencist strength +3 and discontent -2, Internationalist strength -2 and discontent +10, Right Defencist discontent -4, membership up by 10 (scaled). The Internationalists issue a statement of dissent but do not leave.
  - Concede to the Internationalists, to stop the defections. Internationalist strength +6 and discontent -10, Defencist strength -4 and discontent +8, Right Defencist strength -2 and discontent +10, war line -1, membership up by 10 (scaled), relations with the Kadets -3, with the Left SRs +2. The new line is conditional support for the coalition, an immediate offer of peace, and a government of the Soviet parties; Potresov's circle protests.
- Why it matters: The choice sets the party's war line and its coalition position going into the Democratic Conference, and the December congress reopens the same question.

### The Democratic Conference (early October 1917)
- File: `democratic_conference`; Who sees it: all parties, from early October 1917, once.
- What happens: Between 27 September and 5 October, 1,500 delegates from the soviets, unions, cooperatives, zemstvos and dumas met at the Alexandrinsky Theatre, convened by the Soviet executive to decide the government's future. The vote was a muddle: for coalition, then against coalition with the Kadets, then for the original formula with the Kadets, a result Kerensky later called a joke. For the Mensheviks, Tsereteli wanted a coalition with the Kadets and Dan a socialist government; for the SRs, the Right SRs wanted a coalition while Chernov's Centre and the Left SRs wanted a socialist-only government, and the conference chose the SR Avksentiev to chair the Pre-Parliament. Trotsky watched from the corridors.
- Choices:
  - Back coalition with the liberals (not the Left SRs). The party is in coalition, and the Kadets return to the cabinet if they had left. Defencist strength +3, Internationalist strength -2 and discontent +8, relations with the Kadets +4, with the partner -2, Bolshevik standing +3.
  - Force a homogeneous socialist government (needs relations with the partner at 55 or more). The Kadets are out, the cabinet is socialist-only and in coalition: relations with the Kadets -10, the threat from the Right +4, Bolshevik standing -3, Soviet democracy +2, Defencist strength -3 and discontent +10, Internationalist strength +3 and discontent -5, Right Defencist discontent +10.
  - Take seats in the Pre-Parliament as a loyal opposition (not the Left SRs). Relations with the Kadets +2, Soviet democracy -1, middle class +1, workers -1, Defencist strength +2, Internationalist discontent +4. The Bolsheviks walk out, loudly.
  - Walk out with the Bolsheviks, and boycott the Pre-Parliament (Left SRs only). Sets the flag that the Left SRs back the Bolsheviks. Relations with the Bolsheviks +6, with the partner -6, Soviet democracy -1, soldier support +2, workers +1, peasant support +1, Internationalist strength +3 and discontent -2, Right Defencist discontent +8.
- Why it matters: The coalition or homogeneous choice is the last decision on the shape of the cabinet before the October Revolution, and the Left SR walkout sets the flag that the Left SRs back the Bolsheviks.

### The October Revolution (early November 1917)
- File: `october`; Who sees it: all parties, from early November 1917, once. It does not appear if the Kornilov Affair ended the game. On arrival the model works out the Bolsheviks' strength: 55 or more and they take power, below 55 the rising fails.
- What happens (if they take power): On the night of 7 November the Bolsheviks' Military Revolutionary Committee seized the bridges, the telegraph, the stations and the Winter Palace; Kerensky had fled to the front, the cruiser Aurora fired a blank shell, and the cabinet was arrested. At Smolny the Second Congress of Soviets opened under Bolshevik control, the Mensheviks and SRs walked out, and Martov's proposal for an all-socialist government passed unanimously and was ignored. Lenin read the Decree on Peace and the Decree on Land, the land decree copied almost word for word from the SR programme.
- What happens (if the rising fails): The Bolsheviks called out the Red Guards and the Kronstadt sailors, but the bridges were raised, loyal units held the Winter Palace, and the railwaymen and militia met the pickets. Lenin has gone back to Finland, Trotsky has been arrested, and the Soviet parties hold the field.
- On arrival, if the Bolsheviks take power: the Bolshevik regime starts, the coalition ends and the Kadets and the socialists leave the cabinet, the advisors Tsereteli, Skobelev, Gvozdev and Chkheidze are removed, the land decree is issued, Bolshevik standing is set to 70, and repression is set to 2.
- Choices (if the Bolsheviks take power):
  - Walk out with the other moderate socialists (not the Left SRs). Defencist strength +2, Internationalist discontent +10, Right Defencist strength +2 and discontent +6, relations with the Bolsheviks -8, with the partner +2, Soviet democracy -3. The party does not stay in the Congress.
  - Stay in the hall and fight for a coalition (not the Left SRs; needs relations with the Left SRs or the Bolsheviks at 35 or more). Relations with the Bolsheviks +5, with the Left SRs +4, with the partner -3, Soviet democracy +1, workers +2, Defencist discontent +10, Right Defencist discontent +14, Internationalist strength +3 and discontent -4. The party stays in the Congress. The Left SRs listen and half the Bolsheviks nod; Lenin does not.
  - Join the Bolsheviks at the Congress and vote for Soviet power (Left SRs only). Sets the flags that the Left SRs back the Bolsheviks and that the party stayed in the Congress. Relations with the Bolsheviks +10, with the partner -6, Soviet democracy +1, soldier support +3, workers +2, peasant support +2, Internationalist strength +4 and discontent -4, Right Defencist discontent +10. Lenin offers the party places in the government.
- Choices (if the rising fails):
  - Leniency: release the arrested and let the Bolsheviks sit in the Soviet. Bolshevik standing -8, relations with the Bolsheviks +8, Soviet democracy +4, the threat from the Right -2, Defencist discontent +6, Internationalist strength +1 and discontent -4. Sets the flag that there is no terror.
  - Suppress the party. Bolshevik standing -12, relations with the Bolsheviks -12, the threat from the Right +5, repression +6, Soviet democracy -4, Defencist strength +2 and discontent -2, Internationalist strength -2 and discontent +10, Right Defencist strength +2 and discontent -4. The party is banned and its leaders imprisoned.
- Why it matters: This is the central fork of 1917: if the Bolsheviks take power the Vikzhel talks, the Seven Commissars and the peasant congress all start from that regime, and if the rising fails the choice between leniency and repression sets the level of repression the Soviet parties carry into the winter.

### The Extraordinary Congress of Peasants' Deputies (early November 1917)
- File: `sr_peasant_congress`; Who sees it: SRs only, from early November 1917, once.
- What happens: On 10 November the Extraordinary Congress of Soviets of Peasants' Deputies opened in Petrograd with 330 delegates, and it sat until the 25th. The text depends on the coup: if the Bolsheviks have taken power, Lenin has addressed the Left SR delegates directly and offered them places in the government and the land decree they themselves drafted; if the rising failed, Lenin has still sent a delegation to win the Left SRs. The executive of the peasants' soviets is the party's, and the Left SRs are asking for the peasant and workers' soviets to merge.
- Choices:
  - Hold the Congress on the party's terms. Peasant support +5, Soviet democracy +2, relations with the Left SRs +2, Right Defencist discontent +8, Internationalist strength +2 and discontent +4; sets the peasant organisation flag. The Congress condemns the coup and demands a government of all the socialists. A third of the delegates, the Left SRs, vote against and hold their own meeting.
  - Allow the merger of the peasant and the workers' soviets. Peasant support +2, workers +1, relations with the Left SRs +8, with the Bolsheviks +5, Soviet democracy -1, Internationalist strength +5 and discontent -8, Right Defencist strength -3 and discontent +14, Defencist discontent +6. The Left SRs take the majority, the Right SRs walk out, and the party's Executive Committee is dissolved.
  - Refuse to attend: the Congress is a Bolshevik trick. Relations with the Bolsheviks -4, with the Left SRs -6, peasant support -2, Internationalist discontent +12, Right Defencist strength +2 and discontent -4. The Congress meets without the party, under the Left SRs, who invite the Bolsheviks.
- Why it matters: Whether the party attends decides who keeps the village soviets, since the merger option hands them to the Left SRs and the Bolsheviks, and the hold option sets the peasant organisation flag.

### The Constituent Assembly Election (late November 1917, or late October if brought forward)
- File: `constituent_assembly_election`; Who sees it: all parties, from late November 1917, or from late October 1917 if the election has been brought forward (by the Convene the Constituent Assembly card, which changes the subtitle and the text).
- What happens: The Constituent Assembly was postponed by the Provisional Government and is now held in the middle of the revolution, over several weeks in 70 electoral districts, with about 44 million people voting in what the text calls the freest election in Russia's history. The villages will favour the SRs, the capitals and the northern front the Bolsheviks, and the regions the national parties; the Mensheviks' votes are in the towns, among the railwaymen and in Georgia. Each party must decide whether to run alone.
- Choices (Mensheviks and SRs):
  - Run our own lists. No bonus.
  - Run a joint list with the partner (needs alliance level 2, or relations with the partner at 60 or more). Relations with the partner +3, Internationalist discontent +2. Result factor: Mensheviks 1.7 (if you are the Mensheviks); SRs 1.04 and Mensheviks 1.5 (if you are the SRs).
  - Run a united list of all the moderate socialists (needs alliance level 2 with a link to the Left SRs, or alliance level 3). Relations with the partner +5, with the Left SRs +3, Internationalist discontent +3, Right Defencist discontent +3. Result factor: Mensheviks 2.4 and SRs 1.05 (if you are the Mensheviks); SRs 1.08 and Mensheviks 2.0 (if you are the SRs).
- Choices (Left SRs only):
  - Stay on the SR lists and fight for places on them. Relations with the partner +2. No bonus.
  - Run separate Left SR lists. Sets the Left SR split flag, relations with the partner -8, Defencist strength +2 and discontent -2. Result factor 1.3 for the Left SRs.
- Results (all): the seat totals come from the model's results figure for 703 seats, not from anything in the file. The text tells the SRs they have won more votes than any party in Russian history, tells the Left SRs their share of the vote, and says that the moderate socialists and national parties have a clear majority if together they reach 55 or more, otherwise the Assembly will be quarrelsome. If the election was brought forward, Bolshevik standing falls by 10 and Soviet democracy rises by 2.
- Why it matters: The list choice decides the party's share of the seats, and the Left SRs' separate lists are the way the Left SR split becomes formal at the election.

### The Left SRs Are Expelled (late November 1917)
- File: `lsr_split_nov` (title "The Left SRs Are Expelled"); Who sees it: Left SRs only, from late November 1917, once. It appears only if the Left SRs have not already formed their own party and have not been kept in the SR party.
- What happens: In the second half of November the SR Central Committee expelled the Left SRs for forming a separate organisation. The Left SRs called a founding congress for early December, with 116 delegates from 99 organisations, and nearly all of their voters are in the Baltic Fleet, the Petrograd garrison and many villages. If the Bolsheviks have taken power, Lenin has let it be known that there are seats for them in his government.
- Choices:
  - Hold the founding congress in December. Sets the separate party flag; relations with the partner -8, peasant and soldier support +2 each, Defencist strength +2 and discontent -2, Internationalist discontent -3. The congress on 2 December elects Spiridonova, Kamkov and Natanson.
  - Seek reconciliation (needs relations with the partner at 55 or more). Sets the flag that the Left SRs were kept. Relations with the partner +6, Internationalist discontent +12, Right Defencist strength +3 and discontent -4, peasant support -2. The Central Committee withdraws the expulsion, on a pledge about the Assembly and the land.
- Why it matters: The two choices set the split flag or the kept flag, and the split flag is what allows the Seven Commissars offer to appear in December.

### The Vikzhel Talks (late November 1917)
- File: `vikzhel`; Who sees it: all parties, only if the Bolsheviks have taken power, from late November 1917, once.
- What happens: On 11 November the executive of the railway union, Vikzhel, threatened a general rail strike unless the socialist parties formed a joint government. The Mensheviks, SRs, Left SRs, Bolsheviks and Vikzhel sat down together, and within a week a draft agreed a government of all the socialist parties without Lenin and Trotsky. For the SR player, Chernov is proposed as head. The Menshevik Central Committee split 12 to 11 over whether to sign, and on 17 November Kamenev, Rykov and others resigned from the Bolshevik Central Committee in protest.
- The deal score: the event computes the score from relations with the Bolsheviks (0.4 a point), with the Left SRs (0.2), with the partner (0.15), 10 points if the party stayed in the Congress in October, 5 points for an alliance with the Bolsheviks, 0.08 a point of Soviet democracy, 3 points for an insight flag (gained from Sukhanov's or Proshian's advisor action), and 4 points for each step of bloc lean. Signing needs a score of 68 or more, and the text shows the score.
- Choices:
  - Refuse the deal and walk out of the talks. Relations with the Bolsheviks -5, with the Left SRs -3, Internationalist discontent +10, Defencist strength +2. The Bolsheviks, having won in Moscow, have no need to talk.
  - Sign the draft before the Bolsheviks win Moscow. If the score reaches 68 the deal stands: the Bolsheviks leave power, Lenin and Trotsky are out, a homogeneous socialist government takes the cabinet with the Kadets out and the Congress of Soviets as the supreme authority, Bolshevik standing is set to 40 and repression to 0, Soviet democracy +8, relations with the Bolsheviks +8, with the Left SRs +6, with the partner +4, Internationalist strength +2 and discontent -4, Defencist strength -3 and discontent +6, Right Defencist discontent +12. The achievement "Vikzhel" is awarded. For a Left SR player, four seats in the government are added, with three advisers. If the score is below 68 the signature is worth nothing: relations with the Bolsheviks -4, Soviet democracy -2, Internationalist discontent +4, Defencist discontent +6, and the Bolsheviks reply that the Kremlin has fallen and that Lenin will agree to no deal that excludes him.
- Why it matters: It is the only event that can end the Bolshevik regime from the socialist side, and whether it can do so depends on the standing the party has built up earlier, including whether it stayed in the Congress in October.

### Seven Commissars (early December 1917)
- File: `lsr_government` (title "Seven Commissars"); Who sees it: Left SRs only, from early December 1917, once. It appears only if the Bolsheviks have taken power and the Left SRs have formed their own party.
- What happens: The Bolsheviks govern alone, in the name of the Soviets, and they have no peasants. Lenin offers the Left SRs, who have the peasants, seven People's Commissariats (among them Justice, Agriculture and Posts and Telegraphs) and seats on the Council of People's Commissars and on the Cheka's board. The other socialist parties call it a prop for a dictatorship, and the Left SRs say it is the only way of making the dictatorship share power and defending the peasants' land.
- Choices:
  - Enter the government (needs relations with the Bolsheviks at 30 or more). Seven seats: Steinberg at Justice, Kolegaev at Agriculture, Proshian at Posts and Telegraphs, and four others, with three advisers added. Relations with the Bolsheviks +8, with the partner -4, Soviet democracy +1, land pressure -4, peasant support +3, soldier support +1, Internationalist strength +3 and discontent -3, Right Defencist discontent +10. The only coalition in Russia, in the text, with the peasants and workers in it.
  - Stay outside, as a bridge to the other socialists. Relations with the partner +6, with the Left SRs +6, with the Bolsheviks -3, middle class +1, peasant support +1, Right Defencist strength +2 and discontent -3, Internationalist discontent +8.
- Why it matters: Entering is the Left SRs' main route into a government under the Bolsheviks, and it sets the Left SR government flag and seats that the rest of the Left SR game is built on.

### The Extraordinary Party Congress (early December 1917)
- File: `party_congress`; Who sees it: Mensheviks only, from early December 1917, once. On arrival it also sets the Left SR split flag, so the Left SRs are recorded as a separate party whatever happened in the SR party.
- What happens: In the first half of December the party met in Petrograd in an extraordinary congress to decide its attitude to the Bolshevik takeover: a historical development to be criticised but not fought, or a conspiracy and betrayal of the revolution to be resisted by every means. Martov's Internationalists and the provincial delegates argue for the first, and Potresov, Tsereteli's circle and the Right Defencists for the second. If the Bolsheviks are out of power, the question is instead the party's attitude to the Soviet parties that govern, and the Left SRs hold their own founding congress on the same days.
- Choices:
  - Adopt Martov's line. Internationalist strength +14 and discontent -12, Defencist strength -10 and discontent +12, Right Defencist strength -4 and discontent +15, war line -2, relations with the Bolsheviks +3, with the Left SRs +3; sets the flag for Martov's line. The line wins narrowly, and the Defencists resign from the Central Committee.
  - Adopt the Defencist line. Defencist strength +8 and discontent -6, Right Defencist strength +4 and discontent -6, Internationalist strength -8 and discontent +20, war line +1, membership down 8 (scaled), relations with the Bolsheviks -4, with the Kadets +3. Several Internationalist circles leave the party.
  - Try to hold both sides together. Every current gains 4 discontent and the flag for Martov's line is cleared. A compromise resolution is adopted; nobody is satisfied, but nobody resigns.
- Why it matters: It fixes the party's line on the Bolshevik takeover and its size going into 1918, and the choice of line is the last big policy decision the Mensheviks face in 1917.

### The Left SRs Break Away (early December 1917)
- File: `sr_left_split` (title "The Left SRs Break Away"); Who sees it: SRs only, from early December 1917, once.
- What happens: In November the Left SRs declared that the party's Central Committee no longer spoke for the peasants, and they set out to form a party of their own. The Central Committee expelled them for forming a separate organisation. Their founding congress, called for early December, had 116 delegates from 99 organisations. If the Bolsheviks have taken power, Lenin has let it be known that there are seats in his government for them.
- Choices:
  - Reconcile with the Left SRs and keep the party whole (needs Internationalist discontent below 45 and relations with the Left SRs at 55 or more). Sets the flag that the Left SRs were kept, and clears the split flag. Internationalist discontent -15, relations with the Left SRs +6, Right Defencist discontent +8, Defencist discontent +3. A party conference gives the Left SRs places on the Central Committee, a pledge to oppose the Treaty with Germany and the Bolshevik repression, and a promise of a Peasant Congress.
  - Let them go. Clears the flag that the Left SRs were kept, and sets the split flag. The Internationalist strength falls to 30 per cent of its value, its discontent is reset to zero, and the faction is renamed the Left Centre for the rest of the game. Relations with the Left SRs -10, peasant support -4, soldier support -3, Right Defencist discontent -6, membership down 20 (scaled). The Left SRs take the Baltic Fleet, the Petrograd garrison and part of the villages with them.
- Why it matters: Letting them go shrinks the party's left to a fraction of its former weight and renames its Internationalist current the Left Centre, while reconciling keeps the Left SRs in the party at the cost of a more united and less radical centre.

---

## The events, 1918-1921

After October 1917 the game runs on one of two timelines. Each event below says which.

**The Bolshevik regime.** The Bolsheviks rule alone from December 1917 onward. The Cheka is created (December 1917), the Constituent Assembly is dispersed (January 1918), the Treaty of Brest-Litovsk is signed (March 1918), the spring soviet elections are annulled (April 1918), Komuch is formed on the Volga and the Left SRs attempt a rising in Moscow (June and July 1918), and Lenin is shot and the Red Terror declared (September 1918). Kolchak's coup (November 1918) and the Civil War follow, with Denikin at Orel (October 1919) and Wrangel's evacuation of Crimea (November 1920). After the war come the Eighth Congress of Soviets (December 1920), the Kronstadt revolt and the Georgia crisis (early 1921), the Tenth Congress and the New Economic Policy (March 1921), and the arrests of 1921 (August). The player's party moves between legal, tolerated, expelled and banned, and its membership, its relations with the Bolsheviks and its currents decide how long it survives.

**The alternate timeline.** The Constituent Assembly meets in January 1918 and governs; it passes the land law. The all-socialist government formed with the Bolsheviks (the Vikzhel deal of November 1917) is tested in March 1918: it either holds, or it collapses and hands the Bolsheviks sole power, which switches the game to the Bolshevik regime. A second Bolshevik attempt can come from June 1918 (up to three times), and it can also succeed and switch the regime. A generals' plot can come from September 1918 (up to twice); if the Right's threat is high enough, it succeeds and ends the game. The Armistice in the West (November 1918), the constitution (January 1919) and the recovery or struggle of the republic (January 1920) follow. Meanwhile the three opposition camps (Kadets, generals and the Right, Bolsheviks) escalate from sanctions to revolt.

### The Cheka (December 1917)
- File: `cheka`; Who sees: Mensheviks and SRs (not the Left SRs); only under the Bolshevik regime, from the second half of December 1917; once.
- What happens: Sovnarkom has created the All-Russian Extraordinary Commission, under Dzerzhinsky, with the power to arrest, investigate and decide. The Left SRs have asked for seats on its board. The party must decide whether to campaign against it, ignore it or denounce it. On arrival, repression rises by 6 before any choice is made.
- Choices:
  - *Campaign with the Left SR Commissar of Justice, Steinberg.* No requirement. Relations with the Left SRs rise, repression falls by 2, soviet democracy rises by 1, and the defencist current gains a little strength and loses some discontent. Sets the steinberg_line flag.
  - *Say nothing.* No requirement. The internationalist current becomes more restless.
  - *Denounce it.* No requirement. Relations with the Bolsheviks fall by 3 and soviet democracy rises by 1. Middle and workers support rise, the Right Defencists gain strength and lose discontent, and the internationalists become calmer. The party's press is banned for a week.
- Why it matters: it adds repression at the start of the Bolshevik regime and sets steinberg_line, the record of the campaign with the Left SR commissar.

### Seats on the Cheka's Board (January 1918)
- File: `lsr_cheka`; Who sees: Left SRs only; under the Bolshevik regime, from January 1918, while the Left SRs are still in the government; once.
- What happens: the Cheka now has a board, and the Left SRs are offered four seats and the deputy chairmanship for Aleksandrovich. The Bolsheviks call it the Left SRs' right as coalition partners; Steinberg calls it a trap.
- Choices:
  - *Take the four seats on the board.* No requirement. Relations with the Bolsheviks rise by 3 and repression by 2. The pro-coalition current becomes more restless and the pro-Bolshevik Left SRs gain strength. Sets cheka_seats and aleksandrovich_advisor. Members can see the files, vote on sentences and resign, but are seen by the public as the people who sign the lists.
  - *Refuse to sit with the Cheka.* No requirement. Relations with the Bolsheviks fall by 3 and soviet democracy rises by 1. Middle support rises, the Right current gains strength and loses discontent, and the internationalists become more restless. Sets cheka_seats to 0.
- Why it matters: cheka_seats and aleksandrovich_advisor are set here. Aleksandrovich's advisor role is removed when the July 1918 rising is chosen.

### The Constituent Assembly Is Dispersed (January 1918)
- File: `assembly_dispersed`; Who sees: all parties, under the Bolshevik regime, from January 1918, if the Assembly was elected and has not yet met; once. Some options are for Mensheviks and SRs only, others for the Left SRs only.
- What happens: on 18 January the Assembly met, with Chernov as chairman, and rejected the Bolshevik declaration of rights. The Bolsheviks and Left SRs walked out. At four in the morning the guard was withdrawn ("the guard is tired") and the deputies went home. The Assembly is dissolved by decree, and demonstrations in its support were fired on, killing or wounding some dozens. On arrival the Assembly is marked as not surviving. The text varies: the moderate socialists had the majority, or, for an SR player, it was the party's own Assembly.
- Choices:
  - *Protest, and turn to the soviets.* Mensheviks and SRs. Soviet democracy and Bolshevik relations fall by 3. Workers support rises by 2, the internationalists gain strength and lose discontent, and the defencists become more restless.
  - *Try to reconvene the Assembly in the provinces.* Mensheviks and SRs. Costs 1 resource and requires at least 1. Repression rises by 6, Bolshevik relations fall by 8 and soviet democracy by 2. Peasants, middle and workers support rise; the Right Defencists gain strength and lose discontent; the internationalists become more restless. Sets reconvene_assembly and adds 0.5 to White aid. The delegates are unlikely to be allowed to meet.
  - *Defend the dispersal as the will of the soviets.* Left SRs only. Relations with the Bolsheviks rise by 6 and the bloc ally's relations fall by 8; soviet democracy falls by 3. Soldiers and workers gain and peasants lose; the internationalists gain strength; the Right current becomes much more restless. The SR party calls it treason.
  - *Protest and demand new elections on lists that show the SR split.* Left SRs only. Relations with the Bolsheviks fall by 3 and the ally's rise by 4. Peasants and middle support rise slightly. The internationalists become more restless, and the Right current gains strength and loses discontent.
- Why it matters: it sets assembly_survives to 0 (the alternate path is closed) and records whether the Assembly was reconvened in the provinces.

### The Constituent Assembly Meets (January 1918)
- File: `assembly_meets`; Who sees: all parties, under the alternate timeline (no Bolshevik regime), from January 1918, if the Assembly was elected and nothing has yet set its survival; once. No choices.
- What happens: the Assembly meets on 18 January with Chernov as chairman, proclaims a democratic republic (form to be settled by a constitution), and within a night passes the land law: private land ownership is abolished and the land goes to the peasants, allocated by elected committees. The Bolsheviks sit in the hall as members of the all-socialist government if the VIKZHEL deal was made; otherwise on the left, in the minority. The Assembly sits for thirteen hours and ratifies the government.
- On arrival: the Assembly is marked as surviving and as having met. The land decree is adopted. Soviet democracy rises by 6 and the Bolsheviks lose 4; land pressure falls by 15 and war weariness by 3. If a land law draft existed, land pressure falls by a further 10, soviet democracy rises by 2, and the land is socialised. Peasants, middle and workers support all rise. An achievement is unlocked.
- Why it matters: assembly_survives and assembly_met are the flags that gate the Bolshevik coup calculation, the constitution and the Assembly dispersal, which can no longer fire once the Assembly has met.

### The New Calendar (February 1918)
- File: `new_calendar`; Who sees: all parties, either regime, from February 1918, while turns still last two weeks; once. No choices.
- What happens: Russia adopts the Gregorian calendar; the day after 31 January is 14 February. The text names the Soviet government or the Assembly's government as the decree's author, depending on the regime.
- On arrival: turns now last a month instead of two weeks.
- Why it matters: from this point on, every timer (cooldowns of 6 to 18 turns in the opposition and plot events) counts in months.

### Brest-Litovsk (March 1918)
- File: `brest`; Who sees: all parties, under the Bolshevik regime, from March 1918, while still at war and before any late coup; once.
- What happens: on 3 March the Soviet government signed the Treaty of Brest-Litovsk: Russia loses Poland, the Baltic provinces, Ukraine, a quarter of her population and a third of her industry. Martov and Kamkov spoke against ratification. The Congress of Soviets ratifies it by 784 votes to 261. On arrival the war with Germany ends, war weariness falls by 20, and land pressure falls by 5. A fault note may follow. For non-Left SR players, the text says the Left SRs left the government on 19 March; for Left SR players, the party must decide where it stands.
- Choices:
  - *Martov speaks against ratification.* Mensheviks only. Relations with the Left SRs rise by 6 and with the Bolsheviks fall by 2; the internationalists gain strength and lose discontent; the Right Defencists become more restless; soldiers and middle support rise.
  - *Propose a joint defence programme with the Left SRs.* Mensheviks only. Requires relations with the Left SRs of at least 45. Left SR relations rise by 12 and Bolshevik relations fall by 3. An "anti-Brest front" is formed on paper, with a people's militia and a refusal to ratify. Sets anti_brest_front and makes the Left SRs an ally.
  - *Accept the treaty as a necessity.* Mensheviks and SRs. Bolshevik relations rise by 3 and Left SR relations fall by 3; the internationalists become much more restless. (The text says the Left SRs left the government; this option does not change the Left SR seats.)
  - *Vote against ratification with the Left SRs.* SRs only. Left SR relations rise by 6 and Bolshevik relations fall by 3; soldiers and middle support rise; the internationalists gain strength and calm down, and the Right current becomes more restless.
  - *Abstain, and say the peasants have not been asked.* SRs only. Bolshevik relations rise by 1; the internationalists become much more restless; peasants support rises slightly.
  - *Leave the government over the treaty.* Left SRs in government only. The Left SRs leave the government and lose their seats (lsr_in_gov and lsr_seats are cleared). Bolshevik relations fall by 10. Soldiers, peasants and middle support rise, the defencists gain strength and calm down, the Right current also gains strength, and the internationalists become much more restless.
  - *Stay in the government and fight the treaty from inside.* Left SRs in government only. This is a roll. The chance rises with Bolshevik relations, soviet democracy, bloc lean and the anti-Brest front, and is at least 5% and at most 90%. It also needs dissent below 0.45. If it succeeds, the party keeps its seven commissars: Bolshevik relations and soviet democracy rise a little, soldiers and peasants gain, and the Right current becomes more restless. If it fails, the party leaves the government: Bolshevik relations fall by 6 and soviet democracy by 2.
  - *Vote for ratification.* Left SRs only. Bolshevik relations rise by 6; peasants and soldiers support fall by 3; the internationalists gain strength; the defencists lose strength and gain discontent; the Right current becomes more restless. If the party is in government, it keeps the seven commissars.
  - *Form an anti-Brest front with the Mensheviks.* Left SRs only. Requires Left SR relations of at least 40. Left SR relations rise by 10 and Bolshevik relations fall by 3. Sets the anti-Brest front and the ally link to the Mensheviks; soldiers, peasants and middle support rise. The treaty passes anyway.
  - *Vote against the treaty, from outside the government.* Left SRs not in government only. Bolshevik relations fall by 4; soldiers and peasants gain; the internationalists become more restless. The treaty passes.
- Why it matters: it ends the war in the Bolshevik timeline (at_war is set to 0), and it sets anti_brest_front and seven_commissars; the Left SR stay vote reads the anti-Brest front.

### The Factory Representatives (March 1918)
- File: `factory_reps`; Who sees: Mensheviks only, under the Bolshevik regime, from March 1918; once.
- What happens: on 13 March the first assembly of authorised factory representatives met in Petrograd: workers' delegates elected at the big factories, independent of the soviets and the unions. They passed resolutions on bread, unemployment and the Cheka. The Bolsheviks were a minority. The movement spread to Moscow and other cities; the text says it will be dispersed in June.
- Choices:
  - *Endorse the assemblies.* No requirement. Workers support rises by 4; soviet democracy and repression each rise by 1; the unions' current gains strength and loses discontent. Sets endorsed_reps. Some party members are elected delegates and several are arrested within the month.
  - *Leave them to the workers.* No requirement. Workers support falls by 1; the unions' current becomes more restless.
- Why it matters: sets endorsed_reps, a record of the party's position toward the workers' movement.

### War or Peace? (March 1918)
- File: `peace_or_war`; Who sees: all parties, under the alternate timeline, while at war, from March 1918; once. No choices: the outcome is decided automatically.
- What happens: the scene chooses one of three outcomes. Peace is reached if the Stockholm track has reached 3 or the back-channel feelers are open, or if war weariness is 55 or less. If peace is not reached and the army has collapsed (war weariness at least 80 and army discipline below 30), the front collapses. Otherwise the war goes on.
- Outcomes:
  - *An armistice.* Germany, short of men and facing revolution at home, agrees to an armistice on the Eastern Front with no annexations or indemnities. The war ends. War weariness falls by 25, the Bolsheviks lose 6 and soviet democracy rises by 2; the Right's threat falls by 3; soldiers and workers gain; the internationalists gain strength and lose discontent.
  - *The front collapses.* The government signs a harsh peace: Russia loses Poland, the Baltic provinces and much of Ukraine. The war ends, but the government is blamed for the peace and the army for the defeat. War weariness falls by 10, the Right's threat rises by 10, the Bolsheviks gain 8, soviet democracy falls by 2 and Kadet relations fall by 4. Soldiers and middle support fall; the defencists lose strength and gain discontent.
  - *The war goes on.* War weariness and Bolshevik strength rise by 4, bread falls by 2, and soldiers support falls slightly. The Bolsheviks and the Left demand immediate peace.
- Why it matters: it decides whether the Eastern war ends in the alternate timeline, and at_war is read by the armistice event that follows.

### The All-Socialist Government Is Tested (March 1918)
- File: `vikzhel_check`; Who sees: all parties, under the alternate timeline, when the VIKZHEL deal has been made and the test has not yet happened; once. No choices: the test is decided automatically.
- What happens: the first test of the all-socialist government comes over peace with Germany and the grain requisitions. Lenin demands to be chairman of the Council of Ministers; the other parties say they will walk out.
- Outcomes:
  - *The coalition holds.* The test requires Bolshevik relations of at least 50, Left SR relations of at least 45, soviet democracy of at least 50 and dissent below 0.3. Kamenev sides with the majority and the parties keep sitting together.
  - *The coalition collapses.* If any of the test is failed, Lenin withdraws the Bolshevik ministers and the Red Guards take the ministries that night. The VIKZHEL deal is cancelled, the Bolsheviks rule alone (bol_regime is set to 1), the Assembly is marked as not surviving, the Bolsheviks are set to 70, repression to 4, soviet democracy falls by 12 and Bolshevik relations by 10.
- Why it matters: the collapse switches the game into the Bolshevik regime, after which the Bolshevik-regime events (including Brest-Litovsk) can fire. The coalition holding keeps the alternate timeline going.

### The Spring Soviet Elections (April 1918)
- File: `spring_elections`; Who sees: all parties, under the Bolshevik regime, from April 1918; once.
- What happens: in the spring soviets across Russia held new elections. The opposition (Mensheviks, SRs and allies) won majorities in some of the 30 provincial capitals (the number is calculated from the vote, and a parliament chart shows the result). The Bolsheviks then dispersed the new soviets by force on the ground that the "mood of the masses had been misread".
- Choices:
  - *Accept the annulment, and protest.* No requirement. Soviet democracy and Bolshevik relations fall by 3 and repression rises by 2. Workers and railway support rise; the internationalists gain strength and lose discontent. If the opposition won at least 19 capitals, the spring result is marked as a win.
  - *Offer to renounce armed struggle in return for the results being honoured.* No requirement, but the outcome depends on the numbers. The offer is honoured if soviet democracy is at least 40 (less 4 for each bloc-lean point), Bolshevik relations at least 30, and the opposition won at least 10 capitals. If honoured, soviet democracy rises by 5, repression falls by 3, Bolshevik relations rise by 4, and workers and railway support rise. If not honoured, soviet democracy and Bolshevik relations fall by 2. In both cases the Right Defencists become more restless and the internationalists are calmer. The party is marked as having renounced armed struggle.
- Why it matters: if the results were honoured, the party's later expulsion can be avoided (The Motion to Expel checks this). The 19-capital threshold is also recorded.

### The Czechoslovak Revolt and Komuch (late May 1918)
- File: `komuch`; Who sees: Mensheviks only, under the Bolshevik regime, from the second half of May 1918; once.
- What happens: a Czechoslovak Legion of about 40,000 men clashes with the Soviets along the Trans-Siberian railway. On 8 June, in Samara, SR members of the dissolved Assembly, under Volsky, proclaim the Committee of Members of the Constituent Assembly, Komuch, under the Legion's protection, and call up an army. Ivan Maisky, a Menshevik Internationalist, has taken a ministry there. The Volga Mensheviks are asked to join.
- Choices:
  - *"Neither side." Expel Maisky.* No requirement. The right-wing defencist current becomes more restless; relations with the ally fall by 4 and Bolshevik relations rise by 2; the internationalists are calmer. Maisky is expelled, and the party marks itself as neither side. Activist strength is set to 4.
  - *Join Komuch.* No requirement. The party is marked as armed. The Bolsheviks take this as a declaration of war and treat party members in Moscow as hostages. Relations with the ally rise by 10 and Bolshevik relations fall by 15; repression rises by 8 and soviet democracy falls by 3. Peasants and middle support rise and workers fall. The Right current gains strength and loses discontent; the internationalists lose strength and become far more restless; the defencists gain discontent. Activist strength is set to 12. Members are lost in a large number, and legality falls by 1 if it is above 1. White aid rises by 2.
  - *Send a delegation with a labour programme.* No requirement. Relations with the ally rise by 3 and Bolshevik relations fall by 6; repression rises by 3. Peasants and workers gain. The internationalists become more restless. The delegation is led by Maisky's friends with a programme of the eight-hour day, union freedoms and no return of the estates. Activist strength is set to 6 and White aid rises by 0.5.
  - *Persuade the SR leaders not to join Komuch.* Requires an alliance with the SRs at level 2 or more and relations with them of at least 65. Dan and Abramovich argue their case to the SR Central Committee, which declines to recognise Komuch as the party's government. Relations with the ally rise by 6 and Bolshevik relations by 2; White aid falls by 1 (not below zero); the Right Defencists become more restless, and the internationalists gain strength and calm down. The fault warning is cleared. Komuch remains a small affair.
- Why it matters: the choice decides whether the party is armed and whether it is at war with the Bolsheviks (armed_struggle) and records the activist strength. The fault notes that follow are tied to these choices.

### Komuch (late May 1918)
- File: `sr_komuch`; Who sees: SRs only, under the Bolshevik regime, from the second half of May 1918; once.
- What happens: the same Czechoslovak revolt and the same 8 June proclamation at Samara, now under the party's own Vladimir Volsky, who becomes the party's adviser. Komuch flies the red flag, has a programme (the Assembly, the land to the peasants, the eight-hour day), and has foreign bayonets.
- Choices:
  - *Join Komuch, and raise an army.* No requirement. The party is marked as armed and Komuch as alive. Bolshevik relations fall by 15, repression rises by 8, soviet democracy falls by 3. Peasants and middle support rise, workers fall; the Right SRs gain strength and lose discontent; the internationalists become much more restless; the bund (Ufa) current becomes more restless. Members are lost in a large number. White aid rises by 2. The Bolsheviks treat the party's Moscow members as hostages.
  - *Join Komuch, but only with the Mensheviks' guarantees for the workers.* Requires relations with the Mensheviks of at least 55 and an alliance at level 1 or more. Komuch publishes a labour programme drafted by the Mensheviks (eight-hour day, union freedoms, no return of the estates). The party is marked as armed and Komuch as alive, with guarantees. Relations with the Mensheviks rise by 6 and Bolshevik relations fall by 10; repression rises by 4. Peasants, workers and middle support rise; the Right SRs gain strength and calm down, and the internationalists become more restless. Members are lost, fewer than in the first option. White aid rises by 1.
  - *Refuse: there will be no armed struggle against the soviets.* No requirement. The party is marked as not armed. The bund current gains strength and loses discontent; Bolshevik relations rise by 2; the Right SRs become much more restless; the internationalists are calmer. Middle support falls. Volsky goes to Samara regardless, and the Right SRs are furious.
- Why it matters: the join or refuse choice sets armed_struggle and komuch_alive. The Ufa conference (September 1918) and the Kolchak coup (November 1918) read these flags.

### A Second Bolshevik Attempt (June 1918)
- File: `alt_second_attempt`; Who sees: all parties, under the alternate timeline, from June 1918, if the VIKZHEL coalition did not happen and fewer than three attempts have been made, and the cooldown is over. Repeatable, up to three times.
- What happens: the hunger, the war weariness and the factory discontent give the Bolsheviks a new opening. The scene calculates the Bolsheviks' strength from their current standing and grievances, less a penalty if the Assembly survives, the land decree or the absence of terror. No choice is made: the attempt is decided by the numbers.
- Outcomes:
  - *The Bolsheviks take power* (if their strength reaches 55). In a night of arrests, the Red Guards seize the government and the Soviet executive, and the Assembly is dissolved. The game switches to the Bolshevik regime, the Bolsheviks are set to 70, repression to 4, the land decree is adopted and soviet democracy falls by 15. If the war is still on, it ends, war weariness falls by 15, and a new government asks Germany for peace on any terms (if the peace flag is set).
  - *The Bolsheviks fail.* Their strength falls by 6 and soviet democracy rises by 1. The leaders are arrested or abroad. The cooldown is 14 turns.
- Why it matters: this is the alternate timeline's main path to losing democracy. A successful attempt also sets late_coup, which closes the later Brest-Litovsk event.

### Independent Georgia (June 1918)
- File: `georgia`; Who sees: Mensheviks only, from June 1918; once. (The text states that the republic was declared on 26 May.)
- What happens: the Georgian National Council declares Georgia an independent republic. The Menshevik party of Georgia, led by Zhordania, forms the government, the only Menshevik government in the world. It has peasant support from its land reform and worker support from its Menshevik pedigree. Germany and then Britain protect it, and the Bolsheviks have signed a treaty with it, for the moment. The Georgian leaders are the party's best voters and leaders, and they now have concerns of their own.
- On arrival: Zhordania becomes the party's adviser and Georgia is marked as free. The defencist current loses strength.
- Choices:
  - *Treat Georgia as the model and refuge of Russian social democracy.* No requirement. The party gains a resource. Nations and workers support rise, and soviet democracy rises by 1 while Bolshevik relations fall by 1. The defencist current gains strength and loses discontent. Georgia support rises by 2, opening the refuge to exiles and writers.
  - *Keep Georgia at a distance; our fight is in Russia.* No requirement. The defencist current becomes more restless; Bolshevik relations rise by 1. Georgia support is unchanged.
- Why it matters: the Georgia support total is checked in February 1921 (Georgia, the Strikes and Kronstadt). Georgia survives that test only if the support total is at least 2 and the foreign pressure total is at least 4.

### The Motion to Expel (June 1918)
- File: `expelled`; Who sees: Mensheviks and SRs (not the Left SRs), under the Bolshevik regime, from June 1918; once. The outcome is decided automatically; the choice comes only if the motion passes.
- What happens: on 14 June the Central Executive Committee, on Sverdlov's motion, expels the Mensheviks (the "Menshevik-Defencists") from its membership, on the ground that they were linked to the Volga counter-revolution. For Mensheviks, the decision is extended to the Right SRs; for SRs, to the soviets as a whole in July. The press is closed in a dozen cities and deputies are expelled from many soviets. The party is not banned, but it is not legal either.
- Outcome:
  - *The motion passes.* This happens unless the alliance with the Bolsheviks is at level 2 or more, or soviet democracy is at least 55 and the spring results were honoured. If the motion passes, legality falls to 1 (expelled from the soviets), repression rises by 4 and soviet democracy falls by 4. The party then chooses one of three responses:
    - *Protest, and stay within the law.* Bolshevik relations fall by 3, workers support rises by 2, and the internationalists gain a little strength and calm down.
    - *Go underground.* A large share of members is lost, support in every group is halved, repression falls by 3, a resource is gained. The internationalists and the Right Defencists both become more restless. Sets underground.
    - *Pledge non-violence in return for readmission.* Requires that the party has not taken up armed struggle. Bolshevik relations rise by 4 and repression falls by 1; the Right Defencists become much more restless; the defencists gain discontent. Sets readmission_hope.
  - *The motion is withdrawn* (when the alliance with the Bolsheviks or the spring results protect the party). The Left SRs, the moderate Bolsheviks and the spring elections oppose it. The party remains legal in the soviets.
- Why it matters: expelled is read by the later readmission event (Readmitted to the Soviets), and legality set here decides whether the party is exiled in the endgame.

### The German Ambassador (July 1918)
- File: `lsr_july`; Who sees: Left SRs only, under the Bolshevik regime, from July 1918 (the Left SR Central Committee had ordered the attack in June); once.
- What happens: the Central Committee of the Left SRs has ordered the murder of Count Mirbach, the German ambassador, to break the Brest treaty and restart the war. On 6 July two Left SRs from the Cheka walk into the embassy with a forged warrant and shoot him. The party's detachments seize the telegraph office and a proclamation says the Soviet government has been overthrown. Latvian riflemen put the rising down within a day. Hundreds of Left SRs are arrested, and Aleksandrovich is shot. Its Left SR advisers are removed.
- Choices:
  - *Carry out the Central Committee's order.* No requirement. The party leaves the government and loses its seats; legality falls to 1 (expelled from the soviets); members fall by 35%. Bolshevik relations fall by 20 and repression rises by 10; soviet democracy falls by 5; peasants and soldiers lose support. The defencists become more restless and the internationalists become much more restless. The rising is a fixed outcome: it is crushed within a day.
  - *Call it off.* Requires dissent below 0.35. Spiridonova and Natanson carry a narrow majority in the Central Committee; the ambassador lives. Bolshevik relations rise by 4, repression falls by 2, soviet democracy rises by 1. The internationalists become much more restless; the defencists lose strength and become more restless, and peasant support falls slightly. The party survives.
  - *Protest the treaty in the Congress of Soviets instead.* Requires Bolshevik relations of at least 40 and soviet democracy of at least 40. The party's delegates speak against the treaty and the Committees of the Poor for three hours before the Fifth Congress. Bolshevik relations and soviet democracy rise by 2, repression falls by 1; peasants and soldiers gain; the defencists gain strength; the internationalists become more restless. The party survives.
- Why it matters: lsr_rising records whether the rising happened (a later Left SR event on the Oct 1918 congress and the 1921 villages deal read it), and lsr_survives records the two non-violent routes. The Left SR advisers are cleared in the rising branch.

### The Left SR Uprising (July 1918)
- File: `lsr_uprising`; Who sees: Mensheviks and SRs (not the Left SRs), under the Bolshevik regime, from July 1918; once. Three options, one of which needs a condition.
- What happens: the Left SRs assassinate the German ambassador on 6 July and seize the telegraph office; the rising is put down within a day by Latvian riflemen, with hundreds of Left SRs arrested. The Left SRs, who had left the government over Brest-Litovsk and grain requisitions, were the last party that had shared power with the Bolsheviks.
- Choices:
  - *Take no part.* No requirement. Left SR relations fall by 5; Bolshevik relations rise by 1; the right-wing defencists become calmer. The Left SRs are left to their fate.
  - *Defend the Left SRs as repressed socialists.* No requirement. Left SR relations rise by 8, Bolshevik relations fall by 4, repression rises by 3 and soviet democracy rises by 1. Peasants and workers gain; the internationalists are calmer and the right-wing current more restless. The party's press is closed for a week.
  - *Warn the Left SRs against the rising, before it happens.* Requires Left SR relations of at least 55 and an alliance with them at level 1 or more. The party's contacts talk the Left SRs out of it. Left SR relations rise by 6, Bolshevik relations by 3, soviet democracy by 3 and repression falls by 2. Peasants and workers gain. Sets lsr_uprising_averted, so the rising does not happen in this timeline.
- Why it matters: lsr_uprising_averted decides whether the July rising is counted as having happened for the party, which affects the fault notes in later events and the Left SR coalition.

### The Generals' Plot (September 1918)
- File: `alt_right_coup`; Who sees: all parties, under the alternate timeline, from September 1918; can fire up to twice, with an 18-turn cooldown. No choices: the outcome is decided by the right's threat.
- What happens: a group of officers and Kadet politicians plans to arrest the government. The scene decides automatically what happens.
- Outcomes:
  - *The generals take power.* If the Right's threat is at least 65, a night in the autumn sees the government arrested and the soviets dissolved, the Assembly told to adjourn and General Alexeyev proclaims a military dictatorship. The party's leaders are arrested or go abroad. The game ends with the right-coup ending.
  - *The plot is foiled.* Otherwise the officers are arrested and the Cossack regiments go back to barracks. The Right's threat falls by 8.
- Why it matters: this is the alternate timeline's way of ending the game through the right; the Right's threat is the only variable that decides it.

### The Red Terror (September 1918)
- File: `red_terror`; Who sees: all parties, under the Bolshevik regime, from September 1918; once.
- What happens: on 30 August Lenin was shot and wounded by Fanny Kaplan, an SR; the same day the head of the Petrograd Cheka, Uritsky, was murdered. On 5 September the government declared the Red Terror: hostages shot and enemies isolated in camps. The text gives a range of 12,733 to over a million for the deaths, depending on what is counted. On arrival repression rises by 12 and soviet democracy falls by 4. For the Mensheviks, Potresov leaves the party and the right-wing current loses strength and discontent. For the Left SRs, repression rises further, and if they still hold the Cheka shield and government seats it falls by 6. For the SRs, Kaplan's party is held responsible: repression rises by 6, Bolshevik relations fall by 6, workers support falls, and legality falls by 1 if it was above 1.
- Choices:
  - *Condemn the Terror.* No requirement. Bolshevik relations fall by 5; soviet democracy and repression each rise by 1 or 2; workers and middle support rise; the internationalists become calmer. The party's presses are closed again.
  - *Bargain for readmission.* No requirement. Bolshevik relations rise by 4 and repression falls by 2. Sets readmission_hope. The internationalists gain discontent; the defencists become more restless.
- Why it matters: it sets readmission_hope (from the bargaining choice) and raises repression across the Bolshevik regime.

### The Ufa State Conference (September 1918)
- File: `sr_directory`; Who sees: SRs only, under the Bolshevik regime, once armed struggle has been taken up (armed_struggle set), between September and the end of October 1918; once.
- What happens: the anti-Bolshevik governments of the east meet at Ufa: Komuch from Samara, the Siberian government from Omsk, the Cossack hosts, the national governments of the Urals and the Kadets. They agree a single five-man Directory to rule until the Assembly can meet again. Two of the five, Avksentiev and Zenzinov, are the party's; the general Boldyrev is another, and the Siberian ministers answer to the officers in Omsk. Komuch would become a congress of Assembly members and the People's Army would come under joint command. The Allies will deal only with the Directory.
- Choices:
  - *Join the Directory: one government against the Bolsheviks.* No requirement. The party's delegates sign the Ufa act. Komuch hands over its powers and the government moves to Omsk. Kadet relations rise by 6 and Bolshevik relations fall by 4; the right threat rises by 3. Middle support rises and peasants fall; the Right SRs gain strength and lose discontent; the internationalists become much more restless; the bund current becomes more restless. White aid rises by 1. Sets directory_joined.
  - *Keep Komuch's own government, and refuse to share power with the Kadets and the officers.* No requirement. Kadet relations fall by 5 and the right threat falls by 1. Peasants and workers gain. The bund current gains strength and loses discontent; the Right SRs become more restless. White aid falls by 1 (not below zero). In October the Red Army takes Samara and Komuch moves east to Ufa.
  - *Wind down the armed struggle, and look for terms with the soviets.* Requires the bund current's strength to be at least 4, or Bolshevik relations of at least 20. The Central Committee ends armed struggle and sends a delegation across the lines. Komuch dissolves. Bolshevik relations rise by 5, repression falls by 2 and Kadet relations fall by 6. Workers and peasants gain; middle support falls. The Right SRs become much more restless. Sets armed_struggle and komuch_alive to 0.
- Why it matters: directory_joined is read by the Kolchak coup two months later, and the choice decides whether the party's armed struggle continues.

### The Last Party Congress (October 1918)
- File: `lsr_oct18`; Who sees: Left SRs only, under the Bolshevik regime, from October 1918; once.
- What happens: in the first week of October the Left SRs meet in an underground congress in Moscow. Three currents are present: the Kamkov-Spiridonova leadership; those who want to return to the Soviet government; and those who want to join the Bolsheviks. The pro-Bolshevik wing will form the Party of Narodnik Communists within a month. The text varies with whether the party's leaders are in prison (after the rising) or still in government.
- Choices:
  - *Try to hold the party together.* The outcome depends on dissent. If dissent is below 0.3, the Congress agrees to continue within the law without joining the Bolsheviks; Bolshevik relations rise by 2 and every current loses 8 discontent, and the Narodniks are persuaded to wait. If dissent is 0.3 or higher, the Congress breaks up: members fall by 20%, the bund current is set to strength 15, the internationalists lose strength and become more restless, and Bolshevik relations rise by 6. The pro-Bolshevik wing leaves to form the Party of Narodnik Communists, which joins the Bolsheviks in November.
  - *Let the currents go their own ways.* No requirement. Members fall by 25%; the bund current is set to strength 15; the internationalists lose strength and gain some discontent; Bolshevik relations rise by 6 and peasant support falls slightly. The Narodniks join the Bolsheviks in November; the Revolutionary Communists stay out as a coalition partner.
- Why it matters: decides how many Left SRs remain as a party in 1919-1921 and whether the bund (Narodnik) current is still there.

### "October Was Historically Necessary" (October 1918)
- File: `october_line`; Who sees: Mensheviks only, under the Bolshevik regime, from October 1918; once.
- What happens: the party's Central Committee, led by Martov, must decide on a resolution about the revolution. Martov's draft says that October was a historical necessity, that the party opposes armed struggle against the Soviet power, and that it calls for democratising the soviets by peaceful means. The Right Defencists are expected to leave; the Bolsheviks say it is an attempt to regain legality by writing words.
- Choices:
  - *Adopt Martov's resolution.* No requirement. Bolshevik relations rise by 8; the internationalists gain strength and lose discontent; the Right Defencists lose strength and gain a lot of discontent (leading them to leave); the defencists gain discontent slightly. Sets october_necessary and readmission_hope.
  - *Keep the Constituent Assembly line.* No requirement. Bolshevik relations fall by 5 and repression rises by 2; the Right Defencists gain strength and lose discontent; the internationalists lose strength and become more restless; middle support rises. Sets october_necessary to 0 and ca_line.
- Why it matters: it sets october_necessary, the party's official view of October, and readmission_hope.

### The Armistice in the West (November 1918)
- File: `alt_armistice`; Who sees: all parties, under the alternate timeline, while still at war, from November 1918; once. No choices.
- What happens: on 11 November Germany signs the armistice. The Kaiser has fled and a socialist republic is proclaimed in Berlin. The Russian Republic has outlasted the war, and the army is being demobilised with soldiers going home armed. The Allies expect Russia to honour the war debt.
- On arrival: the war ends (at_war is set to 0); war weariness falls by 25; the ruble rises by 3 and bread by 5; the Bolsheviks lose 4; soldiers and workers gain.
- Why it matters: it closes the war in the alternate timeline, and at_war is checked by the earlier war events.

### Kolchak's Coup (November 1918)
- File: `kolchak`; Who sees: all parties, under the Bolshevik regime, from November 1918 (the Admiral's coup itself is dated 18 November); once. The choices appear only for SR players who still have armed struggle; other players read the text with no choice.
- What happens: officers loyal to Admiral Kolchak arrest the SR members of the Directory in Omsk. Kolchak proclaims himself Supreme Ruler. Avksentiev, Zenzinov and the others are put on a train east and sent out of the country by way of China. The text varies by party: the Mensheviks take it as proof that "neither side" is right; the SRs see their Directory's attempt to make a democracy with generals and foreign troops answered by the generals.
- On arrival: the right threat rises by 5 and middle support falls by 2. For Mensheviks, the bloc ally's relations fall by 3. For SRs who joined the Directory, the party loses 10 members, peasants and middle support fall, and the Right SRs lose strength and gain discontent. Avksentiev and Zenzinov stop advising.
- Choices (SRs with armed struggle only):
  - *Turn the People's Army against Kolchak, and seek a truce with the soviets.* Volga units still loyal to the party turn their guns on Kolchak's officers, and a delegation goes to Ufa to ask the Red Army for a truce. White aid falls by 1; Bolshevik relations rise by 4 and the right threat falls by 3; the Right SRs gain discontent; the internationalists are calmer. Komuch is alive again.
  - *Fight on against the Bolsheviks, beside the Admiral.* Party members in the east serve under the Admiral; many refuse. White aid rises by 1, members fall by 5, peasants and middle support fall, and the Right SRs lose strength and become much more restless. Bolshevik relations fall by 3. Komuch is marked as dead.
- Why it matters: the SR choice sets komuch_alive and the party's relations with the Bolsheviks at the end of the Civil War.

### Readmitted to the Soviets (November 1918)
- File: `relegalised`; Who sees: Mensheviks only, under the Bolshevik regime, from November 1918, if the party was expelled (expelled set); once.
- What happens: on 30 November the Central Executive Committee decides to readmit the Mensheviks to the soviets, on the ground that they condemned armed intervention and the Czechoslovak revolt. The decision does not extend to the party's press. The party has a place in the Congress of Soviets again, and "the right to be arrested for what they say there".
- Choices:
  - *Accept readmission.* No requirement. Legality rises to 2 (tolerated). Repression falls by 3, soviet democracy rises by 2 and Bolshevik relations rise by 2. Workers and railway support rise. The internationalists gain strength and lose discontent; the Right Defencists gain discontent.
  - *Refuse, until the Terror ends.* Requires repression of at least 15. The party says a banned party has the right to a guarantee against a repeat. Workers and middle support rise; Bolshevik relations fall by 5; the internationalists and the defencists become more restless. Sets refused_readmission.
- Why it matters: legality is the main measure of how far the party is able to function, and this choice decides whether the party comes out of the 1918 expulsion.

### The Constitution of the Republic (January 1919)
- File: `alt_republic`; Who sees: all parties, under the alternate timeline, from January 1919, if the Assembly has survived; once.
- What happens: the Assembly is drafting a constitution. The shape of the state is undecided: a presidency or a collective executive, one chamber or two, a federation or a unitary state. The SRs favour a strong Assembly, the Kadets a presidency, the national parties a federation, and the Mensheviks the soviets as local self-government.
- Choices:
  - *A federal republic, with the soviets as organs of local government.* No requirement. Soviet democracy rises by 6, the allies' relations rise by 2 and the Kadets' fall by 3; the right threat falls by 2. Workers, nations and peasant support rise; the unions' current gains strength and loses discontent. Sets constitution to 1.
  - *A republic with a strong president.* No requirement. Soviet democracy falls by 2, the right threat falls by 6 and Kadet relations rise by 6. Middle support rises and workers fall; the internationalists become more restless; the Right Defencists are calmer. Sets constitution to 2.
  - *A republic governed by the Assembly alone.* No requirement. Soviet democracy rises by 3; the right threat rises by 4 and the ally's relations rise by 3. Peasants and workers support rise. Sets constitution to 3.
- Why it matters: the constitution flag is read by the endings (game_over.scene.dry checks it), so this choice shapes the final text.

### The Coalition Is Squeezed (January 1919)
- File: `lsr_squeeze`; Who sees: Left SRs only, under the Bolshevik regime, from January 1919, while the Left SRs are still in the government; once. The outcome is random and no choice is made.
- What happens: in 1919 the civil war makes the Bolsheviks stronger and every other party weaker. The Left SR commissariats are merged one by one into Bolshevik ones.
- Outcomes:
  - *The coalition holds.* The chance of staying in is set by Bolshevik relations, soviet democracy and bloc lean (between 10% and 90%); it also needs dissent below 0.45. If it holds, the Left SRs stay in government, though Lenin has not said how long the coalition will be useful.
  - *The coalition is squeezed out.* If the roll fails, the Left SRs leave the government and lose their seats. Bolshevik relations fall by 6, repression rises by 5 and soviet democracy falls by 3; peasant support falls. By autumn the last Left SR commissar has resigned.
- Why it matters: the outcome sets lsr_in_gov, which the 1921 Left SR events read.

### Khinchuk Goes Over (May 1919)
- File: `khinchuk_defects`; Who sees: Mensheviks only, under the Bolshevik regime, from May 1919, if Khinchuk is an adviser; once. No choices.
- What happens: Lev Khinchuk, the former chairman of the Moscow Soviet's executive, accepts a post in the government's cooperative administration. He later serves as ambassador to Berlin and to London.
- On arrival: Khinchuk leaves the party's advisers. The unions' current loses strength and gains discontent; middle support falls and bread falls by 1.
- Why it matters: Khinchuk's advisory role is also cleared in the 1921 arrests, and the party loses its Moscow businessmen's contact.

### The Economic Programme (July 1919)
- File: `program_1919`; Who sees: Mensheviks only, under the Bolshevik regime, from July 1919. The outcome is automatic; there are no choices.
- What happens: with Denikin advancing and the villages in revolt, the Bolsheviks look for support among the peasants. The outcome depends on whether the party has an economic programme, on relations with the Bolsheviks (at least 40) and on whether the programme is in time (before January 1920).
- Outcomes:
  - *The programme is heard* (adopted, relations at least 40, in time). Bread rises by 10, soviet democracy by 5, repression falls by 8 and land pressure by 5. Peasants, workers and middle support rise. In July the grain requisition is replaced by a tax in kind in the provinces nearest the front; the Council does not adopt the programme, but it does not condemn it. The text calls it "the NEP before the NEP".
  - *The programme is ignored* (adopted, but not in time or without the relations). The Council does not respond; the Cheka confiscates the pamphlets and some economists are arrested for a week.
  - *No programme.* The party has no economic programme to offer and only criticism to give. The "What Is to Be Done?" card in the Party Affairs deck unlocks the programme.
- Why it matters: nep_early and program_adopted are read by the NEP event (March 1921), the Menshevik exile warning and the 1921 arrests.

### The Peasant Programme (July 1919)
- File: `sr_programme_1919`; Who sees: SRs only, under the Bolshevik regime, from July 1919. The outcome is automatic; there are no choices.
- What happens: with Denikin advancing and the villages in revolt against the requisitions, the Bolsheviks look for support among the peasants. The party's peasant congresses and village committees, organised for a year and a half, put forward a programme: end the requisitioning, let peasants sell their grain, leave the land with the village communities.
- Outcomes:
  - *The programme is heard.* Requires that the party has organised at least 2 peasant congresses or committees and that Bolshevik relations are at least 33 before January 1920. The grain requisition is replaced by a tax in kind in the provinces near the front, with the experiment to be extended in the spring. Bread rises by 10, soviet democracy by 5, repression falls by 8, and land pressure by 5. Peasants, workers and middle support rise. Called "the NEP before the NEP".
  - *No peasant programme.* Without the organisation or the contact with the Bolsheviks, the party cannot say so; the peasants rise by themselves and are shot by themselves.
- Why it matters: the same flags as the Menshevik programme (nep_early and the NEP's later text) are set here.

### Denikin at Orel (October 1919)
- File: `denikin`; Who sees: all parties, under the Bolshevik regime, from October 1919; once.
- What happens: in October Denikin's Volunteer Army takes Orel, 380 kilometres from Moscow. In the north Yudenich stands twenty kilometres from Petrograd. The government declares the Socialist Fatherland in danger and calls for every worker who can hold a rifle. A Denikin victory would destroy every labour organisation and every socialist party and return the landlords; the party and the Bolsheviks have a common enemy.
- Choices:
  - *Mobilise our members for the Red Army.* No requirement. Eight red army units are added; the party is defended (defended counter rises). Bolshevik relations rise by 6 and repression falls by 5; soviet democracy falls by 1; workers and soldiers support rise; the Right Defencists become more restless. Legality rises by 1 if it is below 3. Hundreds enlist, the Cheka releases many arrested comrades, and some delegates are readmitted to the soviets.
  - *Stay neutral.* No requirement. Repression rises by 3 and Bolshevik relations fall by 4. Middle support rises and workers fall; the Right Defencists and internationalists become more restless. The crowds in the factory districts disagree with the choice.
  - *Demand the release of our prisoners first.* No requirement. Three red army units are added; repression falls by 2 and Bolshevik relations fall by 2. Workers support rises. Sets prisoner_deal. Many prisoners are freed, the rest are not.
- Why it matters: the mobilise choice raises legality and the defended counter; the prisoner deal is recorded (prisoner_deal).

### The Ufa Delegation (October 1919)
- File: `sr_ufa`; Who sees: SRs only, under the Bolshevik regime, from October 1919; once.
- What happens: with Kolchak routed and Denikin at Orel, a delegation of party members who sat in the Ufa Directory returns to Soviet Russia. Led by Volsky, it argues that armed struggle has only helped the generals, that the party should lay down its arms and ask for the soviets to be reformed from inside. If the Central Committee refuses, the delegation will form the Minority SR Party.
- Choices:
  - *Adopt the Ufa line for the whole party.* No requirement. The party renounces armed struggle; White aid is set to 0; Bolshevik relations rise by 6 and repression falls by 4. The bund current gains strength and loses discontent; the Right SRs gain much discontent; the internationalists are calmer. If Bolshevik relations are at least 30 and legality below 2, legality rises to 2. Sets ufa_line.
  - *Let the Ufa delegation go to form its own party.* No requirement. Members fall by 10; the bund current is cleared; the Right SRs gain strength; Bolshevik relations fall by 2 and peasant support falls. The Minority SR Party is formed and will be legal for a few months, and then serve the Bolshevik state.
- Why it matters: the choice sets ufa_line and whether the party is still an armed opposition.

### The Republic at Two (January 1920)
- File: `alt_recovery`; Who sees: all parties, under the alternate timeline, from January 1920; once. No choices: the outcome is set by bread and the ruble.
- What happens: by 1920 the republic is either recovering or struggling, and the text follows.
- Outcomes:
  - *The republic is recovering* (bread at least 40 and the ruble at least 25). Bread and the ruble each rise by 8, soviet democracy by 2, the Bolsheviks fall by 4 and the right threat falls by 2. The harvest recovered, the railways run, and the land law is accepted.
  - *The republic is struggling* (otherwise). Bread falls by 3, the Bolsheviks gain 5, the right threat rises by 4 and soviet democracy falls by 2. The harvest is poor, the railways are failing, and the opposition on both sides says the experiment has failed.
- Why it matters: the bread and ruble levels decide whether the alternate republic can survive the later opposition events.

### The British Labour Delegation (May 1920)
- File: `labour_delegation`; Who sees: Mensheviks only, under the Bolshevik regime, from May 1920; once.
- What happens: a delegation of the British Labour Party and the TUC visits Moscow. At the Printers' Union meeting, Dan, Martov and Abramovich are allowed to speak. They accuse the government of repression and demand free elections; the foreign delegates hear them in silence. Within months the opposition leaders are removed: Martov goes abroad, ill, and Abramovich leaves for Germany.
- Choices:
  - *Speak openly.* No requirement. Foreign pressure rises by 2. Soviet democracy rises by 2, repression by 8 and Bolshevik relations fall by 4. Workers, railway and middle support rise; the internationalists gain strength and lose discontent. Sets printers_meeting. The printers' meeting is a triumph, and it will be paid for.
  - *Keep it private.* No requirement. Repression falls by 1 and workers support rises slightly; the internationalists become more restless. The meeting is held and nobody mentions it.
- Why it matters: foreign pressure is one of two conditions that let Georgia survive the 1921 crisis, so this choice counts toward it.

### Wrangel Leaves Crimea (November 1920)
- File: `wrangel`; Who sees: all parties, under the Bolshevik regime, from November 1920; once. No choices.
- What happens: in November Wrangel's army, the last White force, evacuates the Crimea in the face of the Red Army. Over 140,000 soldiers and civilians leave on French ships. The civil war is over, and there is no outside enemy to justify the repression.
- On arrival: white aid is cleared, the White front is set to at most 10, and Martov's and Abramovich's advisers are removed.
- Text: for Mensheviks, the leaders are abroad (Martov in Berlin, Abramovich after him), and the rest are asked whether the soviets can be reformed from inside. For SRs, the party's leaders are in prison, in exile or abroad (Chernov in Prague, Avksentiev and Zenzinov in Paris, Gots and others in the Cheka's prisons).
- Why it matters: it ends the White threat and with it the case for the repression the party has suffered.

### The Eighth Congress of Soviets, Mensheviks (December 1920)
- File: `congress_1920`; Who sees: Mensheviks only, under the Bolshevik regime, from December 1920; once.
- What happens: the Eighth All-Russia Congress of Soviets meets in Moscow. Dan speaks for the Mensheviks, as he did in 1919: he criticises economic policy, calls for an end to the Cheka's terror and for the restoration of free soviet elections. He is heard, interrupted and not answered.
- Choices:
  - *Speak as a loyal opposition.* No requirement. Repression falls by 1 and Bolshevik relations rise by 1; workers support rises; the Right Defencists become more restless.
  - *Demand free soviet elections now.* The outcome depends on numbers: it passes if soviet democracy is at least 45, Bolshevik relations at least 40 and the programme adopted. If it passes, free soviet elections are promised in the spring with opposition parties allowed to stand: soviet democracy rises by 10, repression falls by 6, Bolshevik relations rise by 2; workers, railway and peasant support rise. If it fails, the motion is defeated and several Mensheviks are arrested that week: soviet democracy rises by 2, repression by 7, Bolshevik relations fall by 5. In either case the internationalists gain strength and lose discontent, and the Right Defencists become more restless. Legality falls by 1 if repression is at least 35 and legality is above 1. Sets free_soviets when it passes.
- Why it matters: free_soviets records the promise of free soviet elections, the one outcome here that changes what the party can stand for.

### The Eighth Congress of Soviets, SRs (December 1920)
- File: `sr_congress_1920`; Who sees: SRs only, under the Bolshevik regime, from December 1920; once.
- What happens: the same Congress, seen from the peasant side. The delegates of the peasant soviets that the party still counts as its own speak of the requisitions, the shortage of seed and the revolts in Tambov and on the Volga. They are heard, interrupted and not answered.
- Choices:
  - *Speak as a loyal opposition.* No requirement. Repression falls by 1 and Bolshevik relations rise by 1; peasant support rises; the Right SRs become more restless.
  - *Demand free elections to the peasant soviets.* Passes if soviet democracy is at least 45, Bolshevik relations at least 35 and at least 2 peasant organisations exist. If it passes, free elections are promised in the spring: soviet democracy rises by 10, repression falls by 6, Bolshevik relations rise by 2, peasant support by 6 and workers by 2. If it fails: soviet democracy rises by 2, repression by 7, Bolshevik relations fall by 5, and peasant support rises by 4. Legality falls by 1 if repression is at least 35. Sets free_soviets when it passes.
- Why it matters: it sets free_soviets through the peasant route, the same flag as the Menshevik version.

### Georgia, the Strikes and Kronstadt (February-March 1921)
- File: `kronstadt`; Who sees: all parties, under the Bolshevik regime, from March 1921; once. The text on Georgia is set on arrival; the choices follow.
- What happens: in February the Red Army was prepared to cross the Georgian border. Whether it did depends on the earlier Georgia choices (see Independent Georgia, June 1918). If Georgia survives, European diplomacy and the Georgian army postpone the invasion. If not, the Red Army crosses and Zhordania flees to Constantinople.
- On arrival: Georgia survives only if the foreign pressure total is at least 4 and the Georgia support total is at least 2. If not, Georgia is marked as no longer free and Zhordania is removed as adviser.
- Also in February, strikes spread through Petrograd. On 28 February the sailors of the Petropavlovsk demand new soviet elections, freedom of speech and press for workers, peasants and the left socialist parties, and release of political prisoners. On 1 March the Kronstadt garrison joins them; the Bolsheviks call it a White conspiracy. The Cheka arrests hundreds of Mensheviks and SRs in Petrograd and Moscow as a precaution.
- Choices:
  - *Condemn the revolt.* No requirement. Bolshevik relations rise by 4, soviet democracy falls by 2 and repression falls by 2. The right-wing current and the internationalists become more restless. The party states it had no connection with the revolt. Sets kronstadt_stance to 1.
  - *Back Kronstadt's programme and press for negotiation.* No requirement. Bolshevik relations fall by 10 and soviet democracy rises by 3; repression rises by 10. Workers, railway and soldiers support rise; the internationalists gain strength and lose discontent. Legality falls by 1 if it is above 1. Members are lost in a large number. Sets kronstadt_stance to 2. Kronstadt is not expected to hold out long.
  - *Stay silent.* No requirement. The internationalists and the defencists become more restless; workers support falls slightly. Sets kronstadt_stance to 0.
- Why it matters: kronstadt_stance records the party's position, and the Georgia result from this scene is the last word on the Georgian government.

### The Last Arrests, Left SRs (March 1921)
- File: `lsr_1921`; Who sees: Left SRs only, under the Bolshevik regime, from March 1921; once.
- What happens: in March sailors at Kronstadt called for free soviets, and the Cheka is making arrests in every opposition party. Two versions follow depending on whether the Left SRs are still in government.
- Outcomes:
  - *The coalition survives* (Left SRs still in government). The Left SR ministers are not touched, and the coalition is "a government of two parties, one of which holds all the guns". No choice.
  - *Kronstadt and Tambov* (Left SRs out of government). In Tambov fifty thousand peasants are in arms under Antonov, an old SR, against the requisitions, and the revolt has spread to the Volga and Siberia. The Tenth Congress has voted to end the requisitions and tax the peasants in kind. Choices:
    - *Offer Lenin peace in the villages, in return for free elections to the rural soviets.* Requires legality of at least 2, peasant soviets organised (at least 6), Bolshevik relations of at least 38 and soviet democracy of at least 48, and the July 1918 rising not carried out. Spiridonova writes to Lenin; the party's agitators go into Tambov and the Volga with news of the tax and an amnesty. Legality rises by 1 if below 3; members rise by 15; Bolshevik relations rise by 4; repression falls by 10, soviet democracy rises by 8 and land pressure falls by 6. Peasant and soldier support rises. The rural soviets decree is published in April; by summer Antonov's men have gone home and the party holds a majority in hundreds of volost soviets. Sets lsr_peasant_soviets.
    - *Stand by the sailors' programme, whatever it costs.* No requirement. Legality is set to 0 (banned); members fall by half; Bolshevik relations fall by 8 and repression rises by 6; workers and soldiers gain. The Left SRs are arrested in their hundreds, their last congress is held in prison, and by May 1921 party activity has ceased.
    - *Keep quiet, and wait for the arrests to pass.* No requirement. Legality is capped at 1; members fall by 25%; repression rises by 3; the internationalists become more restless. Arrests happen anyway, though fewer.
- Why it matters: lsr_peasant_soviets is read by the August 1921 arrests (which spare the peasant-soviet Left SRs), and legality and membership set how hard the 1921 arrests hit.

### The Tenth Congress and the New Economic Policy (March 1921)
- File: `nep`; Who sees: all parties, under the Bolshevik regime, from March 1921; once.
- What happens: at the Tenth Congress of the Russian Communist Party, War Communism ends. The grain requisition is replaced by a fixed tax in kind; peasants may sell the surplus on a market; small private trade and industry are permitted. Lenin's motion bans factions inside the party. The text calls it a retreat in the economy and an advance in the politics. If the party's economic programme was heard in 1919, the text notes that the Mensheviks' 1919 pamphlet was listened to in part.
- Choices:
  - *Claim the NEP as our own programme.* Mensheviks only. Workers, peasant and middle support rise, bread rises by 4 and Bolshevik relations fall by 2; the unions' current gains strength. If the programme was adopted, workers and middle support rise further and soviet democracy rises by 2.
  - *Say the NEP is the peasants' victory.* SRs only. Peasant, middle and workers support rise; bread rises by 4 and Bolshevik relations fall by 2. If the peasant organisation is at least 2, peasant support rises further and soviet democracy rises by 2. The Right SRs become more restless.
  - *Demand political freedom to match.* All parties, including the Left SRs. Soviet democracy rises by 2, repression by 6 and Bolshevik relations fall by 4. Workers, middle and peasant support rise; the internationalists gain strength and lose discontent. If repression is at least 30 and legality above 1, legality falls by 1.
- Why it matters: the NEP is the turning point of the Bolshevik regime after 1921, and the claim decides whether the party is seen as the author of the policy that ends War Communism; the flags nep_early and program_adopted are read here.

### The Arrests of 1921 (August 1921)
- File: `arrests_1921`; Who sees: all parties, under the Bolshevik regime, from August 1921; once. No choices: the text depends on the party.
- What happens: in August the Cheka arrests most of the members of the public famine relief committee, the Pomgol, set up in July. Its members (writers, engineers, Kadets and socialists) had been raising grain and funds for the Volga. Gorky wrote to Lenin, in vain.
- On arrival: the Mensheviks' and others' advisers (Dan, Lidia Dan, Khinchuk, Batursky) are removed. Repression rises by 6. Legality falls by 1 unless the Left SRs have their peasant soviets, if repression is at least 40 or if neither programme nor NEP has been adopted. Members fall by 15 unless the Left SRs have their peasant soviets.
- Text by party:
  - *Mensheviks.* Dan and Lidia Dan are arrested, and the rest of the leaders are arrested by the hundred. The party will be exiled in January 1922, and its newspaper will be published in Berlin.
  - *SRs.* 34 SR leaders are gathered for a trial, charged with the attempt on Lenin, armed insurrection and collusion with the Allies. The trial is to be held in summer 1922 and will end with twelve death sentences, suspended.
  - *Left SRs with peasant soviets.* They are left alone; the bargain of the spring still holds.
  - *Left SRs without them.* The Left SRs still at liberty are arrested.
- Why it matters: this is the last big arrest wave of the game, and it decides which parties are still standing at the end.

## The opposition and the party's crises

These are the reactions of the three opposition camps (the Kadets and propertied classes, the generals and the Right, and the Bolsheviks) and the events for party crises and exile. The opposition system (`source/model.js`) moves each camp's hostility month by month. At 40 a camp can fire its first event (sanction, ultimatum or agitation), and at 70, if it is strong enough, its second (revolt, strike or coup). A first-stage event starts a cooldown of 6 turns; a second-stage event starts one of 9 or 10 turns.

### The Liberals Strike Back (triggered; alternate timeline)
- File: `opp_kad_sanction`; Who sees: all parties, under the alternate timeline, when the Kadet camp's first-stage flag is set; the event clears the flag and starts a 6-turn cooldown.
- What happens: the Kadets, the Moscow Exchange Committee and the landowners' union meet. They will not tolerate the party's main grievance, as named by the game. Rech calls it robbery, the banks stop discounting the government's paper, and donors ask for their money back.
- Choices:
  - *Give way to the liberals.* No requirement. The party gives up the policy the grievance points at (the game's rollback), or makes a statement of moderation if there is nothing to give up. The Kadet hostility falls by 25; Kadet relations rise by 6 and the right threat falls by 2. Middle support rises; workers and peasants fall.
  - *Hold firm.* No requirement. Random. If the Kadets are in government, a roll gives a 50% chance that the Kadet ministers resign (Kadet relations fall by 10, the right threat rises by 4, the ruble falls by 3, and the government becomes homogeneous, with the Kadets out), a 25% chance of a bank credit crisis (the ruble falls by 4 and a resource is lost), and a 25% chance of a press campaign (soviet democracy falls by 1, Kadet relations fall by 4, middle support falls by 4). If the Kadets are not in government, the odds are 75% for a bank credit crisis (ruble falls by 4, a resource is lost) and 25% for a press campaign (soviet democracy falls by 1, Kadet relations fall by 4, middle support falls by 4). In every case the generals' hostility rises by 3.
  - *Appeal to the Soviet and the factories over their heads.* No requirement. Kadet hostility rises by 8 and Kadet relations fall by 4; the right threat rises by 2 and soviet democracy by 1. Workers, soldiers gain; middle support falls.
  - *Negotiate through the banks and the Allied ambassadors.* Requires two resources, which are spent. Kadet hostility falls by 12, Kadet relations rise by 4, and the ruble rises by 2.
  - *Break the opposition: close Rech and arrest the financiers.* Requires strength of at least 18. A single roll with odds shown on screen (between 10% and 90%, depending on the party's strength against the Kadets). Success closes the camp's campaign and cuts its hostility; failure makes the Kadets angrier.
- Why it matters: this event sets the Kadet camp's 6-turn cooldown and changes its hostility; the Kadet ministers' resignation changes the government's composition.

### The Landowners Rise (triggered; alternate timeline)
- File: `opp_kad_revolt`; Who sees: all parties, under the alternate timeline, when the Kadet camp reaches its second stage (hostility 70 or more, with enough armed strength); the right threat rises by 5 on arrival.
- What happens: the Kadet leaders leave Petrograd for the Don and the Kuban. Landowners, officers and Cossack atamans in a dozen provinces take up arms against the grievance. Officers are arriving in Novocherkassk by the trainload. It is not yet a march on the capital, but a civil war in the countryside. On arrival the right threat rises by 5.
- Choices:
  - *Send the loyal garrisons and the committees against them.* The outcome depends on numbers: the rising's force is compared with the government's resistance. If the government wins, the Kadet hostility falls by 35, the right threat falls by 8, army discipline falls by 2, soviet democracy rises by 1 and Kadet relations fall by 5; peasant and soldier support rise. If the rising wins, the right threat rises by 12, army discipline falls by 8, soviet democracy falls by 2 and the generals' hostility rises by 10; middle support rises and soldiers fall. If that makes the right threat 65 or more, the game ends with the right-coup ending, in which the officers' league arrests the government and General Alexeyev declares a dictatorship.
  - *Give in: restore the old order.* No requirement. The party gives up the land policy, the labour decrees and the war policy where it has them. Kadet hostility falls by 45; Kadet relations rise by 10 and the right threat falls by 6. Peasants, workers lose support; middle support rises. The land and labour policies are withdrawn.
  - *Ask the Bolsheviks' Red Guards to help.* Requires Bolshevik relations of at least 25. The Bolsheviks are armed. Their hostility falls by 15 for the Kadets and the right threat by 6; Bolshevik relations rise by 6 and the Bolsheviks gain 10 strength. Workers' support rises. The Red Guards are armed, and remember it.
- Why it matters: a lost rising can end the game at once if the right threat reaches 65. The third choice records that the Bolsheviks are armed (bol_armed).

### The Generals' Ultimatum (triggered; alternate timeline)
- File: `opp_gen_ultimatum`; Who sees: all parties, under the alternate timeline, when the generals' first-stage flag is set; starts a 6-turn cooldown.
- What happens: the Union of Officers and the generals of Stavka send a memorandum. They are not pleased with the party's main grievance. They demand that officers' authority be restored, that soldiers' committees be limited to the kitchen and stores, and that the "sentimentality of the Soviet leaders" be put aside. The memorandum does not say what happens if it is refused.
- Choices:
  - *Restore the officers' authority.* No requirement. The party gives up the policy the grievance points at, if it has one. The generals' hostility falls by 25; army discipline rises by 6; repression rises by 1; soviet democracy falls by 1; soldier support falls by 4. Officers give orders again.
  - *Refuse the memorandum.* No requirement. The right threat rises by 5, army discipline falls by 4 and the generals' hostility rises by 3; soldiers gain slightly. Several colonels resign and talk of "the future of Russia".
  - *Dismiss the most hostile generals.* Requires army discipline of at least 40. The right threat falls by 6, the generals' hostility falls by 5, army discipline falls by 5 and Kadet relations fall by 3; soldiers gain. Three commanders are replaced.
  - *Break the Officers' Union with the loyal garrisons and the committees.* Requires strength of at least 18. A single roll with odds shown on screen. Success cuts the generals' hostility and their campaign; failure makes the generals angrier.
- Why it matters: it records the generals' cooldown and sets the purge of commanders; the generals' hostility then drives the Generals Move below.

### The Generals Move (triggered; alternate timeline)
- File: `opp_gen_coup`; Who sees: all parties, under the alternate timeline, when the generals' second-stage flag is set; starts a 10-turn cooldown.
- What happens: the generals have failed to change the policy by memorandum. Two cavalry divisions and some shock battalions move on Petrograd and Moscow "to restore order". The railwaymen's union is divided and the garrisons are doubtful.
- Choices (each leads to the same resolution; the choice sets a bonus to the defence):
  - *Form a committee for the defence of the revolution, with the Bolsheviks.* Requires Bolshevik relations of at least 20. Defence bonus 14. The Bolsheviks sit on the committee, workers are armed, and the Bolsheviks gain relations and strength; the Bolsheviks are armed.
  - *Call on the railwaymen and the Soviet to stop the trains.* No requirement. Defence bonus 10. Soviet democracy rises by 1 and railway support rises by 3.
  - *Rely on the garrisons that have stayed loyal.* No requirement. Defence bonus 5. Army discipline rises by 2.
- Resolution (automatic): the generals' force (rising with their hostility) is compared with the defence (the bonus plus the allies' strength). If the defence holds, the generals' hostility falls by 40, the right threat by 18, army discipline falls by 4 and soviet democracy rises by 3; the divisions stop outside the capital and the generals are arrested or flee. If the generals win, the game ends with the right-coup ending: the generals take the capital, dissolve the soviets, the Assembly is told to adjourn and General Alexeyev declares a dictatorship.
- Why it matters: this is the second route to the right-coup ending, and the committee choice records bol_armed.

### Pravda Names Us (triggered; alternate timeline)
- File: `opp_bol_agitation`; Who sees: all parties, under the alternate timeline, when the Bolsheviks' first-stage flag is set; starts a 6-turn cooldown.
- What happens: the Bolsheviks have found their cause. Every issue of Pravda carries a front-page article about the party's main grievance, and Bolshevik agitators are in every barracks and factory meeting with the same message: that the government is the bourgeoisie's and the party its hireling.
- Choices:
  - *Adopt their demand.* No requirement. The party gives up the policy the grievance points at, if it has one. The Bolshevik grievance falls by 25; Bolshevik relations rise by 5; the Bolsheviks gain 3 strength, the Kadets' hostility rises by 5; workers' support rises.
  - *Debate them in the Soviet.* No requirement. Random: the chance of winning the debate is 35% plus a term from soviet democracy (above or below 50). If the party wins, the Bolshevik grievance falls by 12, the Bolsheviks lose 2 strength and workers gain. If it loses, the Bolshevik grievance and strength each rise by 3 and workers lose some support.
  - *Ignore them.* No requirement. The Bolsheviks gain 5 strength; workers and soldiers lose support.
  - *Shut down Pravda and arrest the agitators.* Requires strength of at least 18. A single roll with odds shown on screen. Success cuts the Bolshevik campaign and the Bolsheviks' hostility; failure makes them angrier.
- Why it matters: it sets the Bolshevik camp's 6-turn cooldown and changes its standing against the party.

### The Factories Walk Out (triggered; alternate timeline)
- File: `opp_bol_strike`; Who sees: all parties, under the alternate timeline, when the Bolsheviks' second-stage flag is set; starts a 9-turn cooldown.
- What happens: the Bolsheviks have won the Putilov works, the Vyborg district committees and two regiments, and have called them out. The workers lay down their tools to protest the grievance; a march on the Tauride Palace is expected. The Bolshevik leaders are divided over whether it is a protest or the start of something.
- Choices:
  - *Concede the demands.* No requirement. The party gives up the grievance's policy if it has one. The Bolshevik grievance falls by 30; Bolshevik relations rise by 8; the Bolsheviks gain 5 strength; the Kadets' hostility rises by 8 and the generals' by 4. Workers rise and middle support falls. The strike ends.
  - *Offer the Bolsheviks seats in the Soviet executive.* Requires Bolshevik relations of at least 20. Three seats are accepted. The Bolshevik grievance falls by 25, the Bolsheviks gain 6 strength, Bolshevik relations rise by 8 and the right threat rises by 2. The strike ends; the Bolsheviks can attend every meeting.
  - *Disperse the march and arrest the agitators.* No requirement. The Bolshevik grievance falls by 10; repression rises by 3 and Bolshevik relations fall by 12; the Bolsheviks lose 6 strength; soviet democracy falls by 2; workers lose support. The march is stopped at the bridges and the leaders arrested. Pravda is closed under another name for the third time. Sets july_repressed.
- Why it matters: this is the escalated Bolshevik camp; the choice sets the strike's cost in workers' support and the party's relations with the Bolsheviks for the rest of the alternate timeline.

### A Current Walks Out (party crisis; any party, either timeline)
- File: `party_crisis`; Who sees: all parties, in either timeline, when party dissent reaches 0.4 or more; can fire at most twice, with a 12-turn cooldown. No choices.
- What happens: the party's quarrels go past speeches. The most dissenting current, weighed by its discontent and its strength, leaves the party with its local organisations, press and funds. About one member in seven goes with it. The remaining members agree on a common line.
- Outcome (automatic): the leaving current's strength falls to 40% of its value; members fall by 15%; every current's discontent falls by 20 (not below zero). If the leaving current is the internationalists, Bolshevik standing rises by 4 and Bolshevik relations by 5; if it is the right-wing defencists (or the defencists), the right threat rises by 3 and Kadet relations by 4. Workers support falls by 3. The text says the internationalists have gone over to the Bolsheviks if they are the ones who left.
- Why it matters: it is the party's safety valve. It makes the party smaller and more united, but it costs members and support, and the number of crises is limited to two.

### The Sealed Train Back (exile warning; Mensheviks only, under the Bolshevik regime)
- File: `exile_warning`; Who sees: Mensheviks only, under the Bolshevik regime, when the exile risk is at its top level (set by `exileRisk` in `source/model.js`: legality of 1 or 0, that is expelled or banned, or membership collapsed); once. No choices.
- What happens: Martov came back to Russia in 1917 through Germany, in a sealed train. At the Central Committee someone says what many think: that the party may leave the same way. The text says the party is banned, expelled or has so few members that it is "a name on a list".
- Outcome (text only): if the party is still in this state when the Civil War ends, its leaders will be put on a train to Berlin and the party will become an émigré newspaper. The text says it is not too late: accepting readmission (before December 1918, if expelled), standing with the Red Army when the Whites next march (before October 1919), or sending members to the Red Army more than once (from October 1919, the card "Defend the Revolution"). Strikes, public campaigns and rival assemblies cost the party standing whenever repression is high; keeping repression down and membership growing keeps the party alive. If no economic programme has been adopted, the text says that such a programme will also spare the party from the arrests expected in 1921.
- Why it matters: it is the warning of the party's exile in the endgame; the path back is repression, membership and readmission.

---

## The cards

How to read the entries below:

- **Resources** are the party's money. "Costs 1 resource" means the option spends it, so it cannot be chosen with less.
- **Cooldown** is the number of months a card is set aside after it is played. It is drawn again only when the cooldown has run out.
- **Turn**: playing a card that uses up the turn's action (almost every card does) ends the turn. Turns are half a month until February 1918, and a month after that.
- **Contested law**: some options carry a law and are offered three ways.
  - *Phased in* (the cautious way) gives 60% of the effects, with 40% of the anger, and costs 1 resource.
  - *By decree* gives the law as written, at no extra cost.
  - *By force* gives the law as written, then tries to break each camp it has angered. It needs a party strength of 18 or more and the Bolsheviks out of power. A camp whose odds are under 45% is too strong and is left alone. A failed attempt angers the camp more and costs a resource. The odds are printed on the card.
- **Return card to hand** is on every deck card. It puts the card back in the hand. It is open on Easy and Normal, and on Hard unless discarding has been switched off. It is not open after an advisor or Cabinet action in the same turn.

### The three decks

Each turn the player draws cards into a hand (three cards, four on Easy) and plays one, or uses a pinned card. There are 38 deck cards in three decks.

**Party Affairs** (22 cards) is always on show. It holds the party's own work: campaigns, dues, the press, talks with other parties, the internal currents, the party's money and its contacts with the workers and peasants. Several cards are limited to one party: the Workers' Meeting, the Workers' Militia, the Pogroms, the Workers' Congress and "What Is to Be Done?" are Menshevik cards; the peasant cards are for the SRs and the Left SRs; the split, the Sovnarkom seats, the Cheka's board and the Inside the SR Party card are for the Left SRs.

**Coalition Affairs** (9 cards) is the government's policy deck. It is shown only while the party sits in the coalition government, the Bolsheviks do not rule, and the player is not the Left SRs. It covers the land, the grain, the war, the army, the police and the nationalities. Most of its options are contested laws.

**Soviet Affairs** (7 cards) is shown only once the Bolsheviks rule, for any party. It covers the soviets and factory assemblies, the unions, the cooperatives, the currency, the prisoners and the famine relief. When the deck is empty, its cards come back as their cooldowns run out.

### Party Affairs

#### Soviet Election Campaign
- **Drawn:** any party, at any time. Cooldown 3 months.
- **What it is:** the campaign for the factory and city soviet elections.
- **Options:**
  - *Factories* (1 resource): a strong boost among the workers, and a little more soviet democracy.
  - *Garrisons and the front* (1 resource; only while the Bolsheviks do not rule): a strong boost among the soldiers, a little militia, and the main line gains strength.
  - *Railwaymen and postal workers* (1 resource): a strong boost among the railway workers, a small one among the workers, and the unions gain strength.
  - *A joint list with our bloc partner* (1 resource; needs a bloc with the partner or the third party): boosts among the workers, soldiers, peasants and railway workers, partner relations +2, and the left wing's dissent rises a little.
  - *Villages* (1 resource; SRs and Left SRs only): a strong boost among the peasants, a small one among the soldiers, and the main line gains strength.
  - *Speakers with no printed material* (free): a small boost among the workers and the railway workers.
  - Return card to hand.

#### The Cheka's Board
- **Drawn:** Left SRs only, once they hold a seat on the Cheka's board, the Left SRs are in the government and the Bolsheviks rule. Available from January 1918 (dix 24). Cooldown 3 months.
- **What it is:** the Left SR members on the Cheka's board, who can see the files and vote on sentences.
- **Options:**
  - *Use the seats to slow the arrests*: repression falls, Bolshevik relations fall, the party gets a shield against the Cheka, and the right wing gains strength with less dissent.
  - *Cooperate, and keep the Bolsheviks' confidence* (free): repression and Bolshevik relations rise, soviet democracy falls, the left wing gains strength with less dissent, and the right wing's dissent rises a lot.
  - *Investigate abuses, with Steinberg* (free): soviet democracy and the middle classes gain, repression and Bolshevik relations fall, and the right wing gains strength.
  - Return card to hand.

#### Party Dues
- **Drawn:** any party, at any time. Cooldown 4 months.
- **What it is:** collecting the party's dues and keeping the press going.
- **Options:**
  - *Ordinary dues*: the party collects its dues income, which is smaller when membership is low.
  - *A special appeal*: brings in more money (about one and a half times the dues, and at least 2), but costs members, and the unions, the left wing and the main line become more discontented.
  - *Ask the cooperatives and the unions for support* (needs unions strength of 5 or more): +2 resources, the unions gain strength, and bread and the ruble rise a little.
  - Return card to hand.

#### The Party Line
- **Drawn:** any party, at any time. Cooldown 4 months.
- **What it is:** the party's line on the war and the government, where its currents disagree.
- **Options:**
  - *Move toward the right* (only if a right wing exists): the right wing gains strength, the main line and the left wing lose, the party's war line hardens, and relations with the Kadets rise.
  - *Move toward the main line*: the main line gains strength, the right wing gains a little, the left wing loses strength and gains dissent, and relations with the Kadets and the partner rise a little.
  - *Move toward the left*: the left wing gains strength, the main line and the right wing lose, the war line softens, and relations with the Kadets fall while those with the Left SRs and the Bolsheviks rise.
  - *Hold the middle*: every current's dissent falls, which calms the quarrels at the cost of firmness.
  - Return card to hand.

#### Inside the SR Party
- **Drawn:** Left SRs only, before the split. Cooldown 3 months.
- **What it is:** building a left caucus inside the SR party.
- **Options:**
  - *Organise a left caucus in the provincial committees* (1 resource): a boost among the peasants and soldiers, partner relations fall, the main line gains a little, and the right wing's dissent rises a little.
  - *Win over the local SR committees, one by one* (free): a boost among the peasants, partner relations rise a little, and the unions gain strength.
  - *Send Spiridonova on a speaking tour* (free): a strong boost among the peasants, a boost among the soldiers, partner relations fall sharply, and the main line gains strength.
  - Return card to hand.

#### Relations with Other Parties
- **Drawn:** any party, at any time. Cooldown 3 months.
- **What it is:** talks with the other socialists and with the Kadets.
- **Options:**
  - *Talks with the partner* (free): partner relations +8, and the left wing's dissent rises a little.
  - *Talks with the third party*: third-party relations +8 and Kadet relations -1. For an SR player the left wing loses ground, and for a Left SR player the pro-coalition wing gains.
  - *Talks with the moderate Bolsheviks*: Bolshevik relations +8, Kadet relations -2, the left wing's dissent falls, and the right wing's dissent rises.
  - *Talks with the Kadets*: Kadet relations +8, Bolshevik relations -1, the right wing's dissent falls, and the left wing's dissent rises.
  - *Formalise an alliance* (opens a choice of partner, third party or Bolsheviks): the alliance rises a level if relations are high enough (40 for cooperation, 60 for a bloc, 75 for a coalition), the lines agree, and there is something to share (a government, an Assembly or a soviet majority). The card says why the attempt fails when it does.
  - *Issue a joint statement with our allies* (needs an alliance with any party): relations rise by 2 with each allied party, the workers' and soldiers' support rises, and soviet democracy rises by 1.
  - Return card to hand.

#### The Party Press
- **Drawn:** any party, at any time. Cooldown 3 months.
- **What it is:** the party's newspaper, whose main theme is chosen for tomorrow's issue. The paper's name depends on the party and the date.
- **Options:**
  - *Defence of the revolution* (at war only): a boost among the middle classes, soldiers and workers, and the main line gains strength.
  - *Peace without annexations* (at war only): a strong boost among the soldiers and workers, and the left wing gains strength.
  - *Against the Bolsheviks* (not for the Left SRs): a boost among the workers and the middle classes, Bolshevik influence and relations fall.
  - *The Constituent Assembly and the land*: a boost among the peasants, middle classes and nationalities, partner relations +2, and land pressure falls a little.
  - *Defence of soviet democracy*: a boost among the workers, railway workers and soldiers, soviet democracy +3, and repression falls a little.
  - *Land and freedom* (SRs and Left SRs only): a strong boost among the peasants and a boost among the soldiers, and land pressure falls.
  - Return card to hand.

#### Appeal to the International
- **Drawn:** any party except the Left SRs. Cooldown 6 months.
- **What it is:** pressure from the socialist parties of Western Europe.
- **Options:**
  - *Press for the Stockholm conference* (only while the war lasts): war weariness and Kadet relations fall, soldiers and workers gain, the left wing gains strength, and the right wing's dissent rises. The Stockholm total rises by one.
  - *Ask European socialists to protest the arrests* (only under Bolshevik rule): repression falls, the left wing gains a little, and foreign pressure rises.
  - *Send a delegate to the Western socialists* (free): soviet democracy rises, +1 resource, and the main line gains a little.
  - *Appeal for money and paper*: +2 resources, and the unions' dissent rises a little.
  - Return card to hand.

#### Land Committees
- **Drawn:** SRs only, until a land decree has been issued. Cooldown 4 months.
- **What it is:** the peasants' committees that take stock of the landowners' estates and begin to divide them.
- **Options:**
  - *Back the committees' temporary transfers of land* (free): land pressure falls sharply, Kadet relations fall, the right threat rises a little, the right wing's dissent rises a lot, the peasants and soldiers gain, and Left SR relations rise.
  - *Hold the land for the Assembly* (free): land pressure rises, Kadet relations rise, peasant support falls, and the left wing's dissent rises a lot.
  - *Draft a land socialisation law* (only until the draft exists): the peasants gain, the main line gains a little, the left wing's dissent falls, and the right wing's dissent rises.
  - Return card to hand.

#### Peasant Congress
- **Drawn:** SRs and Left SRs. Cooldown 5 months.
- **What it is:** the Soviets of Peasants' Deputies, which the party's own organisers have built in the provinces.
- **Options:**
  - *Call a congress of peasants' deputies* (1 resource): a strong boost among the peasants and a boost among the soldiers, soviet democracy +2, the main line gains a little, and the party's peasant organisation grows.
  - *Work through the village committees and the volost soviets* (free): a boost among the peasants, land pressure falls a little, and the peasant organisation grows a little.
  - *Support rural cooperatives and peasant credit* (free): a boost among the peasants and middle classes, bread and the ruble rise a little, +1 resource, and the cooperative count rises.
  - Return card to hand.

#### Peasant and Soldier Meeting
- **Drawn:** SRs and Left SRs. Cooldown 3 months.
- **What it is:** the village assembly and the regiment, where the party speaks on the day's theme.
- **Options:**
  - *Land and freedom: the land to those who work it* (free): a strong boost among the peasants and a boost among the soldiers, land pressure falls, Kadet relations fall a little, the left wing's dissent falls, and the right wing gains a little strength.
  - *Wait for the Constituent Assembly and trust it* (free): a boost among the peasants, middle classes and nationalities, the right wing gains a little strength with less dissent, and the left wing's dissent rises.
  - *Defend the revolution, and the army that defends it* (at war only): a boost among the soldiers, peasants and middle classes, a little militia, the right wing gains a little, Kadet relations rise, and the war weariness rises a little.
  - *Peace without annexations* (at war only): a strong boost among the soldiers and a boost among the peasants, the left wing gains strength, the right wing's dissent rises, and army discipline falls a little.
  - *Whatever the audience asks about* (free): a small boost among the peasants, soldiers and middle classes.
  - Return card to hand.

#### The People's Army
- **Drawn:** SRs only, under Bolshevik rule, from April 1918 (dix 30). Cooldown 4 months.
- **What it is:** the party's armed struggle against the Bolshevik state, after the Assembly was dispersed.
- **Options:**
  - *Raise the People's Army on the Volga* (1 resource): the party becomes armed. Repression rises sharply, Bolshevik relations fall sharply, the peasants and middle classes gain while the workers lose, the right wing gains strength with more dissent, and the left wing's and the Bund's dissent rise. The first two armies bring foreign aid to the Whites. Legality falls by 1 if it is above 1.
  - *Organise peasant self-defence, not an army* (free): a little white aid, a boost among the peasants, repression rises, Bolshevik relations fall, and the right wing gains a little.
  - *Reject armed struggle against the Soviet government* (free): the party is no longer armed. The Bund gains strength, Bolshevik relations rise, repression falls a little, and the right wing's dissent rises a lot.
  - Return card to hand.

#### What Is to Be Done?
- **Drawn:** Mensheviks only, under Bolshevik rule, from November 1918 (dix 44), and only until the party has adopted its programme. Cooldown 2 months.
- **What it is:** the party's own economic programme against War Communism: an end to requisitioning, free trade in grain, independent unions and a regulated market.
- **Options:**
  - *Adopt the programme and publish it* (1 resource): the programme is adopted (and the date is recorded). A strong boost among the workers, peasants, railway workers and middle classes. The unions gain strength with much less dissent, the left wing gains a little, repression rises, bread rises, and Bolshevik relations fall.
  - *Study it more before adopting* (free): the unions gain a little strength, and the card comes back after one month.
  - Return card to hand.

#### Party Unity
- **Drawn:** any party, at any time. Cooldown 4 months.
- **What it is:** managing the quarrels between the party's currents.
- **Options:**
  - *The left wing* (the intl current): its dissent falls sharply, and the main line's dissent rises a little.
  - *The main line*: its dissent falls sharply, and the left wing's dissent rises a little.
  - *The right wing* (only if it exists): its dissent falls sharply, and the left wing's dissent rises a little.
  - *The organisers* (only if they have strength): their dissent falls sharply.
  - *The Bund* (only if it has strength): its dissent falls sharply, and the main line's dissent rises a little.
  - *A party conference for everyone* (1 resource): every current's dissent falls.
  - Return card to hand.

#### Workers' Meeting
- **Drawn:** Mensheviks only. Cooldown 3 months.
- **What it is:** a meeting at a factory or a garrison. What happens depends on the state of the party. In 1917, if Bolshevik influence is 55 or more and the Bolsheviks do not rule, and the phase is early (up to January 1918), a Bolshevik crowd packs the hall. Under Bolshevik rule with repression at 30 or more, the Cheka turns up at the gate. Otherwise it is the main rally.
- **Options, Bolshevik crowd:**
  - *Stay on the platform and argue it out* (free): the workers gain a little, the soldiers lose a little, Bolshevik influence falls a little, and the left wing gains strength.
  - *Have the workers' militia clear the hall* (free): workers and soldiers lose, Bolshevik influence rises, and soviet democracy falls.
  - *Cancel the meeting* (free): the workers lose, and Bolshevik influence rises a little.
- **Options, Cheka crowd:**
  - *Speak anyway* (free): the workers gain, repression and soviet democracy rise, and the unions' dissent rises.
  - *Cancel the meeting* (free): the workers lose a little.
- **Options, main rally** (choose the theme):
  - *Defend the revolution, and the army that defends it* (at war only): workers, soldiers and middle classes gain, the main line gains strength, the left wing's dissent rises, and the war weariness rises a little.
  - *Peace without annexations, and bread* (at war only): workers and soldiers gain a lot, the left wing gains strength, and army discipline falls a little.
  - *Unity of the whole democracy, and the Soviets as its organs*: workers, railway workers and soldiers gain, soviet democracy rises, and relations with the partner and the third party rise.
  - *The eight-hour day, the unions and the factory committees*: a strong boost among the workers and railway workers, the unions gain strength, and the ruble falls a little.
  - *Whatever the audience is asking about* (free): a small boost among the workers, soldiers and railway workers.
  - Return card to hand.

#### Workers' Militia
- **Drawn:** Mensheviks only, while the party is legal (legality at 1 or more). Cooldown 5 months.
- **What it is:** arming the workers under the Soviet, or drilling them to defend the cities against the Whites.
- **Options:**
  - *Talk it over with the factory committees* (free): the workers gain a little, and the left wing's dissent rises a little.
  - *Organise militias in the factories* (1 resource; only while the Bolsheviks do not rule): militia +2, a boost among the workers, the right threat falls, Bolshevik influence rises a little, and the left wing's dissent rises.
  - *Drill the militia and place it under the Soviet* (only while the Bolsheviks do not rule, and a militia exists): militia +1, the right threat falls, soviet democracy rises, and the main line gains a little.
  - *Raise militias to defend the cities against the Whites* (only under Bolshevik rule): a boost among the workers, Red Army +3, Bolshevik relations rise, soviet democracy and repression fall a little, and the right wing's dissent rises.
  - Return card to hand.

#### Answering the Pogroms
- **Drawn:** Mensheviks only, at any time. Cooldown 8 months.
- **What it is:** the antisemitic smears and attacks on Jewish socialists and on the Soviet.
- **Options:**
  - *Confront it publicly, and name the authors* (free): the Bund's dissent falls sharply, soldiers and peasants lose a little, the right threat falls, and partner relations rise a little.
  - *Say nothing* (free): the Bund's dissent rises sharply, and soldiers gain a little.
  - *Organise defence and relief for the victims* (1 resource): the Bund gains strength and its dissent falls a lot, the nationalities and workers gain, and partner relations rise a little.
  - Return card to hand.

#### A Workers' Congress
- **Drawn:** Mensheviks only. Cooldown 8 months.
- **What it is:** Axelrod's old idea of a broad, non-party congress of unions, cooperatives and factory committees.
- **Options:**
  - *Call the congress* (1 resource): a strong boost among the workers, railway workers and soldiers, the unions gain strength, and soviet democracy rises. From the second congress on, the workers gain more and soviet democracy rises again.
  - *Spend the time preparing it, and call it later* (free): the unions gain strength with less dissent, and the card comes back after 3 months, not 8.
  - Return card to hand.

#### Reshuffle the Leadership
- **Drawn:** any party, at any time. Cooldown 6 months.
- **What it is:** the Central Committee's balance of currents, which sets the party's line between congresses.
- **Options** (choose which current to promote):
  - *The main line*: its strength rises a lot and its dissent falls; the left wing and the right wing lose some ground.
  - *The left wing*: its strength rises a lot and its dissent falls; the main line loses strength and the right wing loses a little.
  - *The right wing* (only if it exists): its strength rises a lot; the left wing loses and its dissent rises.
  - *The organisers* (only if they have strength): the unions gain a lot of say, and the main line and the left wing lose a little.
  - *The Bund* (only if it has strength): the Bund gains a lot of say, and the main line and the left wing lose a little.
  - Return card to hand.

#### Seats in Sovnarkom
- **Drawn:** Left SRs only, while they are in the government and the Bolsheviks rule. Cooldown 3 months.
- **What it is:** the Left SR commissars in Lenin's government, a lever and a hostage at once.
- **Options:**
  - *Carry out the land redistribution through Kolegaev's commissariat* (free): land pressure falls sharply, Bolshevik relations rise, the peasants gain, and the unions gain strength.
  - *Push Steinberg's revolutionary legality in the Council of Commissars* (free): repression and Bolshevik relations fall, soviet democracy rises, the right wing gains a little strength, and the left wing's dissent rises.
  - *Trade a commissariat for a policy* (needs at least 3 seats): one seat is given up, repression falls sharply, Bolshevik relations rise, and the right wing's and the organisers' dissent rise.
  - *Defend the party's seats against the Bolsheviks' encroachments* (free): Bolshevik relations rise, soviet democracy rises a little, the workers gain a little, and the main line's dissent falls.
  - Return card to hand.

#### The Split
- **Drawn:** Left SRs only, before the split, from May 1917 (dix 8). Cooldown 4 months.
- **What it is:** the choice of when the left wing leaves the SR party, or stays to fight inside it.
- **Options:**
  - *Found the party now*: the Left SRs become a separate party. Partner relations fall sharply, soviet democracy rises a little, the peasants and soldiers gain, the right wing's dissent rises, and membership falls by about four thousand.
  - *Plan to split in November, after the party's congress*: the peasants gain a little, the main line gains strength, and partner relations fall a little.
  - *Stay, and fight to take over the party*: partner relations rise, the left wing's dissent rises a lot, and the right wing gains a little strength with less dissent.
  - Return card to hand.

#### The Party Treasury
- **Drawn:** any party, once the party has at least 10 resources. Cooldown 3 months.
- **What it is:** the party's money, which has been sitting in the bank.
- **Options:**
  - *Fund the consumer cooperatives' grain purchases* (10 resources; the party must be legal): bread and the ruble rise, the peasants and workers gain, and the unions gain strength.
  - *Pay full-time organisers for every current* (10 resources): every current's dissent falls, and membership rises.
  - *Buy presses and paper, and start newspapers in the provinces* (15 resources; the party must be legal): workers, middle classes and peasants gain, membership rises a lot, and under Bolshevik rule repression rises.
  - *Set up a strike fund for the railwaymen and the printers* (15 resources; not for the Left SRs): workers and railway workers gain, the unions gain strength, and under Bolshevik rule Bolshevik relations fall and repression rises.
  - *Pay for lawyers, bail and food parcels for the arrested* (10 resources; Bolshevik rule with repression at 15 or more): repression falls, membership rises, and the left wing's dissent falls.
  - *Send grain and money to the famine on the Volga* (20 resources; legal; Bolshevik rule; from June 1921, dix 106): Bolshevik relations, soviet democracy and bread rise, repression falls, and the peasants gain a lot.
  - Return card to hand.

### Coalition Affairs

#### The Land Question
- **Drawn:** while the party is in the coalition, until a land decree has been issued. Cooldown 3 months.
- **What it is:** the land question, where the Kadets want nothing done until the Assembly meets and Chernov wants the transfers regulated by the committees.
- **Options:**
  - *Back the land committees' temporary transfers now* (contested law, "committees"): land pressure and Kadet relations fall sharply, partner relations and the right threat rise a little, the peasants and soldiers gain, and the land committees are set up.
  - *Wait for the Constituent Assembly* (free): land pressure rises, Kadet relations rise, the right threat falls a little, and the peasants lose support.
  - *Move state and Church lands to the committees at once* (contested law, "reform"): a smaller version of the first law. Land pressure and Kadet relations fall a little, partner relations and the peasants gain a little. The private estates are untouched.

#### Convene the Constituent Assembly
- **Drawn:** in the coalition, up to the second half of October 1917 (dix 19), and only until the election has been brought forward. Cooldown 4 months.
- **What it is:** the date of the election to the Constituent Assembly.
- **Options:**
  - *Demand an election in the first half of October* (1 resource; only before the first half of October 1917): contested law, "bring forward". Kadet relations fall, partner relations and soviet democracy rise, Bolshevik influence falls a little, the peasants, middle classes and workers gain, and the left wing's dissent falls a little. The phased-in version is charged twice (see the notes).
  - *Keep the date and spend the time on preparations* (free): the main line gains a little strength, and Kadet relations rise.

#### Food Supply
- **Drawn:** any party in the coalition. Cooldown 3 months.
- **What it is:** the grain monopoly, the fixed prices and the bread queues.
- **Options:**
  - *Enforce the monopoly and the fixed prices* (free): bread rises a lot, the peasants lose support, the workers gain a little, and partner relations fall a little.
  - *Raise the fixed price of grain* (free): bread rises, the ruble falls sharply, and the peasants gain a little.
  - *Send detachments to the villages to take grain* (free): bread rises sharply, repression rises a little, soviet democracy falls, land pressure rises, the peasants lose a lot, the workers gain, and partner relations fall.

#### Paying for the Revolution
- **Drawn:** while the Bolsheviks do not rule, from March 1917 (dix 4). Cooldown 3 months.
- **What it is:** the ruble, the cost of the war and the printing press.
- **Options:**
  - *Campaign for the Liberty Loan* (1 resource): the ruble rises, Kadet relations rise a little, and the middle classes gain.
  - *Demand a tax on war profits and the great fortunes* (contested law, "tax"): the ruble rises sharply, Kadet relations fall sharply, the right threat rises a little, the workers gain, and the middle classes lose.
  - *Cut the state's spending, and the army's* (free): the ruble rises, army discipline falls, war weariness rises a little, bread falls a little, and the bureaucrats and soldiers lose support.
  - *Let the Treasury print* (free): the ruble falls, bread rises, and the workers gain a little.

#### Ministry of Labour
- **Drawn:** any party in the coalition. Cooldown 3 months.
- **What it is:** strikes, the eight-hour day and the factory committees, in Skobelev's hands.
- **Options:**
  - *Arbitrate the strikes through conciliation boards* (free): the workers gain a little, the ruble and Kadet relations rise, the unions gain strength with less dissent, and the left wing's dissent rises a little.
  - *Legalise the factory committees and the eight-hour day* (contested law, "committees"): the workers and railway workers gain a lot, the ruble falls, Kadet relations fall, the unions gain strength, and the right wing's dissent rises.
  - *Forbid the committees to interfere with management* (free; Skobelev's circular): the workers lose a lot, the ruble and Kadet relations rise, Bolshevik influence rises, and the left wing's dissent rises.

#### War Aims
- **Drawn:** while the war lasts. Cooldown 3 months.
- **What it is:** the war and the peace, between the Allies' wish for an offensive and the soldiers' wish for peace.
- **Options:**
  - *Send a new note to the Allies on war aims* (contested law, "note"): war weariness and Kadet relations fall a little, and soldiers and workers gain a little.
  - *Back the Stockholm conference of the International* (contested law, "stockholm"): war weariness and Kadet relations fall sharply, army discipline falls a little, soldiers and workers gain, the left wing gains strength, and the right wing's dissent rises. The Stockholm total rises by one.
  - *Prepare the offensive with the Allies* (free): war weariness and army discipline rise, Kadet relations rise, the middle classes gain, the soldiers lose, the main line gains a little strength, and the left wing's dissent rises.
  - *Sound out Germany through neutral intermediaries* (contested law, "separate"; needs the Stockholm total at 2 or more): war weariness and Kadet relations fall sharply, the right threat rises, soldiers gain, and the right wing loses strength but gains dissent.

#### Army Committees
- **Drawn:** while the war lasts. Cooldown 3 months.
- **What it is:** the soldiers' committees set up by Order No. 1, and how much authority the officers keep.
- **Options:**
  - *Restore officers' authority; keep the committees only for supply* (contested law, "authority"): army discipline rises sharply, Bolshevik influence, the right threat and Kadet relations rise, the soldiers lose, the main line gains a little, and the left wing's dissent rises a little.
  - *Trust the committees, and send commissars to every unit* (contested law, "trust"): army discipline rises a little, the right threat rises a little, Kadet relations fall a little, the soldiers gain strongly, and the right wing's dissent rises.
  - *Restore the death penalty at the front* (contested law, "death penalty"): army discipline rises sharply, Bolshevik influence, Kadet relations and the right threat rise, the soldiers and workers lose, and the left wing's dissent rises sharply.

#### Nationalities
- **Drawn:** any party in the coalition. Cooldown 4 months.
- **What it is:** the empire's peoples, from the Ukrainian Rada and Finland to Transcaucasia.
- **Options:**
  - *Recognise the Ukrainian Rada's autonomy* (contested law, "rada"): the nationalities gain a lot, Kadet relations fall, the right threat rises a little, and the right wing's dissent rises. Kadet ministers resign if they are in the cabinet.
  - *Let the Finnish Diet govern its own affairs* (contested law, "finland"): the nationalities gain a little, Kadet relations fall a little, and the right threat rises a little.
  - *Support a federal Transcaucasia led by the Georgian Mensheviks* (free): the nationalities gain a lot, the main line gains a little strength, and Kadet relations fall a little. It raises the Georgia support total.
  - *Insist on the unity of the Russian state* (free): the nationalities lose, the middle classes gain a little, Kadet relations rise, the right threat falls, and the right wing gains a little strength with less dissent.

#### Militia and Police
- **Drawn:** any party. Cooldown 4 months.
- **What it is:** the replacement of the tsarist police.
- **Options:**
  - *Build a militia answerable to the city dumas and the soviets* (free): the right threat falls, soviet democracy rises, Kadet relations fall a little, and the workers and middle classes gain.
  - *Recall the experienced police officers* (contested law, "old"): the right threat and Kadet relations rise, soviet democracy and repression rise a little, the workers lose a lot, and the middle classes gain.
  - *Rely on the workers' guards* (contested law, "workers"): the right threat falls, Bolshevik influence rises, Kadet relations fall, the workers gain, and the militia grows by one.

### Soviet Affairs

#### Defend the Revolution
- **Drawn:** under Bolshevik rule, from June 1918 (dix 34). Cooldown 3 months.
- **What it is:** the Civil War, and the party's place in it.
- **Options:**
  - *Send our members to the Red Army, as a gesture of loyalty* (free; costs members): the Red Army gains 5, membership falls by about four thousand, repression falls, Bolshevik relations rise, the workers and soldiers gain, and the right wing's dissent rises. Legality rises by 1 after the second such gift, from April 1921 (dix 66), if the party is not yet fully legal.
  - *Say that we are for neither side* (free): the middle classes and peasants gain a little, repression rises a little, Bolshevik relations fall, and the right wing's dissent rises a lot.
  - *Support the defence of the cities, if the prisoners are released first* (free): the Red Army gains 3, repression falls a little, Bolshevik relations rise a little, and the workers gain a little.

#### Factory Representatives
- **Drawn:** under Bolshevik rule, from March 1918 (dix 28). Cooldown 3 months.
- **What it is:** the assemblies of factory delegates in Petrograd and Moscow, where the Bolsheviks are a minority, and which the government has begun to close.
- **Options:**
  - *Support the assemblies as the workers' own voice* (free): the workers and railway workers gain, soviet democracy and repression rise, and the unions gain strength.
  - *Make them a rival to the Bolshevik-controlled soviets* (contested law, "rival"): the workers and railway workers gain a lot, soviet democracy rises, repression rises sharply, Bolshevik relations fall sharply, and the left wing's dissent rises. Legality falls by 1 if it is above 1.
  - *Keep the party out of it* (free): the workers lose a little, the unions' dissent rises, and repression falls a little.

#### Famine Relief
- **Drawn:** under Bolshevik rule, from July 1921 (dix 108), if the party has not yet decided on the relief committee. Cooldown 2 months.
- **What it is:** the committee of public figures that Gorky proposed to collect relief for the Volga.
- **Options:**
  - *Join the committee, and send our members to work for it* (free): bread rises, repression and soviet democracy rise a little, the workers, peasants and middle classes gain, the unions gain strength, and foreign pressure rises if it is already there.
  - *Leave it to the government* (free): the peasants and middle classes lose, and repression falls a little.

#### Prisoners and the Cheka
- **Drawn:** under Bolshevik rule, from February 1918 (dix 26). Cooldown 3 months.
- **What it is:** the campaign for the socialists the Cheka has arrested, which takes members of the other parties every month.
- **Options:**
  - *Launch a public campaign for the prisoners* (contested law, "public"): repression falls, Bolshevik relations fall, soviet democracy rises, the workers and middle classes gain, and the left wing's dissent falls. Legality falls by 1 if repression is 30 or more.
  - *Use our contacts among the moderate Bolsheviks* (free; needs Bolshevik relations of 35 or more): repression falls, Bolshevik relations rise a little, the main line gains a little, and some prisoners are freed.
  - *Ask European socialists to demand their release* (free): repression falls a little, soviet democracy rises, and foreign pressure rises.

#### Union Independence
- **Drawn:** Mensheviks only, under Bolshevik rule. Cooldown 3 months.
- **What it is:** trade unions that are free of the state.
- **Options:**
  - *Petition for the union's independence through the Soviet* (free): the workers and railway workers gain, the unions gain strength with less dissent, soviet democracy rises a little, and repression rises a little.
  - *Back a railway and printers' strike in defence of union rights* (contested law, "strike"): the workers and railway workers gain a lot, bread falls, repression rises sharply, soviet democracy rises, Bolshevik relations fall, and the unions gain strength with less dissent. Legality falls by 1 if repression is 25 or more.
  - *Accept a compromise: the unions advise but do not oppose* (free): the workers and railway workers lose, repression falls, Bolshevik relations rise, and the unions lose strength while their dissent rises.

#### Money and the Market
- **Drawn:** under Bolshevik rule, from April 1918 (dix 30). Cooldown 3 months.
- **What it is:** the ruble, the market and the peasants. Until March 1921 (dix 100) the ruble is nearly worthless and the peasants sell on the black market. After that the New Economic Policy has brought the market back.
- **Options:**
  - *Campaign for a free grain market in place of requisitioning* (contested law, "market"; only until March 1921): the ruble and bread rise, Bolshevik relations fall, repression rises a little, and the peasants and workers gain.
  - *Rebuild the cooperatives, which still trade with the villages* (free): the ruble and bread rise, the peasants and middle classes gain, and the unions gain strength.
  - *Call for a currency backed by gold* (only once the New Economic Policy has begun, or from March 1921): the ruble rises sharply, and the middle classes and workers gain.

#### Cooperatives
- **Drawn:** under Bolshevik rule, at any time. Cooldown 4 months.
- **What it is:** the consumer and rural cooperatives, which can move food that the state cannot.
- **Options:**
  - *Expand cooperative food distribution* (free): bread rises, repression rises a little, the workers, middle classes and peasants gain, the unions gain strength, and the cooperative count rises.
  - *Support cooperative credit and the rural cooperatives* (free): bread and the ruble rise, the peasants and middle classes gain, +1 resource, and the cooperative count rises.
  - *Defend the cooperatives against nationalisation* (free): repression and soviet democracy rise a little, the middle classes and workers gain, and the unions gain strength with less dissent.

### The pinned cards

Pinned cards are always available and are not drawn from a deck. Besides the advisors, there are three: the Cabinet, the Council and Wait and See.

#### The Cabinet

- **Shown when:** the party is in the coalition and the Bolsheviks do not rule, or the Left SRs are in the government.
- **Cooldown:** a change of course takes a turn, and the cabinet cannot change course again for two months.
- **Starting settings:** land, leave it to the Assembly (setting 0); food, enforce the grain monopoly (setting 1); war, defensive (setting 0); order, ordinary law (setting 0); labour, leave industry to the employers (setting 0); finance, the printing press (setting 0).
- **Ongoing effects:** each setting also has a monthly effect (from `policyDrift` in `source/model.js`), listed below with the settings. The immediate effect of a change is on the card itself.
- **Under the Left SRs' government** (Bolshevik rule, Left SRs in the government): only the land and order areas are shown.

Choosing a setting other than the current one changes the policy. The card's text also reports the mood of the camps: the Kadets, the generals and Pravda.

##### Land (coalition or Left SRs in government)
- *Leave the land to the Constituent Assembly* (setting 0, free; the starting setting): land pressure rises and Kadet relations rise. No monthly effect.
- *Let the land committees regulate the transfers of land* (setting 1; contested law): land pressure falls, Kadet relations fall, the right threat rises a little, the Kadets and generals are angered, and the peasants gain. Monthly: land pressure falls a little and the right threat rises a little.
- *Socialise the land now, by decree* (setting 2; contested law; needs partner relations of 50 or more, or the player is an SR or a Left SR): private ownership of land is abolished. Land pressure and Kadet relations fall sharply, the right threat rises, the Kadets and generals are angered sharply, the peasants gain, and the right wing's dissent rises. Monthly: land pressure falls faster and the right threat rises faster.

##### Food (full coalition only)
- *Leave the grain trade to the market* (setting 0, free): bread falls, the ruble rises a little, the peasants gain a little, and the workers lose a little. Monthly: bread falls and the ruble rises.
- *Enforce the grain monopoly and fixed prices* (setting 1, the starting setting): bread rises, and the peasants lose a little. No monthly effect.
- *Send detachments to requisition grain* (setting 2, free): bread rises sharply, repression rises a little, soviet democracy falls, and the peasants lose a lot. Monthly: bread rises, repression rises, soviet democracy falls, and land pressure rises.

##### War (full coalition, while at war)
- *Fight a defensive war* (setting 0, free; the starting setting): Kadet relations rise a little. No monthly effect.
- *Press for a general peace: Stockholm and the neutrals* (setting 1; contested law): war weariness and Kadet relations fall, the Kadets and generals are angered, the Bolsheviks are less angry, and the Stockholm total rises by one. Monthly: war weariness and army discipline fall a little.
- *Prepare an offensive with the Allies* (setting 2; contested law): war weariness and army discipline rise, Kadet relations rise, the Bolsheviks are angered and the generals less so, the soldiers lose, and the offensive is prepared. Monthly: war weariness rises and army discipline falls.

##### Order (coalition or Left SRs in government)
- *Govern by the ordinary law* (setting 0, free; the starting setting): no change. No monthly effect.
- *Introduce emergency measures against disorder* (setting 1; contested law): the right threat falls, repression rises, soviet democracy falls, Kadet relations rise, the generals are reassured and the Bolsheviks angered. Monthly: the right threat falls, repression rises, soviet democracy falls and Bolshevik influence falls a little.
- *Proclaim broad liberties and an amnesty* (setting 2; contested law): soviet democracy rises, Bolshevik relations rise, the right threat rises a little, the generals and Kadets are angered, and the Bolsheviks are less angry. Monthly: soviet democracy rises and the right threat rises a little.

##### Finance (full coalition only)
- *Pay for the state with the printing press* (setting 0, free; the starting setting): bread rises a little. No monthly effect.
- *Tax war profits and the rich, and float a Liberty Loan* (setting 1; contested law): the ruble rises, Kadet relations fall sharply, the Kadets are angered, the workers gain and the middle classes lose. Monthly: the ruble rises.
- *Borrow from the Allies, on their terms* (setting 2; contested law; needs the war to be on): the ruble rises, Bolshevik relations fall, war weariness rises a little, the Bolsheviks are angered, and the soldiers lose a little. Monthly: the ruble rises faster while at war, and war weariness rises a little.

##### Labour (full coalition only)
- *Leave industry to the employers* (setting 0, free; the starting setting): the ruble rises a little and the workers lose a little. Monthly: the ruble rises a little and Bolshevik influence rises a little.
- *Guarantee the eight-hour day and the factory committees* (setting 1; contested law): the workers gain, Kadet relations fall, the ruble falls, and the Kadets and generals are angered. Monthly: the ruble falls and Bolshevik influence falls a little.
- *Regulate industry through the state* (setting 2; contested law): the workers gain a little, the ruble rises a little, Kadet relations fall sharply, and the Kadets and generals are angered. Monthly: the ruble and bread rise a little, and soviet democracy falls a little.

##### The Kadets (full coalition only)
- *Invite the Kadets back into the government* (free; needs the Kadets out and Kadet relations of 25 or more): Kadet relations rise sharply, the right threat falls, the middle classes gain, and the left wing's dissent rises.
- *Dismiss the Kadet ministers and govern with the Soviet parties alone* (needs the Kadets in and partner relations of 55 or more; contested law): Kadet relations fall sharply, the right threat rises, soviet democracy rises, the Kadets and generals are angered, the workers gain and the middle classes lose, and the right wing's dissent rises.

#### The Council

- **Shown when:** at least one advisor is in reserve (more than four are available).
- **Cooldown:** three months after any change.
- **What it does:** the council is four advisors at a time. Each advisor on the council offers one action, and the others wait in reserve. Changing the council uses up the turn's action.

There are three ways to change the council:

- **Draw a new council at random.** Four advisors are drawn from those available to the party, and the old council goes home.
- **Call on an advisor who is not on the council.** The chosen advisor comes in. The player then picks which of the four current members gives up the seat, and the newcomer takes it. The council stays at four.
- **Replace a member.** The player picks one of the four to drop. Then the player chooses which reserve advisor takes the seat, or lets a random one from the reserve take it.

An advisor appears in these choices only if the party can use them (see the Advisors section) and they are in the right place: in reserve to be called, or on the council to be dropped.

#### Wait and See

- **Shown when:** always. It has no conditions and no cooldown.
- **What it does:** nothing. It uses up the turn's action, so the turn ends. The card says that nothing was done this turn, and nothing was undone.

#### Other pinned card

`cancel_advisor_action.scene.dry` is a supporting scene that gives back the turn's action and resets the cooldown of the last advisor or Cabinet action. It is not a pinned card, and no scene file in the repository links to it by name.

## The advisors

There are 29 advisors. Each belongs to one party. Each has one or two actions, and an advisor can act only when they are on the council and the party can use them (their party, or lent to it: see the shared table). All advisors share one cooldown: after any advisor action, no advisor can act for 6 months.

The faction column gives each advisor's current, using the party's own name for it. The dates are the first half of the month in which the threshold is reached. Where a date comes from an event rather than a fixed date, the event is named.

### Mensheviks (16)

The Mensheviks' currents are the Revolutionary Defencists (defencist, the main line), the Internationalists (intl, the left wing), the Right Defencists (rightdef, the right wing), the trade unionists and cooperators (unions), and the Bund.

| Advisor | Faction | Arrives | Leaves | What the action does |
|---|---|---|---|---|
| Julius Martov | Internationalists (intl) | The Martov Returns event, from the second half of May 1917 | First half of November 1920 (the fixed date). Also removed by the Wrangel Leaves Crimea event, from the same date under Bolshevik rule | All-Socialist Government: talks with the SRs, Left SRs and moderate Bolsheviks. Partner relations +4, Left SR and Bolshevik relations +6, the left wing gains strength, and the right wing's dissent rises. |
| Fyodor Dan | Revolutionary Defencists (defencist) | Start | First half of August 1921, in The Arrests of 1921 (from that date under Bolshevik rule) | Soviet Floor Manager: the workers, soldiers and railway workers gain, soviet democracy rises a little, and the main line gains a little. |
| Irakli Tsereteli | Revolutionary Defencists (defencist) | The Peace Without Annexations event, from April 1917 | First half of February 1918 (the fixed date). Also removed by The October Revolution if the Bolsheviks take power | Coalition Broker (full coalition only): Kadet relations +5, partner relations +4, the right threat falls, the left wing's dissent rises a little, and the main line gains a little. |
| Nikolai Chkheidze | Revolutionary Defencists (defencist) | Start | From the second half of September 1917, in The Petrograd Soviet Votes, if Bolshevik influence is 40 or more. Also removed by The October Revolution if the Bolsheviks take power | Chairman's Gavel: every current's dissent falls by 4, and soviet democracy rises a little. |
| Matvei Skobelev | Revolutionary Defencists (defencist) | The First Coalition event, from May 1917 (dix 9) to the second half of October 1917 | Removed by The October Revolution (from the first half of November 1917) if the Bolsheviks take power | Labour Arbitration (full coalition only): Kadet relations and the ruble rise, the workers lose a little, and the unions gain strength. |
| Kuzma Gvozdev | Organisers (unions) | Start | Removed by The October Revolution if the Bolsheviks take power | Defence-Industry Pact (only while the war lasts): the workers and railway workers gain, the ruble and Bolshevik influence rise a little, and the unions gain strength. |
| Alexander Potresov | Right Defencists (rightdef) | Start | First half of September 1918, in The Red Terror (from that date under Bolshevik rule; Mensheviks only) | Den Editorial: Bolshevik influence and Bolshevik relations fall, the middle classes and workers gain, and the right wing gains strength. |
| Pavel Axelrod | Organisers (unions) | The Martov Returns event, from the second half of May 1917 (he came on Martov's train) | First half of October 1917 (the fixed date), when he leaves for Stockholm | Western Socialist Network: soviet democracy rises a little, repression falls a little, +2 resources, and foreign pressure rises. |
| Raphael Abramovich | Bund | Start | First half of November 1920 (the fixed date). Also removed by the Wrangel Leaves Crimea event, from the same date under Bolshevik rule | Bridge-Builder: every current's dissent falls by 6. |
| Mikhail Liber | Bund | Start | No date; no event removes him | Jewish Workers' Link: the nationalities and workers gain, and the Bund gains strength with less dissent. |
| Eva Broido | Internationalists (intl) | The Menshevik Unity Congress event (from the second half of September 1917) | No date; no event removes her | Party Secretary: membership rises by 8 (scaled), the workers and middle classes gain, and the left wing gains a little strength. |
| Lidia Dan | Internationalists (intl) | Start | First half of August 1921, in The Arrests of 1921 | Family Bridge: the left wing's dissent falls a lot, and the main line's dissent falls a little. |
| Nikolai Sukhanov | Internationalists (intl) | Start | No date; no event removes him | Insider Chronicler: adds one to the party's insight counter, and the Left SR and Bolshevik relations rise a little. |
| Boris Batursky | Organisers (unions) | Start | First half of August 1921, in The Arrests of 1921 | Independent Unions: the workers and railway workers gain, the unions gain strength, and repression rises a little. |
| Lev Khinchuk | Organisers (unions) | Start | First half of May 1919, in Khinchuk Goes Over (from that date under Bolshevik rule, Mensheviks only), or in The Arrests of 1921 | Moscow Machine: bread +3, the workers and middle classes gain, and the unions gain a little strength. |
| Noe Zhordania | Revolutionary Defencists (defencist) | The Independent Georgia event, from June 1918 (dix 34) | From March 1921 (dix 100), in Georgia, the Strikes and Kronstadt, but only if Georgia has not survived | Georgian Model: land pressure falls, soviet democracy rises, +1 resource, the nationalities gain, and the main line gains strength. |

### SRs (6)

The SRs' currents are the Centre under Chernov (defencist, the main line), the Left SRs (intl, the left wing), the Right SRs (rightdef, the right wing), the Right Centre under Gots and Zenzinov (unions), and the Ufa delegation (bund).

| Advisor | Faction | Arrives | Leaves | What the action does |
|---|---|---|---|---|
| Viktor Chernov | Centre (defencist) | Start | First half of November 1920 (the fixed date). For a Left SR player he is removed at the split | Land Socialisation: the land law draft is circulated, land pressure falls, the peasants and soldiers gain, the main line gains a little, and the right wing's dissent rises. |
| Nikolai Avksentiev | Right SRs (rightdef) | Start | First half of November 1918, in Kolchak's Coup (from that date under Bolshevik rule) | Order and Republic: the right threat falls, Kadet relations rise, soviet democracy falls a little, the right wing gains strength, and the left wing's dissent rises. |
| Ekaterina Breshko-Breshkovskaya | Right SRs (rightdef) | Start | First half of December 1918 (the fixed date) | Founding Prestige: the peasants, soldiers and middle classes gain, and the right wing gains a little strength with less dissent. |
| Abram Gots | Right Centre (unions) | Start | First half of June 1920 (the fixed date) | Soviet Majority: partner relations +6, soviet democracy rises, the workers, soldiers and railway workers gain, and the unions gain a little strength. |
| Vladimir Zenzinov | Right Centre (unions) | Start | First half of November 1918, in Kolchak's Coup | Party Machine: membership rises by 20 (scaled), the peasants and workers gain, and the unions gain strength with less dissent. |
| Vladimir Volsky | Ufa delegation (bund) | The Komuch event, from the second half of May 1918 (dix 33), for an SR player under Bolshevik rule | No date; no event removes him | Two actions, both under Bolshevik rule. *Komuch*: he sets up an armed government on the Volga, which starts the armed struggle, brings foreign aid to the Whites, and angers the Bolsheviks; the peasants and middle classes gain. *Compromise*: Bolshevik relations rise sharply, repression falls a little, the Bund gains strength, and the right wing's dissent rises a lot. |

### Left SRs (7)

The Left SRs' currents are the leadership of Kamkov and Spiridonova (defencist, the main line), the pro-Bolshevik Left SRs (intl, the left wing), the pro-coalition Left SRs under Natanson and Kolegaev (rightdef, the right wing), the village organisers (unions), and the Narodnik Communists (bund).

| Advisor | Faction | Arrives | Leaves | What the action does |
|---|---|---|---|---|
| Maria Spiridonova | Leadership (defencist) | Start | No date; no event removes her | Peasant Congress: a strong boost among the peasants, soldiers gain a little, the party's peasant organisation grows, partner relations fall, and the main line gains a little. |
| Boris Kamkov | Leadership (defencist) | Start | No date; no event removes him | Against the Treaty: a boost among the soldiers and peasants, the anti-Brest mood grows, Bolshevik relations fall, and the right wing's dissent rises. He can act only from the first half of November 1917 (dix 20) to the first half of September 1918 (dix 40). |
| Mark Natanson | Pro-coalition Left SRs (rightdef) | Start | First half of April 1919 (the fixed date) | Elder's Authority: every current's dissent falls by 6, and the right wing gains a little strength. |
| Isaac Steinberg | Pro-coalition Left SRs (rightdef) | The Vikzhel Talks event, from December 1917 (dix 21), under Bolshevik rule if the Left SRs enter the government; or the Seven Commissars event, from December 1917 (dix 22), for a Left SR player after the split | First half of July 1918, in The German Ambassador (from that date, Left SR player under Bolshevik rule) | Revolutionary Legality (only while the Left SRs are in the government): repression falls sharply, soviet democracy rises, Bolshevik relations fall a little, and the right wing gains a little strength. |
| Andrei Kolegaev | Pro-coalition Left SRs (rightdef) | The Vikzhel Talks event or the Seven Commissars event (as Steinberg) | First half of July 1918, in The German Ambassador | Land Decree (only while the Left SRs are in the government): land pressure falls sharply, the peasants gain, and the unions gain a little strength. |
| Prosh Proshian | Village organisers (unions) | The Vikzhel Talks event or the Seven Commissars event (as Steinberg) | First half of July 1918, in The German Ambassador | Telegraph Lines (only while the Left SRs are in the government): adds one to the insight counter, membership rises by 10 (scaled), the workers and railway workers gain, and the unions gain a little strength. |
| Pyotr Aleksandrovich | Pro-coalition Left SRs (rightdef) | Seats on the Cheka's Board, from January 1918 (dix 24), when the Left SRs take their seats | First half of July 1918, in The German Ambassador | Inside the Cheka (only while the Left SRs are in the government): repression and Bolshevik relations fall a little, the right wing gains a little strength, and a shield against arrests is set. |

### Shared advisors (lent)

No advisor belongs to two parties, but four can be lent to another party. An advisor is lent when the party's alliance with the partner or the third party reaches the coalition level (relations of 75 or more). The lending happens once, and only if the advisor is not already available to that party. A lent advisor keeps their own departure date.

| Advisor | Own party | Lent to, at coalition with the partner | Lent to, at coalition with the third party |
|---|---|---|---|
| Viktor Chernov | SRs | Mensheviks and Left SRs (as their partner) | Not lent |
| Fyodor Dan | Mensheviks | SRs (as their partner) | Not lent |
| Maria Spiridonova | Left SRs | Not lent | Mensheviks and SRs (as their third party) |
| Julius Martov | Mensheviks | Not lent | Left SRs (as their third party) |

---

## Endings and achievements

A game ends in December 1921, or earlier if the party is crushed. There are twelve endings in three groups.

### Crushed: the party destroyed by force

- **Kornilov's Russia** (*a loss*, September 1917). Kornilov's cavalry enters Petrograd, the Soviet is dissolved, and the revolution of February ends in the barracks. Comes when Kornilov's force beats the resistance in the Kornilov Affair. Historians think his march was doomed; in the game it is a close thing.
- **The Generals' Republic** (*a loss*, from autumn 1918, only if the Bolsheviks never took power). The officers find the republic's hold on the army weak, send the Assembly home and dissolve the soviets. Comes from the generals' plot, a lost landowners' rising or a successful generals' march, when the threat from the Right is too high.
- **White Russia** (*a loss*, during the Civil War). The Whites reach Moscow; the soviets are dissolved, the workers' organisations banned, and the socialist leaders share the officers' prisons with the Bolsheviks. Comes when the White front reaches 72.

### Historical: the party dissolved or driven abroad, as in our world

- **Exile** (Mensheviks). In January 1922 the party's leaders are expelled from Russia and found the *Socialist Courier* in Berlin. "It was right about almost everything, and it lost." Comes when the party ends 1921 expelled or banned, or with too few members (see [The exile warning](#the-exile-warning)).
- **The One-Party State** (Mensheviks; *the historical ending, a variation*). The revolution has become a state, and the state a party. The Mensheviks are tolerated in the unions and a few soviets: a memory permitted to exist as long as it is quiet. The NEP has come without political freedom.
- **Prisoners of the Right and the Left** (SRs). The party that won the only free election is crushed between Kolchak's officers and the Cheka; in 1922 thirty-four of its leaders stand in the first Soviet show trial. "Its name was Land and Freedom, and it had neither."
- **July 1918** (Left SRs). The party rises in July 1918, or is squeezed out of the government a year later; by May 1921 its activity has ceased. "It had the best slogan of the revolution, and the best martyrs."

### Won: something of February saved

- **The Constituent Republic** (*a win*). The Assembly, which in our world sat for thirteen hours, governs: it passes the land law, ends the war and writes a constitution (a federal republic of soviets, a presidential republic, or an Assembly republic, as the player chose). Comes when the Bolsheviks never hold power at the end of 1921.
- **The All-Socialist Government** (*a win*). The Vikzhel agreement of November 1917 is signed and holds: for four years Russia is governed by every party that called itself socialist, Lenin and Martov in the same cabinet. Slow, quarrelsome and hungry, and not a dictatorship.
- **Soviet Democracy** (*the best ending*; Mensheviks and SRs). Under the Bolsheviks, the party wins free soviet elections and an early NEP: a one-party state willing to listen, and an opposition willing to wait. It needs Soviet democracy of at least 45, a legal or tolerated party, the 1919 programme or an early NEP, the promise of free soviets in December 1920, and repression of 40 or less.
- **The Soviet Coalition** (*a win*; Left SRs). The Left SR commissars never resign and never rise: a government of two parties, one of which holds the guns and the other the villages.
- **The Peasant Soviets** (*a win*; Left SRs). Outside the government and without the rising, the party organises the peasant soviets, and in March 1921 trades peace in Tambov for free rural soviets. The cities belong to the Bolsheviks; the volost soviets belong to whoever the peasants send to them.

At the end of every game, the **recap** shows the run as a chart and lists the party's peak support, its best election, the contested measures it passed and the opposition camps it faced.

### The exact rules

#### When an ending is decided

1. **Immediate endings** (in `post_event`, on every visit, if the game has not ended):
   - `white`: the Bolsheviks rule and the White front is 72 or more.
   - `exile`: the Bolsheviks rule, legality is 0 or lower, and members are 12 × `mem_scale` or fewer. This applies on any difficulty.
   - `final`: the year is 1922 or later. (December 1921 sets `final` when the month completes.)
2. **The `final` ending** is resolved in `game_over`, as follows:
   - If the Bolsheviks do not rule: `all_socialist` if the Vikzhel deal was made (`vikzhel_deal`), otherwise `constituent_republic`.
   - If the Bolsheviks rule, and soviet democracy is 45 or more, legality is 2 or more, the NEP is early or the programme was adopted (`nep_early` or `program_adopted`), `free_soviets` is set, and repression is 40 or less: `soviet_democracy`.
   - If legality is at or below the threshold (0 on Easy, 1 otherwise), or members are at or below 12 × `mem_scale` (Easy) or 20 × `mem_scale` (other): `exile`.
   - Otherwise: `one_party`.
3. **Party remapping:**
   - SRs: `exile` and `one_party` become `sr_historical`.
   - Left SRs: `exile`, `one_party` and `soviet_democracy` become `soviet_coalition` if the Bolsheviks rule, the Left SRs are in government, and they have not risen (`lsr_in_gov` and not `lsr_rising`). Otherwise `peasant_soviets` if the Bolsheviks rule, `lsr_peasant_soviets` is set and legality is 1 or more. Otherwise `lsr_historical`.
   - So `exile` and `one_party` remain only for the Mensheviks, and a Left SR cannot end in `soviet_democracy`.

The endings `kornilov` and `right_coup` are set by events: `kornilov` by the Kornilov Affair (force greater than resistance), `right_coup` by the generals' plot (the threat from the Right at 65 or more) or by a lost landowners' rising or generals' march.

#### The endings in one table

| Ending | Set when | Who | Page label |
|---|---|---|---|
| `kornilov` | the Kornilov Affair: force beats resistance | any | "Military dictatorship. A loss." |
| `right_coup` | the generals' plot, the landowners' rising or the generals' march succeeds | any | "Military dictatorship. A loss." |
| `white` | Bolsheviks rule and front ≥ 72 | any | "White dictatorship. A loss." |
| `exile` | final: legality low (see above), or immediate | Mensheviks only | "The historical ending." |
| `sr_historical` | an SR game ends in exile or one-party | SRs | "The historical ending." |
| `lsr_historical` | Left SR game without the good endings | Left SRs | "The historical ending." |
| `one_party` | final, Bolsheviks rule, not exile or soviet democracy | Mensheviks only | "The historical ending, a variation." |
| `soviet_coalition` | Left SRs in government under the Bolsheviks at the end, and not risen in July 1918 | Left SRs | "A win." |
| `peasant_soviets` | Left SRs under the Bolsheviks, peasant soviets, legality 1 or more | Left SRs | "A win." |
| `all_socialist` | final, no Bolshevik rule, Vikzhel deal | any | "A win." |
| `constituent_republic` | final, no Bolshevik rule, no Vikzhel deal | any | "A win." |
| `soviet_democracy` | final, under the conditions above | Mensheviks and SRs | "The best ending." |

Which count as wins: the page labels "A win." for `soviet_coalition`, `peasant_soviets`, `all_socialist` and `constituent_republic`. `soviet_democracy` is labelled "The best ending." and counts as a win. The three "crushed" endings are `kornilov`, `right_coup` and `white`. The historical endings are `exile`, `one_party`, `sr_historical` and `lsr_historical`.

### Achievements

There are sixteen achievements: most are awarded at the end of the game, three by events along the way.

| Achievement | Condition |
|---|---|
| Game completed | always, on reaching the end page |
| Dustbin of History | ending `exile`, `one_party`, `sr_historical` or `lsr_historical` |
| The Soviet Coalition | ending `soviet_coalition` |
| The Peasant Soviets | ending `peasant_soviets` |
| Soviet Democracy | ending `soviet_democracy` |
| The Constituent Republic | ending `constituent_republic` |
| The All-Socialist Government | ending `all_socialist` |
| Komuch Without Kolchak | SR player; `komuch_alive`; front under 72; Bolsheviks rule |
| One Party | SR player; `lsr_kept`; no Left SR split (`lsr_split` not set) |
| Seven Commissars | Left SR player; `seven_commissars`; Bolsheviks rule |
| Nineteen of Thirty | `capitals_won` of 19 or more, and `spring_honoured` |
| Chto Delat' | `program_adopted` and `program_dix` under 72 (adopted before January 1920) |
| Free Georgia | `georgia_survives`; Bolsheviks rule |
| There Is Such a Party | take power from the crowd in the July Days (1917) |
| Vikzhel | sign the all-socialist government at the Vikzhel talks |
| All Power to the Assembly | the Constituent Assembly meets and governs |

**Note.** The page text for Komuch Without Kolchak says "that the Whites never capture". The code tests that the front is under 72 at the end.

---

---

## Difficulty and balance

### The three difficulties

| | Easy | Normal | Hard |
|---|---|---|---|
| Starting resources | +2 | as the party | −2 |
| Cards in the hand | 4 | 3 | 3 |
| Return a card to the hand | yes | yes | no |
| The party's currents | half the starting discontent, dissent ×0.85 | as the party | +10 starting discontent, dissent ×1.15 |
| The opposition's anger | ×0.88 | ×1 | ×1.12 |
| Resistance to Kornilov | +4 | 0 | −4 |
| Starting relations with the ally | as the party | as the party | −10 |
| Driven abroad at the end if | banned, or 12,000 or fewer members (scaled) | expelled or banned, or 20,000 or fewer (scaled) | as Normal |

The parties have their own difficulty too: the **SRs** are the gentlest campaign (the largest party, with the Assembly to win), and the **Mensheviks** and **Left SRs** the hardest (a small party on the losing side of history).

### How the endings fall

The tools in `tools/test/` play thousands of games headless (see [testing.md](testing.md)). The latest [balance report](reports/balance.md) (80 games a row, so each figure is good to within about ten points) gives a feel for the odds. "Cautious" is a random but sensible player, the closest thing to someone playing without a plan; the named strategies are scripted players who pursue one road deliberately. *Won*, *historical* and *crushed* are explained under [Endings](#endings-and-achievements).

| Party | Play | Won | Historical | Crushed |
|---|---|---|---|---|
| Mensheviks, Normal | without a plan | 4% | 68% | 29% |
| Mensheviks | a socialist government and the Assembly (`democrat`) | 36% | 64% | 0% |
| Mensheviks | the all-socialist government (`vikzhelist`) | 24% | 76% | 0% |
| Mensheviks | siding with the anti-Bolshevik front (`whiteaid`) | 13% | 29% | 59% |
| SRs, Normal | without a plan | 14% | 55% | 31% |
| SRs | land reform through the Assembly (`sr_land`) | 51% | 49% | 0% |
| SRs | Komuch and the People's Army (`sr_komuch`) | 35% | 0% | 65% |
| SRs | socialising the land, breaking the opposition at good odds (`breaker`) | 41% | 49% | 10% |
| Left SRs, Normal | without a plan | 6% | 94% | 0% |
| Left SRs | the coalition with the Bolsheviks (`lsr_coalition`) | 54% | 46% | 0% |
| Left SRs | outside the government, the peasant soviets (`lsr_villages`) | 23% | 78% | 0% |

What the numbers say about playing:
- **History is the default.** A party that drifts ends as it did in our world, or worse. Every win needs a plan and the patience to build towards it over years of game time.
- **Before October is where the game is won or lost.** Preventing the Bolshevik rising (by giving the land, peace and bread before November 1917, through a government of the Soviet parties, and by holding the Left SRs close) opens the Constituent Republic and the all-socialist government; a Bolshevik takeover leaves only the long road of the legal opposition.
- **Armed struggle is a road to the Whites.** Joining Komuch, and the Directory after it, ends in Kolchak's dictatorship more often than in the Assembly.
- **Legality is the Mensheviks' lifeline.** Under the Bolsheviks, keep it above "expelled" by the end of 1921: accept readmission to the soviets, stand with the Red Army when the Whites near Moscow, and keep repression down. The sidebar warns when the party is heading for exile.
- **Money accumulates.** Resources pile up over the years: spend them through the Party Treasury card on cooperatives, organisers, the press, strike funds, prisoners' relief and famine relief.

## Presentation

- **Pictures:** period photographs of 26 of the advisors and pictures for 24 events, from Wikimedia Commons; generated card art for every card; a title banner and party emblems. Event pictures can be turned off in Options.
- **Music:** four period recordings, played as a shuffled playlist from the start of a game: the Workers' Marseillaise (1917), Varshavianka (1928), Rachmaninoff playing his Prelude in C-sharp minor (1920) and the Internationale. Music can be turned off in Options, which shows the track playing.
- **Charts:** the parliaments are drawn seat by seat as hemicycles (d3-parliament); the ending recap draws the run as a line chart.
- **The ending recap:** at the end of every game, a chart of your support, Bolshevik strength, the threat from the Right and Soviet democracy across the whole run; your peak support and best election result; every contested measure you passed and how; and the opposition camps you faced and broke.
- **Accessibility:** a dark mode; an adjustable font size; on phones, touch targets of at least 44 pixels and card subtitles always visible. Dark mode and the font size are remembered between visits.
- **The writing:** plain, period-accurate prose. Events give the history as it happened unless the player has changed it, name the real people involved, and change their wording by party, so that each party is told its own story.

## History and its liberties

Red October's events follow the historical record of 1917-1921: the dates, the people, the votes and the numbers come from the histories listed in the [design plan's reading list](design-plan.md#sources-and-reading-list) (Rabinowitch, Galili, Brovkin, Getzler, Radkey, Smith, Liebich and others). Where historians disagree (the delegate totals of the Second Congress of Soviets, the Menshevik share of the Assembly vote, the deaths of the Red Terror), the text gives the range or the more cautious figure.

The liberties are deliberate:
- **The alternate paths are plausible, not proven.** A failed Bolshevik rising, a governing Assembly, a lasting Vikzhel government, Komuch without Kolchak, a Left SR bargain over Tambov: each is built from things that nearly happened, or that historians have argued could have, such as Brovkin's case for a Menshevik comeback in the spring 1918 soviet elections.
- **The parties the player does not lead follow history**, unless a strong alliance turns them: a Menshevik ally can talk the SRs out of Komuch, and a Left SR in coalition can stop the July 1918 assassination.
- **Numbers stand in for judgement.** Bread, the ruble, Soviet democracy and the rest are abstractions, tuned so that history is the likely outcome of drift, and the alternatives the reward of a plan.
- **Dates follow the Gregorian calendar** (New Style) throughout, so the October Revolution falls in November 1917; event texts give both dates for 1917.

## Glossary

| Term | Meaning |
|---|---|
| **Bund** | The General Jewish Labour Bund, a Jewish socialist party federated with the Mensheviks |
| **Cheka** | The All-Russian Extraordinary Commission, the Bolsheviks' political police, from December 1917 |
| **Committees of the Poor** | Village committees set up by the Bolsheviks in 1918 to requisition grain from the better-off peasants |
| **Constituent Assembly** | The body elected in November 1917 to give Russia a constitution; dispersed by the Bolsheviks after one sitting in January 1918 |
| **Defencists** | Socialists who supported defending Russia in the war while pressing for peace; the Mensheviks' majority in 1917 |
| **Directory** | The five-man All-Russian government formed at Ufa in September 1918; overthrown by Kolchak in November |
| **Dual power** | The division of authority between the Provisional Government and the Soviet, March to November 1917 |
| **Duma** | The Tsarist parliament; also the elected city councils (city dumas) |
| **Internationalists** | Socialists who opposed the war and the coalition with the liberals; Martov's current among the Mensheviks |
| **Kadets** | The Constitutional Democrats, the main liberal party |
| **Komuch** | The Committee of Members of the Constituent Assembly, the SR government at Samara, June to October 1918 |
| **Kornilov Affair** | General Kornilov's march on Petrograd in September 1917 |
| **Kronstadt** | The naval base whose sailors rose in March 1921, demanding free soviets |
| **NEP** | The New Economic Policy of March 1921: a tax in kind in place of requisitioning, and a return to the market |
| **Narodniks** | The nineteenth-century populists, ancestors of the SRs |
| **Pre-Parliament** | The Provisional Council of the Russian Republic, set up after the Democratic Conference in October 1917 |
| **Soviet** | A council of workers', soldiers' or peasants' deputies; the Congress of Soviets was their national assembly |
| **Sovnarkom** | The Council of People's Commissars, the Bolshevik government |
| **Tambov** | The province of the great peasant rising of 1920-1921, led by Antonov, an SR |
| **Trudoviks, Popular Socialists** | Small moderate populist parties close to the SRs |
| **Vikzhel** | The executive of the railway workers' union, which in November 1917 demanded a government of all the socialist parties |
| **Whites** | The anti-Bolshevik armies of the Civil War: Kolchak, Denikin, Yudenich, Wrangel |
| **Zimmerwald** | The 1915 conference of anti-war socialists; "the Zimmerwald line" was an immediate democratic peace |
