<template>
  <div class="member-card">
    <img :src="image" alt="" class="h-full object-cover -z-10 px-4">

    <div
        class="name-container cursor-pointer"
        :class="{ 'expanded' : isExpanded }"
        @click="toggleExpand"
    >
      <h2 class="member-text">{{ memberName }}</h2>
      <div
          class="info-content"
          :class="{ 'is-visible': isExpanded }"
      >
        <p>{{ infoText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberCard",
  props: {
    image: {
      type: String,
      required: true
    },
    memberName: {
      type: String,
      required: true
    },
    infoText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>

<style scoped>
  .member-card {
    @apply bg-white/50 min-w-[360px] h-[630px] relative rounded-2xl shadow-lg overflow-hidden;
  }
  .name-container {
    @apply flex-col absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md py-5 px-4 text-center flex items-center justify-center;
  }
  .member-text {
    @apply text-brandOrange font-medium text-4xl leading-snug;
  }
  .info-content {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.2s ease-in-out, opacity 0.2s ease-in-out;
    width: 100%;
  }
  .is-visible {
    max-height: 500px;
    opacity: 1;
    transition: max-height 0.2s ease-in-out, opacity 0.2s ease-in-out;
  }
</style>
