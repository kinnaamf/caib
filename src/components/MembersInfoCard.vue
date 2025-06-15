<template>
  <div class="card">
    <div class="content">
      <h1 class="card-title">{{ title }}</h1>
      <p class="card-text">{{ teamInfo }}</p>
    </div>

    <next-section-button
        class="mb-6 self-center"
        @scroll-to-next="handleScrollRequest('fifth-section')"
    >
      {{ buttonText }}
    </next-section-button>
  </div>
</template>

<script>
import NextSectionButton from "@/components/NextSectionButton.vue";
import { useScrollHandler } from "@/composables/useScrollHandler";

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
  },
  setup() {
    const { handleScrollRequest } = useScrollHandler();

    return {
      handleScrollRequest,
    };
  }
}
</script>

<style scoped>
.card {
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.40);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(10px);

  @apply w-full flex flex-col justify-between px-10 py-8 min-h-[500px];
}

.content {
  @apply flex flex-col justify-center flex-1 text-left;
}

.card-title {
  @apply text-[32px] text-brandOrange font-bold;
}

.card-text {
  @apply text-2xl font-medium mt-4;
}

</style>
