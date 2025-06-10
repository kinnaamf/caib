<template>
  <div>
    <hero-section :video-src="background">
      <template #content>
        <the-header class="mt-[16px]"></the-header>
        <div class="pt-[45px] flex flex-col gap-[40px]">
          <form-container></form-container>
          <next-section-button class="w-max self-center">{{ buttonText }}</next-section-button>
        </div>
      </template>
    </hero-section>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import background from "@/assets/background.mp4"
import TheHeader from "@/components/TheHeader.vue";
import FormContainer from "@/components/FormContainer.vue";
import NextSectionButton from "@/components/NextSectionButton.vue";

export default {
  components: { NextSectionButton, FormContainer, TheHeader, HeroSection },
  data() {
    return {
      background,
      buttonText: "Despre"
    }
  }
}
</script>

<style scoped>

</style>
