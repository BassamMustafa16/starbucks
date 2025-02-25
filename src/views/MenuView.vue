<script setup>
import NavBar from "@/components/common/Navs/NavBar.vue";
import BotNav from "@/components/common/Navs/BotNav.vue";
import { menuCategories } from "@/assets/json/menu.json";
import Category from "@/components/menuview/Category.vue";
import { ref, onMounted, onUnmounted } from "vue";

const botNavHeight = ref(0);

onMounted(() => {
  const nav = document.querySelector(".bot-nav"); // Adjust class if needed
  if (nav) botNavHeight.value = nav.offsetHeight;
});
</script>

<template>
  <NavBar />
  <BotNav />
  <div class="flex flex-row">
    <div
      class="hidden lg:block shadow sticky overflow-auto w-1/4 py-5 px-10"
      :style="{
        top: `${botNavHeight}px`,
        height: `calc(100vh - ${botNavHeight}px)`,
      }"
    >
      <div v-for="category in menuCategories" :key="category.name">
        <h3>{{ category.name }}</h3>
        <RouterLink
          v-for="subcategory in category.subCategories"
          :key="subcategory.name"
          :to="`/${subcategory.name.replace(/\s+/g, '-').toLowerCase()}`"
          class="block text-gray-500 py-3 hover:text-black"
          >{{ subcategory.name }}</RouterLink
        >
      </div>
    </div>
    <div class="flex flex-col p-5 w-full lg:w-3/4">
      <h1 class="text-2xl font-semibold">Menu</h1>
      <Category v-for="category in menuCategories" :category="category" />
    </div>
  </div>
</template>
