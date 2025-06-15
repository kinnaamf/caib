<template>
  <div class="container">
    <form v-if="visible" @submit.prevent="submitForm" key="form"
          class="w-full max-w-sm gap-[85px] flex flex-col items-center">
      <h3 class="text-[32px] font-semibold">Completează formularul</h3>
      <div class="flex flex-col gap-8">
        <input type="text" v-model="form.name" placeholder="Nume"
               class="w-full border focus:border-brandOrange outline-none rounded-2xl px-4 py-2 border-black/30"/>

        <input type="email" v-model="form.email" placeholder="Email"
               class="w-full border focus:border-brandOrange outline-none rounded-2xl px-4 py-2 border-black/30"/>

        <input type="text" v-model="form.phone" placeholder="Telefon"
               class="w-full border focus:border-brandOrange outline-none rounded-2xl px-4 py-2 border-black/30"/>
      </div>

      <button type="submit" class="submit-button">
        {{ submitText }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
      },
      visible: true,
      submitText: "Trimite",
    }
  },
  methods: {
    submitForm() {
      alert(`Trimis: ${JSON.stringify(form.value, null, 2)}`)
    }
  }
}

</script>

<style scoped>
.container {
  @apply flex flex-col items-center pl-[90px] gap-[84px]
}
.submit-button {
  @apply bg-brandOrange/80 hover:bg-brandOrange/85 transition w-[445px] h-[70px] font-semibold text-[32px] rounded-2xl mt-[10px] text-white;
}
input[type="text"], input[type="email"], button {
  height: 70px;
  width: 445px;
}
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
