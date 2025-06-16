<template>
  <div>
    <!-- Months navigation -->
    <div class="flex justify-center gap-4 mb-4 transition">
      <button @click="prevMonth" class="text-gray-600 hover:text-black">
        <img :src="arrow" class="" alt="">
      </button>
      <h2 class="text-[32px] font-semibold capitalize w-72 text-center">{{ monthName }} {{ currentYear }}</h2>
      <button @click="nextMonth" class="text-gray-600 hover:text-black">
        <img :src="arrow" class="rotate-180" alt="">
      </button>
    </div>

    <!-- Week days -->
    <div class="grid grid-cols-7 text-center mb-2 mt-10">
      <div
          v-for="(d, index) in daysOfWeek"
          :key="index"
          :class="['text-[24px] font-semibold', (d === 'Sa' || d === 'Du') ? 'text-brandOrange' : 'text-black/60']"
      >
        {{ d }}
      </div>
    </div>


    <!-- Month days -->
    <div class="grid grid-cols-7 gap-3">
      <button
          v-for="(day, index) in paddedDays"
          :key="index"
          class="aspect-square w-[70px] flex items-center justify-center border rounded-2xl text-[24px] font-semibold transition-all hover:bg-black/10"
          :class="getDayClass(day)"
          @click="selectDay(day);"
      >
        {{ day?.day || '' }}
      </button>
    </div>

    <hr class="mt-8 border-black/40">

    <!-- Legend -->
    <div class="mt-6 flex items-center gap-9 text-sm text-black/80 font-normal">
      <div class="flex items-center gap-3">
        <div class="legend-square"></div>
        <span>Liber</span>
      </div>
      <div class="flex items-center gap-3">
        <div class="legend-square bg-brandOrange/50 border-black"></div>
        <span>Parțial ocupat</span>
      </div>
      <div class="flex items-center gap-3">
        <div class="legend-square bg-brandOrange border-black"></div>
        <span>Ocupat</span>
      </div>
    </div>
  </div>
</template>

<script>
import arrow from '@/assets/arrowCalendar.svg'

export default {
  name: 'CalendarPanel',
  data() {
    const today = new Date()
    return {
      daysOfWeek: ['Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sa', 'Du'],
      currentMonth: today.getMonth(),
      currentYear: today.getFullYear(),
      selectedDate: null,
      availability: {
        4: 'partial',
        10: 'full',
        6: 'free',
        1: 'full'
      },
      arrow
    }
  },
  computed: {
    monthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString('ro-RO', {
        month: 'long'
      })
    },
    paddedDays() {
      const date = new Date(this.currentYear, this.currentMonth, 1)
      const startDay = (date.getDay() + 6) % 7
      const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate()

      const padding = Array(startDay).fill(null)
      const daysArray = Array.from({ length: daysInMonth }, (_, i) => ({ day: i + 1 }))
      return [...padding, ...daysArray]
    }
  },
  methods: {
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11
        this.currentYear--
      } else {
        this.currentMonth--
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0
        this.currentYear++
      } else {
        this.currentMonth++
      }
    },
    isPast(dayObj) {
      if (!dayObj) return true
      const today = new Date()
      const thisDate = new Date(this.currentYear, this.currentMonth, dayObj.day)
      return thisDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())
    },
    selectDay(dayObj) {
      if (!dayObj || this.isPast(dayObj)) return

      const weekday = new Date(this.currentYear, this.currentMonth, dayObj.day).getDay()
      if (weekday === 0 || weekday === 6) return

      this.selectedDate = new Date(this.currentYear, this.currentMonth, dayObj.day)

      // this.$emit('date-selected', this.selectedDate.toLocaleDateString("ro-RO"))
      this.$emit('date-selected', this.selectedDate) ////////////
    },
    getDayClass(dayObj) {
      if (!dayObj || !dayObj.day) {
        return 'border-none hover:bg-transparent pointer-events-none';
      }

      const status = this.availability[dayObj.day];
      const thisDate = new Date(this.currentYear, this.currentMonth, dayObj.day);
      const weekday = thisDate.getDay();

      const isWeekend = weekday === 0 || weekday === 6;

      const isSelected =
          this.selectedDate &&
          this.selectedDate.getDate() === dayObj.day &&
          this.selectedDate.getMonth() === this.currentMonth &&
          this.selectedDate.getFullYear() === this.currentYear;

      return {
        'bg-white border': !status && !this.isPast(dayObj),
        'bg-orange-300 text-white': status === 'partial',
        'bg-orange-500 text-white': status === 'full',
        'border border-orange-400': status === 'free',
        'opacity-40 pointer-events-none': this.isPast(dayObj),
        'ring-1 ring-black bg-black/10 transition-300 transition-all': isSelected,
        'cursor-pointer hover:opacity-80': !this.isPast(dayObj),
        'pointer-events-none opacity-40': isWeekend && !this.isPast(dayObj)
      };
    }

  }
}
</script>
<style scoped>
.legend-square {
  border: 1px solid rgba(0, 0, 0, 0.40);
  border-radius: 6px;
  width: 30px;
  height: 30px;
}
</style>
