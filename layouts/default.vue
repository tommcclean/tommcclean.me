<template>
  <nuxt />
</template>

<script>
import '@/styles/animation.scss'
import '@/styles/utilities.scss'
import SeoMixin from '@/mixins/seo.mixin.vue'

export default {
  mixins: [
    SeoMixin
  ]
}
</script>

<style lang="scss">
html {
  font-family: 'Tomorrow', -apple-system, BlinkMacSystemFont, 'Segoe UI';
  font-size: 15px;
  word-spacing: 1px;
  background-color: black;

  @media (max-width: 767px) {
    font-size: 14px;
  }
}

body {
  font-family: 'Comfortaa', -apple-system, BlinkMacSystemFont, 'Segoe UI';
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

svg {
  font-size: 1rem;
}

.u-align-center {
  text-align: center;
}

h1, h2, h3, h4, p, a {
  user-select: none;
}

h1 {
  font-size: 4rem;
  margin-bottom: 25px;
}

.title {
  display: inline-block;
  background-color: white;
  color: black;
  padding: 10px;
}

h2 {
  font-size: 3rem;
  margin-bottom: 20px;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
}

p {
  font-size: 1rem;
  margin-bottom: 10px;
  margin-left: 15px;
  margin-right: 15px;
}

a {
  color: white;
}
</style>
