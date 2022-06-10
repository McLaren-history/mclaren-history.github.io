<template>
  <div class="base-container">
    <div class="container index-container">
      <MetaHead
        title="Start"
        description="The history McLaren Racing is reaching back to 1965. How and why did Bruce McLaren start an own Formula One team and how did it develop from underdog to one of the top teams in modern Formula One?"
      />

      <Header />
      <Beginning />

      <div class="additional-container">
        Read more about
        <nuxt-link :to="{ path: '/history' }"
          >the History of McLaren Racing</nuxt-link
        >
        or continue with McLaren's current success in
        <nuxt-link :to="{ path: '/f12022' }">the 2022 season</nuxt-link>.
      </div>
    </div>
    <br />
    <br />
    <div class="text">
      But why is McLaren Racing interesting? On the one hand, Mclaren belongs to
      the top-teams in Formula One and has taken part in the championship
      continuously since 1966, which makes it the team with the second-longest
      history in Formula One, only
      <a
        href="https://sports.stackexchange.com/questions/24235/which-formula-one-races-did-scuderia-ferrari-not-take-part-in"
        >Ferrari have taken part in every single season since 1950</a
      >. This is, although F1 is a very challenging sport, with the whole
      on-site staff and equipment having to travel every second week to another
      country, mostly even on another continent, and the extremely high costs of
      developing and building F1 cars. McLaren has experienced highs and lows
      during its 56 years of Formula One, but they have not missed a single
      season. The history, how Bruce McLaren built a racing team that would
      claim 8 Constructors' and 12 Drivers' Championships in Formula One alone,
      and the issues the team had to deal with will always be one of the
      greatest histories in modern sport.
      <br />
      Lastly, the history is interesting because currently, the McLaren team are
      "best of the rest" (fourth in the Constructors' Championship) and as such
      one of the most interesting teams as they are always balancing between the
      top three and all other slower teams.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',

  created() {
    console.log(
      'Welcome to this fan site about the history of McLaren Racing. The source code can be found on GitHub: https://github.com/McLaren-history/mclaren-history.github.io'
    )
  },
}
</script>

<style scoped>
.additional-container {
  margin: 0 2rem;
}
</style>
