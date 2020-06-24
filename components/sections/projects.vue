<template>
  <section class="c-projects u-fullHeight u-positionRelative u-flexContainer u-imageBackground">
    <overlay>
      <content-wrapper>
        <div class="u-flexGrow">
          <h2 class="title">
            Projects
          </h2>
          <h3 class="subtitle">
            I am <i>always</i> working on something interesting.
          </h3>

          <p>
            Building software is my job and my greatest hobby, I try to master new technologies with every project
          </p>

          <div class="c-projects-projectsWrapper a-fadeInDown">
            <a href="https://cmpct.io" target="_blank" class="c-projects-projectItem">
              <img
                class="c-projects-icon"
                src="/icons/cmpct-io.png">
              <p>cmpct.io</p>
            </a>
            <a href="https://www.shineproject.io" target="_blank" class="c-projects-projectItem">
              <img
                class="c-projects-icon"
                src="/icons/shine-project-io.png">
              <p>ShineProject.io</p>
            </a>

            <a href="https://github.com/tommcclean/PortalCMS" target="_blank" class="c-projects-projectItem">
              <img
                class="c-projects-icon"
                src="/icons/cmpct-io.png">
              <p>Portal CMS</p>
            </a>

            <a href="https://www.rapidsurvey.io" target="_blank" class="c-projects-projectItem">
              <img
                class="c-projects-icon"
                src="/icons/rapid-survey-io.png">
              <p>RapidSurvey.io</p>
            </a>
          </div>
        </div>
      </content-wrapper>
    </overlay>
  </section>
</template>

<style scoped>
  .c-projects {
    background-image: url('/media/projects-background.jpg');
  }

  .c-projects-projectsWrapper {
    margin-top: 50px;
  }

  .c-projects-projectItem {
    display: inline-block;
    margin: 20px 20px;
  }

  .c-projects-icon {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-bottom: 5px;
  }
</style>
