<script setup lang="ts">
  import ServiceCard from "@/components/ServiceCard.vue";
  import type { ServiceCard as ServiceCardType } from "@/data/services.ts";


  const { services } = defineProps<{ services: ServiceCardType[] }>();
</script>

<template>
  <div class="grid grid-cols-4 gap-[3.75rem]">
    <ServiceCard
    v-for="service in services"
    :key="service.id"
    :service-data="service"
    />
  </div>
</template>

<style scoped>

</style>