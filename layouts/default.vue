<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <TheHeader />
      <slot></slot>
      <TheFooter />
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu w-80 bg-base-100 p-4 text-base-content">
        <li v-for="navigation in navigationLinks" :key="navigation.id">
          <NuxtLink :to="navigation.link">
            {{ navigation.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { NAVBAR_LINKS } from "~~/utils/constant";

const navigationLinks = useState("navigationLinks", () => NAVBAR_LINKS);
</script>
