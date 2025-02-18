<template>
  <HomeIndex2 />
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
  <Contacts />
</template>

<script setup>
useHead({
  link: [
    { rel: "stylesheet", href: "/css/new-skin/new-skin.css" },
    { rel: "stylesheet", href: "/css/demos/demo-2-colors.css" },
    { rel: "stylesheet", href: "/css/new-skin/classic-skin.css" },
    { rel: "stylesheet", href: "/css/template-dark/dark.css" },
  ],
});
</script>
