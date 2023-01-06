<template>
  <section class="mt-6 flex items-center justify-between xl:mt-14">
    <span class="text-xs font-semibold lg:text-sm"
      >STEP {{ swiper.activeIndex + 1 }}</span
    >
    <h1 class="text-md font-lora md:text-2xl">
      {{ props.items[swiper.activeIndex].label }}
    </h1>
    <div class="flex">
      <button
        class="group flex h-6 w-6 items-center justify-center rounded-full border border-black lg:h-12 lg:w-12"
        aria-label="Previous Button"
        @click="swiper.slidePrev()"
      >
        <BaseIcon
          icon="/icons/chevron-left.svg"
          :size="12"
          class="transition-all ease-in group-hover:mr-3 lg:relative lg:!h-4 lg:!w-4"
        />
      </button>
      <button
        class="group ml-6 flex h-6 w-6 items-center justify-center rounded-full border border-black lg:ml-3 lg:h-12 lg:w-12"
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
  </section>
</template>

<script setup lang="ts">
import { useSwiper } from "swiper/vue";

const swiper = useSwiper();

interface Item {
  id: number;
  label: string;
  image: string;
  imageDekstop: string;
}

interface Props {
  items: Item[];
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
});
</script>
