<template>
  <div class="h-screen bg-gray-100">
    <img :src="GradientTop" alt="" class="select-none pointer-events-none absolute top-0 right-0" width="1113" height="1513" />
    <img :src="GradientBottom" alt="" class="select-none pointer-events-none absolute bottom-0 left-0" width="1400" height="1813" />

    <div class="w-full absolute lg:top-9 top-0 z-10">
      <div class="lg:w-fit w-full mx-auto px-4 py-1 lg:py-2 bg-red-500 text-white text-xs text-center lg:rounded-full">
        We are not recommend to use Vueless UI in production, yet.
      </div>
    </div>

    <div
      class="mx-auto grid h-full max-w-screen-2xl grid-rows-[fit-content(100%),1fr,fit-content(100%)] px-4 sm:px-8"
    >
      <DefaultHeader />

      <slot />

      <DefaultFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import GradientTop from "~/assets/images/gradient-top.png";
import GradientBottom from "~/assets/images/gradient-bottom.png";
</script>
