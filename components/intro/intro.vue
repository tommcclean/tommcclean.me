<template>
  <section class="c-intro">
    <overlay>
      <content-wrapper>
        <div class="inner">
          <h1 class="title">
            Thomas William McClean
          </h1>
          <h2 class="subtitle">
            Full-stack Software Engineer from Bristol, United Kingdom
          </h2>

          <tag icon="map-marker" text="Bristol, UK" />
          <tag icon="briefcase" text="Software Engineer @ Just Eat" />
          <tag icon="code" text="VueJS, .NETCore, AWS, Azure" />
        </div>
      </content-wrapper>
    </overlay>
  </section>
</template>

<script>
import Overlay from '@/components/shared/overlay.vue'
import ContentWrapper from '@/components/shared/content-wrapper.vue'
import tag from '@/components/shared/tag.vue'

export default {
  components: {
    Overlay,
    ContentWrapper,
    tag
  }
}
</script>

<style scoped>
  .c-intro {
    position: relative;
    height: 85vh;
    padding: 50px;
    display: flex;
    align-items: center;
    background-image: url('/intro/globe.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: white;
  }

  .c-intro .inner {
    flex-grow: 1;
  }

  .c-intro .inner h1 {
    font-size: 3.5rem;
  }

  .c-intro .inner h2 {
    margin-bottom: 20px;
  }
</style>
