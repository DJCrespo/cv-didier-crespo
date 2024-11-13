<template>
  <div>
    <PreLoader />
    <PopupMfpPopup />
    <PopupContentPopup />
    <PopupImgGallery />
    <div class="page">
      <!-- <PreLoader /> -->
      <!-- background -->
      <BackgroundGradientBG v-if="bg == 'gradient'" />
      <BackgroundImage v-else-if="bg == 'img'" :img="bgImage" />
      <div class="background" v-else />
      <!-- Content -->
      <div
        class="container opened"
        :class="header == false ? 'disable-sidebar no-sticky-menu' : ''"
        :data-animation-in="animationFunction.animationIn"
        :data-animation-out="animationFunction.animationOut"
      >
        <Header :noSidebar="noSidebar" :menus="menus" v-if="header" />
        <slot />
      </div>
    </div>
    <SideBarContent v-if="!noSidebar" />
  </div>
</template>

<script>
import PopupMfpPopup from "../components/popup/MfpPopup.vue";
import PopupImgGallery from "../components/popup/ImgGallery.vue";
import PopupContentPopup from "../components/popup/ContentPopup.vue";
import BackgroundImage from "../components/background/BackgroundImage.vue";
import SideBarContent from "../components/SideBarContent.vue";
import { animationFunction } from "../utils/animationFunction";
import { titleActive } from "../utils/utils";
export default {
  props: {
    bg: {
      type: String,
      default: "gradient",
    },
    bgImage: {
      type: String,
      default: "/images/bg.jpg",
    },
    noSidebar: { type: Boolean },
    menus: { type: Object },
    header: { type: Boolean, default: true },
  },
  components: { BackgroundImage, BackgroundImage, SideBarContent },
  mounted() {
    titleActive();
  },
};
</script>
