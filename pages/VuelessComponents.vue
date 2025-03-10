<template>
  <UCol align="center" class="gap-4 lg:gap-12">
    <UHeader class="font-bold text-4xl md:text-5xl">Meet our 60+ crafted UI Components</UHeader>
    <div class="grid gap-4 grid-cols-4 grid-rows-2">
      <div class="grid gap-4 col-span-1 row-span-2">
        <PaymentCard />
        <ActivityTracker />
      </div>
      <div class="grid gap-4 col-span-1 row-span-2">
        <SignupForm class="row-span-3" />
        <RoleCard />
      </div>
      <ClientsTable />
      <UCalendar
        v-model="selectedDate"
        class="col-span-1 ml-8 w-auto"
      />
      <CookieSettings class="col-span-1" />
    </div>
  </UCol>
</template>

<script setup>
const selectedDate = ref(new Date())
</script>
