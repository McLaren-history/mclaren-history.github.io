<template>
  <div class="container index-container">
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
</template>

<script>
export default {
  name: 'Index',

  created() {},
}
</script>

<style scoped>
.additional-container {
  margin: 0 2rem;
}
</style>
