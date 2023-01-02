<template>
  <section class="mb-36">
    <BaseContainer>
      <swiper
        :slides-per-view="1"
        :space-between="40"
        class="cursor-grab"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="item in state.processItems" :key="item.id">
          <div class="h-[300px] w-full md:h-[550px]">
            <img
              :src="item.image"
              :alt="item.label"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </swiper-slide>
        <template #container-end>
          <HomepagePlantProcessActions :items="state.processItems" />
        </template>
      </swiper>
    </BaseContainer>

    <div
      class="relative -top-32 flex h-[170px] w-full items-end bg-gray-200 py-5 md:-top-[300px] md:h-[350px] md:py-14 xl:-top-[350px] xl:h-[436px]"
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

    const onSwiper = (swiper) => {
      console.log(swiper);
    };

    return {
      onSwiper,
      state,
    };
  },
};
</script>
