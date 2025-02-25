<script setup></script>

<template>
  <div class="bg-[#f9f9f9] flex flex-col items-center sticky top-0 bot-nav">
    <ul class="flex justify-center gap-5 py-3 font-extralight">
      <li>
        <RouterLink to="/menu" class="py-2" active-class="border-b"
          >Menu</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/menu/featured" class="py-2" active-class="border-b"
          >Feature</RouterLink
        >
      </li>
      <li><RouterLink to="/">Previous</RouterLink></li>
      <li><RouterLink to="/">Favorites</RouterLink></li>
    </ul>
  </div>
</template>
