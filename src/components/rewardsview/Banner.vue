<script setup>
const props = defineProps(["isMobile"]);
</script>

<template>
  <div
    class="sticky top-0 flex flex-row justify-between text-sm text-white bg-b-dark-green font-semibold py-3 px-5 md:px-10 z-10"
  >
    <p class="">
      Starbucks® <br v-if="isMobile" />
      Rewards
    </p>
    <button
      v-if="isMobile"
      class="border rounded-full py-2 px-5 bg-transparent"
    >
      Join in the app
    </button>
  </div>
</template>
