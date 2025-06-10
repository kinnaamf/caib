<template>
  <div :style="circleStyle" class="circle"></div>
</template>

<script>
export default {
  name: 'TheEllipse',
  props: {
    size: {
      type: [Number, String],
      required: true,
    },
    color: {
      type: String,
      default: '#F66418',
    },
  },
  computed: {
    circleStyle() {
      const size = typeof this.size === 'number' ? `${this.size}px` : this.size
      return {
        width: size,
        height: size,
        backgroundColor: this.color,
        borderRadius: '50%',
      }
    },
  },
}
</script>

<style scoped>
.circle {
  filter: blur(500px);
}
</style>
