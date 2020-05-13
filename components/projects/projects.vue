<template>
  <div class="c-projects">
    <content-wrapper :is-center-aligned="false">
      <h2>Projects</h2>
      <p>I am always working on something interesting, over time I have built up a decent portfolio of projects; feel free to try them out!</p>
    </content-wrapper>
  </div>
</template>

<script>
import ContentWrapper from '@/components/shared/content-wrapper.vue'

export default {
  components: {
    ContentWrapper
  }
}
</script>

<style scoped>
.c-projects {
  background-color: white;
  color: black;
  padding: 60px 30px;
}
</style>
