<template>
  <ActiveSection :section-name="'resume'">
    <!--
        Resume
      -->
    <div class="content resume">
      <!-- title -->
      <div class="title">Resume</div>

      <!-- content -->
      <div class="row">
        <!-- experience -->
        <ResumeExperience />

        <!-- education -->
        <ResumeEducation />

        <div class="clear"></div>
      </div>
    </div>

    <!--
        Skills
      -->
    <div class="content skills">
      <!-- title -->
      <div class="title">My Skills</div>

      <!-- content -->
      <div class="row">
        <!-- skill item -->
        <SkillPorgressBar />

        <!-- skill item -->
        <SkillLanguages />

        <!-- skill item -->
        <SkillPorgressCircle />

        <!-- skill item -->
        <Knowledge />

        <div class="clear"></div>
      </div>
    </div>
  </ActiveSection>
</template>
