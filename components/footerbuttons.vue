<template>
  <div class="footer-buttons">
    <div class="footer-buttons--button">
      <a href="#menu">Speisekarte</a>
    </div>
    <div class="footer-buttons--button">
      <a href="#maps">Find us</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterButtons',
  mounted() {
    console.log('FooterButtons')
  }
}
</script>
<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_globals.scss';
.footer-buttons {
  position: sticky;
  display: grid;
  grid-template-columns: 1fr;
  background: $color-main;
  color: $color-white;
  text-align: center;
  bottom: 0;
  &--button {
    width: 100%;
    display: block;
    a {
      font-size: 0.7rem;
      color: $color-white;
      letter-spacing: 3px;
      padding: 1rem;
      display: block;
      text-transform: uppercase;
    }
  }
}
</style>
