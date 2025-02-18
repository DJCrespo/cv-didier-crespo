<template>
  <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
    <!--
    <div class="resume-title border-line-h">
      <div class="icon"><i class="ion ion-briefcase"></i></div>
      <div class="name">Experiencia</div>
    </div>
    -->
    <div class="resume-items">
      <div
        v-for="(experience, index) in experiences"
        class="resume-item"
        :class="
          index + 1 == experiences.length ? '' : 'border-line-h',
          index == 0 ? 'active' : ''
        "
      >
        <div class="date">{{ experience.date }}</div>
        <div class="name">{{ experience.jobTitle }}</div>
        <div class="company">{{ experience.company }}</div>
        <div v-for="text in experience.dec">
          - {{ text }}
        </div>
        <!--<p>{{ experience.dec }}</p>-->
      </div>
    </div>
  </div>
</template>

<script>
import { defaultData } from "../../utils/data";
import { djcrespoInfo } from "../../utils/data-djcrespo";
export default {
  props: {
    experiences: {
      type: Array,
      default: djcrespoInfo.experiences,
    },
  },
};
</script>
