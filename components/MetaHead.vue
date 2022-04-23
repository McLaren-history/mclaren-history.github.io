<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
    </Head>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    description: String,
  },
}
</script>