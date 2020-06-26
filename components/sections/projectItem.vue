<template functional>
  <a :href="props.href" target="_blank" class="c-projects-projectItem">
    <img
      class="c-projects-projectItem-icon"
      :src="props.imageSource">
    <p
      v-text="props.text" />
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },

    imageSource: {
      type: String,
      required: true
    },

    href: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .c-projects-projectItem {
    display: inline-block;
    margin: 10px;
  }

  .c-projects-projectItem-icon {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-bottom: 5px;
  }
</style>
