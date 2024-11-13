<template>
  <div class="card-started" id="home-card">
    <!--
     Profile
-->
    <div class="profile no-photo">
      <!-- profile image -->
      <div
        class="slide"
        style="background-image: url(images/profile7.jpg)"
      ></div>

      <!-- profile titles -->
      <div class="title">{{ musician.name }}</div>
      <!--<div class="subtitle">Web Designer</div>-->
      <TypingAnimation :arr="musician.typeingAnimation" />
      <!-- profile socials -->
      <SocialLinks :socialLinks="musician.socialLinks" />

      <!-- profile buttons -->
      <div class="lnks">
        <a href="#" class="lnk">
          <span class="text">My Playlist</span>
          <span class="ion ion-play"></span>
        </a>
        <a
          href="#"
          class="lnk discover"
          @click="navFunction.activeSection('contacts')"
        >
          <span class="text">Contact Me</span>
          <span class="ion ion-email"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { musician } from "../../utils/data";
import { navFunction } from "../../utils/navFunction";
export default {};
</script>
