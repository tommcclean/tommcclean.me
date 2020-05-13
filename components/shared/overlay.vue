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
  padding: 30px;
  z-index: 1030;
  background: rgba(0, 0, 0, 0.6);
}
</style>
