<template>
  <main class="mx-auto flex h-full max-w-4xl flex-col items-center justify-center text-center">
    <UHeader class="max-w-[48.75rem] text-[5rem]" weight="bold">
      <h1>
        <span class="tracking-tight"
          >A <span class="rounded-lg bg-green-200 px-4 py-6">UI Library</span> for</span
        >
        Modern Web Apps
      </h1>
    </UHeader>
    <UText align="center" class="text-gray-900 [&_p]:font-medium" size="lg">
      <p>
        Vueless UI simplifies the creation of stunning web applications with its huge collection of
        60+ fully styled and 100% customisable UI components designed for Vue.js
      </p>
    </UText>

    <div class="mt-11 flex justify-center gap-5">
      <UInput
        size="sm"
        class="w-full max-w-[21rem] shrink-0"
        model-value="npm install vueless @vueless/plugin-vite"
        readonly
      >
        <template #right> hllo </template>
      </UInput>
      <UButton size="sm" label="Get started" />
    </div>
  </main>
</template>

<script setup>
import UInput from "vueless/ui.form-input";
import UButton from "vueless/ui.button";
import UText from "vueless/ui.text-block";
import UHeader from "vueless/ui.text-header";
</script>
