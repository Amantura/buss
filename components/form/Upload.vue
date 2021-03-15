<template>
  <label
    :for="id"
    class="relative flex flex-col items-center justify-center h-full px-4 py-2 border border-gray-400 rounded-md cursor-pointer select-none group-hover: group hover:border-purple-600"
    style="width: 120px"
    :class="{'pointer-events-none': uploadPending}"
  >
    <input
      :id="id"
      :key="fileInputKey"
      :multiple="multiple"
      name="coverUrl"
      type="file"
      class="absolute z-0 invisible"
      @change="onChange"
    />
    <svg
      width="48"
      height="43"
      viewBox="0 0 48 43"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.4989 33.8513C9.29708 33.8513 6.44902 31.8972 5.41483 28.9879L5.34489 28.7686C5.10099 27.9982 4.99881 27.3503 4.99881 26.702V13.7034L0.146834 29.1421C-0.477195 31.413 0.944816 33.7672 3.33071 34.3945L34.2572 42.2895C34.6432 42.3848 35.0292 42.4305 35.4093 42.4305C37.4011 42.4305 39.2212 41.1703 39.7313 39.3132L41.5331 33.8513H12.4989Z"
        fill="#282828"
        fill-opacity="0.3" />
      <path
        d="M18.0002 13.8313C20.2063 13.8313 22 12.1211 22 10.0181C22 7.91518 20.2063 6.20496 18.0002 6.20496C15.7941 6.20496 14 7.91518 14 10.0181C14 12.1211 15.7941 13.8313 18.0002 13.8313Z"
        fill="#282828"
        fill-opacity="0.3" />
      <path
        d="M42.9993 0.486938H12.999C10.2432 0.486938 7.99902 2.62615 7.99902 5.25339V26.2245C7.99902 28.8518 10.2432 30.991 12.999 30.991H42.9993C45.7554 30.991 47.9996 28.8518 47.9996 26.2245V5.25339C47.9996 2.62615 45.7554 0.486938 42.9993 0.486938ZM12.999 4.30003H42.9993C43.5515 4.30003 43.9994 4.72696 43.9994 5.25339V18.7875L37.6815 11.76C37.0113 11.0109 36.0412 10.6105 34.9993 10.5878C33.9633 10.5934 32.9914 11.0318 32.3274 11.7908L24.8991 20.2897L22.4792 17.9885C21.1113 16.6846 18.8851 16.6846 17.5191 17.9885L11.9992 23.2485V5.25339C11.9992 4.72696 12.4471 4.30003 12.999 4.30003Z"
        fill="#282828"
        fill-opacity="0.3" />
    </svg>

    <p class="text-sm text-gray-500 group-hover:text-purple-600">
      <i v-if="uploadPending" class="far fa-spinner-third animate-spin"></i>
      <span class="ml-2">Загрузить</span>
    </p>
  </label>
</template>

<script>
export default {
  props: {
    imageSize: {
      type: String,
      default: '1920/1080'
    },

    multiple: {
      type: Boolean,
      default: false
    },

    value: {
      type: [String, Array],
      required: true
    },

    annotationVisible: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({
    uploadPending: false,
    id: Date.now(),
    fileInputKey: Date.now(),
  }),

  methods: {
    updateFileInputKey() {
      this.fileInputKey = Date.now()
    },

    async onChange(e) {
      if (this.uploadPending) {
        return false
      }

      const files = Array.from((e.target.files || []))

      if (files.length < 1) {
        return
      }

      const urls = await this.batchUpload(files)
      this.$emit('input', this.multiple ? [...this.value, ...urls] : urls[0])
    },

    async batchUpload(files = []) {
      try {
        this.uploadPending = true
        const output = []

        for (const file of files) {
          const url = await this.uploadFile(file)
          output.push(url)
        }

        return output
      } catch (error) {
        console.log(error)
      } finally {
        this.uploadPending = false
        this.updateFileInputKey()
      }
    },

    async uploadFile(file) {
      try {
        const formData = new FormData()
        formData.append('file', file)

        const url = await this.$axios.$post('/uploads/files', formData, {
          headers: { 'content-type': 'multipart/form-data' }
        })

        return url
      } catch (error) {
        console.log(error)
        this.$emit('error', file.name)
      }
    }
  }
}
</script>
