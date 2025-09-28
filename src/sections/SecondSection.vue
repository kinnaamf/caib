<script setup lang="ts">

import {servicesData} from "@/data/services.ts";
import ServicesGrid from "@/components/ServicesGrid.vue";

</script>

<template>
  <section class="second-section bg-blue-bg pt-12 pb-32">
    <div class="section-title flex flex-col justify-center items-center gap-4">
      <div class="horizontal-divider w-2/3"></div>
      <h2 class="title brand-serif text-white text-[2.5rem] font-bold">Cu ce te putem ajuta?</h2>
      <div class="horizontal-divider w-2/3"></div>
    </div>
    <ServicesGrid :services="servicesData" class="px-[21.875rem] mt-10"/>
  </section>
</template>

<style scoped>
.horizontal-divider {
  height: 1px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(255, 255, 255, 0.30) 49.52%, rgba(102, 102, 102, 0.00) 100%);
}
</style>