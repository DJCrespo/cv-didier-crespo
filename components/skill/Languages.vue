<template>
  <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
    <div class="skills-list dotted">
      <div class="skill-title border-line-h">
        <div class="icon"><i class="ion ion-flag"></i></div>
        <div class="name">Languages</div>
      </div>
      <ul>
        <li
          :class="language.id == languageSkills.length ? '' : 'border-line-h'"
          v-for="language in languageSkills"
        >
          <div class="name">{{ language.name }}</div>
          <div class="progress">
            <div
              class="percentage"
              :style="{ width: `${language.value}%` }"
            ></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { createSkillsDot, dotResize } from "../../utils/utils";

export default {
  data() {
    return {
      languageSkills: [
        { id: 1, name: "English", value: 90 },
        { id: 2, name: "German", value: 65 },
        { id: 3, name: "Italian", value: 75 },
        { id: 4, name: "French", value: 85 },
      ],
    };
  },
  mounted() {
    dotResize();
    setTimeout(createSkillsDot, 1500);
  },
};
</script>
