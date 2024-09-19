<template>
  <footer class="pb-3 sm:mt-24 mt-0 sm:pb-6 lg:pb-11">
    <nav class="flex items-center">
      <ul class="text-sm flex items-center justify-center lg:justify-between max-sm:flex-col gap-5 w-full">
        <ul class="flex max-sm:flex-col-reverse items-center gap-3 lg:gap-10 lg:flex-row">
          <li>
            <BaseLink to="https://github.com/vuelessjs/vueless/blob/main/LICENSE">MIT License</BaseLink>
          </li>
          <li>
            <BaseLink to="/">hello@vueless.com</BaseLink>
          </li>
        </ul>
        <ul class="lg:flex gap-10 items-center hidden">
          <li>
            <BaseLink to="https://www.npmjs.com/package/vueless">npm</BaseLink>
          </li>
          <li>
            <BaseLink to="https://github.com/vuelessjs/vueless">GitHub</BaseLink>
          </li>
        </ul>
      </ul>
    </nav>
  </footer>
</template>
