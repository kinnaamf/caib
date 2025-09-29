<script setup lang="ts">
const descriptionParagraph = "Ne concentrăm pe soluții, nu pe probleme.\n" +
    "          Identificăm cea mai bună strategie \n" +
    "          pentru a-ți atinge obiectivele\n" +
    "          și a obține rezultatele dorite."
</script>

<template>
  <!--    Text section (left)-->
  <div class="text-block flex flex-col gap-8">
    <!--      Title section-->
    <div class="intro__heading flex flex-col gap-2">
      <div class="horizontal-divider w-1/3"></div>
      <h2 class="title brand-serif font-bold text-4xl text-blue-darker">De ce să ne alegi pe noi?</h2>
      <div class="horizontal-divider w-1/3"></div>
    </div>
    <!--      Description section-->
    <div class="intro__description flex flex-col gap-8">
      <h3 class="text-blue-bg font-semibold text-[1.75rem]">Cu o experienta de mai mult de 5 ani ne asiguram<br> ca interesele tale sa fie <span class="text-blue-lighter">realizate si protejate</span></h3>
      <p class="text-blue-darker text-2xl whitespace-pre-line">{{ descriptionParagraph }}</p>
    </div>

  </div>
</template>

<style scoped>
.horizontal-divider {
  height: 1px;
  background: linear-gradient(90deg, #1B1B3A 49.52%, rgba(102, 102, 102, 0.00) 100%);
}
</style>