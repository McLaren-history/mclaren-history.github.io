<template>
  <div class="container container-f-one-rules">
    <MetaHead
      title="F1 Rules"
      description="The most important rules of the Formula One World Championship."
    />

    <Header />

    <ShowContentImages :images="images">
      <h2 class="title">Free Practice</h2>
      <p>
        Free practice is the time for teams to gather as much data as possible
        in preparation for the Grand Prix. While the drivers try to drive as
        many laps as they can during FP1, FP2 and FP3, all three Practices are
        used for different purposes:
        <br />
        FP1 is mostly used to TODO:
      </p>

      <h2 class="title">Qualifying</h2>
      <p>
        During the three stages of qualifying, the starting grid for the race
        (or the Sprint on Sprint-weekends) is determined. This is done by
        comparing the fastest individual drivers' lap times. Each driver can set
        as many times as they want, limited only by the time and the team's
        orders to save the tyres. Mostly, the drivers will perform two
        low-fueled runs including a slow Out-Lap (out of the pits), a hot
        ("flying") lap around the circuit and another slow In-Lap (to the pits).
        During the In- and Out-Laps, the drivers have to be careful not to
        interrupt other driver's hot laps.
      </p>
      <p>
        In Q1, lasting 18 minutes, the last five drivers are ruled out and
        assigned their positions according to the lap times. In Q2, it is all
        about finishing in the top ten to make it through to Q3 for the top 15,
        the other cars stay in the pits. In the last outing of 12 minutes, the
        top ten spots on the grid are decided upon. The drivers featured in Q3
        are issued a new set of soft tyres, to minimize the disadvantage of
        having to drive more often that the others.
      </p>
      <p>
        Another rule may exclude drivers from a race: if the session is not held
        in wet conditions, all drivers (targeting those from Q1) must finish
        their fastest lap within 7% of the pole sitter's time. If they fail to
        do so, it is up to the stewards to either permit the driver, or he is
        excluded from the race.
      </p>
      <p>
        In 2022, one rule concerning Q2 was abolished: the drivers going through
        to Q3 must no longer start on the tyres they qualified in Q2, but they
        can choose the tyres they want. This increases strategic options for the
        race and increases the focus to set the <strong>fastest lap</strong> (on
        mostly the softest tyres), instead of worrying about strategic
        decisions.
      </p>
      <p>
        The driver finishing with the fastest lap, will be credited as the
        official polesitter, no matter whether another potential Sprint race
        winner will take the first place grid spot or the fastest qualifier will
        start from P1.
      </p>

      <h2 class="title">Sprint</h2>
      <p>
        Sprint Qualifyings as they were called during the 2021 season, or since
        2022 just called "The Sprints", replace one session of Free Practice (on
        three race week-ends each the last and the current 2022 season), and
        determine the grid for the Grand Prix on Sunday. The week-ends'
        schedules are changed to reflect the 100-km long race. They take
        approximately half an hour, under ideal conditions (without Safety Car
        period, in perfect weather etc.). The starting grid is set on Friday's
        Qualifying, taking place after the FP1 while FP2 is held ahead of the
        Sprint on Saturday.
        <br />
        One big difference from Sunday's Race is that during a Sprint, there is
        no mandatory pit stop for tyre changes, instead, the drivers will just
        focus on driving and the strategy will most likely only come to play for
        Sunday's Grand Prix. However, it is not forbidden to stop and change to
        a set of fresh tyres or swap a damaged Front Wing.
        <br />
        While last year, Pole Position was awarded to the Sprint Qualifying's
        winner, fans demanded this to change so that the fastest car on Friday's
        Qualifying will be called "Pole Position". Although this does
        <a
          href="https://www.racefans.net/2022/02/14/f1s-sprint-race-rules-change-wont-end-pole-position-confusion/"
          target="_blank"
          >not end all emotional discussion about pole position </a
        >, the FIA stated that "the pole position [will be awarded to the
        qualifying's winner] for statistical purposes. Sunday's Grand Prix grid
        will still be determined by the results of the Saturday Sprint".
        <br />
        In 2021, when the concept of Sprint Qualifying was tested for the first
        time, the winner of the Sprint was awarded 3 championship points, the
        second place 2 points, and the third place 1 point. This rule has
        changed drastically for the 2022 season: the top eight drivers will
        receive points, counting down from 8 points in P1 down to 1 point for
        the eighth driver to cross the finish line (if they do not have pending
        time penalties).
      </p>
      <h2 class="title">Races</h2>
      <h2 class="title">Bolides</h2>
      <h3 class="title">DRS</h3>
      <p>
        The Drag Reduction System is a mechanical and electrical system that
        allows drivers to reduce drag provided by back wings on straights. The
        back wings normally should increase the speed of the speed with which
        the cars can drive around corners by applying extra downforce to the
        car. This downforce, however, is counterproductive when trying to
        achieve maximum speed (primarily on long straights), because it
        increases friction and, due to the form of the wing, air drag.
      </p>
      <p>
        Each track has at least two (maximum is three, Monaco only has one but
        is still allowed to be raced on due to its importance to fans) DRS zones
        where the drivers are allowed to activate the system.
      </p>
      <p>
        The drivers are only allowed to "open their wing" if they are within one
        second of the car ahead (including lapped cars!). Thus, the system aims
        to produce more and easier overtaking. The major redesigning of the cars
        ahead of the 2022 season, however, already decreased the difficulty of
        overtaking by reducing the amount of dirty air a driver will experience
        when following a car ahead. This leads to discussions whether to ban the
        DRS completely, because some people argue that it gives the driver
        behind an unfair advantage.
      </p>

      <h2 class="title">Championship Points</h2>
      <p>
        They are what the drivers and teams are racing for apart from money: the
        "currency" to compare drivers' and teams' results. The drivers are
        awarded these points based on their position they hold at the end of the
        race (after applying potential penalties etc). Since the major revision
        of the points system, the top ten drivers (to finish the Grand Prix, or
        technically finishing 90% of the Grand Prix) will receive points based
        on their position:
      </p>
      <table>
        <tr>
          <td>Position</td>
          <td>Points (in normal race) since 2010</td>
          <td>Points in Sprints (2022)</td>
        </tr>
        <tr>
          <td>1</td>
          <td>25</td>
          <td>8</td>
        </tr>
      </table>
      <p>
        If the race is stopped early, it depends from the race length that has
        been completed before the stop.
      </p>
      <p>
        Additionally, one point is awarded to the driver holding the fastest lap
        of the race, if the driver's classified finish position is in the top
        ten. This rule has been
        <a
          href="https://en.wikipedia.org/wiki/List_of_Formula_One_World_Championship_points_scoring_systems"
          target="blank"
          >reintroduced in 2019 after a 60-year stop (since 1960)</a
        >.
      </p>
      <p>
        Since 1991, all points scored by the drivers count towards the Drivers'
        Championship. Previously, only between (depending on the season) 4-15
        best results of the season counted in the Championship. This rule has
        been abandoned since reliability of bolides has massively increased.
      </p>
      <p>
        For more information on the topic, please see
        <a
          href="https://en.wikipedia.org/wiki/List_of_Formula_One_World_Championship_points_scoring_systems"
          >Wikipedia: List of F1 Point Scoring Systems</a
        >
      </p>

      <h2 class="title">Constructors</h2>
      <p></p>

      <h2 class="title">Drivers</h2>
      <p></p>

      <h2 class="title">Engineers</h2>
      <p></p>
    </ShowContentImages>
  </div>
</template>

<script>
import Image from '@/types/Image'

export default {
  name: 'F1Rules',
  created() {},
  data() {
    return {
      images: [],
    }
  },
}
</script>

<style scoped>
</style>