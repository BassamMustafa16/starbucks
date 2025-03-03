<script setup>
import NavBar from "@/components/common/Navs/NavBar.vue";
import Banner from "@/components/rewardsview/Banner.vue";
import HeroSection from "@/components/rewardsview/HeroSection.vue";
import GettingStarted from "@/components/rewardsview/GettingStarted.vue";
import GetFavorites from "@/components/rewardsview/GetFavorites.vue";
import Extras from "@/components/rewardsview/Extras.vue";
import EarningStarsView from "@/components/rewardsview/EarningStarsView.vue";
import FooterSection from "@/components/common/Footers/FooterSection.vue";


import { useResponsive } from "@/composables/useResponsive";

const { isMobile } = useResponsive(768);

</script>

<template>
  <NavBar/>
  <Banner :isMobile="isMobile" />
  <HeroSection :isMobile="isMobile" />
  <GettingStarted :isMobile="isMobile" />
  <GetFavorites />
  <Extras />
  <EarningStarsView />
  <FooterSection />
</template>
