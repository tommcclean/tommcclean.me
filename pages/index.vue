<template>
  <controllers-slide-wrapper>
    <controllers-slide :slide-number="1"><sections-introduction /></controllers-slide>
    <controllers-slide :slide-number="2"><sections-projects /></controllers-slide>
    <controllers-slide :slide-number="3"><sections-articles /></controllers-slide>
    <controllers-slide :slide-number="4"><sections-employment /></controllers-slide>
    <controllers-slide :slide-number="5"><sections-brands /></controllers-slide>

    <controllers-scroll-spy />
    <controllers-next />
    <controllers-landscape />
  </controllers-slide-wrapper>
</template>
