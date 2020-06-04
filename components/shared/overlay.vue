<template>
  <div class="c-overlay">
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
  display: flex;
  align-items: center;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
}
</style>
