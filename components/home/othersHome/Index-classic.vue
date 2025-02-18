<template>
  <div class="card-started" id="home-card">
    <div class="profile">
      <!-- profile image -->
      <div class="slide" style="background-image: url(images/djcrespo/bg.jpg)"></div>

      <!-- profile photo -->
      <div class="image">
        <img src="/images/djcrespo/djcrespo2.jpg" alt="" />
      </div>

      <!-- profile titles -->
      <div class="title">Didier Crespo Castilla</div>
      <div class="subtitle">Full Stack Developer</div>

      <!-- profile socials -->
      <div class="social-classic">
        <SocialLinks :socialLinks="defaultData.socialLinks" />
      </div>

      <!-- profile buttons -->
      <div class="lnks">
        <a href="#" class="lnk">
          <span class="text">Download CV</span>
          <span class="ion ion-archive"></span>
        </a>
        <a
          href="#"
          class="lnk discover"
          @click="navFunction.activeSection('contacts')"
        >
          <span class="text">Contact Me</span>
          <span class="arrow"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { defaultData } from "../../../utils/data";
import { navFunction } from "../../../utils/navFunction";
export default {};
</script>
