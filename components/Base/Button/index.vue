<template>
  <button
    class="btn-sm btn rounded-full bg-black text-xs text-white md:text-sm md:btn-md"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineComponent({
  name: "BaseButton",
});
</script>
