<template>
  <div class="content-center justify-self-center relative">
    <div
      class="
        radial-gradient-container flex justify-center w-full rounded-full lg:min-w-[50rem]
        absolute z-10 -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4
        md:max-lg:static md:max-lg:-translate-x-0 md:max-lg:-translate-y-0 md:max-lg:left-0 md:max-lg:top-0
      ">
      <div class="flex flex-col items-center max-w-[50rem]">
        <span
          class="rounded-full border border-gray-300 px-3 py-1 text-sm font-semibold text-gray-600"
          :class="!vuelessPackage?.version && 'animate-pulse'"
        >
          Vueless UI {{ vuelessPackage?.version || "0.0.XX" }} is out! 🚀
        </span>

        <h1
          class="mt-6 text-center font-bold text-slate-900 text-4xl md:text-5xl lg:text-7xl"
        >
          A
          <span class="lg:-mx-3 rounded-lg leading-relaxed lg:leading-normal bg-green-500/25 -mx-2 px-2 py-1 lg:px-3 lg:py-1"
            >UI Library</span
          >
          for
          <br />

          <ClientOnly>
            <Typed :options="options">
              <span class="typing"/>
            </Typed>
          </ClientOnly>

        </h1>
        <p class="mt-4 text-center text-sm whitespace-break-spaces sm:text-base lg:text-lg text-gray-600">
          Endless collection. Limitless customisation. Stressless coding. All the stuff you need for your next Vue.js app.
        </p>

        <div class="mt-4 lg:mt-11 flex flex-col items-center w-full sm:w-auto justify-center gap-4 sm:flex-row">
          <div
            class="flex items-center gap-1 rounded-lg w-full sm:w-auto border border-gray-300 bg-white p-2.5"
          >
            <input
              class="text-sm sm:w-80 w-full focus-within:outline-none focus:outline-none focus-visible:outline-none"
              readonly
              :value="installCommand"
            />
            <MdiIcon
              :icon="copyIcon"
              class="text-gray-500 hover:cursor-pointer"
              @click="onClickCopy"
            />
          </div>

          <NuxtLink
            class="border border-slate-900 flex items-center justify-center gap-1 rounded-lg bg-slate-900 px-[1.125rem] py-2.5 text-sm text-white max-sm:w-full"
            to="https://docs.vueless.com"
          >
            Get Started
            <MdiIcon icon="mdiArrowRight" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";

interface VuelessPackage {
  version: string;
}

useSeoMeta({
  title: "Vueless UI: Styleless UI Library based on Tailwind for Vue",
  // eslint-disable-next-line vue/max-len
  description: "Vueless UI simplifies the creation of stunning web applications with its huge collection of 60+ fully styled and 100% customisable UI components designed for Vue.js",
  ogTitle: "Vueless UI",
  ogDescription: "Styleless UI Library based on Tailwind CSS for Vue.js",
  //ogImage: "https://example.com/image.png",
  //twitterCard: "summary_large_image",
})

const options: TypedOptions = {
  strings: ["Flawless Devs", "Boundless Ideas", "Effortless Coding"],
  loop: true,
  typeSpeed: 75,
  startDelay: 100,
  backSpeed: 50,
  backDelay: 2000,
};

const installCommand = "npm install vueless @vueless/plugin-vite";

const { data: vuelessPackage } = await useFetch<VuelessPackage>(
  "https://registry.npmjs.org/vueless/latest", { server: false }
);

const isCopyTimeout = ref(false);

const copyIcon = computed(() =>
  isCopyTimeout.value ? "mdiCheck" : "mdiContentCopy",
);

function onClickCopy() {
  if (isCopyTimeout.value) return;

  window.navigator.clipboard.writeText(installCommand);

  isCopyTimeout.value = true;

  const timeout = setTimeout(() => {
    isCopyTimeout.value = false;

    clearTimeout(timeout);
  }, 1200);
}
</script>

<style>
  .typed-cursor {
    font-weight: lighter;
  }

  .typed-cursor.typed-cursor--blink {
    animation: typedjsBlink 1.2s infinite !important;
  }

  @media (min-width: 1024px) {
    .radial-gradient-container {
      background: radial-gradient(
        circle at center,
        rgba(243,244,246) 0%,
        rgba(243,244,246,0.9) 60%,
        rgba(243,244,246,0.8) 65%,
        rgba(243,244,246,0.7) 70%,
        rgba(243,244,246,0.6) 75%,
        rgba(243,244,246,0.5) 80%,
        rgba(243,244,246,0.4) 85%,
        rgba(243,244,246,0.3) 90%,
        rgba(243,244,246,0.2) 95%,
        rgba(243,244,246,0.1) 100%
      )
    }
  }
</style>
