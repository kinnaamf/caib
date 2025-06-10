<template>
  <footer class="bg-[#eee] flex flex-col items-center py-6 gap-8">
    <scroll-up-button></scroll-up-button>
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

export default {
  components: { DevNames, FooterCopyright, FooterLinks, ScrollUpButton }

}
</script>

<style scoped>

</style>
