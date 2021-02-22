<template>
  <div class="flex flex-col items-center justify-center py-10 space-y-3 text-black bg-white rounded-md modal">
    <h1 class="text-xl font-bold">
      У вас есть вопросы?
    </h1>
    <a
      href="https://api.whatsapp.com/send?phone=+996555535511"
      class="px-5 py-3 text-white rounded-md bg-linear-fiolet"
      target="_blank"><i class="mr-2 fab fa-whatsapp"></i><span>Написать whatsapp</span></a>
    <a href="tel:+996 555 53 55 11" class="px-5 py-3 text-purple-900 border border-purple-900 rounded-md "><i class="mr-2 far fa-phone"></i><span>+996 555 53 55 11</span></a>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  width: 300px;
}

@media (min-width: 400px) {
  .modal {
    width: 350px;
  }
}
</style>

