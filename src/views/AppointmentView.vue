<template>
  <div class="bg-[#eee] min-h-screen px-[260px] flex flex-col gap-4">
    <div class="flex items-center justify-start gap-4 text-[32px] font-semibold text-black/80 mt-3">
      <img :src="arrow" alt="">
      <router-link to="/">{{ backText }}</router-link>
    </div>

    <div class="2xl:h-[800px] 2xl:w-[1400px] bg-white rounded-2xl px-[100px] flex w-full relative overflow-hidden">
      <calendar-panel
          class="w-1/2 border-r border-black/40 pr-[90px] py-[57.5px] z-10"
          @date-selected="handledDateSelected"
      ></calendar-panel>

      <div class="w-1/2 relative">
        <transition name="fade-slide" mode="out-in">
          <appointment-time
              v-if="!showForm"
              key="time"
              class="absolute top-0 left-0 w-full h-full py-[57.5px]"
              @next-step="showForm = true"
              @time-selected="onTimeSelected"
              :selected-date="selectedDate"
          />
        </transition>

        <transition name="fade-slide" mode="out-in">
          <appointment-form
              v-if="showForm"
              key="form"
              class="absolute top-0 left-0 w-full h-full py-[57.5px]"
              :selected-time="selectedTime"
              :selected-date="selectedDate"
          />
        </transition>
      </div>
    </div>
  </div>
</template>



<script>
import CalendarPanel from "@/components/CalendarPanel.vue";
import AppointmentSection from "@/components/AppointmentSection.vue";
import arrow from "@/assets/arrowCalendar.svg"
import AppointmentTime from "@/components/AppointmentTime.vue";
import AppointmentForm from "@/components/AppointmentForm.vue";
export default {
  components: { AppointmentForm, AppointmentTime, AppointmentSection, CalendarPanel },
  data() {
    return {
      arrow,
      backText: 'Inapoi',
      showForm: false,
      selectedTime: null,
      selectedDate: null
    }
  },
  methods: {
    onTimeSelected(time) {
      this.selectedTime = time;
    },
    handledDateSelected(date) {
      this.selectedDate = date;
    }
  }
}
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease;
  position: absolute;
  top: 0;
  height: 100%;
}

.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
