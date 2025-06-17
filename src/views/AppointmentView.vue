<template>
  <!-- Loader -->
  <div v-if="isLoading"
       class="absolute w-screen h-screen flex items-center justify-center bg-[#ddd]/10 z-50">
    <span class="loader"></span>
  </div>

  <div :class="isLoading ? 'opacity-50' : 'opacity-100'"
       class="bg-[#DBE4EE] min-h-screen px-[260px] flex flex-col gap-4 transition-opacity duration-300">
    <div class="flex items-center justify-start gap-4 text-[32px] font-semibold text-black/80 mt-3">
      <img :src="arrow" alt="">
      <router-link to="/">{{ backText }}</router-link>
    </div>

    <div class="2xl:h-[800px] 2xl:w-[1400px] bg-white rounded-2xl px-[100px] flex w-full relative overflow-hidden">
      <calendar-panel
          class="w-1/2 border-r border-black/40 pr-[90px] py-[57.5px] z-10"
          @date-selected="handleDateSelected"
          :send-date-count="sendDateCount"
      />

      <div class="w-1/2 relative">
        <transition :name="showForm ? 'slide-left' : 'slide-right'" mode="out-in">
          <appointment-time
              v-if="!showForm"
              key="time"
              class="absolute top-0 left-0 w-full h-full py-[57.5px]"
              @next-step="showForm = true"
              @time-selected="onTimeSelected"
              :selected-date="selectedDate"
              :selected-index="selectedTimeIndex"
              :occupied-times="occupiedTimes"
          />
        </transition>

        <transition :name="showForm ? 'slide-left' : 'slide-right'" mode="out-in">
          <appointment-form
              v-if="showForm"
              key="form"
              class="absolute top-0 left-0 w-full h-full py-[57.5px]"
              :selected-time="selectedTime"
              :selected-date="selectedDate"
              @goBack="showForm = false"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarPanel from "@/components/CalendarPanel.vue";
import AppointmentTime from "@/components/AppointmentTime.vue";
import AppointmentForm from "@/components/AppointmentForm.vue";
import { fetchAppointmentsCount } from "@/api/fetchAppointmentsCount.js";
import arrow from "@/assets/arrowCalendar.svg";

export default {
  name: "AppointmentView",
  components: {
    CalendarPanel,
    AppointmentTime,
    AppointmentForm,
  },
  data() {
    return {
      arrow,
      backText: "Înapoi",

      isLoading: true,
      showForm: false,

      selectedDate: {},
      selectedTime: {},
      selectedTimeIndex: {},
      sendDateCount: [],
      occupiedTimes: [],
    };
  },
  methods: {
    async getAppointmentsCount() {
      this.isLoading = true;
      try {
        const data = await fetchAppointmentsCount();
        this.sendDateCount = data.map(item => ({
          date: item.date,
          count: item.count,
        }));
      } catch (error) {
        console.error("Error fetching appointments count:", error);
      } finally {
        this.isLoading = false;
      }
    },
    handleDateSelected({ date }) {
      const dateObj = new Date(date);
      if (isNaN(dateObj)) {
        console.error("Invalid date:", date);
        return;
      }

      this.selectedDate = dateObj;
      this.selectedTimeIndex = null;
      this.selectedTime = null;
      this.showForm = false;
    },
    onTimeSelected({ time, index }) {
      this.selectedTime = time;
      this.selectedTimeIndex = index;
    },
  },
  mounted() {
    this.getAppointmentsCount();
  },
};
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease;
  position: absolute;
  width: 100%;
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

.loader {
  animation: rotate 1s infinite;
  height: 50px;
  width: 50px;
}
.loader:before,
.loader:after {
  border-radius: 50%;
  content: "";
  display: block;
  height: 20px;
  width: 20px;
}
.loader:before {
  animation: ball1 1s infinite;
  background-color: rgba(255, 61, 0, 0.5);
  box-shadow: 30px 0 0 #ff3d00;
  margin-bottom: 10px;
}
.loader:after {
  animation: ball2 1s infinite;
  background-color: #ff3d00;
  box-shadow: 30px 0 0 rgba(255, 61, 0, 0.5);
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(0.8)
  }
  50% {
    transform: rotate(360deg) scale(1.2)
  }
  100% {
    transform: rotate(720deg) scale(0.8)
  }
}
@keyframes ball1 {
  0% {
    box-shadow: 30px 0 0 #ff3d00;
  }
  50% {
    box-shadow: 0 0 0 #ff3d00;
    margin-bottom: 0;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #ff3d00;
    margin-bottom: 10px;
  }
}
@keyframes ball2 {
  0% {
    box-shadow: 30px 0 0 rgba(255, 61, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 0 rgba(255, 61, 0, 0.5);
    margin-top: -20px;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 rgba(255, 61, 0, 0.5);
    margin-top: 0;
  }
}
</style>
