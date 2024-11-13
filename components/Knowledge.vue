<template>
  <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
    <div class="skills-list list">
      <div class="skill-title border-line-h">
        <div class="icon"><i :class="knowledges.icons"></i></div>
        <div class="name">{{ knowledges.title }}</div>
      </div>
      <ul>
        <li v-for="knowledge in knowledges.items">
          <div class="name">{{ knowledge.text }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defaultData } from "../utils/data";
export default {
  props: {
    knowledges: {
      type: Object,
      default: defaultData.knowledge,
    },
  },
};
</script>
