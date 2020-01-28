<template>
  <div>
    <Header />
    <ImageSlider />
    <Welcome />
    <contentImageTop />
    <Map />
    <Footer />
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

const contentfulClient = createClient()

export default {
  components: {
    Header,
    Welcome,
    ImageSlider,
    contentImageTop,
    Map,
    Footer
  },
  data() {
    return {
      pageInformation: Object,
      title: String
    }
  },
  asyncData({ env }) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      contentfulClient.getEntries({
        content_type: 'siteinformation',
        order: '-sys.createdAt'
      })
    ])
      .then(([pageInformation]) => {
        console.log(pageInformation)
        return {
          pageTitle: pageInformation.items
        }
      })
      .catch(console.error)
  }
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
