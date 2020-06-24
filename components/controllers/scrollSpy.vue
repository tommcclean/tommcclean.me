<template>
  <div class="c-scrollSpy">
    <div
      :class="['c-scrollSpy-icon', { 'c-scrollSpy-icon--active' : activeSlide === 1 }]"
      @click="SLIDE_SET_ACTIVE_SLIDE(1)">
      <p>home</p>
      <c-icon icon="home" class="fa-fw" />
    </div>

    <div
      :class="['c-scrollSpy-icon', { 'c-scrollSpy-icon--active' : activeSlide === 2 }]"
      @click="SLIDE_SET_ACTIVE_SLIDE(2)">
      <p>projects</p>
      <c-icon icon="project-diagram" class="fa-fw" />
    </div>

    <div
      :class="['c-scrollSpy-icon', { 'c-scrollSpy-icon--active' : activeSlide === 3 }]"
      @click="SLIDE_SET_ACTIVE_SLIDE(3)">
      <p>articles</p>
      <c-icon icon="bookmark" class="fa-fw" />
    </div>

    <div
      :class="['c-scrollSpy-icon', { 'c-scrollSpy-icon--active' : activeSlide === 4 }]"
      @click="SLIDE_SET_ACTIVE_SLIDE(4)">
      <p>employment</p>
      <c-icon icon="briefcase" class="fa-fw" />
    </div>

    <div
      :class="['c-scrollSpy-icon', { 'c-scrollSpy-icon--active' : activeSlide === 5 }]"
      @click="SLIDE_SET_ACTIVE_SLIDE(5)">
      <p>contact</p>
      <c-icon icon="phone" class="fa-fw" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { SLIDE_SET_ACTIVE_SLIDE } from '@/store/mutations.constants'

export default {
  computed: mapState('slide', [
    'activeSlide'
  ]),

  methods: mapMutations('slide', [
    SLIDE_SET_ACTIVE_SLIDE
  ])
}
</script>

<style scoped lang="scss">
.c-scrollSpy {
  position: fixed;
  top: 10px;
  right: 10px;
  color: white;
  z-index: 20;
  text-align: right;
}

.c-scrollSpy-icon {
  margin: 5px;
  margin-bottom: 15px;
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
