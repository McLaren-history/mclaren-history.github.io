<template>
  <div class="base-container">
    <div class="container index-container">
      <MetaHead
        title="Start"
        description="The history McLaren Racing is reaching back to 1965. How and why did Bruce McLaren start an own Formula One team and how did it develop from underdog to one of the top teams in modern Formula One?"
      />

      <Header />
      <Beginning />
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

<style>
html {
  max-height: 950px;
}
</style>