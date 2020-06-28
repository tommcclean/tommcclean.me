<template>
  <slide-wrapper>
    <slide :slide-number="1"><introduction /></slide>
    <slide :slide-number="2"><projects /></slide>
    <slide :slide-number="3"><articles /></slide>
    <slide :slide-number="4"><employment /></slide>
    <slide :slide-number="5"><brands /></slide>
    <!-- <slide :slide-number="6"><contact /></slide> -->

    <scroll-spy />
    <next />
    <landscape />
  </slide-wrapper>
</template>
