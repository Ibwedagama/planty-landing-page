<template>
  <button
    class="flex min-h-[26px] w-fit items-center justify-center rounded-full bg-black py-2 px-7 text-xs text-white md:min-h-[52px] md:px-8 md:text-base"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineComponent({
  name: "BaseButton",
});
</script>
