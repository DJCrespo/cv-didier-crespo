<template>
  <div class="background" :style="{ 'background-image': `url(${img})` }"></div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: "/images/bg.jpg",
    },
  },
};
</script>
