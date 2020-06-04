<template>
  <nuxt />
</template>

<script>
import SeoMixin from '@/mixins/seo.mixin.vue'

export default {
  mixins: [
    SeoMixin
  ]
}
</script>

<style>
html {
  font-family: 'Tomorrow', -apple-system, BlinkMacSystemFont, 'Segoe UI';
  font-size: 16px;
  word-spacing: 1px;
  background-color: black;
}

body {
  font-family: 'Comfortaa', -apple-system, BlinkMacSystemFont, 'Segoe UI';
}

h1 {
  font-size: 1.5rem;
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
</style>
