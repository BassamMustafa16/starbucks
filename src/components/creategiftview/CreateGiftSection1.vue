<script setup>
const props = defineProps(["card"]);
const resolveImage = (img) => {
  return new URL(`../../assets/images/gift/${img}`, import.meta.url).href;
};
</script>

<template>
  <div class="flex flex-col gap-3 mt-10">
    <p class="text-[#00000094]">Gift / Create eGift</p>
    <h3 class="font-semibold">Create eGift</h3>
    <div>
      <img :src="resolveImage(card)" class="rounded-2xl"/>
    </div>
    <p class="text-sm"><span class="text-[#00754a]">*</span> indicates required field</p>
  </div>
</template>
