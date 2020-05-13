<template>
  <div>
    <navigator />
    <nuxt />
  </div>
</template>

<script>
import Navigator from '@/components/navigator/navigator.vue'

export default {
  components: {
    Navigator
  }
}
</script>

<style>
html {
  font-family: 'Open-Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI';
  font-size: 16px;
  word-spacing: 1px;
  background-color: black;
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
