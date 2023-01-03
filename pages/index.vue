<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <BaseContainer>
      <TheHero />
      <LazyHomepagePlantCare />
    </BaseContainer>
    <LazyHomepagePlantProcess />
    <BaseContainer>
      <LazyHomepageFeatured />
      <LazyHomepageTestimonial />
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
