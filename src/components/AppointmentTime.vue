<template>
  <div class="container">
    <h2 class="title">{{ title }}</h2>

    <div class="overflow-y-auto" style="height: 234px;">
      <transition name="toast-fade">
        <div v-if="showToast"
             class="fixed top-6 right-6 bg-red-500 text-white px-6 py-4 rounded-xl shadow-lg z-50 max-w-md">
          <p>{{ errorMessage }}</p>
        </div>
      </transition>

      <div v-for="(appointment, idx) in appointmentTime" :key="idx" class="buttons">
        <button
            class="btn"
            :class="[
            selectedInternalIndex === idx ? 'selected-button' : 'not-selected-button',
            isOccupied(`${appointment.from}-${appointment.to}`) ? 'disabled-button' : ''
          ]"
            :disabled="isOccupied(`${appointment.from}-${appointment.to}`)"
            @click="selectTime(idx)"
        >
          <p>
            <span>{{ appointment.from }}</span>
            &nbsp;-&nbsp;
            <span class="text-brandOrange">{{ appointment.to }}</span>
          </p>
        </button>
      </div>
    </div>

    <button @click="handleClick" :class="isSelected ? 'is-selected' : 'not-selected'">
      {{ buttonText }}
    </button>

    <p class="info">
      Rezervăm dreptul de a anula programarea în cazuri excepționale.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppointmentTime',
  props: {
    selectedDate: Date,
    selectedIndex: Number,
    selectedTimes: Array,
    occupiedTimes: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      title: 'Alege ora!',
      appointmentTime: [
        { from: '9:00', to: '11:00' },
        { from: '12:00', to: '14:00' },
        { from: '15:00', to: '17:00' },
        { from: '17:00', to: '19:00' }
      ],
      selectedInternalIndex: null,
      buttonText: 'Continuă',
      showToast: false,
      errorMessage: '',
    };
  },
  computed: {
    isSelected() {
      return this.selectedDate && this.selectedInternalIndex !== null;
    }
  },
  watch: {
    selectedIndex: {
      immediate: true,
      handler(newVal) {
        if (newVal !== null && newVal !== undefined) {
          this.selectedInternalIndex = newVal;
        }
      }
    }
  },
  methods: {
    selectTime(idx) {
      const timeString = `${this.appointmentTime[idx].from}-${this.appointmentTime[idx].to}`;
      if (this.isOccupied(timeString)) return;

      this.selectedInternalIndex = idx;
      this.$emit('time-selected', { time: this.appointmentTime[idx], index: idx });
    },
    handleClick() {
      if (!this.isSelected) {
        this.errorMessage = 'Alegeți data și ora!';
        this.showToast = true;
        setTimeout(() => this.showToast = false, 3000);
      } else {
        this.$emit('next-step');
      }
    },
    isOccupied(timeString) {
      return this.selectedTimes?.some(
          time => time.replace(/\s+/g, '') === timeString.replace(/\s+/g, '')
      );
    }
  }
};
</script>

<style scoped>
.container {
  @apply flex flex-col items-center pl-[90px] gap-[84px];
}
.title {
  @apply text-[32px] font-semibold;
}
.buttons {
  @apply h-[70px] w-[445px] flex items-center justify-center mb-3;
}
.btn {
  @apply w-full h-full flex items-center justify-center text-[24px] font-semibold border rounded-2xl;
}
.selected-button {
  @apply border-2 border-brandOrange bg-black/5;
}
.not-selected-button {
  @apply border border-black/30 bg-white hover:bg-black/5 transition;
}
.info {
  @apply text-black/60 font-normal mt-4;
}
.is-selected, .not-selected {
  @apply w-[445px] h-[70px] font-semibold text-[32px] rounded-2xl mt-[10px] text-white transition;
}
.is-selected {
  @apply bg-brandOrange/80 hover:bg-brandOrange/85;
}
.not-selected {
  @apply bg-brandOrange/40 hover:bg-brandOrange/50;
}
.disabled-button {
  @apply opacity-50 cursor-not-allowed pointer-events-none;
}
</style>
