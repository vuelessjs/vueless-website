<template>
  <div class="content-center justify-self-center relative">
    <div
      class="
        radial-gradient-container flex justify-center w-full rounded-full lg:min-w-[50rem]
        lg:absolute lg:z-10 lg:-translate-x-2/4 lg:-translate-y-2/4 lg:left-2/4 lg:top-2/4
      ">
      <UCol align="center" gap="2xs" class="max-w-[50rem]">
        <UText
          :class="!vuelessPackage?.version && 'animate-pulse'"
          :config="versionTextConfig"
        >
          Vueless UI {{ vuelessPackage?.version || "0.0.XX" }} is out! 🚀
        </UText>

        <UHeader size="xl" :config="headerConfig">
          A
            <UText :config="accentTextConfig" class="text-4xl">
              UI Library
            </UText>
          for
          <br />

          <ClientOnly>
            <Typed :options="options">
              <span class="typing"/>
            </Typed>
          </ClientOnly>

        </UHeader>
        <UText align="center" :config="secondaryTextConfig">
          Endless collection. Limitless customisation. Stressless coding. All the stuff you need for your next Vue.js app.
        </UText>

        <URow align="stretch" :config="wrapperRowConfig">
          <URow align="center" gap="2xs" :config="inputRowConfig">
            <UInput
              readonly
              :config="inputConfig"
              :model-value="installCommand"
            >
              <template #right-icon>
                <MdiIcon
                :icon="copyIcon"
                class="text-gray-500 hover:cursor-pointer"
                @click="onClickCopy"
              />
              </template>
            </UInput>
          </URow>

          <ULink
            label="Get Started"
            href="https://docs.vueless.com"
            :underlined=false
            color="white"
            :config="linkConfig"
          >
            <template #right>
              <MdiIcon icon="mdiArrowRight" color="white" />
            </template>
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

const installCommand = "npm install vueless @vueless/plugin-vite";

const { data: vuelessPackage } = await useFetch<VuelessPackage>(
  "https://registry.npmjs.org/vueless/latest", { server: false }
);

const versionTextConfig = {
  wrapper: "rounded-full border border-gray-300 px-3 py-1 text-sm font-semibold text-gray-600",
}

const headerConfig = {
  header: "mt-6 text-center font-bold text-slate-900 md:text-5xl lg:text-7xl",
}

const accentTextConfig = {
  wrapper: `inline-block lg:-mx-3 rounded-lg leading-relaxed lg:leading-normal bg-green-500/25
  -mx-2 px-2 py-1 lg:px-3 lg:py-3 font-bold text-slate-900 md:text-5xl lg:text-7xl`,
}

const secondaryTextConfig = {
  wrapper: "mt-4 whitespace-break-spaces sm:text-base lg:text-lg text-gray-600",
}

const wrapperRowConfig = {
  wrapper: "mt-4 lg:mt-11 flex-col w-full sm:w-auto sm:flex-row",
}

const inputRowConfig = {
  wrapper: "rounded-lg w-full sm:w-auto border border-gray-300 bg-white p-2.5 pr-0",
}

const inputConfig = {
  wrapper: "border-none p-0 w-full gap-1 focus-within:ring-0 focus-within:ring-offset-0",
  input: "sm:w-80 p-0",
}

const linkConfig = {
  wrapper: `
    border border-slate-900 flex items-center justify-center gap-1 rounded-lg
    bg-slate-900 px-[1.125rem] py-2.5 max-sm:w-full
  `,
}

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
