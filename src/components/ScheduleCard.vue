<template>
  <div>
    <div class="card  bg-white/50 rounded-2xl">
      <h2 class="text-brandOrange text-[32px] font-medium">{{ scheduleTitle }}</h2>
      <div
          v-for="(day, index) in schedule"
          :key="day"
      >
        <div class="flex text-[24px] font-medium justify-between gap-10 text-nowrap">
          <h3 :class="{ 'text-brandOrange' : day.workingDay }">{{ day.day }}</h3>
          <h3>{{ day.workingDay ? 'Liber' : '9.00 - 18.00' }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ScheduleCard',
  data() {
    return {
      scheduleTitle: 'Program de munca',
      schedule: [
        {
          day: 'Luni',
          time: '',
          workingDay: false,
        }, {
          day: 'Marti',
          time: '',
          workingDay: false,
        }, {
          day: 'Miercuri',
          time: '',
          workingDay: false,
        }, {
          day: 'Joi',
          time: '',
          workingDay: false,
        }, {
          day: 'Sambata',
          time: 'Liber',
          workingDay: true,
        }, {
          day: 'Duminica',
          time: '',
          workingDay: true,
        }
      ]
    }
  }
}
</script>
<style scoped>
  .card {
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.10);
    padding: 48px 72px;
  }
</style>
