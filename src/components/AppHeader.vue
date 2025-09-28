<script setup lang="ts">

import AppLogo from "@/icons/AppLogo.vue";
import AppNavbar from "@/components/AppNavbar.vue";
</script>

<template>
  <header
      class="mt-8 rounded-2xl mx-[280px] header bg-blue-bg text-[24px] flex justify-between items-center font-bold text-white px-[16.875rem] py-3">
    <RouterLink to="/">
      <AppLogo/>
    </RouterLink>
    <AppNavbar/>
  </header>
</template>

<style scoped lang="postcss">
.header {
  background-color: var(--color-blue-bg);
}
</style>