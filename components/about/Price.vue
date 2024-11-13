<template>
  <div class="content pricing">
    <!-- title -->
    <div class="title">Pricing</div>

    <!-- content -->
    <div class="row pricing-items">
      <!-- pricing item -->
      <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
        <div class="pricing-item">
          <div class="icon">
            <i :class="pricing.basic.icon"></i>
          </div>
          <div class="name">Basic</div>
          <div class="amount">
            <span class="dollar">$</span>
            <span class="number">{{ pricing.basic.price }}</span>
            <span class="period">hour</span>
          </div>
          <div class="feature-list">
            <ul>
              <li
                v-for="item in pricing.basic.details"
                :class="item.disable ? 'disable' : ''"
              >
                {{ item.title }} <strong v-if="item.new">new</strong>
              </li>
            </ul>
          </div>
          <div class="lnks">
            <a href="#" class="lnk">
              <span class="text">Buy Basic</span>
            </a>
          </div>
        </div>
      </div>
      <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
        <div class="pricing-item">
          <div class="icon">
            <i :class="pricing.pro.icon"></i>
          </div>
          <div class="name">Pro</div>
          <div class="amount">
            <span class="dollar">$</span>
            <span class="number">{{ pricing.pro.price }}</span>
            <span class="period">hour</span>
          </div>
          <div class="feature-list">
            <ul>
              <li
                v-for="item in pricing.pro.details"
                :class="item.disable ? 'disable' : ''"
              >
                {{ item.title }} <strong v-if="item.new">new</strong>
              </li>
            </ul>
          </div>
          <div class="lnks">
            <a href="#" class="lnk">
              <span class="text">Buy Pro</span>
            </a>
          </div>
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
    pricing: {
      type: Object,
      default: defaultData.pricing,
    },
  },
};
</script>
