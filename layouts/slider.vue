<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
@import '~/assets/scss/slick.scss';

.hub {
  &__main-slider {
    height: 100%;
    display: block;
    overflow: hidden;
  }
}
.slick-slider::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  pointer-events: none;
  background: rgb(65, 181, 178);
  background: linear-gradient(
    14deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>
