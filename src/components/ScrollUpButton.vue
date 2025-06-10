<template>
  <button>
    <span class="flex px-4 py-2 gap-2">
      <img :src="arrow" alt="">
      <span class="text-xl font-semibold">Inapoi</span>
    </span>
  </button>
</template>

<script>
  import arrow from '@/assets/arrowUp.svg'

  export default {
    name: 'ScrollUpButton',
    data() {
      return {
        buttonText: '',
        arrow
      }
    }
  }
</script>

<style scoped>
  button {
    @apply rounded-full border-2 border-brandOrange;
  }
</style>
