<template>
  <header
    class="flex items-center justify-between pt-6 lg:pt-9 pb-4 pr-0.5 max-h-24"
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

    <UIcon v-if="!isMenuOpen" name="menu"  class="lg:hidden" @click="toggleMenu" />

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
            target="_blank"
            @click="isMenuOpen = false"
          />
          <UIcon
            v-if="idx === 0"
            name="close"
            color="gray"
            size="sm"
            :class="!isMenuOpen && 'hidden'"
            @click="isMenuOpen = false"
          />
        </li>
        <UDivider v-if="isMenuOpen" padding="none" />
        <li v-if="isMenuOpen">
          <ULink
            label="npm"
            href="https://www.npmjs.com/package/vueless"
            target="_blank"
            @click="isMenuOpen = false"
          />
        </li>
        <li v-if="isMenuOpen">
          <ULink
            label="GitHub"
            href="https://github.com/vuelessjs/vueless"
            target="_blank"
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
