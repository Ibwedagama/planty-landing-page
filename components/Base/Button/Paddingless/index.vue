<template>
  <button
    class="flex min-h-[26px] w-fit items-center justify-center bg-transparent py-2 text-sm font-bold uppercase text-black md:min-h-[52px] md:text-base"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineComponent({
  name: "BaseButtonPaddingless",
});
</script>
