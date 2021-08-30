<template>
  <div class="c-intro u-fullHeight u-positionRelative u-flexContainer u-imageBackground">
    <utilities-overlay>
      <sections-corner-badge
        href="https://www.instagram.com/thomaswilliammcclean/"
        icon="instagram" />

      <utilities-content-wrapper>
        <div class="inner">
          <h1 class="title">Thomas William McClean</h1>
          <h3>Full-stack Software Engineer from Bristol, United Kingdom</h3>

          <utilities-tag icon="map-marker" text="Bristol, UK" />
          <utilities-tag icon="briefcase" text="Software Engineer @ Just Eat" />
          <utilities-tag icon="code" text="VueJS, .NETCore, AWS, Azure" />
          <utilities-tag icon="heart" text="Football, Technology, Futurism, Science" />
        </div>
      </utilities-content-wrapper>
    </utilities-overlay>
  </div>
</template>

<style scoped>
  .c-intro {
    background-image: url('/media/home-background.jpg');
  }
</style>
