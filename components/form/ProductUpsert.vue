<template>
  <div class="w-full">
    <div class="flex justify-between py-2 pl-6 pr-5 text-lg font-semibold bg-gray-100">
      <span class="py-2">Товар <span v-if="pointer != 0">{{ pointer + 1 }}</span></span>
      <div
        title="Удалить товар"
        class="flex items-center justify-center w-10 h-10 py-2 font-bold cursor-pointer rounded-xl right-1"
        :class="{'hidden' : pointer === 0}"
        @click="$emit('remove', pointer)">
        <i class="text-2xl far fa-times"></i>
      </div>
    </div>
    <div
      class="relative flex flex-col w-full px-5 pt-6 pb-10 space-y-4 lg:space-y-0">


      <label class="flex flex-col w-full">
        <span>
          *Наименования товара
        </span>
        <input
          v-model="model.name"
          required
          type="text"
          class="w-full border-gray-300 rounded-lg focus:border-purple-700"
          placeholder="Например: чехлы на iphone"
        />
      </label>

      <div class="flex flex-col w-full lg:flex-row">

        <div class="flex flex-col flex-wrap w-full space-y-3 lg:mt-5 lg:pr-2 lg:w-1/2 md:space-y-0 md:flex-row form">

          <label class="flex flex-col w-full md:w-1/2">
            <span>*Партия для заказа</span>
            <input
              v-model="model.quantity"
              required
              type="number"
              class="border border-gray-300 rounded-lg outline-none md:mr-2 focus:border-purple-900 focus:shadow-none"
              placeholder="1000" />
          </label>

          <label class="flex flex-col w-full md:w-1/2">
            <span>Желаемая цена закупки в Китае</span>
            <div class="flex overflow-hidden border border-gray-300 rounded-md hover:border-purple-900">
              <input
                v-model="model.price"
                type="number"
                style="width: 62%"
                class="w-8/12 border-0 border-gray-300 rounded-lg outline-none md:ml-2 focus:shadow-none"
              />
              <select
                name="som"
                style="width: 38%"
                class="text-sm border-0">
                <option value="сом" selected>СОМ</option>
                <option value="usd">USD</option>
                <option value="юань">ЮАНЬ</option>
              </select>
            </div>
          </label>

          <label class="flex flex-col w-full md:pt-4">
            <textarea
              v-model="model.description"
              required
              rows="5"
              class="border border-gray-300 rounded-lg outline-none focus:border-purple-900 focus:shadow-none"
              placeholder="*Опишите ключевые требования к поиску товара, которые должны быть соблюдены обязательно: Модель, цвет, размер, материал, технические требования  и все, что важно для вас">
            </textarea>
          </label>
        </div>
        <div class="flex flex-col w-full pl-2 mt-5 lg:w-1/2 form">
          <label class="flex flex-col w-full">
            <span>Ссылка на товар</span>
            <input
              v-model="model.link"
              type="text"
              class="border border-gray-300 rounded-lg outline-none focus:border-purple-900 focus:shadow-none"
              placeholder="Ссылка" />
          </label>

          <div class="flex w-full p-3 mt-4 border border-gray-300 rounded-md" style="height: 138px">
            <div class="flex">
              <div
                v-if="model.files.length > 0 && model.files[0] != undefined"
                class="relative mr-2">
                <img
                  width="120px"
                  class="h-full rounded-md"
                  :src="'https://crm.ooba.kg'+model.files[0]" />
                <div class="absolute text-xl text-purple-500 cursor-pointer top-2 left-3" @click="openImg(model.files[0])">
                  <i class="far fa-eye"></i>
                </div>
                <div class="absolute text-xl cursor-pointer top-2 right-4" @click="removeFile(model.files[0]), pointer">
                  <i class="text-purple-600 far fa-times"></i>
                </div>
              </div>
              <div
                v-if="model.files[1]"
                class="relative mr-2 overflow-hidden">
                <img
                  width="120px"
                  class="h-full rounded-md"
                  :src="'https://crm.ooba.kg'+model.files[1]" />
                <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full text-white rounded-md" style="background: rgba(0, 0, 0, 0.6)">
                  + {{ model.files.length - 1 }}
                </div>
              </div>
            </div>
            <Upload v-model="model.files" :multiple="true" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    },

    pointer: {
      type: Number,
      required: true
    }
  },

  data: () => ({
    model: undefined
  }),

  watch: {
    model: {
      deep: true,
      handler(value) {
        const payload = this.$utils.cloneDeep(value)
        this.$emit('update', { pointer: this.pointer, payload })
      }
    }
  },

  created() {
    this.model = this.$utils.cloneDeep(this.value)
  },

  methods: {
    removeFile(idx) {
      this.model.files.splice(idx, 1)
    },
    openImg(img) {
      this.$emit('openfile', img)
    }
  }
}
</script>

<style lang="scss" scoped>
label > span {
  margin-bottom: 5px;
}

input,
textarea,
select {
  outline: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
}
</style>
