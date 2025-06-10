<template>
  <div class="relative">
    <div class="flex justify-between items-center px-[260px]">
      <the-logo></the-logo>
      <div
          class="group inline-block cursor-pointer"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
          @click="openMenu = !openMenu"
      >
        <svg
            :class="[openMenu ? 'hidden' : 'visible']"
            width="80"
            height="15"
            viewBox="0 0 57 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <rect
              :x="hover ? 10 : 0"
              y="11"
              width="60"
              height="4"
              fill="#F66418"
          />
          <rect
              :x="hover ? -10 : 0"
              width="60"
              height="4"
              fill="#F66418"
          />
        </svg>
      </div>
    </div>

    <transition name="slide">
      <div
          v-if="openMenu"
          class="fixed top-0 right-0 h-full w-64 bg-white/80 text-black shadow-lg z-50 p-6 flex flex-col"
      >
        <button
            @click="openMenu = false"
            aria-label="Close menu"
            class="self-end p-2 rounded hover:bg-gray-200 transition"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-black hover:text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <ul class="flex flex-col text-[40px] mt-4 text-right">
          <li>
            <router-link to="/">Acasa</router-link>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link to="/contacte">Contacte</router-link>
          </li>
          <li>
            <router-link to="/despre-noi">Despre Noi</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import TheLogo from "@/components/TheLogo.vue";

export default {
  components: { TheLogo },
  data() {
    return {
      openMenu: false,
    }
  }
}
</script>

<script setup>
import { ref } from 'vue'

const hover = ref(false)
</script>

<style scoped>
rect {
  transition: x 0.2s ease-in-out;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(0%);
}

.slide-leave-from {
  transform: translateX(0%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
