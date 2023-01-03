<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <BaseContainer>
      <TheHero />
      <HomepagePlantCare />
    </BaseContainer>
    <HomepagePlantProcess />
    <BaseContainer>
      <HomepageFeatured />
      <HomepageTestimonial />
    </BaseContainer>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  name: "HomePage",
  layout: "default",
});
</script>

<style scoped></style>
