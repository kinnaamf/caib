<template>
  <div>
    <hero-section :video-src="background">
      <template #content>
        <div class="flex justify-center items-center h-full">
          <div class="flex gap-8 max-w-full w-full">
            <div
                class="w-2/3 card flex flex-col gap-[40px] pt-[130px] pb-[80px] px-[120px]">
              <why-card-text :title="title" :text="text"></why-card-text>
              <div class="self-center mt-auto">
                <next-section-button
                    @scroll-to-next="handleScrollRequest('fourth-section')"
                >Echipa noastra</next-section-button>
              </div>
            </div>

            <div class="flex-grow grid grid-cols-2 grid-rows-2 gap-8">
              <why-mini-card
                  v-for="(card, index) in miniCards"
                  :key="index"
                  :title="card.title"
                  :amount="card.amount + '+'"
                  class="py-[80px] px-[25px]"
              >
              </why-mini-card>
            </div>
          </div>
        </div>
      </template>
    </hero-section>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import background from "@/assets/background2.mp4";
import WhyCardText from "@/components/WhyCardText.vue";
import NextSectionButton from "@/components/NextSectionButton.vue";
import WhyMiniCard from "@/components/WhyMiniCard.vue";
import { useScrollHandler } from "@/composables/useScrollHandler";

export default {
  components: { WhyMiniCard, NextSectionButton, WhyCardText, HeroSection },
  setup() {
    const { handleScrollRequest } = useScrollHandler();

    return {
      handleScrollRequest,
    }
  },
  data() {
    return {
      background,
      title: 'De ce noi?',
      text: 'Ina Bostan dolor sit amet, consectetur adipiscing elit. Duis commodo dapibus libero, ultricies laoreet libero lacinia ac. Duis porttitor blandit dolor, non porta magna ornare eu. Morbi eget dolor nec ante luctus tristique. Sed mollis ullamcorper mauris, quis fringilla nulla aliquet eleifend. Integer eget placerat erat.',

      miniCards: [
        {
          title: 'Info 1',
          amount: 100,
        }, {
          title: 'Info 2',
          amount: 200,
        }, {
          title: 'Info 3',
          amount: 300,
        }, {
          title: 'Info 4',
          amount: 400,
        }
      ]
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.20);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(10px);
}
</style>
