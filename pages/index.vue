<template>
  <div class="content-center justify-self-center -mt-10 relative">
    <div class="radial-gradient-container absolute z-10 w-full rounded-full md:min-w-[50rem] -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
      <div class="flex flex-col items-center max-w-[50rem]">
        <span
          class="rounded-full border border-gray-300 px-3 py-1 text-sm font-semibold text-gray-600"
          :class="!vuelessPackage?.version && 'animate-pulse'"
        >
          Vueless UI {{ vuelessPackage?.version || "0.0.XX" }} is out! 🚀
        </span>

        <h1
          class="mt-6 text-center text-4xl font-bold text-slate-900 sm:text-6xl md:text-7xl"
        >
          A
          <span class="md:-mx-3 rounded-lg leading-relaxed md:leading-normal bg-green-500/25 -mx-2 px-2 py-1 md:px-3 md:py-1"
            >UI Library</span
          >
          for
          <br />
          <Typed :options="options">
            <span class="typing"/>
          </Typed>
        </h1>
        <p class="mt-4 text-center text-sm whitespace-break-spaces sm:text-base md:text-lg text-gray-600">
          Endless collection. Limitless customisation. Stressless coding.
        </p>
        <p class="text-center text-sm sm:text-base md:text-lg text-gray-600">
          All the stuff you need for your next Vue.js app.
        </p>

        <div class="mt-11 flex flex-col items-center w-full sm:w-auto justify-center gap-4 sm:flex-row">
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

const options: TypedOptions = {
  strings: ["Flawless Devs", "Boundless Ideas", "Effortless Coding"],
  loop: true,
  typeSpeed: 100,
  startDelay: 100,
  backSpeed: 50,
  backDelay: 2000,
};

useSeoMeta({
  title: "Tailwind based UI Library for Modern Web Apps | Vueless UI",
  //ogTitle: "My Amazing Site",
  // eslint-disable-next-line vue/max-len
  description: "Vueless UI simplifies the creation of stunning web applications with its huge collection of 60+ fully styled and 100% customisable UI components designed for Vue.js",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  //ogImage: "https://example.com/image.png",
  //twitterCard: "summary_large_image",
})

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
</style>
