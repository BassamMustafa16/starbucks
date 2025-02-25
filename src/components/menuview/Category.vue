<script setup>
import item from "@/components/menuview/item.vue";
const props = defineProps(["category"]);
const {name, subCategories} = props.category;
</script>

<template>
  <div class="">
    <h2 class="font-semibold my-5 pb-5 border-b-1 border-gray-500">
      {{ name }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <item v-for="item in subCategories" :item="item" />
    </div>
  </div>
</template>
