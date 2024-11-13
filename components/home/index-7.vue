<template>
  <div class="card-started" id="home-card">
    <!--
  Profile
-->
    <div class="profile no-photo">
      <!-- profile image -->
      <div
        class="slide"
        style="background-image: url(images/profile6.jpg)"
      ></div>

      <!-- profile titles -->
      <!-- profile titles -->
      <div class="title">{{ writer.name }}</div>
      <!--<div class="subtitle">Web Designer</div>-->
      <TypingAnimation :arr="writer.typeingAnimation" />
      <!-- profile socials -->
      <SocialLinks :socialLinks="writer.socialLinks" />

      <!-- profile buttons -->
      <div class="lnks">
        <a href="#" class="lnk">
          <span class="text">Download CV</span>
          <span class="ion ion-android-attach"></span>
        </a>
        <a
          href="#"
          class="lnk discover"
          @click="navFunction.activeSection('contacts')"
        >
          <span class="text">Hire Me</span>
          <span class="ion ion-android-mail"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { writer } from "../../utils/data";
import { navFunction } from "../../utils/navFunction";
export default {};
</script>
