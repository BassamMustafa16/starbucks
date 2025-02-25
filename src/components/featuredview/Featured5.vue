<script setup></script>

<template>
  <div class="flex flex-col md:flex-row items-center bg-b-light-green">
    <div class="md:w-1/2">
      <img src="@/assets/images/menu/f5.jpg" class="w-full" />
    </div>
    <div
      class="flex flex-col gap-5 items-center md:w-1/2 p-10 w-full text-b-green"
    >
      <h3 class="text-center font-semibold md:text-2xl">
        Iced Matcha Latte
      </h3>
      <p class="text-center md:text-xl">
        Crafted with premium matcha, custom-sweetened and served with milk over ice.
      </p>
      <RouterLink
        class="text-center px-3 py-1 border rounded-full text-sm hover:bg-[#C3CCB8] md:text-base"
        >Order Now</RouterLink
      >
    </div>
  </div>
</template>
