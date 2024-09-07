<template>
  <header
    class="flex md:items-center justify-between py-9 pb-4 gap-4 max-h-24"
  >
    <div class="flex">
      <img :src="VuelessLogo" width="163" height="64" alt="Vueless Logo" />
      <div
        class="-mt-1 h-fit rounded-full bg-red-500 px-1.5 py-0.5 text-[0.5rem] font-semibold uppercase text-white"
        v-text="'alfa'"
      />
    </div>

    <button
      class="md:hidden pl-2 pr-4 py-1 text-gray-500 hover:text-gray-700 focus:outline-none flex items-center justify-center z-50"
      @click="toggleMenu"
    >
      <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="6" r="1" />
        <circle cx="12" cy="18" r="1" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>

    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
      @click="closeMenu"
    />

    <nav
      :class="[
        'md:block',
        {
          'hidden': !isMenuOpen,
          'fixed top-6 right-4 p-6 w-full max-w-xs rounded-lg shadow-lg bg-white z-30' : isMenuOpen
        }
      ]"
    >
      <ul
        class="flex md:flex-row flex-col text-sm space-y-6 md:items-center md:gap-10 md:space-y-0"
      >
        <li v-for="(link, idx) in navigationLinks" :key="idx">
          <BaseLink
            class="decoration-gray-800 underline-offset-2 hover:underline block text-base"
            :to="link.href"
            @click="isMenuOpen = false"
          >
            {{ link.name }}
          </BaseLink>
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
