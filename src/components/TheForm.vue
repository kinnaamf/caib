<template>
  <form action="" class="flex flex-col gap-[72px]">
    <span class="text-[30px] font-bold">Programeaza-te acum!</span>

    <div class="flex flex-col gap-[50px]">
      <form-input
          type="text"
          name="name"
          id="name"
          placeholder="Nume prenume"
          v-model="name"/>
      <form-input
          type="text"
          name="number"
          id="number"
          placeholder="Numar de telefon"
          v-model="number"/>
      <form-input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          v-model="email"/>
    </div>
    <button type="submit" class="bg-brandOrange rounded-2xl font-bold text-white py-[6.5px]">{{ submitText }}</button>
  </form>
</template>
<script>
import FormInput from "@/components/FormInput.vue";

export default {
  name: "TheForm",
  components: { FormInput },
  data() {
    return {
      name: null,
      number: null,
      email: null,
      submitText: 'Programare',
    }
  }
}
</script>
<style scoped>

</style>
