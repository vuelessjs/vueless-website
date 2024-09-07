<template>
  <div class="h-screen bg-gray-100">
    <img :src="GradientTop" alt="" class="select-none pointer-events-none absolute z-50 top-0 right-0" width="1113" height="1513" />
    <img :src="GradientBottom" alt="" class="select-none pointer-events-none absolute z-50 bottom-0 left-0" width="1400" height="1813" />

    <div v-if="false" class="w-full absolute lg:top-9 top-0 z-10">
      <div class="lg:w-fit w-full mx-auto px-4 py-1 lg:py-2 bg-red-500 text-white text-xs text-center lg:rounded-full">
        We do not recommend to use Vueless UI in production, yet.
      </div>
    </div>

    <div class="absolute z-0 top-[45%] w-[110vw] -rotate-12 whitespace-nowrap">
      <div class="inline-flex gap-6 animate-rightToLeft">
        <ClientOnly>
          <BaseTooltip v-for="(text, index) in lessTexts" :key="`${index}`" :text="text">
            <span class="inline-block relative text-7xl opacity-5 hover:cursor-default hover:opacity-30">
              less
            </span>
          </BaseTooltip>
        </ClientOnly>
      </div>
    </div>

    <div class="absolute z-0 top-[45%] w-[110vw] rotate-12 whitespace-nowrap">
      <div class="inline-flex gap-6 animate-leftToRight">
        <ClientOnly>
          <BaseTooltip v-for="(text, index) in lessTexts" :key="`${index}`" :text="text">
            <span class="inline-block relative text-7xl opacity-5 hover:cursor-default hover:opacity-30">
              less
            </span>
          </BaseTooltip>
        </ClientOnly>
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
];

const numberOfLess = 40;

const lessTexts = ref<string[]>([]);

function generateLessTexts() {
  let shuffled = shuffleArray(lessText);

  const result: string[] = [];

  while (result.length < numberOfLess) {
    if (shuffled.length === 0) {
      shuffled = shuffleArray(lessText);
    }

    result.push(shuffled.pop()!);
  }

  lessTexts.value = result;
}

generateLessTexts();

function shuffleArray(array: string[]): string[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
</script>
