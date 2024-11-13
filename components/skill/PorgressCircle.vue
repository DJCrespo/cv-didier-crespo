<template>
  <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
    <div class="skills-list circles">
      <div class="skill-title border-line-h">
        <div class="icon"><i :class="porgressCircle.icon"></i></div>
        <div class="name">{{ porgressCircle.title }}</div>
      </div>
      <ul>
        <li v-for="progress in porgressCircle.skills">
          <div class="name">{{ progress.name }}</div>
          <div class="progress" :class="'p' + progress.value">
            <span>{{ progress.value }}%</span>
            <div class="slice">
              <div class="bar"></div>
              <div class="fill"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defaultData } from "../../utils/data";
export default {
  props: {
    porgressCircle: {
      type: Object,
      default: defaultData.porgressCircle,
    },
  },
};
</script>
