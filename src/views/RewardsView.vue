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
  <div class="mt-10 px-5 text-center flex flex-col gap-10">
    <div>
      <h2 class="font-semibold mb-5">Getting started is easy</h2>
      <p>Earn Stars and get rewarded in a few easy steps.</p>
    </div>
    <ul class="flex flex-col md:flex-row gap-10">
      <li class="flex flex-row md:flex-col md:items-center items-start gap-5">
        <h3
          class="flex items-center justify-center text-[#00754a] border-2 rounded-full text-center aspect-square w-13 font-semibold shrink-0"
        >
          1
        </h3>
        <div class="flex flex-col gap-3">
          <p class="text-left md:text-center font-semibold">
            {{ isMobile ? "Download the Starbucks® app" : "Create an account" }}
          </p>
          <p class="text-left md:text-center">
            <template v-if="isMobile">
              <RouterLink to="/" class="text-[#00754a] underline"
                >Join in the app</RouterLink
              >
              to get access to the full range of Starbucks® Rewards benefits.
              You can also<RouterLink to="/" class="text-[#00754a] underline"
                >join online</RouterLink
              >.
            </template>
            <template v-else>
              To get started,<RouterLink to="/" class="text-[#00754a] underline">join now</RouterLink>. You can
              also <RouterLink to="/" class="text-[#00754a] underline">Join in the app</RouterLink> to get access
              to the full range of Starbucks® Rewards benefits.
            </template>
          </p>
        </div>
      </li>
      <li class="flex flex-row md:flex-col md:items-center items-start gap-5">
        <h3
          class="flex items-center justify-center text-[#00754a] border-2 rounded-full text-center aspect-square w-13 font-semibold shrink-0"
        >
          2
        </h3>
        <div class="flex flex-col gap-3">
          <p class="text-left md:text-center font-semibold">
            Order and pay how you’d like
          </p>
          <p class="text-left md:text-center">
            Use cash, credit/debit card or save some time and pay right through
            the app. You’ll collect Stars all ways.
            <RouterLink to="/" class="text-[#00754a] underline"
              >Learn how</RouterLink
            >
          </p>
        </div>
      </li>
      <li class="flex flex-row md:flex-col md:items-center items-start gap-5">
        <h3
          class="flex items-center justify-center text-[#00754a] border-2 rounded-full text-center aspect-square w-13 font-semibold shrink-0"
        >
          3
        </h3>
        <div class="flex flex-col gap-3">
          <p class="text-left md:text-center font-semibold">
            Earn Stars, get Rewards
          </p>
          <p class="text-left md:text-center">
            As you earn Stars, you can redeem them for Rewards—like free food,
            drinks, and more. Start redeeming with as little as 25 Stars!
          </p>
        </div>
      </li>
    </ul>
  </div>
  <FooterSection />
</template>
