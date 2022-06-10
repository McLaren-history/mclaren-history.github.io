<template>
  <div class="container site-container">
    <scroll-parallax :speed="0.15" direction="y">
      <div class="text">
        <slot></slot>
      </div>
    </scroll-parallax>
    <scroll-parallax :speed="speed" direction="y">
      <div class="images images-container">
        <ImageComponent
          v-for="(img, index) of images"
          :key="img.url[0] + index"
          :image="img"
          class="images"
        />
      </div>
    </scroll-parallax>
  </div>
</template>

<script lang="ts">
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue'

import type { PropType } from 'vue'
import Image from '@/types/Image'

export default {
  name: 'Beginning',

  props: {
    images: {
      type: Array as PropType<Image[]>,
    },
    speed: {
      type: Number,
      default: -3
    }
  },
  components: {
    ScrollParallax
  }
}
</script>

<style scoped>
.site-container {
  display: grid !important;
  grid-template-columns: 1fr 1fr;
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
