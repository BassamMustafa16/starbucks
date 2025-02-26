<script setup>
  import NavBar from '@/components/common/Navs/NavBar.vue';
  import BotNav from '@/components/common/Navs/BotNav.vue';
  import FooterSection from '@/components/common/Footers/FooterSection.vue';
</script>

<template>
<NavBar />
<BotNav />
  <main class="p-10 flex flex-col gap-5">
    <h2 class="font-semibold">Favorites</h2>
    <div>
      <img src="../../assets/images/menu/fav-tapes.png" class="max-w-50" />
    </div>
    <h3>Save your favorite mixes</h3>
    <p class="text-gray-700">Use the heart to save customizations. Your favorites will appear here to order again.</p>
    <div class="flex flex-row gap-5">
      <RouterLink
        to="/SignInView"
        class="border rounded-full px-5 py-2 hover:bg-b-grey"
        >Sign In</RouterLink
      >
      <RouterLink
        to="/JoinView"
        class="border rounded-full px-5 py-2 bg-black text-white hover:opacity-50"
        >Join Now</RouterLink
      >
    </div>
  </main>
<FooterSection />

</template>