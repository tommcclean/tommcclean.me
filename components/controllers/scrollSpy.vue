<template>
  <div class="c-scrollSpy">
    <controllers-scroll-spy-option
      text="home"
      icon="home"
      :slide="1" />

    <controllers-scroll-spy-option
      text="projects"
      icon="project-diagram"
      :slide="2" />

    <controllers-scroll-spy-option
      text="employment"
      icon="briefcase"
      :slide="3" />

    <controllers-scroll-spy-option
      text="articles"
      icon="bookmark"
      :slide="4" />
  </div>
</template>

<style scoped>
.c-scrollSpy {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 20;
  text-align: right;
}
</style>
