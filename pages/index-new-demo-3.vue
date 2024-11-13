<template>
  <NuxtLayout name="default" :noSidebar="true">
    <HomeIndex3 />
    <ActiveSection :section-name="'about'">
      <AboutMe2
        :bio="programmer.bio"
        :address="programmer.address"
        :residence="programmer.residence"
      />
      <AboutServices />
      <AboutPrice :pricing="programmer.pricing" />
      <Clients />
      <TestimonialsSlider />
      <AboutFunFact />
    </ActiveSection>
    <ActiveSection :section-name="'resume'">
      <div class="content resume">
        <div class="title">Resume</div>
        <div class="row">
          <ResumeExperience />
          <ResumeEducation />
          <div class="clear"></div>
        </div>
      </div>
      <div class="content skills">
        <div class="title">My Skills</div>
        <div class="row">
          <SkillPorgressCircle />
          <Knowledge />
          <SkillPorgressBar :porgressBar="programmer.porgressBar" />
          <SkillLanguages />
          <div class="clear"></div>
        </div>
      </div>
      <Quote />
    </ActiveSection>
    <Works />
    <Blog />
    <Contacts />
  </NuxtLayout>
</template>

<script setup>
useHead({
  link: [
    { rel: "stylesheet", href: "/css/new-skin/new-skin.css" },
    { rel: "stylesheet", href: "/css/demos/demo-3-colors.css" },
    { rel: "stylesheet", href: "/css/new-skin/classic-skin.css" },
  ],
});
definePageMeta({
  layout: false,
});
</script>

<script>
import { programmer } from "../utils/data";
</script>
