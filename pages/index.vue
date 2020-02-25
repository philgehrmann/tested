<template>
  <div>
    <!--<Preloader /> -->
    <Header :navigation="navigation"></Header>
    <ImageSlider />
    <Welcome />
    <Menu />
    <contentImageTop />
    <Map />
    <Footer />
    <FooterButtons />
  </div>
</template>

<script>
import { createClient } from '../plugins/contentful'
import Header from '~/components/Header.vue'
import Welcome from '~/components/welcome.vue'
import ImageSlider from '~/components/slider.vue'
import contentImageTop from '~/components/contentImageTop.vue'
import Map from '~/components/map.vue'
import Footer from '~/components/footer.vue'
import FooterButtons from '~/components/footerbuttons.vue'
import Menu from '~/components/menu.vue'
import Preloader from '~/components/preloader.vue'

const contentfulClient = createClient()

export default {
  components: {
    Header,
    Welcome,
    ImageSlider,
    contentImageTop,
    Map,
    Footer,
    FooterButtons,
    Menu,
    Preloader
  },
  data() {
    return {
      pageInformation: Object,
      title: String
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  asyncData() {
    return Promise.all([
      contentfulClient.getEntries({
        content_type: 'siteinformation',
        order: '-sys.createdAt'
      })
    ])
      .then((pageInformation) => {
        return {
          title: pageInformation[0].items[0].fields.pageTitel
        }
      })
      .catch(console.error)
  },
  asyncData() {
    return Promise.all([
      contentfulClient.getEntries({
        content_type: 'hubNavigation'
      })
    ])
      .then((navigation) => {
        return {
          navigation: navigation[0].items
        }
      })
      .catch(console.error)
  },
  mounted() {}
}
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: $color-main;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
