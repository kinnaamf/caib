<template>
  <div>
    <first-section id="first-section" class="relative z-10" @request-scroll="scrollToSection"></first-section>
    <second-section id="second-section" @request-scroll="scrollToSection"></second-section>
    <third-section id="third-section" class="relative z-10" @request-scroll="scrollToSection"></third-section>
    <fourth-section id="fourth-section" @request-scroll="scrollToSection"></fourth-section>
    <fifth-section id="fifth-section" class="relative z-10" @request-scroll="scrollToSection"></fifth-section>
    <the-footer id="footer" @request-scroll-to-top="scrollToSection('first-section')"></the-footer>
  </div>
</template>

<script>
import TheLogo from "@/components/TheLogo.vue";
import TheHeader from "@/components/TheHeader.vue";
import FirstSection from "@/components/FirstSection.vue";
import SecondSection from "@/components/SecondSection.vue";
import ThirdSection from "@/components/ThirdSection.vue";
import FourthSection from "@/components/FourthSection.vue";
import FifthSection from "@/components/FifthSection.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: { TheFooter, FourthSection, ThirdSection, SecondSection, FirstSection, TheHeader, TheLogo, FifthSection },
  methods: {
    scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) {
        this.$scrollTo(el);
      } else console.warn('no element found')
    }
  }
}
</script>

<style>

</style>
