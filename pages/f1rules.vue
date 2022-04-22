<template>
  <div class="container container-f-one-rules">
    <Header />

    <ShowContentImages :images="images">
      <h2 class="title">Free Practice</h2>
      <p>
        Free practice is the time for teams to gather as much data as possible
        in preparation for the Grand Prix. While the drivers try to drive as
        many laps as they can during FP1, FP2 and FP3, all three Practices are
        used for different purposes:
        <br />
        FP1 is mostly used to
      </p>
      <h2 class="title">Qualifying</h2>
      <h2 class="title">Sprint</h2>
      <p>
        Sprint Qualifyings, as they were called during the 2021 season, or since
        2022 just called "The Sprint"s, replace one session of Free Practice (on
        three race week-ends each the last and the current 2022 season), and
        determine the grid for the Grand Prix on Sunday. The week-ends'
        schedules are changed to reflect the 100-km long race. Thus, they take
        about half an hour, under ideal conditions. The starting grid is set on
        Friday's Qualifying, taking place after the FP1, while FP2 is held ahead
        of the Sprint on Saturday.
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
        qualifying's winner] for statistical purposes Sunday's Grand Prix grid
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
      <h2 class="title">Championship Points</h2>
      <h2 class="title">Constructors</h2>
      <h2 class="title">Drivers</h2>
    </ShowContentImages>
  </div>
</template>

<script>
export default {
  name: 'F1Rules',
  created() {
    console.log('TODO: F1Rules')
  },
  data() {
    return {
      images: [],
    }
  },
}
</script>

<style scoped>
</style>