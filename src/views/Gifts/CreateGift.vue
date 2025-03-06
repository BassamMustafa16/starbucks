<script setup>
import { useRoute } from "vue-router";
import NavBar from "@/components/common/Navs/NavBar.vue";
import Section1 from "@/components/creategiftview/CreateGiftSection1.vue";
import Section2 from "@/components/creategiftview/CreateGiftSection2.vue";
import FooterSection from "@/components/common/Footers/FooterSection.vue";

const route = useRoute();
const card = route.query.card;
</script>

<template>
  <NavBar />
  <main class="flex flex-col items-center gap-10 px-[8.333vw] mx-auto max-w-150">
    <Section1 :card="card"/>
    <Section2 />
  </main>
  <FooterSection />
</template>
