<template>
  <div class="c-intro u-fullHeight u-positionRelative u-flexContainer u-imageBackground">
    <overlay>
      <profile-badge
        href="https://www.instagram.com/thomaswilliammcclean/"
        icon="instagram" />

      <content-wrapper>
        <div class="inner">
          <h1 class="title">Thomas William McClean</h1>
          <h3>Full-stack Software Engineer from Bristol, United Kingdom</h3>

          <tag icon="map-marker" text="Bristol, UK" />
          <tag icon="briefcase" text="Software Engineer @ Just Eat" />
          <tag icon="code" text="VueJS, .NETCore, AWS, Azure" />
          <tag icon="heart" text="Football, Technology, Futurism, Science" />
        </div>
      </content-wrapper>
    </overlay>
  </div>
</template>

<style scoped>
  .c-intro {
    background-image: url('/media/home-background.jpg');
  }
</style>
