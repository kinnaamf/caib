<script setup lang="ts">
import AppButton from "@/components/AppButton.vue";
import TheColumns from "@/components/TheColumns.vue";

const subtitle = "Practicăm avocatura cu o abordare proaspătă. \n" +
    "Echipa noastră de avocați se asigură că legea \n" +
    "servește interesele clienților noștri"
</script>

<template>
  <section class="first-section text-center w-full h-full">

    <TheColumns class="absolute top-0"/>

    <div class="section-content my-[8.75rem]">
      <div class="flex flex-col gap-8 items-center-justify-center">
        <div class="section-content text-blue-darker justify-center items-center flex flex-col gap-4">

          <div class="horizontal-divider w-2/3"></div>

          <!-- Title -->
          <div class="title">
            <h1 class=" text-5xl brand-serif font-bold"><span
                class="text-blue-lighter brand-serif">Protecția juridică</span> de care ai nevoie</h1>
          </div>
          <div class="horizontal-divider w-2/3"></div>

          <!-- Subtitle -->
          <div class="subtitle">
            <h2 class="whitespace-pre-line text-[2rem] font-normal leading-9">{{ subtitle }}</h2>
          </div>

        </div>
        <div class="flex justify-center items-center rounded-2xl w-full relative buttons-container">
          <div class="flex justify-center gap-5 relative">
            <div class="buttons-divider buttons-divider-top"></div>
            <AppButton variant="secondary" class="rounded-l-2xl z-10">Programare</AppButton>
            <AppButton variant="tertiary" class="rounded-r-2xl z-10">Contacte</AppButton>
            <div class="buttons-divider buttons-divider-bottom"></div>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<style scoped>
.horizontal-divider {
  height: 1px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 49.52%, rgba(102, 102, 102, 0.00) 100%);
}

.buttons-divider {
  position: absolute;
  content: '';

  background: linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.30) 49.52%, rgba(102, 102, 102, 0.00) 100%);

  width: 100%;
  height: 1px;
}

.buttons-divider-top {
  top: 0;
  left: 0;
}
.buttons-divider-bottom {
  bottom: 0;
  left: 0;
}
</style>