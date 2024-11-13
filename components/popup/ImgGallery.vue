<template>
  <div>
    <div class="mfp-bg mfp-fade popup-box-inline mfp-ready" v-if="open"></div>
    <div
      v-if="open"
      class="mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready"
      tabindex="-1"
    >
      <div class="mfp-container mfp-image-holder mfp-s-ready">
        <div class="mfp-content">
          <div class="mfp-figure">
            <button
              title="Close (Esc)"
              type="button"
              class="mfp-close"
              @click="close"
            >
              ×
            </button>
            <figure>
              <img class="mfp-img" :src="data[photoIndex]" />
              <figcaption>
                <div class="mfp-bottom-bar">
                  <div class="mfp-title"></div>
                  <div class="mfp-counter">{{ photoIndex + 1 }} of 3</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="mfp-preloader">Loading...</div>
        <button
          title="Previous (Left arrow key)"
          type="button"
          class="mfp-arrow mfp-arrow-left mfp-prevent-close"
          @click="previous"
        ></button
        ><button
          title="Next (Right arrow key)"
          type="button"
          class="mfp-arrow mfp-arrow-right mfp-prevent-close"
          @click="next"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `ImgGallery`,
  data() {
    return {
      open: false,
      photoIndex: 0,
      data: [
        "/images/works/work6.jpg",
        "/images/works/work1.jpg",
        "/images/works/work5.jpg",
      ],
    };
  },
  mounted() {
    const imgGallery = document.querySelectorAll(".has-popup-gallery");
    for (let i = 0; i < imgGallery.length; i++) {
      const gallery = imgGallery[i];
      gallery.addEventListener("click", () => {
        this.open = true;
        let img_ = [];
        let parentElement = gallery.closest(".image");
        let mfpHideItem = parentElement.getElementsByClassName("mfp-hide")[0];
        let img = mfpHideItem.getElementsByTagName("a");
        for (let i = 0; i < img.length; i++) {
          const imgHref = img[i].getAttribute("href");
          img_.push(imgHref);
        }
        this.data = img_;
      });
    }
  },
  methods: {
    next() {
      this.photoIndex =
        this.photoIndex + 1 !== this.data.length
          ? this.photoIndex + (1 % this.data.length)
          : 0;
    },
    previous() {
      this.photoIndex =
        this.photoIndex !== 0
          ? (this.photoIndex + this.data.length - 1) % this.data.length
          : this.data.length - 1;
    },
    close() {
      this.open = false;
      this.photoIndex = 0;
    },
  },
};
</script>

<style scoped>
.mfp-container {
  position: fixed;
}
.mfp-content {
  width: 400px;
}
</style>
