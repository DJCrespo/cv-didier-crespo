<template>
  <NuxtLayout name="default" :noSidebar="true">
    <HomeIndex2 />
    <ActiveSection :section-name="'about'">
      <AboutMe />
      <AboutServices />
      <AboutPrice />
      <AboutFunFact />
      <TestimonialsSlider />
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
        </div>
      </div>
    </ActiveSection>
    <Works />
    <BlogClassic />
    <Contacts />
  </NuxtLayout>
</template>

<script setup>
useHead({
  link: [{ rel: "stylesheet", href: "css/template-colors/green.css" }],
});
definePageMeta({
  layout: false,
});
</script>
