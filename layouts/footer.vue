<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_globals.scss';
.footer {
  width: 100%;
  background: $color-gray;
}
.hub {
  &__footer {
    width: 50%;
    margin: 0 auto;
  }
  &__subfooter {
    width: 75%;
    margin: 0 auto;
    background: $color-darkgray;
  }
}
</style>
