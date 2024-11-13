<template>
  <div :class="customClass">
    <div class="skills-list">
      <div class="skill-title border-line-h" v-if="title">
        <div class="icon"><i :class="porgressBar.icon"></i></div>
        <div class="name">{{ porgressBar.title }}</div>
      </div>
      <ul>
        <li
          v-for="design in porgressBar.skills"
          :class="design.id == porgressBar.skills.length ? '' : 'border-line-h'"
        >
          <div class="name">{{ design.name }}</div>
          <div class="progress">
            <div
              class="percentage"
              :style="{ width: `${design.value}%` }"
            ></div>
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
    porgressBar: {
      type: Object,
      default: defaultData.porgressBar,
    },
    customClass: {
      type: String,
      default: "col col-d-6 col-t-6 col-m-12 border-line-v",
    },
    title: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
