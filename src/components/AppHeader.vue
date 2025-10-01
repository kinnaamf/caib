<script setup lang="ts">

import AppNavbar from "@/components/AppNavbar.vue";
import AppLogoDark from "@/icons/AppLogoDark.vue";
</script>

<template>
  <header
      id="app-header"
      class="app-header px-40 py-6 flex justify-between items-center"
  >
    <RouterLink to="/">
      <AppLogoDark/>
    </RouterLink>
    <AppNavbar/>
  </header>
</template>

<style scoped lang="postcss">
.app-header {
  background: #E5E7EB;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
}
</style>