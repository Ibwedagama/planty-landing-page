<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <TheHeader />
      <slot />
      <TheFooter />
    </div>
    <aside class="drawer-side lg:hidden">
      <label for="my-drawer" class="drawer-overlay" />
      <ul class="menu w-80 bg-base-100 p-4 text-base-content">
        <li v-for="navigation in navigationLinks" :key="navigation.id">
          <NuxtLink :to="navigation.link">
            {{ navigation.label }}
          </NuxtLink>
        </li>
        <li class="mt-auto flex justify-center">
          <img
            src="/image/logo.svg"
            alt="Planty Logo"
            width="156"
            height="46"
            loading="lazy"
            class="object-contain"
          />
        </li>
      </ul>
    </aside>
  </div>
</template>

<script setup>
import { NAVBAR_LINKS } from "~~/utils/constant";

const navigationLinks = useState("navigationLinks", () => NAVBAR_LINKS);
</script>
