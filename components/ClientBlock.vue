<template>
  <div class="pt-32 text-center">
    <h1 class="text-3xl font-bold text-purple-900 lg:text-5xl">
      Кейсы наших клиентов
    </h1>
    <h2 class="mt-5 text-xl font-bold text-purple-700">
      Проекты:
    </h2>
    <div>
      <vue-horizontal-list :items="items" :options="options">
        <template v-slot:nav-prev>
          <div><i class="mt-1 text-xl font-bold text-purple-900 fas fa-chevron-left"></i></div>
        </template>

        <template v-slot:nav-next>
          <div><i class="mt-1 text-xl font-bold text-purple-900 fas fa-chevron-right"></i></div>
        </template>

        <template v-slot:default="{ item }">
          <div class="flex flex-col pb-5 overflow-hidden shadow-md lg:pb-0 lg:flex-row client-card rounded-2xl">
            <div class="pt-5 md:pt-0 md:relative lg:w-1/2 h-90">
              <h5 class="px-10 text-lg font-bold text-center text-purple-800 lg:w-10/12 md:text-2xl lg:text-left md:absolute top-3 left-5">{{ item.title }}</h5>
              <img
                :src="item.img"
                class="object-cover w-full h-full md:h-90 lg:h-full lg:object-cover"
                :alt="item.title" />
            </div>
            <div class="pt-4 pb-5 pl-5 pr-5 text-left lg:pt-5 lg:w-1/2">
              <h2 class="text-xl font-bold">Решенные задачи:</h2>
              <ul class="px-3 text-sm list-disc lg:text-xl">
                <li
                  v-for="(content, idx) in item.content"
                  :key="idx"
                  class="my-2">
                  {{ content }}
                </li>
              </ul>
              <hr class="mt-10" />
              <div class="text-sm md:text-xl">
                <div class="flex pt-5">
                  <span class="w-1/2 lg:w-4/12">Срок доставки:</span>
                  <span class="w-1/2 font-bold text-right text-purple-800">{{ item.day }}</span>
                </div>
                <div class="flex pt-2">
                  <span class="w-1/2 lg:w-4/12">Бюджет:</span>
                  <span class="w-1/2 font-bold text-right text-purple-800">{{ item.budget }}</span>
                </div>
                <div class="flex pt-2">
                  <span class="w-1/2 lg:w-4/12">Размер выгоды:</span>
                  <span class="w-1/2 font-bold text-right text-purple-800 ">{{ item.size }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </vue-horizontal-list>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Поставка оборудования для косметического салона красоты',
        img: '/img/client1.png',
        content: [
          'Поиск подходящего оборудования, соответствующего запросам клиента',
          'Инспекция груза перед отправкой в Бишкек',
          'Надежная обрешетка для транспортировки груза',
          'Доставка автотранспортом из Гуанчжоу в Бишкек',
          'Таможенное оформление'
        ],
        day: '20 дней',
        budget: '150 000 сомов',
        size: '40% с учетом доставки'
      },
      {
        title: 'Поставка оборудования для косметического салона красоты',
        img: '/img/client1.png',
        content: [
          'Поиск подходящего оборудования, соответствующего запросам клиента',
          'Инспекция груза перед отправкой в Бишкек',
          'Надежная обрешетка для транспортировки груза',
          'Доставка автотранспортом из Гуанчжоу в Бишкек',
          'Таможенное оформление'
        ],
        day: '20 дней',
        budget: '150 000 сомов',
        size: '40% с учетом доставки'
      },
    ],
    options: {
      responsive: [
        { size: 1 },
      ],
      list: {
        padding: 17,
      },
      autoplay: { play: true, repeat: true, speed: 20000 },
    },
  })
}
</script>

<style lang="scss">
  .client-card {
    border: 1px solid rgba(232, 232, 232, 0.6)
  }
</style>
