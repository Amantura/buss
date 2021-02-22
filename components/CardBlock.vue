<template>
  <div id="services" class="text-center">
    <h2 class="mb-10 text-2xl font-bold text-purple-700 lg:pt-20">Услуги</h2>
    <h1 class="mb-20 text-3xl font-bold text-purple-900 lg:text-5xl">Что мы вам предлагаем?</h1>
    <div class="flex flex-wrap justify-between container-card">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="flex flex-col items-center px-10 py-10 space-y-5 bg-white rounded-xl service-card shadow-card">
        <img :src="item.icon" :alt="item.header" />
        <h3 class="w-full text-xl font-bold">{{ item.header }}</h3>
        <p class="text-md">
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: '/img/cart.svg',
        header: `Выкуп товаров у поставщика
        ( 1688, Alibaba, WeChat )`,
        text: `Быстро и безопасно выкупимдля вас товары на оптовых китайских платформах Taobao,
        1688 и Alibaba или проведем оплату
        вашему поставщику через
        приложение WeChat.`
      },
      {
        icon: '/img/heart.svg',
        header: `Поиск товаров
с хорошим рейтингом`,
        text: 'Найдем поставщиков с хорошей репутацией на рынке,которым можно доверять.'
      },
      {
        icon: '/img/search.svg',
        header: `Поиск надежных
        поставщиков в Китае`,
        text: 'Подберем для вас оптимальный по качеству и стоимости товар.'
      },
      {
        icon: '/img/lump.svg',
        header: `Брендирование
крупной партии товара`,
        text: 'Найдем и закажем товары, которые вы хотите забрендировать и организуем нанесение лого в Китае, что будет выгоднее.'
      },
      {
        icon: '/img/check.svg',
        header: `Инспекция товара
на складе`,
        text: 'Наши сотрудники в Китае проверяют товар на складе на соответствие запросам клиента (размер, цвет) и на наличие дефектов.'
      },
      {
        icon: '/img/galery.svg',
        header: `Фото - и видеоотчеты
со склада`,
        text: 'Мы можем предоставить вам фото - или видеоотчет, чтобы вы убедились в целостности груза и его соответствию вашим запросам при оформлении.'
      },
      {
        icon: '/img/clock.svg',
        header: 'Доставка из Китая в Кыргызстан',
        text: 'Быстро и надежно доставим ваш груз из Китая в Кыргызстан.'
      },
      {
        icon: '/img/network.svg',
        header: 'Консолидация груза',
        text: 'Объединим все ваши товары от разных продавцов и отправим в Кыргызстан одной посылкой.'
      },
      {
        icon: '/img/network.svg',
        header: 'Mail Forwarding',
        text: 'Возможность использования адреса нашего склада в Китае для транспортировки вашего груза в Кыргызстан.'
      },
    ],
  }),
}
</script>

<style lang="scss">
.container-card {
  padding: 0 -20px;
}

.service-card {
  width: 100%;
  margin-bottom: 30px;
  transition: 0.2s;
  height: auto;

  &:hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
  }
}

@media (min-width: 768px) {
  .service-card {
    width: calc(50% - 15px);
  }
}

@media (min-width: 1280px) {
  .service-card {
    width: calc(33.3333% - 20px);
    padding-right: 35px;
    padding-left: 35px;
  }
}
</style>
