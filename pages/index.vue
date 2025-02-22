<template>
  <div class="content-center justify-self-center relative">
    <div
      class="
        radial-gradient-container flex justify-center w-full rounded-full lg:min-w-[50rem]
        lg:absolute lg:z-10 lg:-translate-x-2/4 lg:-translate-y-2/4 lg:left-2/4 lg:top-2/4
      ">
      <UCol align="center" gap="2xs" class="max-w-[50rem]">
        <span
          class="rounded-full border border-gray-300 px-3 py-1 text-sm font-semibold text-gray-600"
          :class="!vuelessPackage?.version && 'animate-pulse'"
        >
          Vueless UI {{ vuelessPackage?.version || "0.0.XX" }} is out! 🚀
        </span>

        <UHeader size="xl" :config="headerConfig">
          A
            <span class="inline-flex max-h-14 lg:max-h-24 items-center -mx-2 lg:-mx-3 px-2 lg:px-3 py-1 rounded-lg leading-relaxed lg:leading-normal bg-green-500/25"
            >
              UI Library
            </span>
          for
          <br />

          <ClientOnly>
            <Typed :options="options">
              <span class="typing"/>
            </Typed>
          </ClientOnly>

        </UHeader>

        <UText align="center" class="mt-4 whitespace-break-spaces sm:text-base lg:text-lg text-gray-600 font-medium lg:w-[36rem]">
          Endless collection. Limitless customisation. Stressless coding. All the stuff you need for your next Vue.js app.
        </UText>

        <URow align="stretch" justify="center" class="mt-4 lg:mt-11 sm:flex-row">
          <!--
          TODO: Add vue/nuxt switcher
          <UToggle model-value="vue" size="sm" variant="secondary">
            <UToggleItem value="vue">Vue</UToggleItem>
            <UToggleItem value="nuxt">Nuxt</UToggleItem>
          </UToggle>
          -->

          <UInput
            :model-value="installCommand"
            readonly
            class="w-full sm:max-w-[16rem]"
            :config="{input: 'h-[37px]'}"
            @click="onClickCopy"
          >
            <template #right>
              <UIcon
                v-tooltip="`Copy to clipboard`"
                :name="isCopyTimeout ? 'check' : 'content_copy'"
                size="xs"
                color="gray"
                interactive
              />
          </template></UInput>

          <ULink
            href="https://docs.vueless.com"
            target="_blank"
            :config="getStartedLinkConfig"
          >
            <UButton color="grayscale" right-icon="arrow_forward" size="sm" label="Get Started" block />
          </ULink>
        </URow>
      </UCol>
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

const getStartedLinkConfig = {
  linkWithChild: "max-sm:w-full",
}

const installCommand = "npm install vueless";

const { data: vuelessPackage } = await useFetch<VuelessPackage>(
  "https://registry.npmjs.org/vueless/latest", { server: false }
);

const headerConfig = {
  header: "mt-6 text-center font-bold text-slate-900 md:text-5xl lg:text-7xl",
}

const isCopyTimeout = ref(false);

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
