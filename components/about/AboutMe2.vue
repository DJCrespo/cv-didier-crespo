<template>
  <div class="content about">
    <!-- title -->
    <div class="title">About Me</div>

    <!-- content -->
    <div class="row">
      <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
        <div class="text-box" v-html="bio"></div>
      </div>
      <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
        <div class="info-list">
          <ul>
            <li>
              <strong>Age . . . . .</strong>
              {{ age }}
            </li>
            <li>
              <strong>Residence . . . . .</strong>
              {{ residence }}
            </li>
            <li>
              <strong>Freelance . . . . .</strong>
              {{ freelance ? "Available" : "No Available" }}
            </li>
            <li>
              <strong>Address . . . . .</strong>
              {{ address }}
            </li>
          </ul>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import { defaultData } from "../../utils/data";
export default {
  props: {
    age: { type: Number, default: defaultData.age },
    residence: { type: String, default: defaultData.residence },
    freelance: { type: Boolean, default: defaultData.freelance },
    address: { type: String, default: defaultData.address },
    bio: {
      type: String,
      default: defaultData.bio,
    },
  },
};
</script>
