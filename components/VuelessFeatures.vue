<template>
  <UCol align="center" class="gap-12 mt-20 md:mt-40">
    <UHeader class="font-bold text-4xl lg:text-5xl">Features</UHeader>
    <URow justify="center" align="stretch" gap="2xl" class="flex flex-wrap lg:grid lg:grid-cols-6">
      <UCard :config="mainCardConfig" class="overflow-hidden relative col-span-4 md:p-8">
        <UText :config="textConfig">
          Limitless
          <ULink
            label="customization"
            size="lg"
            color="grayscale"
            href="https://docs.vueless.com/component-customization/general"
            underlined
            class="lg:text-2xl"
          />
          via global or local component configs.
        </UText>
        <img src="../assets/images/brackets.png" alt="brackets" class="w-10" />
        <img
          src="../assets/images/config.png"
          alt="config"
          class="
            hidden md:block h-64
            md:absolute md:-right-12 md:-top-4 md:rotate-[7deg]
          "
        />
      </UCard>
      <UCard class="col-span-2 md:p-8 hover:border-gray-300">
        <URow gap="xl" no-mobile class="flex-row-reverse max-md:justify-between max-md:items-center md:flex-col">
          <div class="flex">
            <UButton
              :size="buttonSize"
              color="grayscale"
              icon="light_mode"
              variant="secondary"
              :config="buttonConfig"
              class="rounded-l-full rounded-r-none"
            />
            <UButton
              :size="buttonSize"
              color="grayscale"
              icon="dark_mode"
              :config="buttonConfig"
              class="rounded-l-none rounded-r-full"
            />
          </div>
          <UText :config="textConfig">
            Light and
            <ULink
              label="dark"
              size="lg"
              color="grayscale"
              href="https://docs.vueless.com/global-customization/dark-mode"
              underlined
              class="lg:text-2xl"
            />
            modes out of the box.
          </UText>
        </URow>
      </UCard>
    </URow>

    <URow justify="center" align="stretch" gap="2xl" class="flex flex-wrap lg:grid lg:grid-cols-6">
      <UCard :config="{ content: 'flex flex-col-reverse md:flex-col gap-6' }" class="col-span-2 md:p-8 hover:border-gray-300">
        <img src="../assets/images/palletes.png" alt="palletes" />
        <UText :config="textConfig">
          Brand and gray
          <ULink
            label="color"
            size="lg"
            color="grayscale"
            href="https://docs.vueless.com/global-customization/colors"
            underlined
            class="lg:text-2xl"
          />
          palettes with dynamic change.
        </UText>
      </UCard>
      <UCard :config="mainCardConfig" class="col-span-4 md:p-8 overflow-hidden relative">
        <UText :config="textConfig">
          <ULink
            label="Storybook"
            size="lg"
            color="grayscale"
            href="https://docs.vueless.com/installation/storybook"
            underlined
            class="lg:text-2xl"
          />
          preset for effortless component styling in isolation.
        </UText>
        <img src="../assets/images/storybook-icon.png" alt="storybook" class="w-10 md:w-auto md:block md:absolute z-10 top-[28%] right-[23%] drop-shadow-[0_4px_10px_rgba(255,255,255,0.8)]" />
        <img src="../assets/images/storybook-bg.png" alt="storybook" class="hidden md:block absolute h-52 -right-5 -top-1" />
      </UCard>
    </URow>

    <URow justify="center" align="stretch" gap="2xl" class="flex flex-wrap lg:grid lg:grid-cols-6">
      <UCard :config="mainCardConfig" class="overflow-hidden relative col-span-4 md:p-8">
        <UText :config="textConfig">
          Top-notch
          <ULink
            label="TypeScript"
            size="lg"
            color="grayscale"
            href="https://www.typescriptlang.org/docs/"
            underlined
            class="lg:text-2xl"
          />
          support with types and tooling assistance.
        </UText>
        <img src="../assets/images/ts-logo-mobile.png" alt="typescript" class="w-10 md:hidden" />
        <img src="../assets/images/ts-logo.png" alt="typescript" class="hidden md:block absolute -top-1 right-5" />
      </UCard>
      <UCard class="col-span-2 md:p-8 hover:border-gray-300">
        <URow justify="between" align="center" gap="xl" no-mobile class="flex-row-reverse md:flex-col">
          <ul class="flex flex-wrap gap-2 md:gap-6">
            <li v-for="(icon, index) in icons" :key="index" :class="{ 'max-md:hidden': index > 3 }">
              <UIcon :name="icon" color="green" />
            </li>
          </ul>
          <UText :config="textConfig">
            1000+ SVG
            <ULink
              label="icons"
              size="lg"
              color="grayscale"
              href="https://docs.vueless.com/svg-icons/general-usage"
              underlined
              class="lg:text-2xl"
            />
            from top icon libraries.
          </UText>
        </URow>
      </UCard>
    </URow>
  </UCol>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

const buttonSize = computed(() => {
  if (width.value < 640) return "xs";
  if (width.value < 1024) return "md";

  return "lg";
});

const buttonConfig = {
  centerIcon: {
    defaults: {
      size: {
        lg: "lg",
      },
    },
  },
}

const textConfig = {
  wrapper: {
    base: "font-semibold lg:text-2xl md:basis-1/2",
    variants: {
      size: {
        md: "text-base"
      },
    },
  },
};

const mainCardConfig = {
  wrapper: "hover:border-gray-300",
  content: "flex items-center justify-between h-full",
};

const icons = ref([
  "heart_plus",
  "create_new_folder",
  "bolt",
  "key",
  "download",
  "add_circle",
  "star",
  "settings",
  "check_circle",
  "home",
  "auto_delete",
  "autorenew",
  "auto_stories",
  "signature",
  "bookmark",
  "archive",
]);
</script>
