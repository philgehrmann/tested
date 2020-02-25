<template>
  <div class="hub__welcome">
    <logo-liner />
    <div class="hub__welcome--content">
      <h2>The Hub</h2>
      <p>
        <strong>Willkommen</strong>,<br />
        in einer Welt der besonderen Kulinarik. <br />
        Das Hub bietet dir fernöstliche Küche, mit exotischen aber auch
        traditionellen Gerichten, zu günstigen Preisen. <br />
        <br />
        Wir haben es uns zum Ziel gesetzt den Menschen in Köln mit unseren
        außergewöhnlichen Speisen zu verzaubern und dabei die Nachhaltigkeit zu
        unterstützen. Fairtrade Produkte und ein nachhaltiger Anbau unserer
        verwendeten Lebensmittel stehen bei uns an erster Stelle. <br />
        <br />
        Wenn du Lust hat die Erde zu einem sauberen Planeten zu machen und auf
        gutes Essen wert legst, dann komm vorbei und lass uns etwas gutes tun.
        <br />
        <br />
      </p>
      <a class="button button--center">Unsere Speisekarte</a>
    </div>
    <logo-liner />
  </div>
</template>
<script>
import LogoLiner from '~/layouts/logoliner.vue'
export default {
  name: 'Welcome',
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
@import '~/assets/scss/_buttons.scss';

.hub__welcome {
  padding: 2rem;
  text-align: left;
  @include desktop-small {
    padding: 6rem;
  }
  @include desktop-big {
    padding: 6rem;
  }
  &--content {
    @include tablet {
      width: 75%;
      margin: 0 auto;
    }
  }
  h2 {
    margin-bottom: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
    @include font-size(1.8);
    @include desktop-small {
      @include font-size(2.5);
    }
    @include desktop-big {
      @include font-size(3);
    }
  }
}
</style>
