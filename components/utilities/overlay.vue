<template functional>
  <div class="c-overlay u-flexContainer">
    <slot />
  </div>
</template>

<style scoped>
.c-overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
}
</style>
