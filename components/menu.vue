<template>
  <div id="menu" class="menu">
    <h2>Speisekarte</h2>
    <div class="menu--navigation">
      <div class="active"><a class="">Wochenkarte</a></div>
      <div><a class="">Frühstück</a></div>
      <div><a class="">Mittagessen</a></div>
    </div>
    <div class="menu--outline">
      <div class="menu--weekly">
        <div class="menu--item">
          <div class="menu--item-name">Brötchen</div>
          <div class="menu--item-price">1,80 €</div>
          <div class="menu--item-description">diverse belegte Brötchen</div>
        </div>
        <div class="menu--item">
          <div class="menu--item-name">Morning Bowl</div>
          <div class="menu--item-price">2,80 €</div>
          <div class="menu--item-description">
            Acai Bowl mit Früchten und Nüssen
          </div>
        </div>
        <div class="menu--item">
          <div class="menu--item-name">New York Club Sandwhich</div>
          <div class="menu--item-price">3,80 €</div>
          <div class="menu--item-description">Roastbeet mit Mayo und Salat</div>
        </div>
      </div>
      <div class="menu--breakfast"></div>
      <div class="menu--lunch"></div>
    </div>
    <div class="menu--navigation-sub">
      <div class="active"><a class="">Drinks</a></div>
    </div>
    <div class="menu--outline">
      <div class="menu--item">
        <div class="menu--item-name">Kaffee</div>
        <div class="menu--item-price">1,80 €</div>
        <div class="menu--item-description">diverse belegte Brötchen</div>
      </div>
      <div class="menu--item">
        <div class="menu--item-name">Latte Macchiato</div>
        <div class="menu--item-price">2,20 €</div>
        <div class="menu--item-description">
          Sojamilch - Hafermilch - Mandelmilch
        </div>
      </div>
      <div class="menu--item">
        <div class="menu--item-name">Cappucino</div>
        <div class="menu--item-price">2,20 €</div>
        <div class="menu--item-description">
          Sojamilch - Hafermilch - Mandelmilch
        </div>
      </div>
    </div>
    <div class="menu--navigation-sub">
      <div class="active"><a class="">Smoothies</a></div>
    </div>
    <div class="menu--outline">
      <div class="menu--item">
        <div class="menu--item-name">Green Smothie</div>
        <div class="menu--item-price">1,80 €</div>
        <div class="menu--item-description">
          Erdbeeren, Mango, Ananas, Dragonfruit
        </div>
      </div>
      <div class="menu--item">
        <div class="menu--item-name">Red Smoothie</div>
        <div class="menu--item-price">2,20 €</div>
        <div class="menu--item-description">
          Erdbeeren, Mango, Ananas, Dragonfruit
        </div>
      </div>
      <div class="menu--item">
        <div class="menu--item-name">Bali Smoothie</div>
        <div class="menu--item-price">2,20 €</div>
        <div class="menu--item-description">
          Erdbeeren, Mango, Ananas, Dragonfruit
        </div>
      </div>
    </div>
    <logo-liner />
  </div>
</template>

<script>
import LogoLiner from '~/layouts/logoliner.vue'
export default {
  name: 'Menu',
  components: {
    LogoLiner
  },
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
.menu {
  padding: 2rem;
  padding-top: 0;
  overflow: hidden;
  @include tablet {
    width: 75%;
    margin: 0 auto;
  }
  .menu--navigation {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 40px;
    margin-bottom: 20px;
    justify-items: center;
    align-items: center;

    div {
      height: 30px;
      a {
        color: $color-main;
      }
      &.active {
        border-bottom: 2px solid $color-green;
      }
    }
    &-sub {
      margin-top: 30px;
      margin-bottom: 15px;
      div {
        height: 30px;
        width: 100%;
        a {
          color: $color-main;
        }
        &.active {
          border-bottom: 2px solid $color-green;
        }
      }
    }
  }
  &--weekly {
    margin-top: 25px;
  }
  &--item {
    display: grid;
    grid-template-columns: 75% 25%;
    padding-top: 10px;
    padding-bottom: 10px;
    &-name {
      font-weight: 600;
      @include font-size(1.2);
      font-family: $font-headline;
      margin-bottom: 5px;
    }
    &-price {
      text-align: right;
      font-weight: 600;
      @include font-size(1.2);
      font-family: $font-headline;
    }
    &-description {
      @include font-size(0.7);
      font-family: $font-text;
    }
  }
}
</style>
