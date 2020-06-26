<template>
  <div class="c-landscape u-flexContainer u-imageBackground">
    <overlay>
      <div class="u-flexGrow">
        <h1 class="title a-fadeIn">Thomas William McClean</h1>
        <h3>
          <c-icon icon="sync-alt" />
          <span>Please rotate your device to portrait</span>
        </h3>
      </div>
    </overlay>
  </div>
</template>

<style scoped lang="scss">
.c-landscape {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: black;
  text-align: center;
  background-image: url('/media/home-background.jpg');

  @media (max-height: 500px) {
    display: initial
  }
}
</style>
