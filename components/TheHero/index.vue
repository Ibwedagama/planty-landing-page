<template>
  <section
    class="grid min-h-[350px] w-full grid-cols-2 pt-6 md:min-h-[718px] lg:min-h-[695px] xl:min-h-[830px]"
  >
    <div
      class="relative z-10 -mr-[2rem] flex flex-col justify-center py-5 md:-mr-[4rem] xl:mr-0"
    >
      <h1
        class="hero__headline mb-4 font-lora text-2xl font-bold md:mb-12 md:text-7xl md:leading-tight"
      >
        Best house plants varieties.
      </h1>
      <div
        class="hero__cta-container -ml-4 bg-white p-4 shadow-xl xl:ml-0 xl:shadow-none"
      >
        <h2
          class="hero__subtitle mb-4 text-sm font-semibold md:mb-6 md:text-2xl"
        >
          Beautiful living greenery for homes and offices
        </h2>
        <BaseButton class="hero__cta">Shop Now</BaseButton>
        <p class="mt-6 text-xs md:mb-4 md:text-base">
          Wer've been mentioned in the press
        </p>
        <div class="mt-6 flex w-fit md:mt-14">
          <img
            src="/image/Bloomberg.svg"
            alt="Bloomberg logo"
            width="85"
            height="20"
            class="hero__featured pt-1 md:h-10 md:w-full"
            loading="eager"
          />
          <img
            src="/image/Forbes.svg"
            alt="Forbes logo"
            width="50"
            height="20"
            class="hero__featured ml-4 md:ml-20 md:h-8 md:w-full"
            loading="eager"
          />
        </div>
      </div>
    </div>
    <div class="-mr-[1rem] md:-mr-[2rem] xl:mr-0">
      <picture>
        <source
          media="(min-width:768px)"
          srcset="/image/hero-image-desktop.webp"
        />
        <source
          media="(min-width:320px)"
          srcset="/image/hero-image-mobile.webp"
        />
        <img
          src="/image/hero-image.png"
          alt="two green plant with wood pots"
          height="284"
          width="376"
          class="hero__banner h-full w-full object-cover object-right"
          loading="eager"
        />
      </picture>
    </div>
  </section>
</template>

<script setup lang="ts">
defineComponent({
  name: "TheHero",
});
</script>

<style>
.hero__banner {
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
}
</style>
