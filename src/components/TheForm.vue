<template>
  <form action="" class="flex flex-col gap-[72px]">
    <span class="text-[30px] font-bold">Programeaza-te acum!</span>

    <div class="flex flex-col gap-[50px]">
      <input
          type="text"
          name="name"
          id="name"
          placeholder="Nume prenume"
          v-model="name"/>
      <input
          type="text"
          name="number"
          id="number"
          placeholder="Numar de telefon"
          v-model="number"/>
      <input
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
export default {
  name: "TheForm",
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
input[type="text"] {
  border-bottom: 1px solid black;
  background: none;
  color: black;
  font-size: 24px;
  font-weight: 300;
  outline: none;
  padding-left: 8px;
}

input[type="text"]::placeholder {
  color: rgba(0, 0, 0, 0.5);
}
</style>
