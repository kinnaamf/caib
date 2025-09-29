<script setup lang="ts">

import PromoBlock from "@/components/PromoBlock.vue";
import StatsBlock from "@/components/StatsBlock.vue";

import type StatsData from "@/data/stats.ts"

  const statsBlockData: StatsData[] = [
    { id: 1, statsNumber: "120+", statsTitle: "Cazuri castigate in instanta ", statsDescription: "Cazuri castigate in instanta" },
    { id: 2, statsNumber: "95%", statsTitle: "Rata de Succes", statsDescription: "Cazuri castigate in instanta" },
    { id: 3, statsNumber: "4000+", statsTitle: "Ore de consultanță", statsDescription: "Cazuri castigate in instanta" },
    { id: 4, statsNumber: "300+", statsTitle: "Clienți mulțumiți", statsDescription: "Cazuri castigate in instanta" },
  ]
</script>

<template>
  <section class="third-section py-40 px-40 flex justify-between gap-2">
    <PromoBlock/>
    <StatsBlock :stats="statsBlockData"/>
  </section>
</template>

<style scoped>

</style>