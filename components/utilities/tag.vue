<template functional>
  <div class="c-tag">
    <c-icon
      :icon="props.icon" />

    <span
      v-text="props.text" />
  </div>
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
    }
  }
}
</script>

<style scoped>
.c-tag {
  display: inline-block;
  padding: 10px;
  background-color: black;
  font-size: 0.8rem;
  opacity: 0.8;
  margin-bottom: 5px;
  user-select: none;
}

svg {
  margin-right: 5px;
}
</style>
