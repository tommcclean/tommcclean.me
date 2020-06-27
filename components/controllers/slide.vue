<template>
  <transition name="slide-fade">
    <section
      v-show="activeSlide === slideNumber"
      :class="['c-slide', { 'c-slide--active' : activeSlide === slideNumber }]">
      <slot />
    </section>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    slideNumber: {
      type: Number,
      required: true
    }
  },

  computed: mapState('slide', [
    'activeSlide'
  ])
}
</script>

<style scoped>
.c-slide {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.c-slide--active {
  z-index: 10;
}
</style>
