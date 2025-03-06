<script setup>
import NavBar from "@/components/common/Navs/NavBar.vue";
import Section1 from "@/components/giftcardsview/Section1.vue";
import Section2 from "@/components/giftcardsview/Section2.vue";
import Section3 from "@/components/giftcardsview/Section3.vue";
import Section4 from "@/components/giftcardsview/Section4.vue";
import FooterSection from "@/components/common/Footers/FooterSection.vue";


</script>

<template>
  <NavBar />
  <main class="flex flex-col gap-10 my-10">
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
  </main>
  <FooterSection />
</template>
