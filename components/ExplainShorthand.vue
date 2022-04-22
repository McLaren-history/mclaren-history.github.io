<template>
  <div
    :id="id"
    :style="transformStyle"
    class="container explain-container card big-shadow"
    v-show="shown || showSelf"
    @mouseover="showthis"
    @mouseout="hidethis"
    @mouseleave="hidethis"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ExplainShorthand',
  data() {
    return {
      showSelf: false,
      timeoutWaiting: false,
      refresh: false,
      mounted: false,
    }
  },
  props: {
    shown: Boolean,
    tx: Number | String,
    ty: Number | String,
    id: String,
  },
  computed: {
    transformStyle() {
      if (!this.mounted) return ''

      this.refresh

      if (
        !document ||
        typeof document === 'undefined' ||
        !document.getElementById(this.id)
      )
        return ''
      return `top:${
        Number(this.ty) -
        document.getElementById(this.id)?.getBoundingClientRect().height / 2
      }px;left:${this.tx}px;position: absolute;`
      // return `transform: translateX(${this.tx}%) translateY(${this.ty}%)`
    },
  },
  watch: {
    shown() {
      this.refresh = !this.refresh
      this.showthis()
    },
  },
  methods: {
    showthis() {
      this.showSelf = true
      this.timeoutWaiting = false
    },
    hidethis() {
      this.timeoutWaiting = true
      setTimeout(() => {
        if (this.timeoutWaiting) {
          this.showSelf = false
          this.timeoutWaiting = false
        }
      }, 200)
    },
  },
  mounted() {
    this.mounted = true
    if (this.shown) this.showthis()
  },
}
</script>

<style scoped>
.explain-container {
  display: flex;
  flex-direction: column;
  position: relative;

  opacity: 0.9;

  max-width: min(100vw, 500px);
  backdrop-filter: blur(5px) brightness(1.5);
}
</style>