<template>
  <div class="content about">
    <!-- title -->
    <div class="title">Sobre mí</div>

    <!-- content -->
    <div class="row">
      <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
        <div class="text-box" v-html="bio"></div>
      </div>
      <!--
      <div class="col col-d-3 col-t-3 col-m-12 border-line-v">
        <div class="info-list">
          <ul>
            <li>
              <strong>{{ lenguages.front }}</strong>
              <br>
            </li>
            <li>
              <strong>{{ lenguages.back }}</strong>
              <br>
            </li>
            <li>
              <strong>{{ lenguages.mobile }}</strong>
              <br>
            </li>
            <li>
              <strong>{{ lenguages.cloud }}</strong>
              <br>
            </li>
          </ul>
        </div>
      </div>
      -->
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import { djcrespoInfo } from "../../utils/data-djcrespo";
export default {
  props: {
    age: { type: Number, default: djcrespoInfo.age },
    residence: { type: String, default: djcrespoInfo.residence },
    freelance: { type: Boolean, default: djcrespoInfo.freelance },
    address: { type: String, default: djcrespoInfo.address },
    lenguages: {
      type: Object,
      default: djcrespoInfo.lenguages
    },
    bio: {
      type: String,
      default: djcrespoInfo.bio,
    },
  },
};
</script>
