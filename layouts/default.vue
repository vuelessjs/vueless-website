<template>
  <div class="h-screen bg-gray-100">
    <img :src="GradientTop" alt="" class="select-none pointer-events-none absolute z-50 top-0 right-0" width="1113" height="1513" />
    <img :src="GradientBottom" alt="" class="select-none pointer-events-none absolute z-50 bottom-0 left-0" width="1400" height="1813" />

    <div v-if="false" class="w-full absolute lg:top-9 top-0 z-10">
      <div class="lg:w-fit w-full mx-auto px-4 py-1 lg:py-2 bg-red-500 text-white text-xs text-center lg:rounded-full">
        We do not recommend to use Vueless UI in production, yet.
      </div>
    </div>

    <div class="absolute -left-5 z-0 top-[45%] -rotate-12 w-[110vw] overflow-hidden whitespace-nowrap">
      <div class="inline-flex animate-rightToLeft">
        <span
          v-for="n in numberOfLess"
          :key="n"
          v-tooltip="getRandomLessText()"
          class="inline-block relative mr-6 text-7xl opacity-10 hover:cursor-default"
        >
          less
        </span>
      </div>
    </div>

    <div class="absolute -left-5 z-0 top-[45%] rotate-12 w-[110vw] overflow-hidden whitespace-nowrap">
      <div class="inline-flex animate-leftToRight">
        <span
          v-for="n in numberOfLess"
          :key="n"
          v-tooltip="getRandomLessText()"
          class="inline-block mr-6 text-7xl opacity-10 hover:cursor-default"
        >
          less
        </span>
      </div>
    </div>

    <div
      class="mx-auto grid h-full max-w-screen-2xl grid-rows-[fit-content(100%),1fr,fit-content(100%)] px-4 sm:px-8"
    >
      <DefaultHeader />

      <slot />

      <DefaultFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import GradientTop from "~/assets/images/gradient-top.png";
import GradientBottom from "~/assets/images/gradient-bottom.png";

const numberOfLess = ref(20);

const lessText = [
  "Less worry, more peace ☮️",
  "Less screen time, more face time 👥",
  "Less chaos, more order ⚖️",
  "Less complexity, more simplicity ✅",
  "Less work, more play 🎮",
  "Less waiting, more action 🚀",
  "Less doubt, more confidence 😎",
  "Less fear, more courage 🦁",
  "Less restriction, more flexibility 🩰",
  "Less gray, more color 🎨",
  "Less data, more insights 💡",
  "Less bugs, more fun 🤩",
  "Less coding, more sex 😏",
  "Less frustration, more joy 😂",
  "Less stress, more calm 😌",
  "Less styling, more style 💃",
  "Less pain, more drive 🔥",
  "Less routine, more creativity 🌈",
  "Less tasks, more family ❤️",
  "Less bondage, more freedom ✊",
  "Less css, more love 💗",
];

const getRandomLessText = () => {
  const randomIndex = Math.floor(Math.random() * lessText.length);

  return lessText[randomIndex];
};
</script>

<style>
.v-popper__popper .v-popper__wrapper {
  transform: rotate(-12deg);
}

.v-popper__popper .v-popper__inner {
  background-color: #E5E7EB;
  color: #111827;
}

.v-popper__arrow-outer {
  visibility: hidden;
}
</style>
