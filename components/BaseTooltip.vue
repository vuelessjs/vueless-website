<template>
  <div class="relative">
    <div class="h-full" @mouseenter="toggle" @mouseleave="toggle">
      <slot />
    </div>
    <div v-show="isShown" :class="classes">{{ props.text }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string
}

const props = withDefaults(defineProps<Props>(), {
  text: "Tooltip"
})

const isShown = ref(false)

const classes = computed(() => [
  "bg-gray-200",
  "text-black",
  "whitespace-nowrap",
  "absolute",
  "-top-16",
  "p-4",
  "rounded-2xl",
  "left-1/2",
  "transform",
  "-translate-x-1/2"
])

const toggle = () => {
  isShown.value = !isShown.value
}
</script>
