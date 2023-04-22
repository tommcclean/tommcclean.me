import { SLIDE_SET_ACTIVE_SLIDE } from '@/store/mutations.constants'

export const state = () => ({
  activeSlide: 1,
  totalSlides: 4
})

export const mutations = {
  [SLIDE_SET_ACTIVE_SLIDE]: (state, slideNumber) => {
    state.activeSlide = slideNumber
  }
}

export const actions = {
  next: ({ commit, state }) => {
    if (state.activeSlide < state.totalSlides) {
      commit(SLIDE_SET_ACTIVE_SLIDE, state.activeSlide + 1)
    }
  },

  previous: ({ commit, state }) => {
    if (state.activeSlide > 1) {
      commit(SLIDE_SET_ACTIVE_SLIDE, state.activeSlide - 1)
    }
  }
}
