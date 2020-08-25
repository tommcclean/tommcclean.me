<template functional>
  <a :href="props.href" target="_blank" class="c-projects-projectItem">
    <img
      class="c-projects-projectItem-icon"
      :src="props.imageSource"
      alt="Project Icon">
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

<style scoped lang="scss">
  .c-projects-projectItem {
    display: inline-block;
    margin: 10px;

    @media (max-width: 768px) {
      margin: 2px;
    }
  }

  .c-projects-projectItem-icon {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-bottom: 5px;

    @media (max-width: 768px) {
      width: 75px;
      height: 75px;
      margin: 0 20px 5px 20px;
    }
  }
</style>
