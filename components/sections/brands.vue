<template>
  <div class="c-brands u-fullHeight u-positionRelative u-flexContainer u-imageBackground">
    <utilities-overlay>
      <utilities-content-wrapper>
        <div class="u-flexGrow">
          <h2 class="title">Brands</h2>
          <h3>Over my career I have had the pleasure of working with or building for some awesome household names</h3>

          <div class="c-brands-matrix">
            <img src="/brands/honda.png" alt="Honda Logo">
            <img src="/brands/jaguar.png" alt="Jaguar Logo">
            <img src="/brands/landrover.png" alt="Land Rover Logo">
            <img src="/brands/legalgeneral.png" alt="Legal and General Logo">
            <img src="/brands/mercedes.png" alt="Mercedes-Benz Logo">
            <img src="/brands/volvo.png" alt="Volvo Logo">
            <img src="/brands/nhs.png" alt="NHS Logo">
            <img src="/brands/justeat.png" alt="JustEat Logo">
          </div>
        </div>
      </utilities-content-wrapper>
    </utilities-overlay>
  </div>
</template>

<style scoped lang="scss">
  .c-brands {
    background-image: url('/media/brands-background.jpg');
  }

  .c-brands-matrix {
    width: 800px;
    max-width: 90vw;
    margin: 0 auto;
    text-align: center;

    img {
      width: 150px;
      border-radius: 5px;
      margin: 5px;

      @media (max-width: 767px) {
        width: 90px;
      }
    }
  }
</style>
