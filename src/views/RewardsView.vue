<script setup>
import NavBar from "@/components/common/Navs/NavBar.vue";
import FooterSection from "@/components/common/Footers/FooterSection.vue";

import { useResponsive } from "@/composables/useResponsive";

const { isMobile } = useResponsive(768);
</script>

<template>
  <NavBar />
  <div class="sticky top-0 flex flex-row justify-between text-sm text-white bg-b-dark-green font-semibold py-3 px-5 md:px-10">
    <p class="">
      Starbucks® <br v-if="isMobile"> Rewards
    </p>
    <button v-if="isMobile" class="border rounded-full py-2 px-5 bg-transparent">
      Join in the app
    </button>
  </div>
  <div class="relative z-[-1] bg-[#D4E9E2]">
    <img class="h-full" :src="`src/assets/images/rewards/${isMobile ? 'hero-mobile.jpg' : 'hero-desktop.png'}`" >
    <div class="absolute flex flex-col gap-5 md:ml-10 max-md:w-full max-md:items-center md:w-1/3 top-10">
      <h2 class="font-semibold lg:text-4xl">FREE COFFEE<br>IS A TAP AWAY</h2>
      <p class="lg:text-2xl">Join now to start earning Rewards.</p>
      <button class="cursor-pointer lg:text-2xl border rounded-full py-2 px-5 text-white bg-[#00754A] hover:bg-[#158159]">
      {{ isMobile ? 'Join in the app' : 'Join Now'}}
    </button>
    <RouterLink  class="underline hover:no-underline lg:text-xl">{{ isMobile ? 'Or join online' : 'Or join in the app for the best experience'}}</RouterLink>
    </div>
  </div>
  <FooterSection />
</template>
