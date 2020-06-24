<template>
  <section class="c-articles u-fullHeight u-positionRelative u-flexContainer u-imageBackground">
    <overlay>
      <content-wrapper>
        <div class="u-flexGrow">
          <h2 class="title">Articles</h2>
          <h3>I tend to learn by doing, but sometimes I write articles to share what I have learned.</h3>
          <p>I am looking to write more frequently, so check back soon to see even more...</p>

          <div class="c-articles-wrapper a-fadeInDown">
            <a href="https://dev.to/tommcclean/leverage-vue-and-nuxt-to-output-components-natively-for-websites-using-other-technologies-3pnh" target="_blank" class="c-article u-flexContainer">
              <c-icon icon="link" class="fa-fw" />
              <p>Leverage Vue and Nuxt to output components natively for websites using other technologies</p>
            </a>

            <a href="https://dev.to/tommcclean/cmpct-io-why-is-it-safer-1ef9" target="_blank" class="c-article u-flexContainer">
              <c-icon icon="link" class="fa-fw" />
              <p>cmpct.io - Why is it safer?</p>
            </a>

            <a href="https://dev.to/tommcclean/latest-project-cmpct-io-1im3" target="_blank" class="c-article u-flexContainer">
              <c-icon icon="link" class="fa-fw" />
              <p>Personal Project - cmpct.io</p>
            </a>
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

  .c-article {
    width: 800px;
    max-width: 90%;
    margin: 0 auto;
    border: 1px solid white;
    border-radius: 5px;
    padding: 15px;
    text-decoration: none;
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;
    text-align: left;

    p {
      margin-bottom: 0;
    }

    &:hover {
      background-color: white;
      color: black;
    }

    svg {
      margin-right: 10px;
    }
  }
</style>
