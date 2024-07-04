<template>
  <div class="content-center justify-self-center -mt-10">
    <div class="flex max-w-[50rem] flex-col items-center">
      <span
        v-if="vuelessPackage"
        class="rounded-full border border-gray-300 px-3 py-1 text-sm font-semibold text-gray-600"
      >
        Vueless UI {{ vuelessPackage.version }} is out! 🚀
      </span>

      <h1
        class="mt-6 text-center text-5xl font-bold text-slate-900 sm:text-6xl md:text-7xl"
      >
        A
        <span class="md:-mx-3 rounded-lg leading-relaxed md:leading-normal bg-green-500/25 -mx-2 px-2 py-1 md:px-3 md:py-1"
          >UI Library</span
        >
        for Modern Web Apps
      </h1>
      <p class="mt-4 text-center text-sm sm:text-base md:text-lg text-gray-600">
        Vueless UI simplifies the creation of stunning web applications with its
        huge collection of 60+ fully styled and 100% customisable UI components
        designed for Vue.js
      </p>

      <div class="mt-11 flex flex-col items-center w-full sm:w-auto justify-center gap-5 sm:flex-row">
        <div
          class="flex items-center gap-1 rounded w-full sm:w-auto border border-gray-300 bg-white p-2.5"
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
          class="border border-slate-900 flex items-center justify-center gap-1 rounded bg-slate-900 px-[1.125rem] py-2.5 text-sm text-white max-sm:w-full"
          to="https://docs.vueless.com"
        >
          Get Started
          <MdiIcon icon="mdiArrowRight" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface VuelessPackage {
  version: string;
}

const installCommand = "npm install vueless @vueless/plugin-vite";

const { data: vuelessPackage } = await useFetch<VuelessPackage>(
  "https://registry.npmjs.org/vueless/latest",
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
