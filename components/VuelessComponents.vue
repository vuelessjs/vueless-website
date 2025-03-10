<template>
  <UCol align="center" class="gap-4 lg:gap-12">
    <UHeader class="font-bold text-4xl md:text-5xl">Meet our 60+ crafted UI Components</UHeader>
    <div class="grid gap-4 grid-cols-4">
      <div class="grid gap-4 col-span-1">
        <PaymentCard />
        <ActivityTracker />
      </div>
      <div class="grid gap-4 col-span-1">
        <SignupForm />
        <RoleCard />
      </div>
      <div class="grid grid-cols-2 gap-4 col-span-2">
        <ClientsTable />
        <UAlert
          title="Scheduled Maintenance Notice"
          description="
            Our website will be undergoing scheduled maintenance on March 15th from 2:00 AM to 4:00 AM UTC.
            Some features may be temporarily unavailable during this time. We appreciate your patience!
          "
          variant="thirdary"
          color="white"
          bordered
          closable
          class="col-span-2"
        />
        <UCalendar
          v-model="selectedDate"
          class="col-span-1 w-auto shadow-none border-gray-200"
        />
        <CookieSettings class="col-span-1" />
      </div>
    </div>
  </UCol>
</template>

<script setup>
import PaymentCard from "./VuelessExamples/PaymentCard.vue";
import ActivityTracker from "./VuelessExamples/ActivityTracker.vue";
import SignupForm from "./VuelessExamples/SignupForm.vue";
import RoleCard from "./VuelessExamples/RoleCard.vue";
import ClientsTable from "./VuelessExamples/ClientsTable.vue";
import CookieSettings from "./VuelessExamples/CookieSettings.vue";

const selectedDate = ref(new Date())
</script>
