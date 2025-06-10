<template>
  <div>
    <div class=" card bg-white/50 rounded-2xl flex flex-col">
      <h2 class="text-brandOrange text-[32px] font-medium">{{ contactsTitle }}</h2>
      <div class="flex flex-col text-[24px] font-medium">
        <span>{{ contactsEmail }}</span>
        <span>{{ contactsPhone }}</span>
        <span>{{ contactsAddress }}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ContactsCard',
    data() {
      return {
        contactsTitle: 'Contacte',
        contactsEmail: 'caib@gmail.com',
        contactsPhone: '+373 600 00000',
        contactsAddress: 'str. Lev Tolstoi 29',
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
