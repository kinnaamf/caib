<template>
  <div class="mini-card flex flex-col items-center justify-center">
    <h2 class="title">
      {{ title }}
    </h2>
    <p class="amount">
      {{ amount }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.title {
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.amount {
  color: #F66418;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.mini-card {
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.50);
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(10px);
  transition: transform 0.2s, background 0.2s, box-shadow 0.2s, border 0.2s;
  z-index: 1;
}

.mini-card:hover {
  transform: scale(1.05);
  transition: 0.2s;
  border: 2px solid #F66418;
  background: rgba(255, 255, 255, 0.80);
  box-shadow: 0 4px 30px 0 #F66418 inset, 0 2px 20px 0 rgba(0, 0, 0, 0.10);
}
</style>
