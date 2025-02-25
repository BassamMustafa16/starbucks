<script setup>
import NavBar from "@/components/common/Navs/NavBar.vue";
import { menuCategories } from "@/assets/json/menu.json";
import Category from "@/components/menuview/Category.vue";
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
  <div class="flex flex-row">
    <div class="hidden lg:block w-1/4 py-5 px-10">
      <div v-for="category in menuCategories">
        <h3>{{category.name}}</h3>
        <RouterLink v-for="subcategory in category.subCategories" class="block text-gray-500 py-3 hover:text-black">{{ subcategory.name }}</RouterLink>
      </div>
    </div>
    <div class="flex flex-col p-5 w-full lg:w-3/4">
      <h1 class="text-2xl font-semibold">Menu</h1>
      <Category v-for="category in menuCategories" :category="category" />
    </div>
  </div>
</template>
