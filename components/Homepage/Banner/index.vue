<template>
  <section
    class="grid grid-cols-2 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-6 xl:gap-10"
  >
    <picture class="h-[280px] md:col-span-2 lg:col-span-2 lg:h-[750px]">
      <source media="(min-width:769px)" srcset="/image/banner-1-desktop.webp" />
      <img
        src="/image/banner-1.webp"
        alt="a table full of plants near a window"
        class="h-full w-full object-cover object-center"
        loading="lazy"
      />
    </picture>
    <picture class="h-[280px] md:col-span-4 lg:col-span-3 lg:h-[750px]">
      <source media="(min-width:769px)" srcset="/image/banner-2-desktop.webp" />
      <img
        src="/image/banner-2.webp"
        alt="a man holding a plant"
        class="h-full w-full object-cover object-center"
        loading="lazy"
      />
    </picture>
    <picture
      class="relative col-span-2 h-[275px] md:col-span-6 md:h-[350px] lg:col-span-5 lg:h-[500px]"
    >
      <source media="(min-width:769px)" srcset="/image/banner-3-desktop.webp" />
      <img
        src="/image/banner-3.webp"
        alt="three house plants with different colors in front of white wall"
        class="h-full w-full object-cover object-center"
        loading="lazy"
      />
      <div class="absolute inset-0 px-6 py-4 md:py-6 lg:px-28 lg:py-16">
        <h1
          class="mb-2 font-lora text-xl font-semibold leading-normal md:text-3xl md:leading-relaxed lg:text-5xl lg:leading-snug"
        >
          Get inspired from <br class="hidden md:block" />our Instagram
        </h1>
        <h2 class="mb-0 text-xs leading-tight md:mb-4 md:text-xl lg:text-base">
          If you use the hashtag #bioomey on Instagram,
          <br class="hidden md:block" />well spotlight you.
        </h2>
        <BaseButtonPaddingless class="group md:mx-0">
          <p class="md:text-md text-xs">Check it out</p>
          <div
            class="ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-black transition-all ease-in group-hover:ml-6 md:h-8 md:w-8"
          >
            <BaseIcon
              icon="/icons/arrow-right.svg"
              fill-color="white"
              :size="16"
              class="md:!h-6 md:!w-6"
            />
          </div>
        </BaseButtonPaddingless>
      </div>
    </picture>
  </section>
</template>

<script setup lang="ts"></script>
