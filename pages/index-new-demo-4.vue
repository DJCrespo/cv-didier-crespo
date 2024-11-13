<template>
  <NuxtLayout name="default" :noSidebar="true" :header="false" :bg="'none'">
    <HomeIndex4 />
    <ActiveSection :sectionName="'about'">
      <AboutMe2 :bio="designer.bio" />
      <div class="row">
        <SkillPorgressBar :porgressBar="designer.porgressBar" />
        <SkillLanguages />
      </div>
      <AboutServices :services="designer.services" />
      <AboutPrice :pricing="designer.pricing" />
      <AboutFunFact />
      <Quote />
      <Clients />
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
          <SkillPorgressCircle :porgressCircle="designer.porgressCircle" />
          <Knowledge />
          <div class="clear"></div>
        </div>
      </div>
      <TestimonialsSlider />
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
    { rel: "stylesheet", href: "/css/demos/demo-4-colors.css" },
  ],
});
definePageMeta({
  layout: false,
});
</script>

<script>
import { navFunction } from "../utils/navFunction";
import { designer } from "../utils/data";
</script>
