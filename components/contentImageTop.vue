<template>
  <div>
    <div class="hub__contentImageTop">
      <div class="hub__contentImageTop--image right">
        <picture>
          <source
            srcset="https://picsum.photos/1200/1200?random=2"
            media="(min-width: 1300px)"
          />
          <source
            srcset="https://picsum.photos/1250/600?random=2"
            media="(min-width: 1024px)"
          />
          <source
            srcset="https://picsum.photos/1024/450?random=2"
            media="(min-width: 768px)"
          />
          <source
            srcset="https://picsum.photos/768/768?random=2"
            media="(max-width: 768px)"
          />
          <img src="https://picsum.photos/id/1015/1300/1000" alt="MDN" />
        </picture>
      </div>
      <div class="hub__contentImageTop--text">
        <h2>Unsere Philosophie</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
    </div>
    <div class="hub__contentImageTop">
      <div class="hub__contentImageTop--image center">
        <picture>
          <source
            srcset="https://picsum.photos/1200/1200?random=2"
            media="(min-width: 1300px)"
          />
          <source
            srcset="https://picsum.photos/1250/600?random=2"
            media="(min-width: 1024px)"
          />
          <source
            srcset="https://picsum.photos/1024/450?random=2"
            media="(min-width: 768px)"
          />
          <source
            srcset="https://picsum.photos/768/768?random=2"
            media="(max-width: 768px)"
          />
          <img src="https://picsum.photos/id/1015/1300/1000" alt="MDN" />
        </picture>
      </div>
      <div class="hub__contentImageTop--text">
        <h2>Unsere Philosophie</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
    </div>
    <div class="hub__contentImageTop">
      <div class="hub__contentImageTop--image left">
        <picture>
          <source
            srcset="https://picsum.photos/1200/1200?random=2"
            media="(min-width: 1300px)"
          />
          <source
            srcset="https://picsum.photos/1250/600?random=2"
            media="(min-width: 1024px)"
          />
          <source
            srcset="https://picsum.photos/1024/450?random=2"
            media="(min-width: 768px)"
          />
          <source
            srcset="https://picsum.photos/768/768?random=2"
            media="(max-width: 768px)"
          />
          <img src="https://picsum.photos/id/1015/1300/1000" alt="MDN" />
        </picture>
      </div>
      <div class="hub__contentImageTop--text">
        <h2>Unsere Philosophie</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'contentImageTop',
  name: 'ContentImageTop',
  props: {
    msg: String
  },
  mounted() {},
  methods: {}
}
</script>
<style></style>
