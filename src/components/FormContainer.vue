<template>
  <div class="form-container flex justify-between">
    <div class="flex items-center justify-center w-1/2 relative">
      <h1 class="text-center font-bold relative left-10">
        <span class="text-[54px]">Protectia Juridica</span> <br>
        <span class="text-[40px]">de care ai nevoie </span>
      </h1>
      <img :src="top" alt="" class="absolute top docs"/>
      <img :src="left" alt="" class="absolute left docs">
      <img :src="right" alt="" class="absolute right docs">
    </div>
    <div class="py-[111.5px] bg-white/40 my-shadow rounded-r-2xl px-[135px]">
      <the-form></the-form>
    </div>
  </div>
</template>
<script>
import TheForm from "@/components/TheForm.vue";
import top from "@/assets/docs-images/top-document.png"
import left from "@/assets/docs-images/left-document.png"
import right from "@/assets/docs-images/right-document.png"

export default {
  components: { TheForm },
  data() {
    return {
      top,
      left,
      right,
    }
  }
}
</script>

<style scoped>
.my-shadow {
  filter: drop-shadow(0 0 40px rgba(0, 0, 0, 0.1));
}

.form-container {
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.20);
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(10px);
}

.docs {
  filter: blur(2px);
}

.top {
  top: -100px;
  left: 150px;
  transform: scaleX(-1) scale(65%) rotate(-150deg);
}
.left {
  top: 420px;
  left: 75px;
}
.right {
  top: 200px;
  left: 400px;
  transform: scaleX(-1) scale(50%);
  filter: blur(3px);
}
</style>
