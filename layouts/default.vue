<template>
  <div class="font-gilroy">
    <TopNav />
    <div class="mt-nav">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        { hid: 'og:url', property: 'og:url', content: 'https://business.ooba.kg' },
        { hid: 'og:image', property: 'og:image', content: '/img/logo.svg' },
        { hid: 'og:description', property: 'og:description', content: 'Ooba Business - надежный партнер по сотрудничеству с Китаем! ДОВЕРЬТЕ НАМ ПЕРЕГОВОРЫ С ПОСТАВЩИКАМИ В КИТАЕ, ВЫКУП И ЛОГИСТИКУ!' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'twitter:image', name: 'twitter:image', content: '/img/logo.svg' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Ooba Business - надежный партнер по сотрудничеству с Китаем! ДОВЕРЬТЕ НАМ ПЕРЕГОВОРЫ С ПОСТАВЩИКАМИ В КИТАЕ, ВЫКУП И ЛОГИСТИКУ!' },
      ],
    }
  },
}
</script>

<style>
html {
  overflow-y: scroll;
}
</style>

