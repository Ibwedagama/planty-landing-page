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
      <HomepageBanner />
    </BaseContainer>
  </main>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { onMounted } from "vue";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

definePageMeta({
  name: "HomePage",
  layout: "default",
});

function heroTimeline() {
  const tl = gsap.timeline({
    delay: 0.5,
  });

  tl.from(".hero__banner", {
    clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)",
    ease: "expo.out",
    duration: 1.5,
  });

  tl.from(
    ".hero__headline",
    {
      y: 100,
      autoAlpha: 0,
      ease: "expo.out",
      duration: 1.5,
    },
    "-=0.8"
  );

  tl.from(
    ".hero__cta-container",
    {
      y: 50,
      autoAlpha: 0,
      ease: "expo.out",
      duration: 1,
      stagger: 0.5,
    },
    "-=1"
  );

  tl.from(
    ".hero__featured",
    {
      y: 20,
      autoAlpha: 0,
      ease: "expo.out",
      duration: 0.5,
      stagger: 0.5,
    },
    "-=0.5"
  );

  return tl;
}

onMounted(() => {
  const masterTimeline = gsap.timeline();

  masterTimeline.add(heroTimeline());
});
</script>
