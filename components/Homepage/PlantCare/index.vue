<template>
  <section class="py-7 md:grid md:grid-cols-2 md:gap-10 md:py-10 xl:py-20">
    <p
      class="mt-2 mb-4 text-center text-sm md:text-left md:text-lg xl:text-2xl xl:leading-normal"
    >
      Each houseplant set is handled quickly and safely before being sent to
      your destination in specially designed insulated packaging.
    </p>
    <div>
      <p
        class="mb-7 text-center font-lora text-xl md:text-left md:text-2xl lg:leading-normal xl:text-4xl xl:leading-relaxed"
      >
        Learn how we take care of your plant at every stage of its journey from
        our greenhouse to your home.
      </p>
      <BaseButtonPaddingless class="group mx-auto md:mx-0">
        <p>LEARN MORE</p>
        <div
          class="ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-black transition-all ease-in group-hover:ml-6 md:h-8 md:w-8"
        >
          <BaseIcon
            icon="/icons/arrow-right.svg"
            fill-color="white"
            :size="16"
            class="md:!h-6 md:!w-6"
          />
        </div>
      </BaseButtonPaddingless>
    </div>
  </section>
</template>
