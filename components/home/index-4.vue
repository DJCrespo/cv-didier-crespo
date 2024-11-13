<template>
  <div class="card-started" id="home-card">
    <!--
     Profile
-->
    <div
      class="profile no-photo"
      :class="toggleMenu ? 'default-menu-open' : ''"
    >
      <!-- profile image -->
      <div
        class="slide"
        style="background-image: url(images/profile3.jpg)"
      ></div>

      <!-- profile titles -->
      <div class="title">{{ designer.name }}</div>
      <!--<div class="subtitle">Web Designer</div>-->
      <TypingAnimation :arr="designer.typeingAnimation" />
      <!-- profile socials -->
      <SocialLinks :socialLinks="defaultData.socialLinks" />

      <!-- default menu -->
      <div class="main-menu-fixed">
        <div class="main-menu">
          <div class="menu-main-menu-container">
            <ul class="menu">
              <li class="menu-item" :class="activeMenu('about')">
                <a href="#" @click="activeSection('about')"
                  ><span class="icon ion-ios-person"></span>About</a
                >
              </li>
              <li class="menu-item" :class="activeMenu('resume')">
                <a href="#" @click="activeSection('resume')"
                  ><span class="icon ion-android-list"></span>Resume</a
                >
              </li>
              <li class="menu-item" :class="activeMenu('works')">
                <a href="#" @click="activeSection('works')"
                  ><span class="icon ion-paintbrush"></span>Works</a
                >
              </li>
              <li class="menu-item" :class="activeMenu('blog')">
                <a href="#" @click="activeSection('blog')"
                  ><span class="icon ion-chatbox-working"></span>Blog</a
                >
              </li>
              <li class="menu-item" :class="activeMenu('contacts')">
                <a href="#" @click="activeSection('contacts')"
                  ><span class="icon ion-at"></span>Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- menu button -->
      <div class="lnks">
        <a href="#" class="lnk lnk-view-menu" @click="toggleMenu = !toggleMenu">
          <span class="ion ion-android-more-horizontal"></span>
          <span class="text" data-text-open="Close">{{
            toggleMenu ? "Close" : "Menu"
          }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { navFunction } from "../../utils/navFunction";
import { designer, defaultData } from "../../utils/data";
export default {
  data() {
    return {
      active: "about",
      toggleMenu: false,
    };
  },
  methods: {
    activeSection(value) {
      navFunction.activeSection(value);
      this.active = value;
      this.toggleMenu = false;
    },
    activeMenu(value) {
      return this.active === value ? "current-menu-item current_page_item" : "";
    },
  },
};
</script>
