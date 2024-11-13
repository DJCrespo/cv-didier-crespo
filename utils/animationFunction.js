import { reactive } from "vue";

export const animationFunction = reactive({
  animationIn: "fadeInLeft",
  animationOut: "fadeOutLeft",
  animation(animationIn, animationOut) {
    this.animationIn = animationIn;
    this.animationOut = animationOut;
  },
});
