<template>
  <div class="hub__welcome">
    <h2>LETS MAKE SOMETHING GOOD TOGETHER</h2>
    <a class="button">RESERVIERE EINEN TISCH </a>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_globals.scss';
@import '~/assets/scss/_buttons.scss';

.hub__welcome {
  padding: 2rem;
  text-align: center;
  h2 {
    margin-bottom: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
    @include font-size(1.8);
  }
}
</style>
