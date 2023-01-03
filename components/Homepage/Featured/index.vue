<template>
  <section class="-mt-32 py-7 md:-mt-[300px]">
    <span class="mb-5 block text-xs md:text-xl">OUR SHOP</span>
    <div class="flex items-end justify-between">
      <h1
        class="font-lora text-xl leading-6 md:text-2xl md:leading-normal xl:text-4xl xl:leading-relaxed"
      >
        Here are the best seller <br />from our varieties
      </h1>
      <BaseButton class="ml-6 h-fit">See All</BaseButton>
    </div>
  </section>
  <section>
    <swiper
      :initial-slide="1"
      :slides-per-view="1.5"
      :space-between="16"
      :centered-slides="true"
      :centered-slides-bounds="true"
      :breakpoints="swiperBreakpoints"
      class="cursor-grab"
    >
      <swiper-slide
        v-for="item in featuredPlants"
        :key="item.id"
        class="md:!w-fit"
      >
        <figure class="min-h-[350px] w-[223px] md:min-h-[577px] md:w-[368px]">
          <picture>
            <source media="(min-width:768px)" :srcset="item.imageDekstop" />
            <img
              :src="item.image"
              :alt="item.label"
              class="h-[350px] w-full object-cover object-center md:min-h-[577px]"
            />
          </picture>

          <figcaption class="flex justify-between py-4">
            <span>{{ item.label }}</span>
            <span>{{ item.price }}</span>
          </figcaption>
        </figure>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { FEATURED_PLANTS } from "~/utils/constant";

const featuredPlants = useState("featuredPlants", () => FEATURED_PLANTS);

const swiperBreakpoints = {
  // when window width is >= 640px
  640: {
    slidesPerView: "auto",
    spaceBetween: 44,
  },
};
</script>

<style scoped></style>
