<template>
  <div class="relative z-[1000]">
    <div class="flex justify-between items-center">
      <the-logo />
      <div class="flex items-center gap-12">
        <appointment-button></appointment-button>
        <!-- Menu button -->
        <div
            class="group inline-block cursor-pointer"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
            @click="openMenu = !openMenu"
        >
          <!-- Burger menu -->
          <svg
              :class="[openMenu ? 'visible' : 'visible']"
              width="80"
              height="15"
              viewBox="0 0 57 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <rect :x="hover ? 10 : 0" y="11" width="60" height="4" fill="#F66418" />
            <rect :x="hover ? -10 : 0" width="60" height="4" fill="#F66418" />
          </svg>
        </div>
      </div>

      <!-- Menu -->
      <transition name="slide">
        <div
            v-if="openMenu"
            class="fixed top-0 right-0 justify-center h-full w-[880px] menu bg-white/20 text-black shadow-lg z-50 p-6 flex flex-col backdrop-blur-xl"
        >
          <!-- Close button -->
          <button
              @click="openMenu = false"
              aria-label="Close menu"
              class="self-end p-2 rounded transition hover:rotate-90 hover:transition-all hover:duration-300 duration-300 "
          >
            <svg width="58" height="45" viewBox="0 0 58 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="1" width="57" height="4" transform="rotate(45 11.9647 1)" fill="#F66418" />
              <rect x="9" y="41" width="57" height="4" transform="rotate(-45 8.96466 41)" fill="#F66418" />
            </svg>
          </button>

          <!-- Nav links -->
          <transition-group name="fade" tag="ul" class="flex flex-col gap-6 mt-4 text-right">
            <li
                v-for="(item, i) in menuItems"
                :key="item.text"
                :style="{ transitionDelay: `${i * 100}ms` }"
                class="text-[42px] font-semibold flex items-center justify-end gap-4 opacity-0 animate-fade-in"
            >
              <router-link :to="item.to" class="flex items-center gap-4 hover:text-orange-500 transition-all duration-300">
                {{ item.text }}
                <component :is="item.icon" class="w-8 h-8 text-orange-500 transition-transform duration-300 group-hover:translate-x-1" />
              </router-link>
            </li>
            <appointment-button class="w-max self-end text-[42px] font-semibold px-5 py-2"></appointment-button>
          </transition-group>
          <div class="text-sm text-right text-black/70 pr-2 mt-10">
            &copy; {{ new Date().getFullYear() }} — CAIB
          </div>
        </div>
      </transition>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheLogo from '@/components/TheLogo.vue'

import { Home, BookText, Phone, Info } from 'lucide-vue-next'
import AppointmentButton from "@/components/AppointmentButton.vue";

const hover = ref(false)
const openMenu = ref(false)

const menuItems = [
  { text: 'Acasa', to: '/', icon: Home },
  { text: 'Blog', to: '/', icon: BookText },
  { text: 'Despre Noi', to: '/', icon: Info },
  { text: 'Contacte', to: '/', icon: Phone }
]
</script>

<style scoped>
rect {
  transition: x 0.2s ease-in-out;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.4s ease forwards;
}

.menu {
  backdrop-filter: blur(10px);
}
</style>
