<template>
  <footer class="pb-3 md:pb-11">
    <nav class="flex items-center">
      <ul class="text-sm flex items-center justify-between max-sm:flex-col gap-5 w-full">
        <ul class="flex flex-col-reverse items-center gap-5 md:gap-10 md:flex-row">
          <li>
            <BaseLink to="https://github.com/vuelessjs/vueless/blob/main/LICENSE">MIT License</BaseLink>
          </li>
          <li>
            <BaseLink to="/">hello@vueless.com</BaseLink>
          </li>
        </ul>
        <ul class="md:flex gap-10 items-center hidden">
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
