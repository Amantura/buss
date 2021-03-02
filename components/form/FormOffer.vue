<template>
  <div v-if="model">
    <h1 class="text-center text-red-600">
      Поля, помеченные "*", обязательны для заполнения
    </h1>
    <hr class="my-5" />
    <form class="lg:text-sm" @submit.prevent="submit">
      <div class="flex flex-col space-y-2 rounded-md shadow-sm form lg:space-y-0 md:flex-row md:flex-wrap shadows">
        <div class="w-full py-4" style="box-shadow: 0 2px 4px -2px rgba(24, 39, 75, 0.12), 0 4px 4px -2px rgba(24, 39, 75, 0.08);">
          <h2 class="px-5 text-lg font-semibold">
            Ваша контактная информация
          </h2>
        </div>
        <div class="flex flex-wrap w-full px-5 py-5 space-y-3 lg:space-y-0 md:space-y-3">
          <label for="name" class="flex flex-col w-full md:w-full lg:w-1/3">
            <span>ФИО*</span>
            <input
              id="name"
              v-model="model.fullname"
              required
              type="text"
              class="border border-gray-300 rounded-lg outline-none lg:mr-2 focus:border-purple-900 focus:shadow-none"
              style="outline: 0"
              placeholder="Титов Юрий"
              name="name" />
          </label>

          <label for="phone" class="flex flex-col w-full md:w-1/2 lg:w-1/3">
            <span>Номер телефона*</span>
            <input
              id="phone"
              v-model="model.phone"
              v-mask="'0 (###) ##-##-##'"
              required
              type="text"
              class="border border-gray-300 rounded-lg outline-none md:mr-2 focus:border-purple-900 focus:shadow-none"
              name="phone"
              placeholder="0 (___) __-__-__ " />

          </label>

          <label for="email" class="flex flex-col w-full md:w-1/2 lg:w-1/3">
            <span>E-mail</span>
            <input
              id="email"
              v-model="model.email"
              type="email"
              class="border border-gray-300 rounded-lg outline-none focus:border-purple-900 focus:shadow-none"
              name="email"
              placeholder="example@gmail.com" />
          </label>
        </div>
      </div>

      <div class="flex flex-col mt-10 space-y-4 rounded-md lg:space-y-0 md:flex-row md:flex-wrap shadows">
        <div class="w-full py-3" style="box-shadow: 0 2px 4px -2px rgba(24, 39, 75, 0.12), 0 4px 4px -2px rgba(24, 39, 75, 0.08);">
          <h2 class="px-5 text-lg font-semibold ">
            Товары для поиска
          </h2>
        </div>

        <div class="flex flex-col pt-5 space-y-4 rounded-md lg:space-y-0 md:flex-row md:flex-wrap">
          <ProductUpsert
            v-for="(product, idx) in model.products"
            :key="idx"
            :value="product"
            :pointer="idx"
            @openfile="openImg"
            @update="onProductUpdate"
            @remove="removeProduct(idx)"
          />


          <div class="flex flex-col items-center w-full px-5 py-10">
            <div
              class="px-5 py-3 text-sm text-center text-purple-900 border border-purple-900 cursor-pointer rounded-3xl hover:bg-purple-600 hover:text-white"
              style="width: 300px"
              @click="addProduct">
              <i class="fal fa-plus-circle"></i>
              Добавить товар ещё один товар
            </div>
          </div>
        </div>

      </div>
      <div class="flex flex-col items-center w-full mb-10">
        <hr class="w-full my-10" />
        <button
          class="px-5 py-3 text-white rounded-md bg-linear-fiolet"
          type="submit"
          style="width: 300px"
          @click="checkForm">
          Отправить
        </button>
      </div>
    </form>
    <transition
      enter-active-class="transition-opacity duration-100 ease-linear"
      leave-active-class="transition-opacity duration-100 ease-linear delay-75"
      enter-class="opacity-80"
      leave-to-class="opacity-80">

      <div
        v-show="activeImg"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
        style="backdrop-filter: blur(20px)"
        @click="closeImg"
      >
        <transition
          enter-active-class="transition-transform duration-100 ease-out transform"
          leave-active-class="transition-transform duration-100 ease-in transform"
          enter-class="-translate-y-8"
          leave-to-class="-translate-y-8"
        >
          <div v-show="activeImg">
            <img :src="'https://crm.ooba.kg'+currImg" alt="" />
          </div>
        </transition>
      </div>
    </transition>
    <transition
      enter-active-class="transition-transform duration-100 ease-out transform"
      leave-active-class="transition-transform duration-100 ease-in transform"
      enter-class="-translate-y-8"
      leave-to-class="-translate-y-8"
    >
      <div v-show="error" class="fixed px-5 py-3 text-red-600 bg-red-100 rounded-md error md:right-20 top-20 right-10">
        {{ error }}
        <button class="p-1" @click="error = ''">
          <i class="far fa-times"></i>
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import morphism from 'morphism'

export default {
  data: () => ({
    model: undefined,
    activeImg: false,
    currImg: '',
    error: ''
  }),
  computed: {
    submitDisabled() {
      return !(
        this.model &&
        this.model.fullname &&
        this.model.phone &&
        this.model.products &&
        this.model.products.length > 0
      )
    }
  },
  created() {
    this.setModel()
    this.addProduct()
  },
  methods: {
    removeImg(idx, id) {
      this.model.products[id].files.splice(idx, 1)
    },
    openImg(img) {
      this.currImg = img
      this.activeImg = true
    },
    closeImg() {
      this.activeImg = false
    },
    setModel(data = {}) {
      const schema = {
        fullname: 'fullname',
        phone: 'phone',
        email: 'email',
        products: s => Array.isArray(s.products) ? s.products : []
      }

      this.model = morphism(schema, data)
    },
    addProduct() {
      const schema = {
        name: 'name',
        description: 'description',
        quantity: 'quantity',
        price: 'price',
        link: 'link',
        files: () => []
      }

      const product = morphism(schema, {})

      this.model.products.push(product)
    },
    removeProduct(idx) {
      this.model.products.splice(idx, 1)
    },
    onProductUpdate({ pointer, payload }) {
      this.$set(this.model.products, pointer, payload)
    },

    checkForm() {
      if (this.submitDisabled) {
        this.error = 'Заполните все "*" обязательные поля'
        setTimeout(() => {
          this.error = ''
        }, 5000)
        return false
      }
    },

    async submit() {
      if (this.submitDisabled) {
        this.error = 'Заполните все "*" обязательные поля'
        setTimeout(() => {
          this.error = ''
        }, 5000)
        return false
      }

      try {
        await this.$axios.$post('/business/enquiries/public', this.model)
        this.$emit('submited')
        this.setModel()
        this.addProduct()
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
label > span {
  margin-bottom: 5px;
}

input {
  outline: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
}
</style>
