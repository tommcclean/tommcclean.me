<template>
  <section class="c-articles u-fullHeight u-positionRelative u-flexContainer u-imageBackground">
    <overlay>
      <content-wrapper>
        <div class="u-flexGrow">
          <h2 class="title">Articles</h2>
          <h3>I learn by doing, sometimes I write articles to share what I have learned.</h3>
          <p>I am looking to write more frequently, so check back soon to see even more...</p>

          <div class="c-articles-wrapper a-fadeInDown">
            <article-link
              link="https://dev.to/tommcclean/leverage-vue-and-nuxt-to-output-components-natively-for-websites-using-other-technologies-3pnh"
              text="Leverage Vue and Nuxt to output components natively for websites using other technologies"
              icon="link" />

            <article-link
              link="https://dev.to/tommcclean/cmpct-io-why-is-it-safer-1ef9"
              text="cmpct.io - Why is it safer?"
              icon="link" />

            <article-link
              link="https://dev.to/tommcclean/latest-project-cmpct-io-1im3"
              text="Personal Project - cmpct.io"
              icon="link" />
          </div>
        </div>
      </content-wrapper>
    </overlay>
  </section>
</template>

<style scoped lang="scss">
  .c-articles {
    background-image: url('/media/articles-background.jpg');
  }

  .c-articles-wrapper {
    margin-top: 40px;
  }
</style>
