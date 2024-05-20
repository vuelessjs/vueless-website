<template>
  <div class="w-screen">
    <footer class="mx-auto flex max-w-7xl items-center justify-between px-4 pb-11 pt-3">
      <nav class="flex gap-10">
        <ULink label="MIT License" />
        <ULink label="hello@vueless.com" />
      </nav>
      <nav class="flex gap-10">
        <ULink label="npm" />
        <ULink label="GitHub" />
      </nav>
    </footer>
  </div>
</template>

<script setup>
import ULink from "vueless/ui.button-link";
</script>
