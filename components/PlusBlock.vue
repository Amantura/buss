<template>
  <div id="benefits" class="pt-20 md:pt-32">
    <h2 class="text-xl font-bold text-purple-700 mb-7">
      Преимущества
    </h2>
    <h1 class="mb-20 text-4xl font-bold text-purple-900 md:text-5xl md:w-8/12">
      Почему вам стоит выбрать именно нас?
    </h1>
    <div class="flex flex-wrap justify-between">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="plus-card">
        <img
          :src="item.icon"
          :alt="item.header"
          class="my-6 rounded-xl"
          style="box-shadow: 0 6px 14px -6px rgba(24, 39, 75, 0.12), 0 10px 32px -4px rgba(24, 39, 75, 0.1);" />
        <h3 class="mb-3 text-2xl font-bold">{{ item.header }}</h3>
        <p class="text-xl">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: '/icon/1.svg',
        header: 'Качественное оказание консалтинговых услуг',
        text: 'У нас большой опыт работы с Китаем. Мы ответим на все ваши вопросы по работе с Китаем, подскажем, какие направления в торговле сейчас актуальны, где, как и что лучше закупать.'
      },
      {
        icon: '/icon/2.svg',
        header: 'Собственная продуманная логистика',
        text: 'У нас автоматизированы все логистические процессы. Нам доверяют. Уже более 5 лет мы доставляем грузы для крупных компаний Бишкека.'
      },
      {
        icon: '/icon/3.svg',
        header: 'Свои склады в крупных городах Китая',
        text: 'Наличие собственных складов позволяет нам безопасно хранить посылки клиентов, инспектировать их и принимать ваши посылки со всех городов и регионов Китая.'
      },
      {
        icon: '/icon/4.svg',
        header: 'Проверка товара на складе перед отправкой',
        text: 'В случае если товар окажется бракованным, мы вернем его продавцу.'
      },
      {
        icon: '/icon/5.svg',
        header: 'Возможность заказа груза в любом объеме',
        text: 'Мы располагаем возможностями для того, чтобы доставить груз практически любого объема.'
      },
      {
        icon: '/icon/6.svg',
        header: 'База надежных поставщиков',
        text: 'Мы располагаем базой проверенных и надежных поставщиков в Китае.'
      }
    ]
  })
}
</script>

<style lang="scss">
  .plus-card {
    width: 100%;
  }

  @media (min-width: 640px) {
    .plus-card {
      width: calc(50% - 20px);
    }
  }
</style>
