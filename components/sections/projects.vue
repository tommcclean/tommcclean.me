<template>
  <div class="c-projects u-fullHeight u-positionRelative u-flexContainer u-imageBackground">
    <overlay>
      <corner-badge
        href="https://github.com/tommcclean"
        icon="github" />

      <content-wrapper>
        <div class="u-flexGrow">
          <h2 class="title">Projects</h2>
          <h3>I am <i>always</i> working on something interesting</h3>
          <p>Building software is my job and a hobby, I master new technologies with every project</p>
          <div class="c-projects-projectsWrapper">
            <project-item
              text="cmpct.io"
              image-source="/projects/cmpct-io.png"
              href="https://cmpct.io" />

            <project-item
              text="battleblox.gg"
              image-source="/projects/battleblox.png"
              href="http://www.battleblox.gg" />

            <project-item
              text="ShineProject.io"
              image-source="/projects/shine-project-io.png"
              href="https://www.shineproject.io" />

            <project-item
              text="PortalCMS"
              image-source="/projects/portal.png"
              href="https://github.com/tommcclean/PortalCMS" />

            <project-item
              text="RapidSurvey.io"
              image-source="/projects/rapid-survey-io.png"
              href="https://www.rapidsurvey.io" />

            <project-item
              text="tomorepo"
              image-source="/projects/storybook.png"
              href="https://tommcclean.github.io/tomorepo" />
          </div>
        </div>
      </content-wrapper>
    </overlay>
  </div>
</template>

<style scoped>
  .c-projects {
    background-image: url('/media/projects-background.jpg');
  }
</style>
