<template>
  <NuxtLayout name="default" :noSidebar="true" :bg="'img'">
    <HomeIndexClassic />
    <ActiveSection :section-name="'about'">
      <AboutMe2 />
      <AboutServices />
      <AboutPrice />
      <AboutFunFact />
      <Clients />
      <Quote />
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
          <SkillPorgressBar />
          <SkillLanguages />
          <SkillPorgressCircle />
          <Knowledge />
          <div class="clear"></div>
        </div>
      </div>
      <TestimonialsSlider />
    </ActiveSection>
    <Works />
    <Blog />
    <Contacts
  /></NuxtLayout>
</template>

<script setup>
useHead({
  link: [
    { rel: "stylesheet", href: "/css/new-skin/new-skin.css" },
    { rel: "stylesheet", href: "/css/demos/demo-1-colors.css" },
  ],
});
definePageMeta({
  layout: false,
});
</script>
