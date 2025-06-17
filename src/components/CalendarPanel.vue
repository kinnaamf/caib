<template>
  <div>
    <div class="flex justify-center gap-4 mb-4 transition">
      <button @click="prevMonth" class="text-gray-600 hover:text-black">
        <img :src="arrow" alt="">
      </button>
      <h2 class="text-[32px] font-semibold capitalize w-72 text-center">
        {{ monthName }} {{ currentYear }}
      </h2>
      <button @click="nextMonth" class="text-gray-600 hover:text-black">
        <img :src="arrow" class="rotate-180" alt="">
      </button>
    </div>

    <div class="grid grid-cols-7 text-center mb-2 mt-10">
      <div
          v-for="(d, index) in daysOfWeek"
          :key="index"
          :class="[
          'text-[24px] font-semibold',
          (d === 'Sa' || d === 'Du') ? 'text-brandOrange' : 'text-black/60'
        ]"
      >
        {{ d }}
      </div>
    </div>

    <div class="grid grid-cols-7 gap-3">
      <button
          v-for="(day, index) in paddedDays"
          :key="index"
          class="aspect-square w-[70px] flex items-center justify-center border rounded-2xl text-[24px] font-semibold transition-all hover:bg-black/10"
          :class="getDayClass(day)"
          @click="selectDay(day)"
      >
        {{ day?.day || '' }}
      </button>
    </div>

    <hr class="mt-8 border-black/40">
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
import arrow from "@/assets/arrowCalendar.svg";

export default {
  name: "CalendarPanel",
  props: {
    sendDateCount: {
      type: Array,
      required: true,
    },
  },
  data() {
    const today = new Date();
    return {
      daysOfWeek: ["Lu", "Ma", "Mi", "Jo", "Vi", "Sa", "Du"],
      currentMonth: today.getMonth(),
      currentYear: today.getFullYear(),
      selectedDate: null,
      availability: {},
      arrow,
    };
  },
  computed: {
    monthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString("ro-RO", {
        month: "long",
      });
    },
    paddedDays() {
      const date = new Date(this.currentYear, this.currentMonth, 1);
      const startDay = (date.getDay() + 6) % 7;
      const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      const padding = Array(startDay).fill(null);
      const daysArray = Array.from({ length: daysInMonth }, (_, i) => ({ day: i + 1 }));
      return [...padding, ...daysArray];
    },
  },
  watch: {
    sendDateCount: {
      handler(date) {
        if (Array.isArray(date)) {
          this.mapAvailability(date);
        }
      },
      immediate: true,
    },
    currentMonth() {
      this.mapAvailability(this.sendDateCount);
    },
    currentYear() {
      this.mapAvailability(this.sendDateCount);
    },
  },
  methods: {
    mapAvailability(data) {
      const availability = {}

      data.forEach(({ date, count }) => {
        const parsedDate = new Date(date)
        const day = parsedDate.getDate()
        const month = parsedDate.getMonth()
        const year = parsedDate.getFullYear()

        if (month === this.currentMonth && year === this.currentYear) {
          const limitedCount = Math.min(count, 2)

          if (limitedCount === 2) {
            availability[day] = 'full'
          } else if (limitedCount === 1) {
            availability[day] = 'partial'
          } else {
            availability[day] = 'free'
          }
        }
      })

      this.availability = availability
    }
    ,
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    isPast(dayObj) {
      if (!dayObj) return true;
      const today = new Date();
      const thisDate = new Date(this.currentYear, this.currentMonth, dayObj.day);
      return thisDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    },
    selectDay(dayObj) {
      if (!dayObj || this.isPast(dayObj)) return;

      const date = new Date(this.currentYear, this.currentMonth, dayObj.day);
      const weekday = date.getDay();
      if (weekday === 0 || weekday === 6) return;

      this.selectedDate = date;
      const selectedDateString = date.toLocaleDateString("sv-SE"); // YYYY-MM-DD
      const found = this.sendDateCount.find(entry => entry.date === selectedDateString);
      const occupiedTimes = found ? found.time : [];

      this.$emit("date-selected", {
        date,
      });
    },
    getDayClass(dayObj) {
      if (!dayObj || !dayObj.day) {
        return "border-none hover:bg-transparent pointer-events-none";
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
        "bg-white border": !status && !this.isPast(dayObj),
        "border border-orange-400": status === "free",
        "bg-orange-300 text-white": status === "partial",
        "bg-orange-500 text-white pointer-events-none": status === "full",
        "opacity-40 pointer-events-none": this.isPast(dayObj),
        "ring-1 ring-black bg-black/10 transition-300 transition-all": isSelected,
        "cursor-pointer hover:opacity-80": !this.isPast(dayObj),
        "pointer-events-none opacity-40": isWeekend && !this.isPast(dayObj),
      };
    },
  },
};
</script>

<style scoped>
.legend-square {
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  width: 30px;
  height: 30px;
}
</style>
