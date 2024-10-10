<template>
  <footer class="pb-3 sm:mt-24 mt-0 sm:pb-6 lg:pb-11">
    <nav class="flex items-center">
      <ul class="text-sm flex items-center justify-center lg:justify-between max-sm:flex-col gap-5 w-full">
        <ul class="flex max-sm:flex-col-reverse items-center gap-3 lg:gap-10 lg:flex-row">
          <li>
            <ULink
              label="MIT License"
              href="https://github.com/vuelessjs/vueless/blob/main/LICENSE"
            />
          </li>
          <li>
            <ULink
              label="hello@vueless.com"
              href="/"
            />
          </li>
        </ul>
        <ul class="lg:flex gap-10 items-center hidden">
          <li>
            <ULink
              label="npm"
              href="https://www.npmjs.com/package/vueless"
            />
          </li>
          <li>
            <ULink
              label="GitHub"
              href="https://github.com/vuelessjs/vueless"
            />
          </li>
        </ul>
      </ul>
    </nav>
  </footer>
</template>
