<template>
  <button
      class="inline-flex items-center justify-center
           bg-white/60 rounded-full p-2
           border-2 border-[#F66418]
           cursor-pointer transition-all duration-500
           overflow-hidden"
      @mouseenter="toShow = true"
      @mouseleave="toShow = false"
  >
    <img :src="arrow" alt="" class="w-8 shrink-0" />

    <p
        class="transition-all duration-500 whitespace-nowrap font-semibold"
        :class="toShow ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'"
    >
      <slot></slot>
    </p>
  </button>
</template>

<script>
import arrow from "@/assets/arrow.svg"
export default {
  data() {
    return {
      arrow,
      toShow: false
    }
  }
}
</script>
