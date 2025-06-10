<template>
  <div>
    <first-section class="relative z-10"></first-section>
    <second-section></second-section>
    <third-section class="relative z-10"></third-section>
    <fourth-section></fourth-section>
  </div>
</template>

<script>
import TheLogo from "@/components/TheLogo.vue";
import TheHeader from "@/components/TheHeader.vue";
import FirstSection from "@/components/FirstSection.vue";
import SecondSection from "@/components/SecondSection.vue";
import ThirdSection from "@/components/ThirdSection.vue";
import FourthSection from "@/components/FourthSection.vue";

export default {
  components: { FourthSection, ThirdSection, SecondSection, FirstSection, TheHeader, TheLogo }

}
</script>

<style>

</style>
