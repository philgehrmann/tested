<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_globals.scss';

.hub__contentImageTop {
  position: relative;
  z-index: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    height: 25%;
    background: $color-white;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    right: 0;
    height: 75%;
    background: $color-gray;
  }
  &--image {
    img {
      width: 75%;
      height: auto;
    }
    &.right {
      text-align: right;
    }
    &.center {
      text-align: center;
      img {
        width: 100%;
        height: auto;
      }
    }
    &.left {
      text-align: left;
    }
  }
  &--text {
    padding: 3rem;
    padding-bottom: 1rem;
    text-align: center;
    p {
      @include font-size(0.9);
    }
  }
}
</style>
