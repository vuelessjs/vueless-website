<template>
  <UCol align="center" class="gap-4 lg:gap-12">
    <UHeader class="font-bold text-4xl sm:text-5xl">Features</UHeader>
    <URow justify="center" align="stretch" gap="2xl" class="flex flex-wrap gap-4 lg:gap-8 lg:grid lg:grid-cols-6">
      <UCard
        :config="{
          wrapper: 'hover:border-gray-300 md:min-h-52 max-sm:min-h-60 overflow-hidden relative col-span-4 !p-8',
          content: 'flex flex-row items-center justify-start h-full',
        }"
      >
        <UText :config="textConfig">
          Limitless
          <ULink
            label="customization"
            color="grayscale"
            href="https://docs.vueless.com/component-customization/general"
            target="_blank"
            underlined
            class="text-2xl"
          />
          via global or local component configs.
        </UText>
        <img
          src="../assets/images/config.png"
          alt="config"
          class="
            h-80 absolute -top-4 max-[500px]:-right-52 -right-32 sm:-right-12 rotate-[7deg]
            lg:h-[23rem] lg:-top-6 lg:-right-28 xl:-right-4
          "
        />
      </UCard>
      <UCard class="col-span-2 !p-8 hover:border-gray-300 md:min-h-52 max-sm:min-h-60">
        <UCol gap="xl" no-mobile class="gap-4 lg:gap-6">
          <div class="flex">
            <UButton
              size="lg"
              color="grayscale"
              icon="light_mode"
              variant="secondary"
              :config="buttonConfig"
              class="pr-4 rounded-l-full rounded-r-none border-gray-300 hover:border-gray-400"
            />
            <UButton
              size="lg"
              color="grayscale"
              icon="dark_mode"
              :config="buttonConfig"
              class="pl-4 rounded-l-none rounded-r-full"
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
              class="text-2xl"
            />
            modes out of the box.
          </UText>
        </UCol>
      </UCard>
    </URow>

    <URow justify="center" align="stretch" gap="2xl" class="flex flex-wrap gap-4 lg:gap-8 lg:grid lg:grid-cols-6">
      <UCard
        :config="{
          wrapper: 'col-span-2 !p-8 hover:border-gray-300 md:min-h-52 max-sm:min-h-60',
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
            class="text-2xl"
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
            class="text-2xl"
          />
          preset for effortless component styling in isolation.
        </UText>
        <img
          src="../assets/images/storybook-bg.png"
          alt="storybook"
          class="absolute top-auto max-[450px]:-right-40 -right-20 sm:right-0 h-80 xl:h-96 xl:-right-2"
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
            class="text-2xl"
          />
          support with types and tooling assistance.
        </UText>
        <img
          src="../assets/svg/ts-logo.svg"
          alt="typescript"
          class="max-sm:max-w-[40%] absolute top-0 right-4 sm:top-0 sm:right-8"
        />
      </UCard>
      <UCard class="col-span-2 !p-8 hover:border-gray-300 md:min-h-52">
        <UCol justify="between">
          <div class="flex flex-wrap max-h-[72px] gap-6 overflow-hidden">
            <UIcon
              v-for="(icon, index) in icons"
              :key="index"
              :name="icon.icon"
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
              class="text-2xl"
            />
            from top icon libraries.
          </UText>
        </UCol>
      </UCard>
    </URow>
  </UCol>
</template>

<script setup>
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
  wrapper: "font-semibold !text-2xl basis-[40%]"
};

const mainCardConfig = {
  wrapper: "hover:border-gray-300 overflow-hidden relative col-span-4 sm:p-6 !p-8 md:min-h-52 max-sm:min-h-60",
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
</script>
