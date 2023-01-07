<template>
  <div class="c-projects u-fullHeight u-positionRelative u-flexContainer u-imageBackground">
    <utilities-overlay>
      <sections-corner-badge
        href="https://github.com/tommcclean"
        icon="github" />

      <utilities-content-wrapper>
        <div class="u-flexGrow">
          <h2 class="title">Projects</h2>
          <h3>I am <i>always</i> working on something interesting. Building software is my hobby and my job.</h3>
          <div class="c-projects-projectsWrapper">
            <sections-project-item
              text="weblauncher"
              image-source="/projects/web-launcher.png"
              href="https://www.weblauncher.online" />

            <sections-project-item
              text="micro stat"
              image-source="/projects/micro-stat.png"
              href="https://www.micro-stat.com" />

            <sections-project-item
              text="cmpct.io"
              image-source="/projects/cmpct-io.png"
              href="https://cmpct.io" />

            <sections-project-item
              text="battleblox"
              image-source="/projects/battleblox.png"
              href="http://www.battleblox.tommcclean.me" />

            <sections-project-item
              text="Animal Crossing Portal"
              image-source="/projects/acp.webp"
              href="http://www.animalcrossingportal.com" />

            <sections-project-item
              text="Pokemon Tier List"
              image-source="/projects/pokemon.webp"
              href="http://www.pokemontierlists.com" />

            <sections-project-item
              text="PortalCMS"
              image-source="/projects/portal.png"
              href="https://github.com/tommcclean/PortalCMS" />
          </div>
        </div>
      </utilities-content-wrapper>
    </utilities-overlay>
  </div>
</template>

<style scoped lang="scss">
  .c-projects {
    background-image: url('/media/projects-background.jpg');
  }

  .c-projects-projectsWrapper {
    width: 1000px;
    max-width: 100%;
    padding-top: 20px;
    margin: 0 auto;

    @media (max-width: 767px) {
      padding-top: 10px;
    }
  }
</style>
