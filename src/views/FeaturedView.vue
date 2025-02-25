<script setup>
import NavBar from "@/components/common/Navs/NavBar.vue";
import BotNav from "@/components/common/Navs/BotNav.vue";
import Featured1 from "@/components/featuredview/Featured1.vue";
import Featured2 from "@/components/featuredview/Featured2.vue";
import Featured3 from "@/components/featuredview/Featured3.vue";
import Featured4 from "@/components/featuredview/Featured4.vue";
import Featured5 from "@/components/featuredview/Featured5.vue";
import Featured6 from "@/components/featuredview/Featured6.vue";
import Featured7 from "@/components/featuredview/Featured7.vue";
import FooterSection from "@/components/common/Footers/FooterSection.vue";
</script>

<template>
  <NavBar />
  <BotNav />

  <h2 class="text-center my-10 font-semibold text-b-dark-green">
    Handcrafted just for you
  </h2>
  <div class="grid grid-cols-2 gap-5">
    <Featured1 class="col-span-full"/>
    <Featured2 class="col-span-full"/>
    <Featured3 class="max-md:col-span-full"/>
    <Featured4 class="max-md:col-span-full"/>
    <Featured5 class="col-span-full"/>
    <Featured6 class="max-md:col-span-full"/>
    <Featured7 class="max-md:col-span-full"/>
  </div>
  <FooterSection />
</template>
