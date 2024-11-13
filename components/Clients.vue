<template>
  <div class="content clients">
    <!-- title -->
    <div class="title">Clients</div>

    <!-- content -->
    <div class="row client-items">
      <!-- client item -->
      <div
        class="col col-d-3 col-t-3 col-m-6 border-line-v"
        v-for="client in clients"
      >
        <div class="client-item">
          <div class="image">
            <a target="_blank" href="#">
              <img :src="client.img" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import { defaultData } from "../utils/data";
export default {
  props: {
    clients: {
      type: Array,
      default: defaultData.clients,
    },
  },
};
</script>
