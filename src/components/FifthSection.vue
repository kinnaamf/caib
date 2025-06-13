<template>
  <div>
    <hero-section :video-src="background">
      <template #content>
        <div>
          <div class="flex gap-8 items-stretch">
            <div class="flex flex-col gap-8">
              <contacts-card></contacts-card>
              <schedule-card></schedule-card>
            </div>
            <div class="flex-1 relative">
              <map-iframe></map-iframe>
            </div>
          </div>
        </div>
      </template>
    </hero-section>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import background from "@/assets/background3.mp4";
import NextSectionButton from "@/components/NextSectionButton.vue";
import ContactsCard from "@/components/ContactsCard.vue";
import ScheduleCard from "@/components/ScheduleCard.vue";
import MapIframe from "@/components/MapIframe.vue";

export default {
  components: { MapIframe, ScheduleCard, ContactsCard, NextSectionButton, HeroSection },
  data() {
    return {
      background
    }
  }
}
</script>

<style scoped>

</style>
