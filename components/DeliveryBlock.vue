<template>
  <div id="delivery" class="pt-10 text-center md:pt-32">
    <h2 class="mb-5 text-xl text-purple-700">Доставка</h2>
    <h1 class="text-3xl font-bold text-purple-900 lg:text-5xl">
      Мы доставляем грузы наземным,
      воздушным и комбинированным способом.
    </h1>
    <h3 class="mt-5 mb-10 text-3xl">
      Виды доставки и их плюсы
    </h3>
    <div class="flex flex-wrap justify-between">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="relative flex flex-col items-center p-10 mb-5 bg-white border border-white delivery-card rounded-2xl shadow-card">
        <h2 class="text-xl font-bold">{{ item.title }}</h2>
        <p class="mt-2 text-lg">{{ item.text }}</p>
        <img
          :src="item.img"
          class="mx-auto mt-5 md:absolute md:mt-0 bottom-4"
          :alt="item.title" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Автодорожная доставка', text: 'Позволяет перевозить крупногабаритные грузы.', img: '/img/bus.png' },
      { title: 'Авиадоставка', text: 'Главное ее достоинство — скорость. Отличный выбор для перевоза небольших грузов или образцов продукции.', img: '/img/aero.png' },
      { title: 'Железнодорожная доставка', text: 'Самый доступный по стоимости вид доставки. Подойдет тем, кто располагает небольшим бюджетом на логистические расходы.', img: '/img/trans.png' },
    ]
  })
}
</script>

<style lang="scss">
.delivery-card {
  width: 100%;
  transition: 0.2s;
  min-height: 304px;

  &:hover {
    border: 1px solid rgba(232, 232, 232, 0.6);
  }
}

@media (min-width: 760px) {
  .delivery-card {
    height: 324px;
  }
}

@media (min-width: 1024px) {
  .delivery-card {
    width: calc(33.3333% - 20px);
    height: 424px;
  }
}
</style>
