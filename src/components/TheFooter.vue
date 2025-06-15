<template>
  <footer class="bg-[#eee] flex flex-col items-center py-6 gap-8">
    <scroll-up-button @scroll-to-top="$emit('request-scroll-to-top')"></scroll-up-button>
    <footer-links></footer-links>
    <div class="h-[2px] bg-black w-1/3"></div>
    <footer-copyright></footer-copyright>
    <dev-names></dev-names>
  </footer>
</template>

<script>
import ScrollUpButton from "@/components/ScrollUpButton.vue";
import FooterLinks from "@/components/FooterLinks.vue";
import FooterCopyright from "@/components/FooterCopyright.vue";
import DevNames from "@/components/DevNames.vue";
import { useScrollHandler } from "@/composables/useScrollHandler";

export default {
  components: { DevNames, FooterCopyright, FooterLinks, ScrollUpButton },
  emits: ["scroll-to-top"],
}
</script>

<style scoped>

</style>
