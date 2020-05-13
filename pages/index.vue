<template>
  <div>
    <intro />
    <projects />
  </div>
</template>

<script>
import Intro from '@/components/intro/intro.vue'
import Projects from '@/components/projects/projects.vue'

export default {
  components: {
    Intro,
    Projects
  }
}
</script>
