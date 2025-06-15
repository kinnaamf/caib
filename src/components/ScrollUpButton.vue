<template>
  <button
  @click="$emit('scroll-to-top')"
  >
    <span class="flex px-4 py-2 gap-2">
      <img :src="arrow" alt="">
      <span class="text-xl font-semibold">{{ buttonText }}</span>
    </span>
  </button>
</template>

<script>
  import arrow from '@/assets/arrowUp.svg'

  export default {
    name: 'ScrollUpButton',
    data() {
      return {
        buttonText: 'Inapoi',
        arrow
      }
    },
    emits: ['scroll-to-top'],
  }
</script>

<style scoped>
  button {
    @apply rounded-full border-2 border-brandOrange;
  }
</style>
