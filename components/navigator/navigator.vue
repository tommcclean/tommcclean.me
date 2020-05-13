<template>
  <div class="c-navigator">
    <a class="c-link" href="#">Home</a>
    <a class="c-link" href="#">Projects</a>
    <a class="c-link" href="#">Employment</a>
    <a class="c-link" href="#">Articles</a>
    <a class="c-link" href="mailto:spam@tommcclean.me"><c-icon icon="envelope" />Contact Me</a>
  </div>
</template>

<style scoped>
  .c-navigator {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2000;
    color: white;
    text-align: right;
    padding: 15px 20px;
  }

  .c-link {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }

  svg {
    margin-right: 5px;
  }
</style>
