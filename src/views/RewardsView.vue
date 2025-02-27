<script setup>
import NavBar from "@/components/common/Navs/NavBar.vue";
import FooterSection from "@/components/common/Footers/FooterSection.vue";

import { useResponsive } from "@/composables/useResponsive";
import { computed, ref } from "vue";

const { isMobile } = useResponsive(768);

const heroUrl = computed(() => {
  return isMobile.value
    ? new URL("@/assets/images/rewards/hero-mobile.jpg", import.meta.url).href
    : new URL("@/assets/images/rewards/hero-desktop.png", import.meta.url).href;
});
</script>

<template>
  <NavBar />
  <div
    class="sticky top-0 flex flex-row justify-between text-sm text-white bg-b-dark-green font-semibold py-3 px-5 md:px-10"
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
  <div class="mt-10 px-10 text-center flex flex-col gap-10">
    <div>
      <h2 class="font-semibold">Getting started is easy</h2>
      <p>Earn Stars and get rewarded in a few easy steps.</p>
    </div>
    <ul>
      <li class="flex flex-col items-center">
        <h2
          class="text-b-green border-2 rounded-full aspect-square p-2 font-semibold"
        >
          1
        </h2>
        <h3>Create an account</h3>
        <p class="">
          To get started, <RouterLink to="/"> Join now</RouterLink>. You can
          also <RouterLink to="/">Join in the app</RouterLink> to get access to
          the full range of Starbucks® Rewards benefits.
        </p>
      </li>
    </ul>
  </div>
  <FooterSection />
</template>
