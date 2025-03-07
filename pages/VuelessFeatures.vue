<template>
  <UCol align="center" class="gap-4 lg:gap-12">
    <UHeader class="font-bold text-4xl md:text-5xl">Features</UHeader>
    <URow justify="center" align="stretch" gap="2xl" class="flex flex-wrap gap-4 lg:gap-8 lg:grid lg:grid-cols-6">
      <UCard
        :config="{
          wrapper: 'hover:border-gray-300 px-0 pt-0 md:min-h-52 overflow-hidden relative col-span-4 md:p-8',
          content: 'flex flex-col-reverse md:flex-row md:items-center md:justify-start h-full',
        }"
      >
        <UText :config="textConfig" class="pl-6 md:px-0">
          Limitless
          <ULink
            label="customization"
            color="grayscale"
            href="https://docs.vueless.com/component-customization/general"
            target="_blank"
            underlined
            class="text-xl md:text-2xl"
          />
          via global or local component configs.
        </UText>
        <img src="../assets/images/config-full.png" alt="config" class="md:hidden w-full block object-cover object-top h-1/2 mb-5" />
        <img
          src="../assets/images/config.png"
          alt="config"
          class="
            h-80 hidden md:block md:absolute md:-top-4 md:-right-12 md:rotate-[7deg]
            lg:h-[23rem] lg:-top-6 lg:-right-28 xl:-right-4
          "
        />
      </UCard>
      <UCard class="col-span-2 sm:p-6 md:p-8 hover:border-gray-300 md:min-h-52">
        <UCol gap="xl" no-mobile class="gap-4 lg:gap-6">
          <div class="flex">
            <UButton
              :size="buttonSize"
              color="grayscale"
              icon="light_mode"
              variant="secondary"
              :config="buttonConfig"
              class="md:pr-4 rounded-l-full rounded-r-none border-gray-300 hover:border-gray-400"
            />
            <UButton
              :size="buttonSize"
              color="grayscale"
              icon="dark_mode"
              :config="buttonConfig"
              class="md:pl-4 rounded-l-none rounded-r-full"
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
              class="text-xl md:text-2xl"
            />
            modes out of the box.
          </UText>
        </UCol>
      </UCard>
    </URow>

    <URow justify="center" align="stretch" gap="2xl" class="flex flex-wrap gap-4 lg:gap-8 lg:grid lg:grid-cols-6">
      <UCard
        :config="{
          wrapper: 'col-span-2 sm:p-6 md:p-8 hover:border-gray-300 md:min-h-52',
          content: 'flex flex-col items-start gap-4'
        }"
      >
        <img src="../assets/svg/paletes.svg" alt="palletes" class="max-h-12" />
        <UText :config="textConfig">
          Brand and gray
          <ULink
            label="color"
            color="grayscale"
            href="https://docs.vueless.com/global-customization/colors"
            target="_blank"
            underlined
            class="text-xl md:text-2xl"
          />
          palettes with dynamic change.
        </UText>
      </UCard>
      <UCard :config="mainCardConfig">
        <UText :config="textConfig">
          <ULink
            label="Storybook"
            color="grayscale"
            href="https://docs.vueless.com/installation/storybook"
            target="_blank"
            underlined
            class="text-xl md:text-2xl"
          />
          preset for effortless component styling in isolation.
        </UText>
        <img
          src="../assets/images/storybook-icon.png"
          alt="storybook"
          class="w-16 md:hidden drop-shadow-[0_4px_10px_rgba(255,255,255,0.8)]"
        />
        <img
          src="../assets/images/storybook-bg.png"
          alt="storybook"
          class="
            hidden md:absolute top-auto right-0 -mt-16 -ml-6 md:-ml-0
            md:block md:-mt-0 md:-right-8 xl:-right-2
          "
        />
      </UCard>
    </URow>

    <URow justify="center" align="stretch" gap="2xl" class="flex flex-wrap gap-4 lg:gap-8 lg:grid lg:grid-cols-6">
      <UCard :config="mainCardConfig">
        <UText :config="textConfig">
          Top-notch
          <ULink
            label="TypeScript"
            color="grayscale"
            href="https://www.typescriptlang.org/docs/"
            target="_blank"
            underlined
            class="text-xl md:text-2xl"
          />
          support with types and tooling assistance.
        </UText>
        <img
          src="../assets/svg/ts-logo-mobile.svg"
          alt="typescript"
          class="md:hidden max-h-16"
        />
        <img
          src="../assets/svg/ts-logo.svg"
          alt="typescript"
          class="
            hidden md:block right-5 h-16 sm:h-24 md:h-auto -top-4 md:-top-1
            sm:-mt-8 md:-mt-0 md:absolute
          "
        />
      </UCard>
      <UCard class="col-span-2 sm:p-6 md:p-8 hover:border-gray-300 md:min-h-52">
        <UCol justify="between">
          <div class="flex flex-wrap max-md:justify-end gap-2 md:gap-6">
            <UIcon
              v-for="(item, index) in filteredIcons"
              :key="index"
              :name="item.icon"
              color="green"
            />
          </div>
          <UText :config="textConfig">
            1000+ SVG
            <ULink
              label="icons"
              color="grayscale"
              href="https://docs.vueless.com/svg-icons/general-usage"
              target="_blank"
              underlined
              class="text-xl md:text-2xl"
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
  wrapper: "font-semibold !text-xl md:!text-2xl md:basis-[39%]",
};

const mainCardConfig = {
  wrapper: "hover:border-gray-300 overflow-hidden relative col-span-4 sm:p-6 md:p-8 md:min-h-52",
  content: "flex gap-4 flex-row items-center justify-between h-full",
};

const icons = [
  { icon: "heart_plus" },
  { icon: "create_new_folder" },
  { icon: "bolt" },
  { icon: "key" },
  { icon: "download" },
  { icon: "add_circle" },
  { icon: "star" },
  { icon: "settings" },
  { icon: "check_circle" },
  { icon: "home" },
  { icon: "auto_delete" },
  { icon: "autorenew" },
  { icon: "auto_stories" },
  { icon: "signature" },
  { icon: "bookmark" },
  { icon: "archive" },
];

const buttonSize = computed(() => {
  if (width.value < 640) return "xs";

  return "lg";
});

const filteredIcons = computed(() => {
  if (width.value < 640) return icons.slice(0, 8);

  return icons;
});
</script>
