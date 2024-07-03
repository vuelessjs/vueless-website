<template>
  <header
    class="flex items-center justify-between py-9 pb-4 max-sm:flex-col max-sm:gap-4"
  >
    <div class="flex max-sm:ml-8">
      <img :src="VuelessLogo" width="163" height="64" />
      <div
        class="-mt-1 h-fit rounded-full bg-red-500 px-1.5 py-0.5 text-[0.5rem] font-semibold uppercase text-white"
        v-text="'alfa'"
      />
    </div>

    <nav>
      <ul class="flex items-center gap-10 text-sm">
        <li v-for="(link, idx) in navigationlinks" :key="idx">
          <BaseLink
            class="decoration-gray-800 decoration-dashed underline-offset-2 hover:underline"
            :to="link.href"
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

const navigationlinks = [
  { name: "Docs", href: "https://docs.vueless.com/" },
  { name: "Components", href: "https://ui.vueless.com" },
  { name: "Releases", href: "https://www.npmjs.com/package/vueless?activeTab=versions" },
];
</script>
