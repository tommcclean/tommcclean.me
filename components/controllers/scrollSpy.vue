<template>
  <div class="c-scrollSpy">
    <scroll-spy-option
      text="home"
      icon="home"
      :slide="1" />

    <scroll-spy-option
      text="projects"
      icon="project-diagram"
      :slide="2" />

    <scroll-spy-option
      text="articles"
      icon="bookmark"
      :slide="3" />

    <scroll-spy-option
      text="employment"
      icon="briefcase"
      :slide="4" />

    <scroll-spy-option
      text="contact"
      icon="phone"
      :slide="5" />
  </div>
</template>

<style scoped lang="scss">
.c-scrollSpy {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 20;
  text-align: right;
}
</style>
