<template>
  <div class="preloader">
    <div class="preloader--loader">
      <img src="~/assets/images/logo_white.svg" />
      <div class="loader-wrapper"></div>
      <p>Wir sind gleich für dich da ....</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preloader',
  props: {
    msg: String
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_globals.scss';
.preloader {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: $color-main;

  &--loader {
    width: 100%;
    height: 100vh;
    margin-top: 100%;
    text-align: center;
    position: relative;

    p {
      color: $color-white;
      @include font-size(0.5);
    }
    img {
      width: 100px;
    }
    .loader-wrapper {
      position: absolute;
      display: inline-block;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      margin-left: -75px;
      transform: scale(1);
      transform-origin: center;
      animation: loading 3s infinite; /* IE 10+, Fx 29+ */
    }
  }
}
@keyframes loading {
  0% {
    transform: scale(1);
    opacity: 0;
  }

  50% {
    opacity: 0.5;
    transform: scale(4.2);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
}
</style>
