<template>
  <div class="card-started" id="home-card">
    <!--
     Profile
-->
    <div class="profile no-photo">
      <!-- profile image -->
      <div
        class="slide"
        style="background-image: url(images/djcrespo/bg.jpg)"
      ></div>

      <!-- profile titles -->
      <div class="title">{{ djcrespoInfo.name }}</div>
      <!--<div class="subtitle">Web Designer</div>-->
      <TypingAnimation :arr="djcrespoInfo.typeingAnimation" />
      <!-- profile socials -->
      <SocialLinks :socialLinks="djcrespoInfo.socialLinks" />

      <!-- profile buttons -->
      <div class="lnks">
        <a href="#" class="lnk">
          <span class="text">Mi CV</span>
          <span class="ion ion-archive"></span>
        </a>
        <a
          href="#"
          class="lnk discover"
          @click="navFunction.activeSection('contacts')"
        >
          <span class="text">Contacto</span>
          <span class="ion ion-email"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { djcrespoInfo } from "../../utils/data-djcrespo";
import { navFunction } from "../../utils/navFunction";
export default {};
</script>
