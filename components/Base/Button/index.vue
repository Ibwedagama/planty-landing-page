<template>
  <button class="btn rounded-full bg-black text-xs text-white">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineComponent({
  name: "BaseButton",
});
</script>
