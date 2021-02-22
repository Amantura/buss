<template>
  <div class="pt-5">
    <div class="px-5 py-5 text-center">
      <h1 class="mb-5 text-sm font-bold lg:px-20 lg:text-xl">ПОДРОБНО ЗАПОЛНИТЕ ФОРМУ СЛЕВА, ЧТОБЫ МЫ МОГЛИ НАЙТИ ТОВАР, МАКСИМАЛЬНО УДОВЛЕТВОРЯЮЩИЙ ВСЕ ВАШИ ЗАПРОСЫ.</h1>
      <h2>Не теряйте возможность приобрести уникальные товары в Китае для своего бизнеса по выгодной цене!</h2>
    </div>
    <div>
      <FormOffer @submited="on" />
    </div>
    <transition
      enter-active-class="transition-opacity duration-100 ease-linear"
      leave-active-class="transition-opacity duration-100 ease-linear delay-75"
      enter-class="opacity-80"
      leave-to-class="opacity-80">

      <div
        v-show="modal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
        style="backdrop-filter: blur(20px)"
        @click="close"
      >
        <transition
          enter-active-class="transition-transform duration-100 ease-out transform"
          leave-active-class="transition-transform duration-100 ease-in transform"
          enter-class="-translate-y-8"
          leave-to-class="-translate-y-8"
        >
          <Success v-show="modal" />
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    modal: false
  }),
  methods: {
    on() {
      this.modal = true
    },
    close() {
      this.modal = false
    }
  }
}
</script>
