<template>
  <div class="card">
    <div>
      <h1 class="card-title">{{ title }}</h1>
      <p class="card-text">{{ teamInfo }}</p>
    </div>
    <next-section-button class="relative top-32">{{ buttonText }}</next-section-button>
  </div>
</template>

<script>
import NextSectionButton from "@/components/NextSectionButton.vue";

export default {
  components: { NextSectionButton },
  props: {
    title: {
      type: String,
      required: true
    },
    teamInfo: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      buttonText: "Contacte"
    }
  }
}
</script>

<style scoped>
  .card {
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.40);
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.10);
    backdrop-filter: blur(10px);

    @apply w-full flex flex-col items-center justify-center px-10;
  }
  .card-title {
    @apply text-[32px] text-brandOrange font-bold;
  }
  .card-text {
    @apply text-2xl font-medium;
  }
</style>
