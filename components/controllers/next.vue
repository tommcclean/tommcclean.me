<template>
  <div
    v-show="show"
    class="c-next a-bounceIn"
    @click="next">
    <c-icon icon="chevron-circle-down" class="c-next-icon fa-fw" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('slide', [
      'activeSlide',
      'totalSlides'
    ]),

    show () {
      return (this.activeSlide < this.totalSlides)
    }
  },

  methods: {
    ...mapActions('slide', [
      'next'
    ])
  }
}
</script>

<style scoped lang="scss">
.c-next {
  position: fixed;
  display: inline-block;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: white;
  z-index: 20;
  text-align: center;
  cursor: pointer;

  @media (max-height: 400px) {
    display: none;
  }
}

.c-next-icon {
  font-size: 3rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    font-size: 3.5rem;
  }
}
</style>
