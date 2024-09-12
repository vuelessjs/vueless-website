<template>
  <header
    class="flex md:items-center justify-between pt-6 md:pt-9 pb-4 pr-0.5 max-h-24"
  >
    <div class="flex">
      <img :src="VuelessLogo" width="163" height="64" alt="Vueless UI" />
      <div
        class="-mt-1 h-fit rounded-full bg-red-500 px-1.5 py-0.5 text-[0.5rem] font-semibold uppercase text-white"
        v-text="'alfa'"
      />
    </div>

    <button
      class="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none flex items-center justify-center z-50"
      @click="toggleMenu"
    >
      <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="6" r="1" />
        <circle cx="12" cy="18" r="1" />
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
          'absolute top-4 right-4 p-6 w-full max-w-xs rounded-lg shadow-lg bg-white z-30' : isMenuOpen
        }
      ]"
    >
      <ul
        class="flex md:flex-row flex-col text-sm md:items-center md:gap-10 gap-6"
      >
        <li v-for="(link, idx) in navigationLinks" :key="idx" :class="{ 'flex justify-between items-center': idx === 0 }">
          <BaseLink
            class="decoration-gray-800 underline-offset-2 hover:underline block text-base"
            :to="link.href"
            @click="isMenuOpen = false"
          >
            {{ link.name }}
          </BaseLink>
          <svg
            v-if="idx === 0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="text-gray-700" :class="{ 'hidden': !isMenuOpen }" @click="isMenuOpen = false"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </li>
        <li v-if="isMenuOpen" class="md:hidden">
          <BaseLink
            class="decoration-gray-800 pt-6 border-t border-slate-200 underline-offset-2 hover:underline block text-base"
            to="https://www.npmjs.com/package/vueless"
            @click="isMenuOpen = false"
          >
            npm
          </BaseLink>
        </li>
        <li v-if="isMenuOpen" class="md:hidden">
          <BaseLink
            class="decoration-gray-800 underline-offset-2 hover:underline block text-base"
            to="https://github.com/vuelessjs/vueless"
            @click="isMenuOpen = false"
          >
            GitHub
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
