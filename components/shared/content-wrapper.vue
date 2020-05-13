<template>
  <div :class="['c-content', { 'u-align-center' : isCenterAligned }]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    isCenterAligned: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.c-content {
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
}
</style>
