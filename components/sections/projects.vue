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
              text="cmpct.io"
              image-source="/projects/cmpct-io.png"
              href="https://cmpct.io" />

            <sections-project-item
              text="battleblox.gg"
              image-source="/projects/battleblox.png"
              href="http://www.battleblox.gg" />

            <sections-project-item
              text="ShineProject.io"
              image-source="/projects/shine-project-io.png"
              href="https://www.shineproject.io" />

            <sections-project-item
              text="PortalCMS"
              image-source="/projects/portal.png"
              href="https://github.com/tommcclean/PortalCMS" />

            <sections-project-item
              text="RapidSurvey.io"
              image-source="/projects/rapid-survey-io.png"
              href="https://www.rapidsurvey.io" />

            <sections-project-item
              text="tomorepo"
              image-source="/projects/storybook.png"
              href="https://tommcclean.github.io/tomorepo" />
          </div>
        </div>
      </utilities-content-wrapper>
    </utilities-overlay>
  </div>
</template>

<style scoped>
  .c-projects {
    background-image: url('/media/projects-background.jpg');
  }

  .c-projects-projectsWrapper {
    width: 600px;
    max-width: 100%;
    padding-top: 20px;
    margin: 0 auto;
  }
</style>
