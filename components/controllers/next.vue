<template>
  <div
    v-show="activeSlide < totalSlides"
    class="c-next"
    @click="next">
    <c-icon
      icon="chevron-circle-down"
      class="c-next-icon fa-fw" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState('slide', [
    'activeSlide',
    'totalSlides'
  ]),

  methods: mapActions('slide', [
    'next'
  ])
}
</script>

<style scoped>
.c-next {
  position: fixed;
  bottom: 10px;
  width: 100%;
  z-index: 20;
  text-align: center;
  cursor: pointer;
}

.c-next-icon {
  font-size: 3rem;
  transition: all 0.2s ease-in-out;
  padding-bottom: 10px;
}
</style>
