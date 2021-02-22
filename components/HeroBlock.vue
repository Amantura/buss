<template>
  <div
    class="relative w-full mt-10 overflow-hidden bg-dark hero-block"
  >
    <div
      class="flex flex-col w-full h-full text-center text-white md:text-left xl:justify-center container-auto"
    >
      <div class="flex flex-col justify-center mt-5 md:space-y-0 space-y-7 md:mt-20 md:space-y-20 xl:-mt-5 md:w-9/12 xl:w-8/12">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <h2 class="mb-10 md:mb-5 md:text-xl font-semi-bold">
            Ooba Business - надежный партнер по сотрудничеству с Китаем!
          </h2>
          <h1 class="text-2xl font-bold uppercase md:text-4xl lg:text-5xl">
            Доверьте нам <span class="text-purple-500">переговоры</span> с
            поставщиками в Китае,
            <span class="text-purple-500">выкуп и логистику!</span>
          </h1>
        </div>
        <NuxtLink
          class="px-5 py-3 mx-auto font-bold text-center rounded-md md:mx-0 btn-hero md:text-xl hover:opacity-90 bg-linear-fiolet"
          to="/form"
        >
          Найти нужный мне товар
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.hero-block {
  background-image: url("/img/mobile-landscape.png");
  background-repeat: no-repeat;
  background-position: center 100%;
  background-size: cover;
  height: 720px;
}

.btn-hero {
  width: 300px
}

@media (min-width: 768px) {
  .hero-block {
    background-image: url("/img/tablet-building.png");
    background-position: right bottom;
    background-size: contain;
  }
}

@media (min-width: 1024px) {
  .hero-block {
    background-image: url("/img/building1.png");
    background-position: right 100%;
  }
}
</style>
