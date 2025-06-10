<template>
  <div>
    <first-section class="relative z-10"></first-section>
    <second-section></second-section>
  </div>
</template>

<script>
import TheLogo from "@/components/TheLogo.vue";
import TheHeader from "@/components/TheHeader.vue";
import FirstSection from "@/components/FirstSection.vue";
import SecondSection from "@/components/SecondSection.vue";

export default {
  components: { SecondSection, FirstSection, TheHeader, TheLogo }

}
</script>

<style>

</style>
