<script setup>
import NavBar from "@/components/common/NavBar.vue";
import HomeSection1 from "@/components/homeview/HomeSection1.vue";
import HomeSection2 from "@/components/homeview/HomeSection2.vue";
import HomeSection3 from "@/components/homeview/HomeSection3.vue";
import HomeSection4 from "@/components/homeview/HomeSection4.vue";
import FooterSection from "@/components/common/FooterSection.vue";
</script>

<template>
  <NavBar />
  <main class="flex flex-col items-center gap-10">
    <HomeSection1 />
    <HomeSection2 />
    <HomeSection3 />
    <HomeSection4 />
  </main>
  <FooterSection />
</template>

<style scoped></style>
