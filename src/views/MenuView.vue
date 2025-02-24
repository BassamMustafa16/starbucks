<script setup>
import NavBar from "@/components/common/Navs/NavBar.vue";
import { menuCategories } from "@/assets/json/menu.json";

const resolveImg = (img) =>
  new URL(`../assets/images/menu/${img}`, import.meta.url).href;
</script>

<template>
  <NavBar />
  <div class="bg-[#f9f9f9;]">
    <ul class="flex justify-center gap-5 py-5 font-extralight">
      <li><RouterLink to="/">Menu</RouterLink></li>
      <li><RouterLink to="/">Feature</RouterLink></li>
      <li><RouterLink to="/">Previous</RouterLink></li>
      <li><RouterLink to="/">Favorites</RouterLink></li>
    </ul>
  </div>

  <div class="flex flex-col p-5"> 
    <h1 class="text-2xl font-semibold">Menu</h1>
    <div v-for="category in menuCategories">
      <h2 class="text-2xl font-semibold my-5 pb-5 border-b-1 border-gray-500">{{ category.name }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          v-for="subcategory in category.subCategories"
          class="flex flex-row items-center gap-5"
        >
          <img
            class="w-20 h-20 rounded-full"
            :src="resolveImg(subcategory.img)"
            :alt="subcategory.img"
          />
          <h3>{{ subcategory.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
