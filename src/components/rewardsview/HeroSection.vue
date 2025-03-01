<script setup>
import { computed, ref } from "vue";
const props = defineProps(["isMobile"]);
const heroUrl = computed(() => {
  return props.isMobile
    ? new URL("@/assets/images/rewards/hero-mobile.jpg", import.meta.url).href
    : new URL("@/assets/images/rewards/hero-desktop.png", import.meta.url).href;
});
</script>

<template>
  <div class="relative z-[-1] bg-[#D4E9E2]">
    <img class="h-full" :src="heroUrl" :alt="heroUrl" />
    <div
      class="absolute flex flex-col gap-5 md:ml-10 max-md:w-full max-md:items-center md:w-1/3 top-10"
    >
      <h2 class="font-semibold lg:text-4xl">FREE COFFEE<br />IS A TAP AWAY</h2>
      <p class="lg:text-2xl">Join now to start earning Rewards.</p>
      <button
        class="cursor-pointer lg:text-2xl border rounded-full py-2 px-5 text-white bg-[#00754A] hover:bg-[#158159]"
      >
        {{ isMobile ? "Join in the app" : "Join Now" }}
      </button>
      <RouterLink class="underline hover:no-underline lg:text-xl" to="/">{{
        isMobile
          ? "Or join online"
          : "Or join in the app for the best experience"
      }}</RouterLink>
    </div>
  </div>
</template>
