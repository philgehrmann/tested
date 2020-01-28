<template>
  <div class="header">
    <div v-on:click="toggleNav()" class="header-button">
      <div class="header-button--icon"></div>
      <p>MENU</p>
    </div>
    <div class="header-logo">
      <a href="#"><img src="../assets/images/logo_white.svg"/></a>
    </div>
    <div class="header-navigation">
      <ul>
        <li><a href="">HOME</a></li>
        <li><a href="">THE HUB</a></li>
        <li><a href="">SPEISEKARTE</a></li>
        <li><a href="">FIND US</a></li>
        <li><a href="">KONTAKT</a></li>
      </ul>
    </div>
    <div class="header--open">
      <div class="header--open-now"></div>
      <div class="header--open-menu"></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'header',
  name: 'Header',
  props: {
    msg: String
  },
  mounted() {
    // this.scrollable();
  },
  methods: {
    toggleNav() {
      this.$parent.isActive = !this.$parent.isActive
    }
  }
}
</script>
<style lang="scss"></style>
