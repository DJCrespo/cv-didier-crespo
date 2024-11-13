<template>
  <NuxtLayout name="default" :noSidebar="true">
    <HomeIndex7 />
    <ActiveSection :section-name="'about'">
      <AboutMe2 :bio="writer.bio" />
      <AboutFunFact :funfact="writer.funfactItems" />
      <Quote />
      <AboutServices :services="writer.services" />
      <AboutPrice :pricing="writer.pricing" />
      <Clients />
    </ActiveSection>
    <ActiveSection :section-name="'resume'">
      <div class="content resume">
        <div class="title">Resume</div>
        <div class="row">
          <ResumeExperience :experiences="writer.experiences" />
          <ResumeEducation :educations="writer.educations" />
          <div class="clear"></div>
        </div>
      </div>
      <div class="content skills">
        <div class="title">My Skills</div>
        <div class="row">
          <SkillPorgressBar
            :porgressBar="writer.porgressBar"
            :customClass="'col col-d-12 col-t-12 col-m-12 border-line-v'"
            :title="false"
          />
          <SkillLanguages />
          <Knowledge :knowledges="writer.knowledge" />
          <div class="clear"></div>
        </div>
      </div>
      <TestimonialsSlider />
    </ActiveSection>
    <IsotopeWriter />
    <Blog />
    <Contacts />
  </NuxtLayout>
</template>

<script setup>
useHead({
  link: [
    { rel: "stylesheet", href: "/css/new-skin/new-skin.css" },
    { rel: "stylesheet", href: "/css/demos/demo-7-colors.css" },
    { rel: "stylesheet", href: "css/new-skin/classic-skin.css" },
    { rel: "stylesheet", href: "css/template-dark/dark.css" },
  ],
});
definePageMeta({
  layout: false,
});
</script>

<script>
import { writer } from "../utils/data";
</script>
