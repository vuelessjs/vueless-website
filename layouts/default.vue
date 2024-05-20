<template>
  <div class="flex h-screen w-screen flex-col justify-between bg-gray-100">
    <DefaultHeader />

    <div class="mx-auto max-w-7xl px-4">
      <slot />
    </div>

    <DefaultFooter />
  </div>
</template>

<script setup>
import DefaultHeader from "./components/DefaultHeader.vue";
import DefaultFooter from "./components/DefaultFooter.vue";
</script>
