<template>
  <form
    class="flex h-16 items-center border-b-2 border-black p-3"
    @submit.prevent
  >
    <input
      type="text"
      name="subscribe-input"
      placeholder="Your email"
      class="h-full w-full bg-transparent px-3 text-base"
    />
    <BaseButton type="submit" class="ml-3 h-fit">Subscribe</BaseButton>
  </form>
</template>

<script setup lang="ts"></script>
