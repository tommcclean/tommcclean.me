<template>
  <div
    class="c-slideWrapper"
    @wheel="scrollWheel">
    <slot />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Debounce from '@/services/debounce.js'

export default {
  computed: mapState('slide', [
    'activeSlide'
  ]),

  methods: {
    ...mapActions('slide', [
      'next',
      'previous'
    ]),

    scrollWheel: Debounce(function (event) {
      if (event.deltaY < 0) {
        this.previous()
      } else if (event.deltaY > 0) {
        this.next()
      }
    }, 100)
  }
}
</script>

<style scoped>
.c-slideWrapper {
  height: 100vh;
}
</style>
