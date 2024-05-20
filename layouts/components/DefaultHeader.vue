<template>
  <div class="w-screen">
    <header class="mx-auto flex max-w-7xl items-center justify-between px-4 pb-4 pt-8">
      <div class="flex items-start">
        <img src="/images/vueless-logo.svg" />
        <UBadge :config="badgeConfig" color="red" size="sm" weight="bold" label="ALPHA" />
      </div>
      <nav class="flex gap-10">
        <ULink label="Docs" />
        <ULink label="Components" />
        <ULink label="Releases" />
      </nav>
    </header>
  </div>
</template>

<script setup>
import UBadge from "vueless/ui.text-badge";
import ULink from "vueless/ui.button-link";

const badgeConfig = {
  wrapper: {
    base: "border border-solid rounded-full inline-block !leading-none",
    variants: {
      variant: {
        primary: "bg-red-500 text-white border-transparent",
      },
    },
  },
};
</script>
