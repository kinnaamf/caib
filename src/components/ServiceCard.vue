<script setup lang="ts">
import type {ServiceCard} from "@/data/services.ts";

const {serviceData} = defineProps<{ serviceData: ServiceCard }>();
</script>

<template>
  <div class="service-card bg-gray-light text-blue-darker pt-12 pb-10 px-5 rounded-[0.5rem]">
    <div class="card-content flex flex-col gap-9 items-center justify-center">
      <div class="flex gap-5">
        <div class="service-card-header flex gap-[0.625rem] items-center">

          <!-- Title -->
          <h2 class="brand-serif font-black text-[1.5rem]">{{ serviceData.title }}</h2>

          <!-- Icon -->
          <div class="icon-wrapper">
            <img :src="serviceData.icon" alt="">
          </div>
        </div>
      </div>

      <!-- Description -->
      <p class="text-[1.25rem] text-center">{{ serviceData.description }}</p>
      <!-- Description -->

      <RouterLink class="border-blue-bg border-1 py-2 px-[0.625rem] rounded-[0.5rem] font-medium " to="">mai mult</RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>