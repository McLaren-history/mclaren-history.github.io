<template>
  <div class="container container-f-one-rules">
    <Header />

    <ShowContentImages :images="images">
      <h2 class="title">Free Practice</h2>
      <h2 class="title">Qualifying</h2>
      <h2 class="title">Sprint Races</h2>
      <h2 class="title">Races</h2>
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