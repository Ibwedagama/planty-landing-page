<template>
  <div class="container mx-auto px-4 md:px-6 xl:px-4">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineComponent({
  name: "BaseContainer",
});
</script>
