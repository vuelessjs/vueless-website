<template>
  <UCol align="center" class="gap-4 lg:gap-12 mt-20 md:mt-40">
    <UHeader class="font-bold text-4xl lg:text-5xl">Features</UHeader>
    <URow justify="center" align="stretch" gap="2xl" class="flex flex-wrap gap-4 lg:gap-8 lg:grid lg:grid-cols-6">
      <UCard
        :config="{
          wrapper: 'hover:border-gray-300 px-0 pt-0',
          content: 'flex flex-col-reverse md:flex-row md:items-center md:justify-start h-full',
        }"
        class="overflow-hidden relative col-span-4 md:p-8"
      >
        <UText :config="textConfig" class="px-4 md:px-0">
          Limitless
          <ULink
            label="customization"
            color="grayscale"
            href="https://docs.vueless.com/component-customization/general"
            target="_blank"
            underlined
            class="sm:text-xl lg:text-2xl"
          />
          via global or local component configs.
        </UText>
        <img src="../assets/images/config-full.png" alt="config" class="md:hidden w-full block object-cover object-top h-1/2 mb-5" />
        <img
          src="../assets/images/config.png"
          alt="config"
          class="
            h-80 hidden md:block md:absolute md:-top-4 md:-right-12 md:rotate-[7deg]
            lg:h-96 lg:-top-4 lg:-right-28 xl:-right-20
          "
        />
      </UCard>
      <UCard class="col-span-2 md:p-8 hover:border-gray-300">
        <UCol gap="xl" no-mobile class="gap-4 lg:gap-8">
          <div class="flex">
            <UButton
              :size="buttonSize"
              color="grayscale"
              icon="light_mode"
              variant="secondary"
              :config="buttonConfig"
              class="rounded-l-full rounded-r-none border-gray-300 hover:border-gray-400"
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

              color="grayscale"
              href="https://docs.vueless.com/global-customization/dark-mode"
              target="_blank"
              underlined
              class="sm:text-xl lg:text-2xl"
            />
            modes out of the box.
          </UText>
        </UCol>
      </UCard>
    </URow>

    <URow justify="center" align="stretch" gap="2xl" class="flex flex-wrap gap-4 lg:gap-8 lg:grid lg:grid-cols-6">
      <UCard :config="{ content: 'flex flex-col items-start gap-6' }" class="col-span-2 md:p-8 hover:border-gray-300">
        <img src="../assets/svg/paletes.svg" alt="palletes" class="max-h-12" />
        <UText :config="textConfig">
          Brand and gray
          <ULink
            label="color"
            color="grayscale"
            href="https://docs.vueless.com/global-customization/colors"
            target="_blank"
            underlined
            class="sm:text-xl lg:text-2xl"
          />
          palettes with dynamic change.
        </UText>
      </UCard>
      <UCard :config="mainCardConfig" class="col-span-4 md:p-8 overflow-hidden relative">
        <UText :config="textConfig">
          <ULink
            label="Storybook"
            color="grayscale"
            href="https://docs.vueless.com/installation/storybook"
            target="_blank"
            underlined
            class="sm:text-xl lg:text-2xl"
          />
          preset for effortless component styling in isolation.
        </UText>
        <img
          src="../assets/images/storybook-icon.png"
          alt="storybook"
          class="w-12 -mt-5 md:-mt-0 md:hidden -rotate-6 drop-shadow-[0_4px_10px_rgba(255,255,255,0.8)]"
        />
        <img
          src="../assets/images/storybook-bg.png"
          alt="storybook"
          class="
            hidden lg:absolute h-40 top-auto right-0 -mt-16 -ml-6 lg:-ml-0
            md:block lg:h-56 lg:-mt-0 xl:h-56 lg:-right-24 xl:-right-10
          "
        />
      </UCard>
    </URow>

    <URow justify="center" align="stretch" gap="2xl" class="flex flex-wrap gap-4 lg:gap-8 lg:grid lg:grid-cols-6">
      <UCard :config="mainCardConfig" class="overflow-hidden relative col-span-4 md:p-8">
        <UText :config="textConfig">
          Top-notch
          <ULink
            label="TypeScript"
            color="grayscale"
            href="https://www.typescriptlang.org/docs/"
            target="_blank"
            underlined
            class="sm:text-xl lg:text-2xl"
          />
          support with types and tooling assistance.
        </UText>
        <img
          src="../assets/svg/ts-logo.svg"
          alt="typescript"
          class="
            right-5 h-16 md:h-24 lg:h-auto -top-4 lg:-top-1
            -mt-5 md:-mt-10 lg:-mt-0 lg:absolute
          "
        />
      </UCard>
      <UCard class="col-span-2 md:p-8 hover:border-gray-300">
        <UCol justify="between" gap="xl">
          <div class="flex flex-wrap max-md:justify-end gap-2 md:gap-6">
            <span v-for="(icon, index) in filteredIcons" :key="index">
              <UIcon :name="icon" color="green" />
            </span>
          </div>
          <UText :config="textConfig">
            1000+ SVG
            <ULink
              label="icons"
              color="grayscale"
              href="https://docs.vueless.com/svg-icons/general-usage"
              target="_blank"
              underlined
              class="sm:text-xl lg:text-2xl"
            />
            from top icon libraries.
          </UText>
        </UCol>
      </UCard>
    </URow>
  </UCol>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

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
  wrapper: "font-semibold sm:text-xl lg:text-2xl md:basis-1/2",
};

const mainCardConfig = {
  wrapper: "hover:border-gray-300",
  content: "flex flex-col-reverse items-start gap-4 lg:flex-row lg:items-center lg:justify-between h-full",
};

const icons = [
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
];

const buttonSize = computed(() => {
  if (width.value < 640) return "xs";
  if (width.value < 1024) return "md";

  return "lg";
});

const filteredIcons = computed(() => {
  if (width.value < 1280) return icons.slice(0, 8);

  return icons;
});
</script>
