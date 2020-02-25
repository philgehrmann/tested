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
        <li v-for="(item, index) in navigation" v-bind:key="index">
          <a v-bind:href="item.fields.link">{{ item.fields.linkName }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['navigation'],
  mounted() {
    console.log('navigation')
  }
}
</script>
<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_globals.scss';
.header {
  width: 100%;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  height: 55px;
  position: fixed;
  top: 0;
  z-index: 20;
  transition: all 0.1s ease-out;
  max-width: 2200px;
  margin: 0 auto;
  background: #303030;

  &-logo {
    text-align: center;
    align-self: center;
    margin-top: 10px;
    width: 139px;
    height: 50px;
    justify-self: center;
    @include tablet {
        margin-left:110px;
    }
    img {
      width: 40%;

    }
    a {
      color: $color-white;

      @include font-size(1.2);
      @include desktop-small {
        display: block;
        margin-top: 1.8rem;
      }
      @include desktop-big {
        display: block;
        margin-top: 1.8rem;
      }
    }
  }

  &-navigation {
    display: none;
    @include desktop-small {
      display: block;
      margin-top: 1.25rem;
      text-align: right;
    }
    @include desktop-big {
      display: block;
      margin-top: 1.25rem;
      text-align: right;
    }
    ul {
      li {
        display: inline-block;
        position: relative;
        margin-left: 25px;
        a {
          color: $color-white;
          @include font-size(0.8);
          padding: 1rem;
          overflow: hidden;
          &:after {
            content: '';
            position: absolute;
            height: 100%;
            left: 0;
            width: 0;
            border-bottom: 1px solid $color-white-75;
            transition: all 1s ease;
          }
          &:hover {
            &:after {
              content: '';
              position: absolute;
              height: 100%;
              width: 100%;
              border-bottom: 1px solid $color-white-75;
              color: $color-black;
              transition: all 0.5s ease;
            }
          }
        }
      }
    }
  }

  &-button {
    width: 100%;
    height: 55px;
    display: grid;

    &:hover {
      cursor: pointer;
    }

    @include desktop-small {
      height: 100px;
      display: none;
    }
    @include desktop-big {
      height: 100px;
      display: none;
    }

    &--icon {
      width: 24px;
      height: 1px;
      background: $color-white;
      align-self: center;
      justify-self: left;
      margin-left: 30px;
      transform: rotate(0deg);
      transition: transform 0.3s ease;
      &::before {
        content: '';
        position: absolute;
        background: $color-white;
        width: 24px;
        height: 1px;
        margin-top: -7px;
      }
      &:after {
        content: '';
        position: absolute;
        background: $color-white;
        width: 24px;
        height: 1px;
        margin-top: 7px;
      }
    }
    p {
      position: absolute;
      padding: 0;
      color: $color-black;
      align-self: center;
      opacity: 0;
      left: 50%;
      visibility: hidden;

      @include desktop-small {
        margin-top: 30px;
      }
      @include desktop-big {
        margin-top: 30px;
      }
    }
  }

  @include tablet {
    height: 60px;
    grid-template-columns: 10% 65% 35%;
  }
  @include desktop-small {
    height: 75px;
    grid-template-columns: 25% 65% 10%;
    align-self: center;
    justify-self: center;
  }
  @include desktop-big {
    height: 75px;
    grid-template-columns: 25% 65% 10%;
    align-self: center;
    justify-self: center;
  }
  &--open {
    display: grid;
    grid-template-columns: 50% 50%;

    &-now {
      align-self: center;
      justify-self: center;
    }

    &-menu {
      align-self: center;
      justify-self: center;
    }
  }
}
</style>
