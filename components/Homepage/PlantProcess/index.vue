<template>
  <section>
    <BaseContainer>
      <swiper :slides-per-view="1" :space-between="40" class="cursor-grab">
        <swiper-slide v-for="item in state.processItems" :key="item.id">
          <picture>
            <source media="(min-width:768px)" :srcset="item.imageDekstop" />
            <img
              :src="item.image"
              :alt="item.label"
              class="h-[300px] w-full bg-gray-50 object-cover object-center md:h-[550px]"
              loading="lazy"
            />
          </picture>
        </swiper-slide>
        <template #container-end>
          <HomepagePlantProcessActions :items="state.processItems" />
        </template>
      </swiper>
    </BaseContainer>

    <div
      class="relative -top-32 flex h-[170px] w-full items-end bg-gray-100 py-5 md:-top-[300px] md:h-[350px] md:py-14 xl:-top-[350px] xl:h-[436px]"
    />
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { PLANT_PROCESS_IMAGES } from "~~/utils/constant";
import { reactive } from "vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const state = reactive({ processItems: [...PLANT_PROCESS_IMAGES] });

    return {
      state,
    };
  },
};
</script>
