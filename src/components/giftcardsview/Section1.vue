<script setup>
import Slider from "./Slider.vue";
const section1Cards = [
  "card1.png",
  "card2.png",
  "card3.png",
  "card4.png",
  "card5.png",
  "card6.png",
  "card7.png",
  "card8.jpg",
];
</script>
<template>
  <!--Section1-->
  <div class="flex flex-col gap-5">
    <h2 class="font-semibold px-[8.333vw]">Gift Cards</h2>
    <Slider :images="section1Cards" :title="'FEATURED'" />
    <div
      class="flex flex-row gap-5 items-center bg-[#edebe9] px-[8.333vw] py-2 md:py-5 mx-[8.333vw] rounded-xl"
    >
      <img
        src="../../assets/images/gift/group-gift-cards (1).png"
        class="w-15 aspect-square"
      />
      <p class="flex-2 text-sm">
        Effortlessly send up to 10 eGifts per purchase. Select a design to
        start!
      </p>
    </div>
  </div>
</template>
