<template>
  <div class="container">
    <div class="text">
      <slot></slot>
    </div>
    <div class="images images-container">
      <ImageComponent
        v-for="(img, index) of images"
        :key="img.url[0] + index"
        :image="img"
        class="images"
      />
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import Image from '@/types/Image'

export default {
  name: 'Beginning',
  props: {
    images: {
      type: Array as PropType<Image[]>,
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
}

.images-container {
  display: grid;
  gap: 1rem;
  width: 100%;
}

.images-container > * {
  width: 100%;
}
</style>
