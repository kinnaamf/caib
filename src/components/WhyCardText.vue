<template>
  <div>
    <h2 class="title">{{ title }}</h2>
    <p class="text">{{ text }}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
}
</script>
<style scoped>
  .title {
    color: #F66418;
    text-shadow: 0 4px 41px rgba(0, 0, 0, 0.10);
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .text {
    color: rgba(0, 0, 0, 0.90);
    text-shadow: 0 4px 41px rgba(0, 0, 0, 0.10);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
</style>
