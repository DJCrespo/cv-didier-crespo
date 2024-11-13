<template>
  <NuxtLayout
    name="default"
    :noSidebar="true"
    :bg="'img'"
    :bgImage="'images/bg3.jpg'"
    :menus="menus"
  >
    <HomeIndex5 />
    <ActiveSection :section-name="'about'">
      <AboutMe2 :bio="fitnessTrainer.bio" :age="fitnessTrainer.age" />
      <AboutServices :services="fitnessTrainer.services" />
      <AboutPrice :pricing="fitnessTrainer.pricing" />
      <AboutFunFact />
      <Quote />
    </ActiveSection>
    <ActiveSection :section-name="'resume'">
      <div class="content resume">
        <div class="title">Resume</div>
        <div class="row">
          <ResumeExperience :experiences="fitnessTrainer.experiences" />
          <ResumeEducation :educations="fitnessTrainer.educations" />
          <div class="clear"></div>
        </div>
      </div>
      <div class="content skills">
        <div class="title">My Skills</div>
        <div class="row">
          <SkillPorgressBar
            :porgressBar="fitnessTrainer.porgressBar"
            :customClass="'col col-d-12 col-t-12 col-m-12 border-line-v'"
          />
          <SkillLanguages />
          <Knowledge :knowledges="fitnessTrainer.knowledge" />
          <div class="clear"></div>
        </div>
      </div>
      <TestimonialsSlider />
    </ActiveSection>
    <IsotopeFitnessIsotope />
    <Blog />
    <Contacts />
  </NuxtLayout>
</template>

<script setup>
useHead({
  link: [
    { rel: "stylesheet", href: "/css/new-skin/new-skin.css" },
    { rel: "stylesheet", href: "/css/demos/demo-5-colors.css" },
  ],
});
definePageMeta({
  layout: false,
});
</script>

<script>
import { fitnessTrainer } from "../utils/data";
</script>
