<template>
  <section
    class="mt-6 mb-11 grid grid-cols-1 md:mb-14 lg:grid-cols-6 lg:gap-20 xl:mt-40"
  >
    <section class="lg:col-span-2">
      <h1
        class="mb-5 text-center text-sm font-semibold tracking-widest lg:text-left"
      >
        REVIEWS
      </h1>
      <p
        class="lg:text-md mx-auto mb-5 max-w-[35ch] text-center text-xs md:text-sm lg:mx-0 lg:max-w-[40ch] lg:text-left"
      >
        Shop with confidance by reading customer reviews given by individuals
        who have used Bioomey. Excelient quality and streamlined service are
        both offered here.
      </p>
      <div class="flex items-center justify-center lg:justify-start">
        <span class="flex">
          <BaseIcon
            v-for="i in 5"
            :key="i"
            icon="/icons/star.svg"
            mode="image"
            :size="18"
          />
        </span>
        <span class="ml-3 text-xs font-semibold">5/5</span>
      </div>
    </section>

    <section class="mt-6 md:mt-12 lg:col-span-4 lg:mt-0">
      <swiper
        :slides-per-view="1"
        :space-between="16"
        :modules="[EffectFade, Autoplay]"
        effect="fade"
        :fade-effect="{ crossFade: true }"
        :speed="250"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        @slide-change="onSlideChange"
      >
        <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
          <blockquote
            class="mx-auto max-w-[40ch] text-center font-lora font-medium leading-relaxed md:text-2xl md:leading-normal lg:mx-0 lg:text-left"
          >
            {{ testimonial.message }}
          </blockquote>
        </swiper-slide>
        <template #container-end>
          <HomepageTestimonialNavigation
            :testimonials="testimonials"
            :active-index="activeIndex"
          />
        </template>
      </swiper>
    </section>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay } from "swiper";
import { TESTIMONIALS } from "~/utils/constant";

import "swiper/css";
import "swiper/css/effect-fade";

const testimonials = useState("testimonials", () => TESTIMONIALS);
const activeIndex = ref<number>(0);

const onSlideChange = (swiper: any) => {
  activeIndex.value = swiper.realIndex;
};
</script>
