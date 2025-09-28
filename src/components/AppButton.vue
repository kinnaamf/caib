<template>
  <RouterLink
      class="btn"
      :class="variantClass"
      to="">
    <slot/>
  </RouterLink>
</template>

<script setup lang="ts">
import {computed} from "vue"

const props = defineProps({
  variant: {
    type: String,
    default: "primary"
  }
})

const variantClass = computed(() => ({
  primary: "button-primary",
  secondary: "button-secondary",
  tertiary: "button-tertiary",
  outline: "button-outline",
}[props.variant]))
</script>

<style scoped>

</style>