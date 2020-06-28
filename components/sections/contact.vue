<template>
  <section class="c-contact u-fullHeight u-positionRelative u-flexContainer u-imageBackground">
    <overlay>
      <content-wrapper>
        <div class="u-flexGrow">
          <h2 class="title">Contact Me</h2>
          <h3>Looking to get in touch? No problem simply contact me using one of the methods below...</h3>

          <div class="c-contact-wrapper">
            <div class="c-contact-box u-flexContainer">
              <c-icon icon="envelope" />
              <p class="u-flexGrow">Send an Email: <a href="mailto:contact@tommcclean.me">contact@tommcclean.me</a></p>
            </div>
          </div>
        </div>
      </content-wrapper>
    </overlay>
  </section>
</template>

<style scoped lang="scss">
  .c-contact {
    background-image: url('/media/contact-background.jpg');
  }

  .c-contact-wrapper {
    width: 800px;
    max-width: 90vw;
    margin: 0 auto;
    text-align: center;
  }

  .c-contact-box {
    background-color: white;
    color: black;
    width: 350px;
    border-radius: 10px;
    padding: 20px;
    text-align: left;

    p {
      margin-bottom: 0;
    }

    a {
      color: black;
    }

    svg {
      font-size: 2rem;
    }
  }
</style>
