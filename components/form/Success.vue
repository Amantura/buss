<template>
  <div class="flex flex-col items-center justify-center py-10 space-y-3 text-black bg-white rounded-md modal">
    <h1 class="text-xl font-bold">
      Ваша заяка отправлено!
    </h1>
    <NuxtLink
      to="/"
      class="px-5 py-3 text-white rounded-md bg-linear-fiolet"
    ><i class="mr-2 far fa-check"></i><span>Перети на главную страницу</span></NuxtLink>
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

