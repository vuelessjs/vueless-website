<template>
  <div class="relative" :data-tooltip-id="id">
    <div @mouseenter="show" @mouseleave="hide" @touchstart="handleTouch">
      <slot />
    </div>
    <div
      v-show="isShown"
      class="tooltip bg-gray-200 text-black text-sm whitespace-nowrap absolute -top-10 p-2 md:-top-16 md:p-4 rounded-2xl left-1/2 transform -translate-x-1/2"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const props = withDefaults(defineProps<{
  text: string;
  id: number;
}>(), {
  text: "Tooltip",
  id: 0,
});

const isShown = ref(false);

function show() {
  isShown.value = true
}

function hide() {
  isShown.value = false
}

function handleTouch(event: TouchEvent) {
  event.preventDefault();
  event.stopPropagation();
  window.dispatchEvent(new CustomEvent("showTooltip", { detail: { id: props.id } }));
}

function handleOutsideInteraction(event: MouseEvent | TouchEvent) {
  const target = event.target as HTMLElement;

  if (!target.closest(`[data-tooltip-id="${props.id}"]`)) {
    hide();
  }
}

function handleShowTooltip(event: CustomEvent) {
  if (event.detail.id === props.id) {
    show();
  } else {
    hide();
  }
}

onMounted(() => {
  document.addEventListener("click", handleOutsideInteraction);
  document.addEventListener("touchstart", handleOutsideInteraction);
  window.addEventListener("showTooltip", handleShowTooltip as EventListener);
});

onUnmounted(() => {
  document.removeEventListener("click", handleOutsideInteraction);
  document.removeEventListener("touchstart", handleOutsideInteraction);
  window.removeEventListener("showTooltip", handleShowTooltip as EventListener);
});
</script>
