<template>
  <div class="container">
    <form v-if="visible"
          @submit.prevent="submitForm"
          class="w-full max-w-sm gap-[85px] flex flex-col items-center justify-between">

      <h3 class="text-[32px] font-semibold">Completează formularul</h3>

      <transition name="toast-fade">
        <div v-if="showToast"
             :class="['fixed top-6 right-6 bg-red-500 text-white px-6 py-4 rounded-xl shadow-lg z-50 max-w-md',
                      toastType === 'error' ? 'bg-red-500' : 'bg-green-600']"
        >
          <ul v-if="toastType === 'error'" class="flex flex-col gap-4 text-[16px] list-inside text-sm">
            <li v-for="(msg, index) in errorMessages" :key="index">{{ msg }}</li>
          </ul>

          <p v-else-if="toastType === 'success'" class="text-[16px] text-center font-semibold">
            {{ successMessage }}
          </p>
        </div>
      </transition>

      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <input type="text" v-model="form.name" placeholder="Nume Prenume"
                 class="w-full border focus:border-brandOrange outline-none rounded-2xl px-4 py-2 border-black/30"/>
          <span v-if="fieldErrors.name" class="text-red-500 text-sm mt-1">{{ fieldErrors.name }}</span>
        </div>

        <div class="flex flex-col gap-2">
          <input type="text" v-model="form.email" placeholder="Email"
                 class="w-full border focus:border-brandOrange outline-none rounded-2xl px-4 py-2 border-black/30"/>
          <span v-if="fieldErrors.email" class="text-red-500 text-sm mt-1">{{ fieldErrors.email }}</span>
        </div>

        <div class="flex flex-col gap-2">
          <input type="text"
                 v-mask="'+373 (##) ### ###'"
                 v-model="form.phone"
                 placeholder="Tel. ex: +373 (60) 606 606"
                 class="w-full border focus:border-brandOrange outline-none rounded-2xl px-4 py-2 border-black/30"/>
          <span v-if="fieldErrors.phone" class="text-red-500 text-sm mt-1">{{ fieldErrors.phone }}</span>
        </div>
      </div>

      <button type="submit" class="submit-button mt-auto">
        {{ submitText }}
      </button>
    </form>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import theLogo from "@/components/TheLogo.vue";

export default {
  props: {
    selectedTime: {
      type: String,
      required: true,
    }
  },
  directives: { mask },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
      },
      fieldErrors: {
        name: '',
        email: '',
        phone: ''
      },
      visible: true,
      submitText: "Trimite",
      successMessage: '',
      errorMessages: [],
      showToast: false,
      toastTimeout: null,
      toastType: '',
    }
  },
  methods: {
    validateName(name) {
      const pattern = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/
      const trimmed = name.trim()

      if (!pattern.test(trimmed)) return false

      const words = trimmed.split(/\s+/)
      return words.length === 2
    },
    validateEmail(email) {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return pattern.test(email.trim())
    },
    validatePhone(phone) {
      const cleaned = phone.replace(/[^\d+]/g, '')
      const pattern = /^\+373[67]\d{7}$/
      return pattern.test(cleaned)
    },
    showErrorToast(messages) {
      this.toastType = 'error'
      this.errorMessages = messages
      this.showToast = true

      if (this.toastTimeout) clearTimeout(this.toastTimeout)

      this.toastTimeout = setTimeout(() => {
        this.showToast = false
        this.errorMessages = []
      }, 4000)
    },
    showSuccessToast(message) {
      this.toastType = 'success'
      this.successMessage = message
      this.errorMessages = []
      this.showToast = true

      if (this.toastTimeout) clearTimeout(this.toastTimeout)

      this.toastTimeout = setTimeout(() => {
        this.showToast = false
        this.successMessage = ''
      }, 4000)
    },
    /*async*/ submitForm() {
      const formatErrors = []
      this.fieldErrors = {
        name: '',
        email: '',
        phone: ''
      }

      if (!this.form.name.trim()) {
        this.fieldErrors.name = 'Introduceți numele'
      } else if (!this.validateName(this.form.name)) {
        formatErrors.push("Numele trebuie să conțină doar litere.")
      }

      if (!this.form.email.trim()) {
        this.fieldErrors.email = 'Introduceți emailul'
      } else if (!this.validateEmail(this.form.email)) {
        formatErrors.push("Adresa de email nu este validă.")
      }

      if (!this.form.phone.trim()) {
        this.fieldErrors.phone = 'Introduceți telefonul'
      } else if (!this.validatePhone(this.form.phone)) {
        formatErrors.push("Numărul de telefon este incorect.")
      }

      const hasFieldErrors = Object.values(this.fieldErrors).some(msg => msg)

      if (formatErrors.length > 0) {
        this.showErrorToast(formatErrors)
      }

      if (hasFieldErrors || formatErrors.length > 0) {
        return
      }

      const dataToSend = {
        ...this.form,
        appointmentForm: this.selectedTime.from,
        appointmentTo: this.selectedTime.to
      }

      // try {
      //   const response = await fetch('http://localhost:3001/api/appointment', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(dataToSend)
      //   })
      //
      //   if (!response.ok) {
      //     const errorData = await response.json()
      //     this.showErrorToast([errorData.message] || 'Eroare la trimiterea formularului');
      //     return
      //   }
      //   alert('Formular transmis cu succes!')
      //   this.form = {
      //     name: '',
      //     email: '',
      //     phone: '',
      //   }
      // } catch (error) {
      //   this.showErrorToast(['Eroare de rețea, încercați din nou mai târziu'])
      // }

      console.log('Data to send', dataToSend)
      this.showSuccessToast('Formularul a fost transmis cu succes!')

    }
  }
}
</script>

<style scoped>
.container {
  @apply flex flex-col items-center pl-[90px] gap-[84px];
}

.submit-button {
  @apply bg-brandOrange/80 hover:bg-brandOrange/85 transition w-[445px] h-[70px] font-semibold text-[32px] rounded-2xl mt-[10px] text-white;
}

input[type="text"], input[type="email"], button {
  height: 70px;
  width: 445px;
}

.toast-fade-enter-active, .toast-fade-leave-active {
  transition: all 0.5s ease;
}

.toast-fade-enter-from, .toast-fade-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

</style>
