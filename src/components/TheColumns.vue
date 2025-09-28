<script setup lang="ts">

</script>

<template>
  <div class="columns-container flex gap-20 items-center justify-center h-full w-full -z-10">
    <div v-for="n in 7" class="column w-20 h-full">

    </div>
  </div>
</template>

<style scoped>
  .column {
    border: 1px solid rgba(10, 35, 66, 0.10);
    background: rgba(27, 27, 58, 0.10);
    box-shadow: 0 0 30px 0 rgba(27, 27, 58, 0.30) inset;
  }
</style>