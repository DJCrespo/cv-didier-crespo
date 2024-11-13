<template>
  <NuxtLayout name="default" :bg="'img'" :bgImage="'images/profile7.jpg'">
    <HomeIndex8 />
    <ActiveSection :section-name="'about'">
      <AboutMe2
        :bio="musician.bio"
        :residence="musician.residence"
        :address="musician.address"
      />
      <AboutServices :services="musician.services" />
      <AboutPrice :pricing="musician.pricing" />
      <AboutFunFact :funfact="musician.funfactItems" />
      <Quote />
      <Clients />
    </ActiveSection>
    <ActiveSection :section-name="'resume'">
      <div class="content resume">
        <div class="title">Resume</div>
        <div class="row">
          <ResumeExperience :experiences="musician.experiences" />
          <ResumeEducation :educations="musician.educations" />
          <div class="clear"></div>
        </div>
      </div>
      <div class="content skills">
        <div class="title">My Skills</div>
        <div class="row">
          <SkillPorgressBar
            :porgressBar="musician.porgressBar"
            :customClass="'col col-d-12 col-t-12 col-m-12 border-line-v'"
            :title="false"
          />
          <SkillPorgressCircle :porgressCircle="musician.porgressCircle" />
          <Knowledge />
          <div class="clear"></div>
        </div>
      </div>
      <TestimonialsSlider />
    </ActiveSection>
    <IsotopeMusician />
    <Blog />
    <Contacts />
  </NuxtLayout>
</template>

<script setup>
useHead({
  link: [
    { rel: "stylesheet", href: "/css/new-skin/new-skin.css" },
    { rel: "stylesheet", href: "/css/demos/demo-8-colors.css" },
  ],
});
definePageMeta({
  layout: false,
});
</script>

<script>
import { musician } from "../utils/data";
</script>
