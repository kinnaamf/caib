<template>
  <input type="text"
    :name="name"

  >
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },

  }
}
</script>

<style lang="scss" scoped>

</style>
