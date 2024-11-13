<template>
  <div class="card-started" id="home-card">
    <!--
     Profile
-->
    <div class="profile no-photo">
      <!-- profile image -->
      <div
        class="slide"
        style="background-image: url(images/profile5.jpg)"
      ></div>

      <!-- profile titles -->
      <div class="title">{{ lawyer.name }}</div>
      <div class="subtitle">Lawyer</div>
      <!--<div class="subtitle">Web Designer</div>-->
      <!-- profile socials -->
      <SocialLinks :socialLinks="lawyer.socialLinks" />

      <!-- profile buttons -->
      <div class="lnks">
        <a href="#" class="lnk">
          <span class="text">Download CV</span>
          <span class="ion ion-android-download"></span>
        </a>
        <a
          href="#"
          class="lnk discover"
          @click="navFunction.activeSection('contacts')"
        >
          <span class="text">Contact Me</span>
          <span class="ion ion-android-contact"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { lawyer } from "../../utils/data";
import { navFunction } from "../../utils/navFunction";
export default {};
</script>
