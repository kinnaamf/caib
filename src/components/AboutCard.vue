<template>
  <div class="px-[24px] py-[120px] bg-white/60 card w-[450px] h-[630px] rounded-2xl hover:scale-105 transition-all duration-300">
    <h2 class="text-[32px] font-bold text-brandOrange">
      {{ title }}
    </h2>
    <p class="text-2xl font-normal text-black/80 leading-relaxed">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .card {
    filter: drop-shadow(0 4px 40px rgba(0, 0, 0, 0.10));
  }
</style>
