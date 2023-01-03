<template>
  <div class="mt-14 flex min-h-[50px] items-center justify-between">
    <div>
      <h2 class="text-md font-lora font-semibold md:text-xl">
        {{ props.testimonials[swiper.activeIndex].name }}.
      </h2>
      <span class="md:text-md text-sm tracking-wider">
        {{ props.testimonials[swiper.activeIndex].location }}
      </span>
    </div>
    <div class="flex">
      <button
        class="group flex h-6 w-6 items-center justify-center rounded-full border border-black md:h-12 md:w-12"
        aria-label="Previous Button"
        @click="swiper.slidePrev()"
      >
        <BaseIcon
          icon="/icons/chevron-left.svg"
          :size="12"
          class="transition-all ease-in group-hover:mr-3 md:!h-4 md:!w-4 lg:relative"
        />
      </button>
      <button
        class="group ml-6 flex h-6 w-6 items-center justify-center rounded-full border border-black md:ml-3 md:h-12 md:w-12"
        aria-label="Next Button"
        @click="swiper.slideNext()"
      >
        <BaseIcon
          icon="/icons/chevron-right.svg"
          :size="12"
          class="transition-all ease-in group-hover:ml-3 lg:relative lg:!h-4 lg:!w-4"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSwiper } from "swiper/vue";

const swiper = useSwiper();

interface Testimonial {
  id: number;
  name: string;
  location: string;
  message: string;
}

interface Props {
  testimonials: Testimonial[];
}

const props = defineProps<Props>();
</script>

<style scoped></style>
