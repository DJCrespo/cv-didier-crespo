<template>
  <div class="card-started" id="home-card">
    <!--
     Profile
-->
    <div class="profile no-photo">
      <!-- profile image -->
      <div
        class="slide"
        style="background-image: url(images/profile2.jpg)"
      ></div>

      <div class="title">{{ programmer.name }}</div>
      <!--<div class="subtitle">Web Designer</div>-->
      <TypingAnimation :arr="programmer.typeingAnimation" />
      <!-- profile socials -->
      <SocialLinks :socialLinks="defaultData.socialLinks" />

      <!-- profile buttons -->
      <div class="lnks">
        <a href="#" class="lnk">
          <span class="text">Download CV</span>
          <span class="ion ion-android-download"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { defaultData, programmer } from "../../utils/data";
export default {};
</script>
