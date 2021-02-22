<template>
  <div
    class="fixed w-full text-purple-900 bg-white t-0 l-0 nav"
    style="top: 0 !important; z-index: 99999; box-shadow: 0 6px 8px -6px rgba(24, 39, 75, 0.12), 0 8px 16px -6px rgba(24, 39, 75, 0.08);"
    @keydown.esc="closeModal"
  >
    <div class="flex items-center justify-between h-full container-auto">
      <div class="flex space-x-5 lg:space-x-0 logo">
        <button class="lg:hidden" @click="openMenu">
          <img src="/img/btn-black.svg" />
        </button>
        <NuxtLink to="/">
          <img src="/img/purple-logo.svg" alt="" />
        </NuxtLink>
      </div>
      <nav class="hidden space-x-8 lg:flex">
        <NuxtLink to="/#aboutUs" class="link-hover">О нас</NuxtLink>
        <NuxtLink to="/#services" class="link-hover">Услуги</NuxtLink>
        <NuxtLink to="/#benefits" class="link-hover">Преимущества</NuxtLink>
        <NuxtLink to="/#delivery" class="link-hover">Доставка</NuxtLink>
        <NuxtLink to="/#" class="link-hover">
          Закупка
        </NuxtLink>
      </nav>
      <div class="relative">
        <button class="py-2 text-white rounded-md px-7 bg-linear-fiolet hover:opacity-90" @click="openModal">
          Связаться
        </button>
      </div>
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
        @click="closeModal"
      >
        <transition
          enter-active-class="transition-transform duration-100 ease-out transform"
          leave-active-class="transition-transform duration-100 ease-in transform"
          enter-class="-translate-y-8"
          leave-to-class="translate-y-8"
        >
          <CallBack v-show="modal" />
        </transition>
      </div>
    </transition>

    <transition
      enter-active-class="transition-opacity duration-100 ease-linear"
      leave-active-class="transition-opacity duration-100 ease-linear delay-75"
      enter-class="opacity-80"
      leave-to-class="opacity-80"
    >
      <div
        v-show="drawer"
        class="fixed inset-0 z-50 bg-opacity-30"
        style="backdrop-filter: blur(20px)"
        @click="closeMenu"
      >
        <transition
          enter-active-class="transition-transform duration-100 ease-out transform"
          leave-active-class="transition-transform duration-100 ease-in transform"
          enter-class="-translate-x-8"
          leave-to-class="-translate-x-8"
        >
          <div
            v-show="drawer"
            class="h-full bg-dark"
            style="width: 300px;">

            <div class="flex items-center p-5 space-x-5 border-b border-gray-400">
              <button
                @click="closeMenu"
              >
                <img src="/img/closebtn.svg" alt="" />
              </button>

              <img src="/img/logo2.svg" alt="" />
            </div>
            <div class="flex flex-col items-start text-left text-white">
              <NuxtLink
                to="/#aboutUs"
                class="px-5 py-3 hover:opacity-95"
                @click="closeMenu">О нас</NuxtLink>
              <NuxtLink
                to="/#services"
                class="px-5 py-3 hover:opacity-95"
                @click="closeMenu">Услуги</NuxtLink>
              <NuxtLink
                to="/#benefits"
                class="px-5 py-3 hover:opacity-95"
                @click="closeMenu">Преимущества</NuxtLink>
              <NuxtLink
                to="/#delivery"
                class="px-5 py-3 hover:opacity-95"
                @click="closeMenu">Доставка</NuxtLink>
              <button
                class="px-5 py-3 hover:opacity-95"
                @click="closeMenu"
              >Закупка</button>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    modal: false
  }),
  methods: {
    openMenu() {
      this.drawer = true
    },
    closeMenu() {
      this.drawer = false
    },
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    }
  }
}
</script>

<style lang="scss">
.link-hover {
  position: relative;

  &::after {
    position: absolute;
    content: "";
    top: 120%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #390073;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}
</style>
