<template>
  <header class="header">
    <!-- header profile -->
    <div class="profile">
      <div class="title">Ryan Adlard</div>
      <TypingAnimation />
    </div>

    <!-- menu btn -->
    <a
      href="#"
      class="menu-btn"
      @click="navFunction.sidebarToggle(true)"
      v-if="!noSidebar"
      ><span></span
    ></a>

    <!-- menu -->
    <div class="top-menu">
      <ul>
        <li
          :class="navFunction.activeNav(menu.href)"
          v-for="menu in menus"
          @click="navFunction.activeSection(menu.href)"
        >
          <a
            :href="`#` + menu.href"
            @click="navFunction.activeSection(menu.href)"
          >
            <span :class="menu.icon"></span>
            <span class="link">{{ menu.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { navFunction } from "../utils/navFunction";
import TypingAnimation from "./TypingAnimation.vue";
export default {
  name: `Header`,
  props: {
    noSidebar: { type: Boolean },
    arr: { type: Array },
    name: {
      type: String,
      default: "Ryan Adlard",
    },
    menus: {
      type: [Object, Array],
      default: function () {
        return [
          { name: "About", href: "about", icon: "icon ion-person" },
          { name: "Resume", href: "resume", icon: "icon ion-android-list" },
          { name: "Works", href: "works", icon: "icon ion-paintbrush" },
          { name: "Blog", href: "blog", icon: "icon ion-chatbox-working" },
          { name: "Contact", href: "contacts", icon: "icon ion-at" },
        ];
      },
    },
  },
  components: { TypingAnimation },
};
</script>
