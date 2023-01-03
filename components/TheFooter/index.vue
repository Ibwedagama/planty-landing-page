<template>
  <footer class="">
    <section class="bg-white px-4 py-7 lg:py-10">
      <BaseContainer>
        <div
          class="lg:grid lg:grid-cols-[60%,40%] lg:items-end xl:grid-cols-[70%,30%]"
        >
          <h1
            class="text-center font-lora text-xl font-medium leading-normal md:text-2xl lg:text-left lg:text-3xl lg:leading-relaxed"
          >
            Stay update with special offers, <br />
            plant-parenting tips, and more.
          </h1>
          <SubscribeForm class="hidden lg:flex" />
        </div>
      </BaseContainer>
    </section>
    <section class="bg-gray-200 px-4 pt-4 lg:py-8">
      <BaseContainer>
        <div class="grid grid-cols-1 lg:grid-cols-5 lg:items-center lg:gap-12">
          <SubscribeForm class="mb-8 lg:hidden" />
          <NuxtLink to="/" aria-label="To Homepage">
            <img
              src="/image/logo.svg"
              alt="Planty Logo"
              width="156"
              height="45"
              class="mx-auto mb-8 lg:mb-0"
            />
          </NuxtLink>
          <nav
            class="mb-8 lg:col-span-3 lg:mb-0 lg:max-w-fit lg:justify-self-center"
          >
            <ul
              class="grid grid-cols-1 justify-items-center gap-11 lg:grid-cols-3"
            >
              <li class="group w-fit">
                <NuxtLink to="/" class="w-fit text-center">
                  <p>Help</p>
                  <div
                    class="h-2 w-0 border-b-2 border-black transition-all duration-200 ease-out group-hover:w-full"
                  />
                </NuxtLink>
              </li>
              <li class="group w-fit">
                <NuxtLink to="/" class="w-fit text-center">
                  <p>Contact Us</p>
                  <div
                    class="h-2 w-0 border-b-2 border-black transition-all duration-200 ease-out group-hover:w-full"
                  />
                </NuxtLink>
              </li>
              <li class="group w-fit">
                <NuxtLink to="/" class="w-fit text-center">
                  <p>Privacy & Terms</p>
                  <div
                    class="h-2 w-0 border-b-2 border-black transition-all duration-200 ease-out group-hover:w-full"
                  />
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <div class="h-1 border-b-2 border-gray-300 lg:hidden" />
          <nav class="py-8">
            <ul class="grid grid-cols-3 place-items-center">
              <li>
                <NuxtLink to="/" aria-label="Facebook">
                  <BaseIcon icon="/icons/facebook.svg" :size="30" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" aria-label="Twitter">
                  <BaseIcon icon="/icons/twitter.svg" :size="30" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" aria-label="Instagram">
                  <BaseIcon icon="/icons/instagram.svg" :size="30" />
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </BaseContainer>
    </section>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
