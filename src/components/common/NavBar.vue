<script setup>
import MobileNavBar from "./MobileNavBar.vue";
import LaptopNavBar from "./LaptopNavBar.vue";

import { ref, onMounted, onUnmounted } from "vue";

const isMobile = ref(window.innerWidth < 1024);
const updateScreenWidth = () => {
  isMobile.value = window.innerWidth < 1024;
};
onMounted(() => {
  window.addEventListener("resize", updateScreenWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", updateScreenWidth);
});
</script>

<template>

  <MobileNavBar v-if="isMobile" />
  <LaptopNavBar v-else />
</template>
