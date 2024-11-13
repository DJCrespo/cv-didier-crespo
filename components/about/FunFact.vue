<template>
  <div class="content fuct">
    <!-- title -->
    <div class="title">{{ funfact.title }}</div>

    <!-- content -->
    <div class="row fuct-items">
      <!-- fuct item -->
      <div
        class="col col-d-3 col-t-3 col-m-6 border-line-v"
        v-for="item in funfact.items"
      >
        <div class="fuct-item">
          <div class="icon"><span :class="item.icon"></span></div>
          <div class="name">{{ item.title }}</div>
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
    funfact: {
      type: Object,
      default: defaultData.funfactItems,
    },
  },
};
</script>
