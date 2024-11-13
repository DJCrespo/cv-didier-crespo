<template>
  <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
    <div class="resume-title border-line-h">
      <div class="icon"><i class="ion ion-university"></i></div>
      <div class="name">Education</div>
    </div>
    <div class="resume-items">
      <div
        v-for="education in educations"
        class="resume-item"
        :class="education.id == educations.length ? '' : 'border-line-h'"
      >
        <div class="date">{{ education.date }}</div>
        <div class="name">{{ education.name }}</div>
        <div class="company">{{ education.address }}</div>
        <p>
          {{ education.dec }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defaultData } from "../../utils/data";
export default {
  props: {
    educations: {
      type: Array,
      default: defaultData.educations,
    },
  },
};
</script>
