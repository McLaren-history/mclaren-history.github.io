<template>
  <div class="container card big-shadow">
    <div class="src">
      <p class="description">
        {{ image.description }}
      </p>
    </div>
    <div id="photos">
      <div
        v-for="(url, key) in image.url"
        :key="key"
        class="single-image-container"
      >
        <a :href="url" target="_blank">
          <img
            :src="url"
            alt="image.alt"
            class="image"
            :height="image.height"
            :data-higher-wide="image.dataHigherWide"
          />
        </a>
      </div>
    </div>
    <div class="src">
      <span class="src-content">
        <span>
          <span class="srcTag"> Source: </span>
          <a
            :href="image.pageSource || image.url[0]"
            class="nuxt-link-small"
            target="_blank"
            >{{ image.displaySource || image.url[0] }}</a
          >
          <span>{{ ' ' }}</span>
          <span class="srcTag">{{ getDateString() }}</span>
        </span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import Image from '@/types/Image'

export default defineComponent({
  name: 'ImageComponent',
  props: {
    image: {
      type: Object as PropType<Image>,
      required: true,
    },
    minWidth: {
      type: String,
      required: false,
      default: '420px',
    },
  },
  computed: {},
  mounted() {
    const p = document.getElementById('photos')
    if (p !== null)
      p.style.gridTemplateColumns = `repeat(auto-fit, minmax(${this.minWidth}, 1fr))`

    const elements = document.querySelectorAll('[data-higher-wide]')
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i]
      const dataHigherWide = el.getAttribute('data-higher-wide')
      if (dataHigherWide === 'true') {
        el.classList.add('higher')
      } else if (dataHigherWide === 'quad' || dataHigherWide === 'square') {
        el.classList.add('quad')
      } else if (dataHigherWide === 'other') {
        el.classList.add('other')
      } else {
        el.classList.add('wider')
      }
    }
  },
  methods: {
    getDateString() {
      return this.image.uploadDate == null
        ? ''
        : '(' +
        this.image.uploadDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }) +
        ')'
    },
  },
})
</script>

<style scoped>
#photos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 0.6rem;
  margin: 0.3rem;
  padding: 0.3rem;
  border: 1px solid hsla(0, 2%, 18%, 0.397);
  border-radius: 8px;

  overflow: hidden;
}

.single-image-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.src {
  display: table;
  margin: 0 auto;

  color: #eee;

  height: 1.8rem;
}

.src-content {
  display: table-cell;
  vertical-align: middle;
  padding: 0.25rem 2.5rem;
}

.src-content {
  margin: 0.1rem;
}

.srcTag {
  color: #ccc;
}

.description {
  padding: 0.25rem 2.5rem;
  font-size: 1.1rem;
  display: table-cell;
  vertical-align: middle;
}

/* img.wider {
  aspect-ratio: 16 / 9;
  object-fit: cover;
} */
img.higher {
  aspect-ratio: 9 / 16;
  object-fit: cover;
}
img.quad {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
</style>