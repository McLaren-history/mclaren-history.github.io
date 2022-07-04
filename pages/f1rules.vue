<template>
  <div class="container container-f-one-rules">
    <MetaHead
      title="F1 Rules"
      description="The most important rules of the Formula One World Championship."
    />

    <Header />

    <ShowContentImages :images="images" :speed="0.4">
      <h2 class="title">Race Weekend: Free Practice</h2>
      <p>
        Free practice is the time for teams to gather as much data as possible
        in preparation for the Grand Prix. While the drivers try to drive as
        many laps as they can during FP1, FP2 and FP3, all three Practices are
        used for different purposes:
        <br />
        FP1 is mostly used to find a general setup for the whole weekend with
        which the cars will be modified, because every track has different
        requirements from the teams, cars and drivers.
      </p>
      <p>
        In FP2, the drivers do often drive longer runs on the track which has
        already developed. This practice session can be used to find possible
        race strategies, which is why this run is especially important for
        Sunday's Grand Prix. After the session, the drivers will have completed
        many rounds, most of them with a full fuel tank. In this session, the
        teams do their best to simulate the race conditions, however, track
        evolution after Saturday does often require some more strategic
        decisions during the race.
      </p>
      <p>
        FP3 is the last training session before the qualifying and is held on
        Saturday. Here, the drivers try to get the best flying lap out of their
        cars in order to prepare for Qualifying. In this session, the conditions
        on track are most similar to those at Qualifying later that day,
        however, some aspects like track temperature might vary quite a bit.
      </p>

      <h2 class="title">Race Weekend: Qualifying</h2>
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

      <h2 class="title">Race Weekend: Sprint</h2>
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
      <p>
        Every race in the F1 calendar must be at least 305km long, meaning the
        number of laps completed around each circuit is different. The only
        exception to the 305km rule is Monaco where, due to the the slow average
        speed, the length is just higher than 260km. In total, an uninterrupted
        F1 race must be completed within two hours, the only exception being
        when the race is interrupted due to an incident on track, which allows
        this time to be extended to 3 hours.
      </p>
      <p>
        During a race, the drivers can be sanctioned with time penalties, which
        can be either 5 or 10 seconds long and can also be provided more than
        once. At the next pit stop after the penalty is given, the drivers may
        already serve that by standing still for the given amount of time before
        the mechanics are allowed to work on the cars and change the wheels or
        the front wing. Time penalties are the only two penalties that can often
        be observed in most races.
      </p>
      <p>
        Apart from unserved penalties, there is one other situation where the
        driver's ending position does not immediately correspond to the final
        result: If a driver has been lapped, he finishes the race directly after
        crossing the finish line when the chequered flag is waved. This means
        that some drivers will not complete the whole race's length, but rather
        one or two laps shy of the original number of laps.
      </p>
      <h2 class="title">Bolides</h2>
      <p>
        The Formula 1 bolides are highly regulated in the
        <a
          href="https://www.fia.com/sites/default/files/2022_formula_1_technical_regulations_-_iss_3_-_2021-02-19.pdf"
          target="_blank"
          >technical regulations</a
        >
        provided by the FIA. This document for the 2022 season includes a 158
        page long description of every part a car may or may not contain,
        focussing on providing equal chances to all the drivers.
      </p>
      <p>
        Since the 2021 season, there is a budget cap on the teams' expenses,
        meaning that McLaren-CEO Zak Brown has openly stated that the top-teams
        (of the last season, 2021, Mercedes and Red Bull) have won the
        championship with money only. For 2022 the cap has been reduced to $140
        million. All team chefs are highly disputing in the media whether this
        budget cap helps the sport to become more "inclusive" for the smaller
        teams and provide a competition that is more fair. On the other hand,
        Christian Horner (Red Bull) said repeatedly that the top teams "are are
        going to breach that $140million cap this year." (<a
          href="https://www.gpfans.com/en/f1-news/83559/mercedes-ferrari-red-bull-will-all-breach-budget-cap-this-season/"
          target="_blank"
          >GP Fans</a
        >) So, this debate is still ongoing and we will see whether the teams
        will be able to take part in every race this season or whether they will
        be forced to skip one or two because of the budget cap.
      </p>
      <h3 class="title">DRS</h3>
      <p>
        The Drag Reduction System is a mechanical and electrical system that
        allows drivers to reduce drag provided by back wings on straights. The
        back wings normally should increase the speed with which the cars can
        drive around corners by applying extra downforce to the car. This
        downforce, however, is counterproductive when trying to achieve maximum
        speed (primarily on long straights), because it increases friction with
        the ground and, due to the form of the wing, air drag.
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
      <table style="margin: auto">
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
        <tr>
          <td>2</td>
          <td>18</td>
          <td>7</td>
        </tr>
        <tr>
          <td>3</td>
          <td>15</td>
          <td>6</td>
        </tr>
        <tr>
          <td>4</td>
          <td>12</td>
          <td>5</td>
        </tr>
        <tr>
          <td>5</td>
          <td>10</td>
          <td>4</td>
        </tr>
        <tr>
          <td>6</td>
          <td>8</td>
          <td>3</td>
        </tr>
        <tr>
          <td>7</td>
          <td>6</td>
          <td>2</td>
        </tr>
        <tr>
          <td>8</td>
          <td>4</td>
          <td>1</td>
        </tr>
        <tr>
          <td>9</td>
          <td>2</td>
          <td>0</td>
        </tr>
        <tr>
          <td>10</td>
          <td>1</td>
          <td>0</td>
        </tr>
      </table>
      <p>
        If the race is stopped early, the given championship points depend from
        the race length that has been completed before the stop.
      </p>
      <p>
        Additionally, one point is awarded to the driver holding the fastest lap
        of the race, if the driver's classified finish position is in the top
        ten. This rule has been
        <a
          href="https://en.wikipedia.org/wiki/List_of_Formula_One_World_Championship_points_scoring_systems"
          target="blank"
          >reintroduced in 2019 after a 60-year abolishment period (since
          1960)</a
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
          target="_blank"
          >Wikipedia: List of F1 Point Scoring Systems</a
        >
      </p>

      <h2 class="title">Constructors</h2>
      <p>
        There are 10 constructors in Formula 1, who each design their own car.
        But not all of them are building an own power train: There are only four
        motor suppliers (Mercedes, Ferrari, Red Bull and Renault, while the last
        one is only used in Alpine's bolide), but in terms of chassis, every
        team is different from each other.
      </p>
      <p>
        When designing and building the chassis, the FIA has defined clear rules
        which must be followed, otherwise the teams are penalized or are not
        allowed to take part in a race or the championship at all.
      </p>
      <p>
        Out of the 10 constructors, some are likely to change (e.g., the Lotus
        Team was bought by Renault and, since 2021, races under the name
        "Alpine"). This change often arises when the team either goes bankrupt
        or finds another main sponsor, after which they might rename the team
        for the new season. Other teams, such as Ferrari or also
        <strong>McLaren Racing</strong>, are considered "teams by tradition",
        and they do often find sponsors even when they are not as successful as
        planned. This is one reason, why the McLaren F1 team still exists: They
        have always been able to live up to their team's and sponsors'
        identities and secured the funding necessary to continue racing in the
        highest class.
      </p>

      <h2 class="title">Drivers</h2>
      <p>
        At every race, there are two drivers for each of the 22 teams, however,
        junior or reserve drivers may replace a main driver temporarily. E.g.,
        German Aston Martin driver Sebastian Vettel was forced to skip the first
        two races due to his CoVid-19 infection. So, Nico Hülkenberg took his
        seat for those races.
      </p>
      <p>
        The drivers do all have their own fitness coach and must train in
        preparation for the race weekends. Most people think that Formula One is
        not a real sport due to the drivers not moving as much as in other
        sports, however, the drivers must be highly focussed, and they train
        their reflexes for situations like snap oversteer or (close) collisions
        with other drivers where the car may react unexpected. Currently, some
        of the drivers experience extreme health issues generated by porpoising,
        the most extreme yet being Lewis Hamilton who had issues getting out of
        his car
        <a
          href="https://www.reddit.com/r/formula1/comments/vakfnq/hamilton_my_back_is_killing_me/"
          target="_blank"
          >because his back hurt immensely</a
        >, after the 51 laps driven at the Azerbaijan Grand Prix.
      </p>
    </ShowContentImages>
  </div>
</template>

<script>
import Image from '@/types/Image'

export default defineComponent({
  name: 'F1Rules',
  created() {},
  data() {
    return {
      images: [
        new Image({
          url: [
            'https://www.reuters.com/resizer/12mzfBEY5iQtmqAc2Kj71c-0J9k=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MAXFF7PNV5PRXN7QPWRDJE4DVI.jpg',
          ],
          description:
            'Lando Norris topped the standings in FP3 at the Australian GP 2022',
          alt: 'Img not loaded',
          uploadDate: new Date(2022, 3, 7),
          displaySource: 'Reuters',
          height: 500,
          dataHigherWide: false,
        }),
        new Image({
          url: [
            'https://www.sportstiger.com/wp-content/uploads/2022/04/Lando-Norris-F1-sportstiger.jpg',
          ],
          description:
            'Before ending the qualifying early through a crash, Norris managed to secure P3 in the starting grid for the Emilia Romana GP at Imola.',
          alt: 'Img not loaded',
          uploadDate: new Date(2022, 3, 23),
          displaySource: 'SportsTiger',
          height: 500,
          dataHigherWide: false,
        }),
        new Image({
          url: [
            'https://www.racecar-engineering.com/wp-content/uploads/2018/10/RSZ_McLaren_Flow_Viz_Singapore_2018-e1543326526270-1920x1104.jpg',
          ],
          description:
            'Flow-vis paint helps engineers determine how the air flow is around the cars',
          alt: 'Img not loaded',
          uploadDate: new Date(2018, 9),
          displaySource: 'Race Car Engineering',
          height: 500,
          dataHigherWide: false,
        }),
        new Image({
          url: [
            'https://cdn-ddcfa.nitrocdn.com/JQYfXJOBUFneKLnOzezIRFhjbgnfyVnx/assets/static/optimized/rev-b313104/wp-content/uploads/2021/04/21155717/2021f1grid.jpg',
          ],
          description: 'F1 2022 Driver line-up',
          alt: 'Img not loaded',
          uploadDate: new Date(2021, 11, 23),
          displaySource: 'MotorSport Magazine',
          height: 500,
          dataHigherWide: false,
        }),
        new Image({
          url: [
            'https://cdn.motor1.com/images/mgl/7xXQ6/s3/mclaren-2021-f1-car-rules-rendering.jpg',
          ],
          description: "Focus on the McLaren 36's back wing",
          alt: 'Img not loaded',
          uploadDate: new Date(2021, 11, 23),
          displaySource: 'Motor1 UK',
          height: 500,
          dataHigherWide: false,
        }),
      ],
    }
  },
})
</script>

<style scoped>
td {
  padding: 0 15px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
</style>