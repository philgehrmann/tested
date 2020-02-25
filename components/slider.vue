<template>
  <div class="hub__main-slider">
    <div v-parallax="0.2" class="text__content">
      <img src="~/assets/images/logo_white.svg" />
    </div>
    <slick
      ref="slick"
      :options="slickOptions"
      @afterChange="handleAfterChange"
      @beforeChange="handleBeforeChange"
      @breakpoint="handleBreakpoint"
      @destroy="handleDestroy"
      @edge="handleEdge"
      @init="handleInit"
      @reInit="handleReInit"
      @setPosition="handleSetPosition"
      @swipe="handleSwipe"
      @lazyLoaded="handleLazyLoaded"
      @lazyLoadError="handleLazeLoadError"
    >
      <picture v-parallax="0.1">
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
      <picture v-parallax="0.1">
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
      <picture v-parallax="0.1">
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
      <picture v-parallax="0.1">
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
    </slick>
  </div>
</template>

<script>
import Slick from 'vue-slick'
export default {
  name: 'ImageSlider',
  components: { Slick },
  props: {
    images: Array
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autplay: false,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 1,
              autplay: false
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              autplay: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              autplay: false
            }
          }
        ]
      }
    }
  },
  mounted() {},
  methods: {
    next() {
      this.$refs.slick.next()
    },

    prev() {
      this.$refs.slick.prev()
    },

    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    },
    handleAfterChange(event, slick, currentSlide) {
      console.log('handleAfterChange', event, slick, currentSlide)
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      console.log('handleBeforeChange', event, slick, currentSlide, nextSlide)
    },
    handleBreakpoint(event, slick, breakpoint) {
      console.log('handleBreakpoint', event, slick, breakpoint)
    },
    handleDestroy(event, slick) {
      console.log('handleDestroy', event, slick)
    },
    handleEdge(event, slick, direction) {
      console.log('handleEdge', event, slick, direction)
    },
    handleInit(event, slick) {
      console.log('handleInit', event, slick)
    },
    handleReInit(event, slick) {
      console.log('handleReInit', event, slick)
    },
    handleSetPosition(event, slick) {
      console.log('handleSetPosition', event, slick)
    },
    handleSwipe(event, slick, direction) {
      console.log('handleSwipe', event, slick, direction)
    },
    handleLazyLoaded(event, slick, image, imageSource) {
      console.log('handleLazyLoaded', event, slick, image, imageSource)
    },
    handleLazeLoadError(event, slick, image, imageSource) {
      console.log('handleLazeLoadError', event, slick, image, imageSource)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
@import '~/assets/scss/slick.scss';

.hub {
  &__main-slider {
    height: 50%;
    display: block;
    overflow: hidden;

    .text__content {
      position: absolute;
      top: 35%;
      z-index: 10;
      text-align: center;
      width: 100%;
      @include tablet {
          top: 50%;
      }

      img {
        width: 60%;
        height: auto;
        @include tablet {
          width: 30%;
        }
      }
    }
  }
}
.slick-slider::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  pointer-events: none;
  background: rgb(65, 181, 178);
  background: linear-gradient(
    14deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>
