<template>
  <header
    class="flex lg:items-center justify-between pt-6 lg:pt-9 pb-4 pr-0.5 max-h-24"
  >
    <div class="flex">
      <img :src="VuelessLogo" width="163" height="64" alt="Vueless UI" />
      <UBadge
        label="ALFA"
        color="red"
        round
        class="-mt-1 h-fit px-1.5 py-0.5 text-[0.5rem] font-semibold"
      />
    </div>

    <UButton
      color="gray"
      size="xs"
      variant="thirdary"
      no-ring
      class="lg:hidden p-0"
      @click="toggleMenu"
    >
      <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="6" r="1" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    </UButton>

    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black/10 max-md:bg-black/20 backdrop-blur-sm z-30"
      @click="closeMenu"
    />

    <nav
      :class="[
        'lg:block',
        {
          'hidden': !isMenuOpen,
          'absolute top-4 right-4 p-6 w-full max-w-xs rounded-lg shadow-lg bg-white z-30' : isMenuOpen
        }
      ]"
    >
      <ul
        class="flex lg:flex-row flex-col text-sm lg:items-center lg:gap-10 gap-6"
      >
        <li v-for="(link, idx) in navigationLinks" :key="idx" :class="{ 'flex justify-between items-center': idx === 0 }">
          <ULink
            :label="link.name"
            class="text-base"
            :href="link.href"
            @click="isMenuOpen = false"
          />
          <svg
            v-if="idx === 0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="text-gray-700" :class="{ 'hidden': !isMenuOpen }" @click="isMenuOpen = false"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </li>
        <UDivider padding="none" />
        <li v-if="isMenuOpen" class="lg:hidden">
          <ULink
            label="npm"
            href="https://www.npmjs.com/package/vueless"
            @click="isMenuOpen = false"
          />
        </li>
        <li v-if="isMenuOpen" class="lg:hidden">
          <ULink
            label="GitHub"
            href="https://github.com/vuelessjs/vueless"
            @click="isMenuOpen = false"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import VuelessLogo from "~/assets/svg/vueless-logo.svg";

const navigationLinks = [
  { name: "Docs", href: "https://docs.vueless.com" },
  { name: "Components", href: "https://ui.vueless.com" },
  { name: "Releases", href: "https://github.com/vuelessjs/vueless/releases" },
];

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>
