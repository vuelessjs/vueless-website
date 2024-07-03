<template>
  <div class="content-center justify-self-center">
    <div class="flex max-w-[50rem] flex-col items-center">
      <span
        v-if="vuelessPackage"
        class="rounded-full border border-gray-300 px-3 py-1 text-sm font-semibold text-gray-600"
      >
        Vueless UI {{ vuelessPackage.version }} is out! 🚀
      </span>

      <h1
        class="mt-7 text-center text-5xl font-bold text-slate-900 md:text-[5rem]"
      >
        A
        <span class="md:-mx-4 rounded-lg leading-relaxed md:leading-normal bg-green-200 px-2 py-1 md:px-4 md:py-2"
          >UI Library</span
        >
        for Modern Web Apps
      </h1>
      <p class="mt-4 text-center text-lg text-gray-600">
        Vueless UI simplifies the creation of stunning web applications with its
        huge collection of 60+ fully styled and 100% customisable UI components
        designed for Vue.js
      </p>

      <div class="mt-11 flex flex-col items-center gap-5 sm:flex-row">
        <div
          class="flex items-center gap-1 rounded-[0.25rem] border border-gray-300 bg-white p-2.5"
        >
          <input
            class="w-[21rem] focus-within:outline-none focus:outline-none focus-visible:outline-none"
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
          class="flex items-center justify-center gap-1 rounded-[0.25rem] bg-slate-900 px-[1.125rem] py-3 text-sm text-white max-sm:w-full"
          to="/"
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
