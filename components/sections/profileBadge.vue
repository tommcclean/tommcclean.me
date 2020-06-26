<template functional>
  <a
    :href="props.href"
    target="_blank"
    class="c-profileBadge a-bounceIn">
    <c-icon
      :icon="['fab', props.icon]"
      class="fa-fw" />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },

    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.c-profileBadge {
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
  color: black;
  padding: 10px 5px;
  margin: 0;
  border-bottom-right-radius: 25%;

  svg {
    font-size: 2rem;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    svg {
      font-size: 3rem;
    }
  }
}
</style>
