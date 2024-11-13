<template>
  <div>
    <div
      @click="close"
      v-if="open"
      class="mfp-bg mfp-fade popup-box-inline mfp-ready"
    ></div>
    <div
      v-if="open"
      class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade popup-box-inline mfp-ready"
      tabindex="-1"
      style="overflow: hidden auto"
    >
      <div class="mfp-container mfp-s-ready mfp-inline-holder">
        <div class="mfp-content">
          <div id="popup-1" class="popup-box mfp-fade">
            <div v-html="htmlElement.outerHTML"></div>
            <button
              @click="close"
              title="Close (Esc)"
              type="button"
              class="mfp-close"
            >
              ×
            </button>
          </div>
        </div>
        <div class="mfp-preloader">Loading...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `ContentPopup`,
  data() {
    return {
      open: false,
      htmlElement: null,
    };
  },
  mounted() {
    const popupLink = document.querySelectorAll(".has-popup-media");
    for (let i = 0; i < popupLink.length; i++) {
      const element = popupLink[i];
      element.addEventListener("click", () => {
        this.open = true;
        const boxItem = element.closest(".box-item"),
          hidedItem = boxItem.getElementsByClassName("mfp-hide")[0],
          content = hidedItem.getElementsByClassName("content")[0];
        this.htmlElement = content;
      });
    }
  },
  methods: {
    close() {
      this.open = false;
    },
  },
};
</script>
