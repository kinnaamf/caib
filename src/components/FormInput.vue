<template>
  <input
      :type="type"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input"
  >
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
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
      default: ''
    },
    modelValue: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style scoped>
.input {
  border-bottom: 1px solid black;
  background: none;
  color: black;
  font-size: 24px;
  font-weight: 300;
  outline: none;
  padding-left: 8px;
}

.custom-input::placeholder {
  color: rgba(0, 0, 0, 0.5);
}
</style>
