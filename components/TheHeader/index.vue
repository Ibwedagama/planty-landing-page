<template>
  <header class="">
    <BaseContainer
      class="flex min-h-[47px] items-center justify-between pt-6 md:min-h-[93px]"
    >
      <NuxtLink to="/">
        <img
          src="/image/logo.svg"
          alt="Planty Logo"
          width="73"
          height="22"
          class="md:h-[35px] md:w-[123px]"
        />
      </NuxtLink>
      <nav class="hidden lg:block">
        <ul class="flex items-center">
          <li
            v-for="link in navbarLinks"
            :key="link.id"
            class="ml-10 font-quicksand"
          >
            <NuxtLink :to="link.link">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul class="flex items-center">
          <li
            class="flex h-6 w-6 items-center justify-center rounded-md hover:bg-gray-200 md:h-10 md:w-10"
            title="Search"
          >
            <BaseIcon
              icon="/icons/search.svg"
              :size="18"
              class="md:scale-125"
            />
          </li>
          <li
            class="ml-10 flex h-6 w-6 items-center justify-center rounded-md hover:bg-gray-200 md:h-10 md:w-10"
            title="User Profile"
          >
            <BaseIcon icon="/icons/user.svg" :size="18" class="md:scale-125" />
          </li>
          <li
            class="ml-10 flex h-6 w-6 items-center justify-center rounded-md hover:bg-gray-200 md:h-10 md:w-10"
            title="Your Cart"
          >
            <BaseIcon icon="/icons/cart.svg" :size="18" class="md:scale-125" />
          </li>
          <li
            class="ml-10 flex h-6 w-6 items-center justify-center rounded-md hover:bg-gray-200 lg:hidden"
            title="Menu"
          >
            <BaseIcon icon="/icons/hamburger.svg" :size="18" />
          </li>
        </ul>
      </nav>
    </BaseContainer>
  </header>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { NAVBAR_LINKS } from "~~/utils/constant";

defineComponent({
  name: "TheHeader",
});

const navbarLinks = useState("navbarLinks", () => NAVBAR_LINKS);
</script>

<style scoped></style>
