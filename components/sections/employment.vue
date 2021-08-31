<template>
  <div class="c-employment u-fullHeight u-positionRelative u-flexContainer u-imageBackground">
    <utilities-overlay>
      <sections-corner-badge
        href="https://www.linkedin.com/in/tommccleanuk"
        icon="linkedin" />

      <utilities-content-wrapper>
        <div class="u-flexGrow">
          <h2 class="title">Employment</h2>
          <h3>Comes out of the box with over a decade of experience</h3>

          <div class="c-employment-wrapper">
            <div class="c-employment-role u-flexContainer">
              <img src="/employment/just-eat.png" alt="Just Eat Logo">
              <div class="c-employment-role-details u-flexGrow">
                <h4>Just Eat</h4>
                <p class="u-hiddenMobile">Senior Full-Stack Software Engineer</p>
                <p class="u-mb-0">Specialising in Website Development using .NET, VueJS, AWS for a global food delivery giant.</p>
              </div>
            </div>

            <div class="c-employment-role u-flexContainer">
              <img src="/employment/river.png" alt="Team River Logo">
              <div class="c-employment-role-details u-flexGrow">
                <h4>Team River</h4>
                <p class="u-hiddenMobile">Senior Full-Stack Software Engineer</p>
                <p class="u-mb-0">Working with .NET, VueJS, Microsoft Azure and SQL Server for an Engagement and BI specialist.</p>
              </div>
            </div>

            <div class="c-employment-role u-flexContainer">
              <img src="/employment/edm.png" alt="EDM Group Logo">
              <div class="c-employment-role-details u-flexGrow">
                <h4>EDM Group</h4>
                <p class="u-hiddenMobile">Software Engineer</p>
                <p class="u-mb-0">Business Process, Workflow and data processing for an Information Management business.</p>
              </div>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/tommccleanuk" target="_blank"><c-icon icon="plus" />Plus two more...</a>
        </div>
      </utilities-content-wrapper>
    </utilities-overlay>
  </div>
</template>

<style scoped lang="scss">
  .c-employment {
    background-image: url('/media/employment-background.jpg');
  }

  .c-employment-wrapper {
    width: 600px;
    max-width: 90vw;
    margin: 0 auto;
    margin-bottom: 10px;
    text-align: center;

    @media (max-width: 767px) {
      margin-bottom: -10px;
    }

    img {
      width: 125px;
      border-radius: 5px;
      margin: 10px;

      @media (max-width: 767px) {
        width: 90px;
      }
    }
  }

  .c-employment-role {
    margin-bottom: 10px;
    padding-top: 15px;
    padding-bottom: 15px;

    h4 {
      margin-bottom: 15px;
    }

    @media (max-width: 1024px) {
      padding-top: 5px;
      padding-bottom: 5px;

      p {
        margin-bottom: 0;
      }
    }
  }

  .c-employment-role-details {
    text-align: left;
  }

  svg {
    margin-right: 5px;
  }
</style>
