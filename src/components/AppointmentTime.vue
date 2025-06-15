<template>
  <div class="container">
    <div>
      <h2 class="title">{{ title }}</h2>
    </div>
    <div
        class="overflow-y-auto"
        style="height: 234px;"
    >
      <div
          v-for="(appointment, idx) in appointmentTime"
          :key="idx"
          class="buttons"
      >
        <button
            class="btn"
            :class="selectedIndex === idx ? 'selected-button' : 'not-selected-button'"
            @click="selectedIndex = idx"
        >
          <p>
            <span>{{ appointment.from }}</span>
            &nbsp;-&nbsp;
            <span class="text-brandOrange">
              {{ appointment.to }}
            </span>
          </p>
        </button>
      </div>
    </div>
    <div>
      <button
          @click="$emit('next-step')"
          class="submit-button">
        To form
      </button>
    </div>
    <div>
      <p class="info">
        Rezervam dreptul de a anula programarea in cazuri exceptionale
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Alege ora!',
      appointmentTime: [
        { from: '9:00', to: '11:00' },
        { from: '12:00', to: '14:00' },
        { from: '15:00', to: '17:00' },
        { from: '17:00', to: '19:00' }
      ],
      selectedIndex: null
    }
  }
}
</script>


<style scoped>
.container {
  @apply flex flex-col items-center pl-[90px] gap-[84px]
}

.title {
  @apply text-[32px] font-semibold;
}

.buttons {
  @apply h-[70px] w-[445px] flex items-center justify-center mr-1 mb-3 last:mb-0;
}

.btn {
  @apply w-full h-full flex items-center justify-center text-[24px] font-semibold border rounded-2xl;
}

.selected-button {
  @apply border-2 border-brandOrange selected-background transition;
}

.not-selected-button {
  @apply border-black/30 bg-white transition;
}

.not-selected-button:hover {
  background-color: rgba(0, 0, 0, 0.06);
}

.submit-button {
  @apply bg-brandOrange/80 hover:bg-brandOrange/85 transition w-[445px] h-[70px] font-semibold text-[32px] rounded-2xl mt-[10px] text-white;
}

.info {
  @apply text-black/60 font-normal pointer-events-none;
}

.selected-background {
  background: rgba(0, 0, 0, 0.06);
}
</style>
