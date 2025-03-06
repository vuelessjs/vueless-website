<template>
  <div class="max-md:bg-gradient-to-b from-white to-gray-100 lg:bg-gray-100 min-h-screen">
    <img src="../assets/svg/gradient-top.svg" alt="" class="hidden lg:block select-none pointer-events-none absolute z-50 top-0 right-0" width="800" />
    <img src="../assets/svg/gradient-bottom.svg" alt="" class="hidden lg:block select-none pointer-events-none absolute z-50 bottom-[-300px] left-0" width="800" />

    <div class="relative overflow-hidden">
      <ClientOnly>
        <div class="absolute z-10 w-screen max-h-fit hidden lg:block top-[20%] -rotate-12 whitespace-nowrap">
          <div class="inline-flex gap-6 animate-rightToLeft">
              <BaseTooltip v-for="(text, index) in generatedLessTexts" :key="`${index}`" :text="text">
                <span class="inline-block relative font-medium text-7xl opacity-5 select-none hover:opacity-30">
                  less
                </span>
              </BaseTooltip>
          </div>
        </div>

        <div class="absolute z-10 w-screen max-h-fit bottom-20 sm:bottom-12 lg:top-[20%] lg:rotate-12 whitespace-nowrap">
          <div class="inline-flex gap-6 animate-leftToRight">
              <BaseTooltip v-for="(text, index) in generatedLessTexts" :key="`${index}`" :text="text">
                <span class="inline-block relative font-medium text-4xl lg:text-7xl opacity-5 select-none hover:opacity-30">
                  less
                </span>
              </BaseTooltip>
          </div>
        </div>
      </ClientOnly>

      <div
        class="
          mx-auto min-h-screen max-w-screen-2xl px-4 sm:px-8 flex flex-col justify-between gap-36
        "
      >
        <DefaultHeader />

        <slot />

        <VuelessFeatures />

        <DefaultFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VuelessFeatures from "~/pages/VuelessFeatures.vue";

const lessTexts = [
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

const generatedLessTexts = ref<string[]>([]);

function generateLessTexts() {
  let shuffled = shuffleArray(lessTexts);

  const result: string[] = [];

  while (result.length < lessTexts.length * 2) {
    if (shuffled.length === 0) {
      shuffled = shuffleArray(lessTexts);
    }

    result.push(shuffled.pop()!);
  }

  generatedLessTexts.value = result;
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
