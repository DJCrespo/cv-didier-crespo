<template>
  <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
    <div class="resume-title border-line-h">
      <div class="icon"><i class="ion ion-briefcase"></i></div>
      <div class="name">Experience</div>
    </div>
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
        <p>{{ experience.dec }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defaultData } from "../../utils/data";
export default {
  props: {
    experiences: {
      type: Array,
      default: defaultData.experiences,
    },
  },
};
</script>
