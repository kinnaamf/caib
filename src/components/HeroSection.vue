<template>
  <section class="relative h-screen overflow-hidden flex flex-col justify-center
  2xl:px-[260px]

">

    <!-- px-[260px] -->

    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <video
          :src="videoSrc"
          autoplay
          loop
          muted
          playsinline
          class="w-full h-full object-cover"
      ></video>
    </div>
    <div class="relative z-10">
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    videoSrc: {
      type: String,
      required: true,
    },
  },
};
</script>
