<template>
  <div class="flex flex-col items-center hidden mt-32 text-center">
    <h1 class="text-3xl font-bold text-purple-900 lg:text-5xl">
      Тарифы на доставку
    </h1>
    <h2 class="mt-3 text-xl md:w-7/12">
      Стоимость доставки рассчитывается индивидуально. <br /> Свяжитесь с нами и мы вас проконсультируем.
    </h2>
    <h3 class="mt-10 text-lg font-bold text-purple-900">
      Доставка сборных грузов
    </h3>


    <div class="w-full mt-10 md:hidden px-50">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="flex flex-col pb-3 mb-5 space-y-3 border-b border-gray-400"
      >
        <div class="flex justify-between ">
          <div>
            <i class="mr-1 text-purple-900 far fa-map-marker-alt"></i>
            <span>Тип доставки</span>
          </div>
          <div>
            <span>{{ item.title }}</span>
          </div>
        </div>
        <div class="flex justify-between md:hidden">
          <div>
            <i class="mr-1 text-purple-900 far fa-box-alt"></i>
            <span>Мин. требования</span>
          </div>
          <div>
            <span>{{ item.min }}</span>
          </div>
        </div>
        <div class="flex justify-between md:hidden">
          <div>
            <i class="mr-1 text-purple-900 far fa-stopwatch"></i>
            <span>Срок доставки</span>
          </div>
          <div>
            <span>{{ item.time }}</span>
          </div>
        </div>
        <div class="flex justify-between md:hidden">
          <div>
            <i class="mr-1 text-purple-900 far fa-usd-circle"></i>
            <span>Тариф</span>
          </div>
          <div>
            <span>{{ item.price }}</span>
          </div>
        </div>
      </div>
    </div>


    <div class="hidden w-full p-10 rounded-lg md:block my-7 tariff-card shadow-card">
      <div class="flex lg:text-xl font-semi-bold">
        <div class="w-3/12 text-left">
          <i class="mr-1 text-purple-900 far fa-map-marker-alt"></i>
          <span>Тип доставки</span>
        </div>
        <div class="w-3/12 text-left">
          <i class="mr-1 text-purple-900 far fa-box-alt"></i>
          <span>Мин. требования</span>
        </div>
        <div class="w-3/12 text-left">
          <i class="mr-1 text-purple-900 far fa-stopwatch"></i>
          <span>Срок доставки</span>
        </div>
        <div class="w-3/12 text-left">
          <i class="mr-1 text-purple-900 far fa-usd-circle"></i>
          <span>Тариф</span>
        </div>
      </div>
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="flex py-4 mt-5 bg-white rounded-md lg:text-xl shadow-card">
        <div class="w-3/12 text-left">
          <span>{{ item.title }}</span>
        </div>
        <div class="w-3/12 text-left">
          <span>{{ item.min }}</span>
        </div>
        <div class="w-3/12 text-left">
          <span>{{ item.time }}</span>
        </div>
        <div class="w-3/12 text-left">
          <span>{{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Авиа', min: 'от 2кг', time: 'от 7 дней', price: 'от 10$' },
      { title: 'Автодорожная', min: 'от 20кг и выше', time: 'от 20 дней', price: 'от 2,3$' },
      { title: 'Железнодорожная', min: 'от 100кг и выше', time: 'от 30 дней', price: 'от 2$' },
    ]
  })
}
</script>

<style lang="scss">
.tariff-card {
  min-height: 380px;
  background: #f3f6ff;

  & div > div {
    padding-left: 30px;
  }
}

.font-semi-bold {
  font-weight: 500 !important;
}
</style>
