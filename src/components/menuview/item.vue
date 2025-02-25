<script setup>
const props = defineProps(["subcategory"]);
const { name, img } = props.subcategory;
const resolveImg = (img) =>
  new URL(`../../assets/images/menu/${img}`, import.meta.url).href;
</script>

<template>
  <div class="flex flex-row items-center gap-5">
    <img class="w-20 h-20 rounded-full" :src="resolveImg(img)" :alt="img" />
    <h4>{{ name }}</h4>
  </div>
</template>
