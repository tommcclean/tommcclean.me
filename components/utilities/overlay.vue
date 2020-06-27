<template functional>
  <div class="c-overlay u-flexContainer">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.c-overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);

  @media (max-width: 850px) {
    padding-top: 20px;
  }
}
</style>
