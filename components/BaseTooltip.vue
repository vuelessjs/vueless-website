<template>
  <div class="relative">
    <div class="h-full" @mouseenter="toggle" @mouseleave="toggle">
      <slot />
    </div>
    <div
      v-show="isShown"
      class="bg-gray-200 text-black text-sm whitespace-nowrap absolute -top-9 p-2 md:-top-16 md:p-4 rounded-2xl left-1/2 transform -translate-x-1/2"
    >
      {{ props.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: "Tooltip",
});

const isShown = ref(false)

const toggle = () => {
  isShown.value = !isShown.value
}
</script>
