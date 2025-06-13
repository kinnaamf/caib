<template>
  <div class="bg-[#EEE] w-screen min-h-screen relative background flex items-center justify-center">
    <the-ellipse size="320px" class="absolute bottom-[30px] left-[30px] -z-10"/>
    <the-ellipse size="450px" class="absolute top-[40px] -right-[60px] -z-10"/>

    <div class="flex items-center gap-[96px] h-max">
      <div class="section-title relative flex flex-col">
        <h1 class="text-6xl font-bold">
          <span class="text-black/80">Cabinetul<br>Avocatului</span><br>
          <span class="text-brandOrange">Ina<br>Bostan</span>
        </h1>

        <div class="self-center relative -bottom-[140px]">
          <next-section-button class="button h-max w-max z-50 absolute hover:-translate-x-8">{{ buttonText }}</next-section-button>
        </div>

        <img :src="simpleDocument" alt="" class="absolute -top-52 -right-[132px] scale-125"/>
        <img :src="certificate" alt="" class="absolute -bottom-52 -left-28 certificate -scale-x-100">
      </div>

      <div class="flex items-center gap-8">
        <about-card
            v-for="(card, index) in aboutCards"
            :key="index"
            :title="card.title"
            :text="card.text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TheEllipse from "@/components/TheEllipse.vue";
import AboutCard from "@/components/AboutCard.vue";
import NextSectionButton from "@/components/NextSectionButton.vue";
import simpleDocument from "@/assets/docs-images/simpleSecondSection.png"
import certificate from "@/assets/docs-images/certificate.png"

export default {
  components: { NextSectionButton, AboutCard, TheEllipse },
  data() {
    return {
      simpleDocument,
      certificate,
      buttonText: "De ce noi?",
      aboutCards: [
        {
          title: "Despre noi",
          text: "Ina Bostan este un cabinet de avocatură dedicat excelenței juridice și soluțiilor eficiente. \n" +
              "Cu o abordare modernă și orientată spre client, oferim asistență și reprezentare juridică în diverse domenii ale dreptului – de la drept civil și comercial, până la litigii, consultanță corporativă și dreptul muncii.",
        },
        {
          title: "Istoria noastra",
          text: "Ina Bostan este un cabinet de avocatură dedicat excelenței juridice și soluțiilor eficiente. \n" +
              "Cu o abordare modernă orientată spre client.\n" +
              "\n" +
              "Oferim asistență și reprezentare juridică în diverse domenii ale dreptului – de la drept civil și comercial, până la litigii, consultanță corporativă și dreptul muncii.",
        },
      ],
    }
  },
}
</script>

<style scoped>
.background {
  background: rgba(238, 238, 238, 0.7);
  box-shadow: 0 0 200px 0 rgba(0, 0, 0, 0.10) inset;
}

.button {
  justify-self: flex-end;
}
</style>
