<script setup lang="ts">

import AppButton from "@/components/AppButton.vue";
</script>

<template>
  <nav class="flex gap-6 items-center">
    <ul class="flex gap-10">
      <li>
        <RouterLink class="" to="/">Servicii</RouterLink>
      </li>
      <li>
        <RouterLink to="/">De ce noi</RouterLink>
      </li>
      <li>
        <RouterLink to="/">Blog</RouterLink>
      </li>
    </ul>
    <AppButton variant="primary">Programare</AppButton>
  </nav>
</template>

<style scoped>

nav ul li a {
  display: inline-block;
  position: relative;
  text-decoration: none;
  padding-bottom: 3px
}

nav ul li a::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: currentColor;
  transform-origin: bottom right;
  transition: transform 0.2s ease-out;
}

nav ul li a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.router-link-active,
.router-link-exact-active {
  /* Keep the underline solid for the active link */
}

</style>