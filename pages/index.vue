<template>
  <div>
    <intro />

    <div class="c-warning">
      <p>This website is now undergoing reconstruction, please check back later</p>
    </div>
  </div>
</template>

<script>
import Intro from '@/components/intro/intro.vue'

export default {
  components: {
    Intro
  }
}
</script>

<style scoped>
.c-warning {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(60, 0, 10, 0.6);
  text-align: center;
  padding: 10px 20px;
  color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  z-index: 20;
}
</style>
