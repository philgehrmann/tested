<template>
  <div>
    <div class="hub__contentImageTop">
      <div class="hub__contentImageTop--text-in-image">
        <picture>
          <source
            srcset="~/assets/images/image_teaser-6.jpg"
            media="(min-width: 1300px)"
          />
          <source
            srcset="~/assets/images/image_teaser-6.jpg"
            media="(min-width: 1024px)"
          />
          <source
            srcset="~/assets/images/image_teaser-6.jpg"
            media="(min-width: 768px)"
          />
          <source
            srcset="~/assets/images/image_teaser-6.jpg"
            media="(max-width: 768px)"
          />
          <img src="~/assets/images/image_teaser-6.jpg" alt="MDN" />
        </picture>
      </div>
      <div class="hub__contentImageTop--text-in-image--text">
        <p>
          "Sei du selbst die Veränderung, die du dir wünschst für diese Welt.""
        </p>
        <span>Dalai Lama</span>
      </div>
    </div>
    <div class="hub__contentImageTop left">
      <div class="hub__contentImageTop--text">
        <h2>Unsere Gerichte</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
      <div class="hub__contentImageTop--image left">
        <picture>
          <source
            srcset="~/assets/images/image_teaser-7.jpg"
            media="(min-width: 1300px)"
          />
          <source
            srcset="~/assets/images/image_teaser-7.jpg"
            media="(min-width: 1024px)"
          />
          <source
            srcset="~/assets/images/image_teaser-7.jpg"
            media="(min-width: 768px)"
          />
          <source
            srcset="~/assets/images/image_teaser-7.jpg"
            media="(max-width: 768px)"
          />
          <img src="~/assets/images/image_teaser-7.jpg" alt="MDN" />
        </picture>
      </div>
    </div>
    <div class="hub__contentImageTop left">
      <div class="hub__contentImageTop--text">
        <h2>Unser Reyclingsystem</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
      <div class="hub__contentImageTop--image left">
        <picture>
          <source
            srcset="~/assets/images/mainimage.jpg"
            media="(min-width: 1300px)"
          />
          <source
            srcset="~/assets/images/mainimage.jpg"
            media="(min-width: 1024px)"
          />
          <source
            srcset="~/assets/images/mainimage.jpg"
            media="(min-width: 768px)"
          />
          <source
            srcset="~/assets/images/mainimage.jpg"
            media="(max-width: 768px)"
          />
          <img src="~/assets/images/mainimage.jpg" alt="MDN" />
        </picture>
      </div>
    </div>
    <div class="hub__contentImageTop left">
      <div class="hub__contentImageTop--text">
        <h2>Unser Blog</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
      <div class="hub__contentImageTop--image left">
        <picture>
          <source
            srcset="~/assets/images/image_teaser-9.jpg"
            media="(min-width: 1300px)"
          />
          <source
            srcset="~/assets/images/image_teaser-9.jpg"
            media="(min-width: 1024px)"
          />
          <source
            srcset="~/assets/images/image_teaser-9.jpg"
            media="(min-width: 768px)"
          />
          <source
            srcset="~/assets/images/image_teaser-9.jpg"
            media="(max-width: 768px)"
          />
          <img src="~/assets/images/image_teaser-9.jpg" alt="MDN" />
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentImageTop',
  props: {
    msg: String
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_globals.scss';

.hub__contentImageTop {
  position: relative;
  z-index: 0;
  display: grid;
  grid-template-columns: 1fr;

  @include tablet {
  grid-template-columns: 1fr 1fr;
  }
  @include desktop-small {
    padding-top: 6rem;
    padding-bottom: 6rem;
    grid-template-columns: 1fr 1fr;
  }
  @include desktop-big {
    padding-top: 6rem;
    padding-bottom: 6rem;
    grid-template-columns: 1fr 1fr;
  }

  &--text-in-image {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      pointer-events: none;
      background: rgb(65, 181, 178);
      background: linear-gradient(
        14deg,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0.6) 100%
      );
    }
    img {
      width: 100%;
      height: auto;
      max-height:300px;
      @include desktop-small {
        width: 80%;
        height: auto;
        margin-top: -50px;
      }
      @include desktop-big {
        width: 80%;
        height: auto;
        margin-top: -50px;
      }
    }
    &--text {
      width: 100%;
      padding: 2rem;
      color: $color-white;
      text-align: center;
      position: absolute;
      margin-top: 25%;

      p,
      span {
        width: 100%;
        margin: 0 auto;
        color: $color-white;
      }
      p {
        @include font-size(1.5);
        line-height: 2.2rem;
        margin-bottom: 20px;
        font-family: $font-headline;
      }
      span {
        @include font-size(0.8);
      }
    }
  }
  &--image {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      pointer-events: none;
      background: rgb(65, 181, 178);
      background: linear-gradient(
        14deg,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    img {
      width: 100%;
      height: auto;
      max-height:300px;
      @include desktop-small {
        width: 80%;
        height: auto;
        margin-top: -50px;
      }
      @include desktop-big {
        width: 80%;
        height: auto;
        margin-top: -50px;
      }
    }
    &.right {
      text-align: right;
    }
    &.center {
      text-align: center;
      img {
        width: 100%;
        height: auto;
        height: auto;
      }
    }
    &.left {
      text-align: left;
    }
  }
  &--text {
    padding: 2rem;
    padding-bottom: 1rem;
    text-align: left;
    @include desktop-small {
    }
    @include desktop-big {
      align-self: center;
    }
    &.green {
      background: $color-green;
      h2 {
        color: $color-white;
      }
      p {
        color: $color-white;
      }
    }

    p {
      @include font-size(1.1);
      @include desktop-small {
        @include font-size(1.2);
        line-height: 2rem;
        margin-top: 50px;
        max-width: 400px;
        text-align: justify;
      }
      @include desktop-big {
        @include font-size(1.2);
        line-height: 2rem;
        margin-top: 50px;
        max-width: 400px;
        text-align: justify;
      }
    }
    h2 {
      margin-bottom: 2rem;
      font-weight: 700;
      line-height: 2.5rem;
      font-size: 18px;
      font-size: 1.8rem;
      @include desktop-small {
        @include font-size(5);
        margin-left: -100%;
        //background-image:linear-gradient(to bottom, #4ab5b1 0%,#29b5a4 50%,#007c74 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      @include desktop-big {
        @include font-size(5);
        margin-left: -100%;
        background: white;
        //background-image: linear-gradient(to bottom, #4ab5b1 0%,#29b5a4 50%,#007c74 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style>
