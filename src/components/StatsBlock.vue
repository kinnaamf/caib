<script setup lang="ts">
import type StatsData from "@/data/stats.ts";

const props = defineProps<{
  stats: StatsData[];
}>()
</script>

<template>
  <div class="stats-block grid grid-cols-2 gap-20 relative">
    <div
        v-for="stat in stats"
        :key="stat.id"
        class="stats-item gap-20"
    >
      <div class="stats-data">
        <div class="flex flex-col gap-1">
          <div class="stats-number "><span class="text-blue-bg text-5xl font-extrabold">{{ stat.statsNumber }}</span></div>
          <div class="stats-title"><span class="text-blue-lighter font-semibold underline text-[1.75rem]">{{ stat.statsTitle }}</span></div>
        </div>

        <div class="ellipse w-[30rem] h-[30rem] absolute top-0 -z-10"></div>

        <div class="stats-description"><span class="text-blue-bg text-[1.25rem] font-medium">{{ stat.statsDescription }}</span></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ellipse {
  border-radius: 480px;
  background: rgba(43, 108, 176, 0.12);
  filter: blur(50px);
}
</style>