<template>
  <div class="card-started" id="home-card">
    <!--
     Profile
-->
    <div class="profile no-photo">
      <!-- profile image -->
      <div
        class="slide"
        style="background-image: url(images/profile4.jpg)"
      ></div>

      <!-- profile titles -->
      <div class="title">{{ fitnessTrainer.name }}</div>
      <!--<div class="subtitle">Web Designer</div>-->
      <TypingAnimation :arr="fitnessTrainer.typeingAnimation" />
      <!-- profile socials -->
      <SocialLinks :socialLinks="fitnessTrainer.socialLinks" />

      <!-- profile buttons -->
      <div class="lnks">
        <a
          href="#"
          class="lnk discover"
          @click="navFunction.activeSection('contacts')"
        >
          <span class="text">Contact Me</span>
          <span class="ion ion-paper-airplane"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { fitnessTrainer } from "../../utils/data";
import { navFunction } from "../../utils/navFunction";
export default {};
</script>
