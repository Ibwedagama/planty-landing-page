<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <BaseContainer>
      <TheHero />
      <HomepagePlantCare />
    </BaseContainer>
    <HomepagePlantProcess />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  name: "HomePage",
  layout: "default",
});
</script>

<style scoped></style>
