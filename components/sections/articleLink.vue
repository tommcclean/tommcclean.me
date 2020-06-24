<template>
  <a :href="link" target="_blank" class="c-article u-flexContainer">
    <c-icon
      :icon="icon" />
    <p
      v-text="text" />
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },

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
    border: 1px solid white;
    border-radius: 5px;
    padding: 15px;
    text-decoration: none;
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;
    text-align: left;

    p {
      margin-bottom: 0;
    }

    &:hover {
      background-color: white;
      color: black;
    }

    svg {
      margin-right: 10px;
    }
  }
</style>
