<template>
  <div v-click-outside="() => isShown = false" class="relative">
    <div @mouseenter="isShown = true" @mouseleave="isShown = false" @touchstart.prevent.stop="isShown = true">
      <slot />
    </div>
    <div
      v-show="isShown"
      class="bg-gray-200 text-black text-sm whitespace-nowrap absolute -top-10 p-2 md:-top-16 md:p-4 rounded-2xl left-1/2 transform -translate-x-1/2"
    >
      {{ props.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import vClickOutside from "../directives/vClickOutside.js";

const props = withDefaults(defineProps<{
  text: string;
}>(), {
  text: "Tooltip",
});

const isShown = ref(false);
</script>
