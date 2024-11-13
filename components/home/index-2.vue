<template>
  <div class="card-started" id="home-card">
    <!--
     Profile
-->
    <div class="profile">
      <!-- profile image -->
      <div class="slide" style="background-image: url(images/bg.jpg)"></div>

      <!-- profile photo -->
      <div class="image">
        <img src="/images/profile.png" alt="" />
      </div>

      <!-- profile titles -->
      <!-- profile titles -->
      <div class="title">{{ defaultData.name }}</div>
      <!--<div class="subtitle">Web Designer</div>-->
      <TypingAnimation :arr="defaultData.typeingAnimation" />
      <!-- profile socials -->
      <SocialLinks :socialLinks="defaultData.socialLinks" />

      <!-- profile buttons -->
      <div class="lnks">
        <a href="#" class="lnk">
          <span class="text">Download CV</span>
        </a>
        <a
          href="#"
          class="lnk discover"
          @click="navFunction.activeSection('contacts')"
        >
          <span class="text">Contact Me</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { defaultData } from "../../utils/data";
import { navFunction } from "../../utils/navFunction";
export default {};
</script>
