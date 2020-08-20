<template>
  <nuxt />
</template>

<style lang="scss">
html {
  font-family: 'Comfortaa', 'sans-serif';
  font-size: 15px;
  word-spacing: 1px;
  background-color: black;
  color: white;

  @media (max-width: 767px) {
    font-size: 14px;
  }
}

body {
  font-family: 'Comfortaa', 'sans-serif';
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.title {
  display: inline-block;
  background-color: white;
  color: black;
  padding: 10px;
}

h1, h2, h3, h4, p, a {
  user-select: none;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
}

h1 {
  font-size: 4rem;
  margin: 0;
  margin-bottom: 25px;
}

h2 {
  font-size: 3rem;
}

h3 {
  font-size: 1.5rem;
}

h4 {
  font-size: 1.5rem;
}

p {
  font-size: 1rem;
}

svg {
  font-size: 1rem;
}

a {
  color: white;
}

p a {
  margin: 0;
}

a svg {
  margin-right: 5px;
}

.u-flexContainer {
  display: flex;
  align-items: center;
}

.u-flexGrow {
  flex-grow: 1;
}

.u-imageBackground {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
}

.u-positionRelative {
  position: relative;
}

.u-fullHeight {
  height: 100vh;
}

.u-hiddenMobile {
  @media (max-width: 767px) {
    display: none;
  }
}

.u-mb-0 {
  margin-bottom: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
{
  opacity: 0;
}
</style>
