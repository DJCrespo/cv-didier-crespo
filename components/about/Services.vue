<template>
  <div class="content services">
    <!-- title -->
    <div class="title">My Services</div>

    <!-- content -->
    <div class="row service-items border-line-v">
      <!-- service item -->
      <div
        class="col col-d-6 col-t-6 col-m-12 border-line-h"
        v-for="service in services"
      >
        <div class="service-item">
          <div class="icon"><span :class="service.icon"></span></div>
          <div class="name">{{ service.title }}</div>
          <p>
            {{ service.desc }}
          </p>
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
    services: {
      type: Array,
      default: defaultData.services,
    },
  },
};
</script>
