<template>
  <div
    :class="['c-scrollSpy-icon', { 'c-scrollSpy-icon--active' : activeSlide === slide }]"
    @click="SLIDE_SET_ACTIVE_SLIDE(slide)">
    <p
      v-text="text" />

    <c-icon
      :icon="icon"
      class="fa-fw" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { SLIDE_SET_ACTIVE_SLIDE } from '@/store/mutations.constants'

export default {
  props: {
    text: {
      type: String,
      required: true
    },

    icon: {
      type: String,
      required: true
    },

    slide: {
      type: Number,
      required: true
    }
  },

  computed: mapState('slide', [
    'activeSlide'
  ]),

  methods: mapMutations('slide', [
    SLIDE_SET_ACTIVE_SLIDE
  ])
}
</script>

<style scoped lang="scss">
.c-scrollSpy-icon {
  margin: 3px;
  margin-bottom: 5px;
  font-size: 1.5rem;
  padding: 5px;
  cursor: pointer;

  p {
    display: inline-block;
    opacity: 0;
    margin-right: 10px;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    p {
      opacity: 1;
    }
  }

  @media (max-width: 850px) {
    display: inline-block;

    p {
      display: none;
    }
  }
}

.c-scrollSpy-icon--active p {
  opacity: 1;
}
</style>
