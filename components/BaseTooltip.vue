<template>
  <div v-click-outside="onClickOutside" class="relative">
    <div @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @touchstart.prevent.stop="onTouchStart">
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

function onMouseEnter(){
  isShown.value = true
}

function onMouseLeave(){
  isShown.value = false
}

function onTouchStart(){
  isShown.value = true
}

function onClickOutside(){
  isShown.value = false
}
</script>
