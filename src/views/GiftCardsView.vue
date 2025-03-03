<script setup>
import NavBar from "@/components/common/Navs/NavBar.vue";
import Slider from "@/components/giftcardsview/Slider.vue";
import FooterSection from "@/components/common/Footers/FooterSection.vue";
</script>

<template>
  <NavBar />
  <main class="flex flex-col gap-10 my-10 px-5 md:px-10">
    <h2 class="font-semibold">Gift Cards</h2>
    <Slider />
  </main>
  <FooterSection />
</template>
