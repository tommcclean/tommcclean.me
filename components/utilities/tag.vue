<template>
  <div class="c-tag">
    <c-icon
      :icon="icon" />

    <span
      v-text="text" />
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
  padding: 10px 20px;
  background-color: black;
  color: white;
  font-size: 0.8rem;
  margin-bottom: 10px;
  opacity: 0.8;
}

svg {
  margin-right: 5px;
}
</style>
