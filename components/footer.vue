<template>
  <div class="footer">
    <div class="hub__footer">
      <h2>Öffnungszeiten</h2>
      <div class="hub__footer--item">
        <h3>Montag - Samstag</h3>
        <p>09:00 - 23:00 Uhr</p>
      </div>
      <div class="hub__footer--item">
        <h3>Sonntag</h3>
        <p>10:00 - 23:00 Uhr</p>
      </div>
      <div class="hub__footer--item">
        <h3>Frühstück täg. bis 13:00 Uhr</h3>
      </div>
      <div class="hub__footer--item">
        <h3>Mittagskarte</h3>
        <p>MO-FR 12:00 - 16:00 Uhr</p>
      </div>
    </div>
    <div class="hub__subfooter">
      <div class="hub__subfooter--item">
        <ul>
          <li><nuxt-link to="/impressum">Impressum</nuxt-link></li>
          <li><nuxt-link to="/datenschutz">Datenschutz</nuxt-link></li>
          <li><nuxt-link to="/carrer">Career</nuxt-link></li>
        </ul>
      </div>
      <div class="hub__subfooter--item">
        <p>
          Geschäftsführer: Fabian Deventer & Johannes Theobald <br />
          All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'footer',
  name: 'Footer',
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
.footer {
  width: 100%;
  background: $color-gray;
  text-align: center;

  color: $color-main;
}

.hub {
  &__footer {
    width: 100%;
    margin: 0 auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
    h2 {
      margin-bottom: 1.5rem;
      @include font-size(1.6);
    }
    h3 {
      @include font-size(1);
      margin-bottom: 5px;
    }
    p {
      margin-top: 0;
      @include font-size(0.9);
    }
    &--item {
      margin-bottom: 1.25rem;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
  &__subfooter {
    width: 100%;
    background: $color-blue;
    padding: 1rem 1rem 1rem 1rem;
    display: grid;
    grid-template-rows: 1fr;
    &--item {
      @include desktop-small {
        width: 50%;
        margin: 0 auto;
      }
      @include desktop-big {
        width: 50%;
        margin: 0 auto;
      }
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        align-items: center;
        list-style-type: none;
        li {
          display: inline-block;
          a {
            color: $color-white;
            @include font-size(0.8);
          }
        }
      }
      p {
        margin-top: 1rem;
        color: $color-white;
        @include font-size(0.7);
      }
    }
  }
}
</style>
