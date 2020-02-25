<template>
  <div class="logo-liner">
  </div>
</template>

<script>
export default {
  name: 'LogoLiner',
  props: {
    class: String
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_globals.scss';
.logo-liner {
  width: 100%;
  height: 50px;
  margin-top: 50px;
  border-top:1px solid $color-main;
  position:relative;

  &::after {
    content:"";
    position: absolute;
    padding: 20px;
    background: #fff url(../assets/images/hub-plant.svg);
    background-position:center; 
    background-size:50%; 
    background-repeat: no-repeat;
    margin-top:-30px;
    border:10px solid #fff;
    border-radius: 50%;
    left: 40%;
    @include tablet {
      left: 45%;
    }
  }
  &.white {
     border-top:1px solid $color-white;
     &:after {
      background: #fff url(../assets/images/hub-plant.1.svg);
    }
  }
  
}
</style>
