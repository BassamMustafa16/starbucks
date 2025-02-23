<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />

  <div class="flex flex-col md:flex-row items-center w-full border bg-b-light-green h-fit gap-10 md:gap-0">
    <div class="md:w-1/2 border">
      <img src="../assets/images/home/home1.jpg" alt="home1" class="w-full" />
    </div>
    <div
      class="md:w-1/2 flex flex-col justify-center items-center text-white gap-10"
    >
      <h1 class="w-3/4 text-center text-5xl">More reasons to stay awhile</h1>
      <p class="w-3/4 text-center text-xl">
        Mugs, glasses and the condiment bar are back—and all for-here orders
        include freshly brewed refills on coffee and tea.
      </p>
      <button
        class="border rounded-full px-5 py-2 bg-trans text-white hover:bg-b-dark-green cursor-pointer"
      >
        Learn More
      </button>
    </div>
  </div>
</template>

<style scoped></style>
