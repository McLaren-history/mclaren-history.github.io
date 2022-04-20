<template>
  <Header />
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.1134658613482!2d-0.5492266840854912!3d51.34582413032482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875d823e938630b%3A0x7a3422bdbc9b028a!2sMcLaren%20Racing!5e0!3m2!1sde!2sde!4v1650011528674!5m2!1sde!2sde"
    width="600"
    height="450"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</template>

<script>
export default {
  name: 'Maps',
}
</script>

<style scoped>
iframe {
  height: calc(100vh - 12rem);
  width: calc(100vw - 4rem);
}
</style>