<template>
  <NuxtLayout name="default">
    <HomeIndex6 />
    <ActiveSection :section-name="'about'">
      <AboutMe2
        :bio="lawyer.bio"
        :age="lawyer.age"
        :address="lawyer.address"
        :residence="lawyer.residence"
      />
      <AboutServices :services="lawyer.services" />
      <AboutPrice :pricing="lawyer.pricing" />
      <AboutFunFact />
      <Quote />
      <Clients />
    </ActiveSection>
    <ActiveSection :section-name="'resume'">
      <div class="content resume">
        <div class="title">Resume</div>
        <div class="row">
          <ResumeExperience :experiences="lawyer.experiences" />
          <ResumeEducation :educations="lawyer.educations" />
          <div class="clear"></div>
        </div>
      </div>
      <div class="content skills">
        <div class="title">My Skills</div>
        <div class="row">
          <SkillPorgressBar
            :porgressBar="lawyer.porgressBar"
            :customClass="'col col-d-12 col-t-12 col-m-12 border-line-v'"
            :title="false"
          />
          <SkillLanguages />
          <Knowledge :knowledges="lawyer.knowledge" />
          <div class="clear"></div>
        </div>
      </div>
      <TestimonialsSlider />
    </ActiveSection>
    <IsotopeLawyer />
    <Blog />
    <Contacts />
  </NuxtLayout>
</template>

<script setup>
useHead({
  link: [
    { rel: "stylesheet", href: "/css/new-skin/new-skin.css" },
    { rel: "stylesheet", href: "/css/demos/demo-6-colors.css" },
  ],
});
definePageMeta({
  layout: false,
});
</script>

<script>
import { lawyer } from "../utils/data";
</script>
