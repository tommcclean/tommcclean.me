<template>
  <div class="c-articles u-fullHeight u-positionRelative u-flexContainer u-imageBackground">
    <utilities-overlay>
      <sections-corner-badge
        href="https://dev.to/tommcclean"
        icon="dev" />

      <utilities-content-wrapper>
        <div class="u-flexGrow">
          <h2 class="title">Articles</h2>
          <h3>I learn by doing, but sometimes I write articles to share what I have learned</h3>

          <div class="c-articles-wrapper">
            <sections-article-link
              link="https://dev.to/tommcclean/leverage-vue-and-nuxt-to-output-components-natively-for-websites-using-other-technologies-3pnh"
              text="Leverage Vue and Nuxt to output components natively for websites using other technologies"
              icon="link" />

            <sections-article-link
              link="https://dev.to/tommcclean/cmpct-io-why-is-it-safer-1ef9"
              text="cmpct.io - Why is it safer?"
              icon="link" />

            <sections-article-link
              link="https://dev.to/tommcclean/latest-project-cmpct-io-1im3"
              text="Personal Project - cmpct.io"
              icon="link" />
          </div>
        </div>
      </utilities-content-wrapper>
    </utilities-overlay>
  </div>
</template>

<style scoped>
  .c-articles {
    background-image: url('/media/articles-background.jpg');
  }

  .c-articles-wrapper {
    margin-top: 40px;
  }
</style>
