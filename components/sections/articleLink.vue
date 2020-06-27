<template>
  <a :href="link" target="_blank" class="c-article u-flexContainer">
    <c-icon
      :icon="['fab', 'dev']"
      class="fa-fw" />
    <p
      v-text="text" />
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },

    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .c-article {
    width: 800px;
    max-width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid #494949;
    padding: 10px;
    text-decoration: none;
    margin-bottom: 5px;
    text-align: left;

    &:last-child {
      border-bottom: 0;
    }

    &:hover {
      text-decoration: underline;
    }

    p {
      margin-bottom: 0;
    }

    svg {
      font-size: 2rem;
    }
  }
</style>
