<template>
  <div class="social">
    <a v-for="socialLink in socialLinks" target="_blank" :href="socialLink.link"
      ><span :class="socialLink.icons"></span
    ></a>
  </div>
</template>

<script>
export default {
  props: {
    socialLinks: {
      type: Array,
    },
  },
};
</script>
