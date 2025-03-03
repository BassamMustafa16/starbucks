<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faArrowUpRightFromSquare);

const data = [
  {
    img: "delta-skymiles.png",
    anchor: "Link your Delta SkyMiles®",
    href: "https://www.deltastarbucks.com/content/starbucks/en/overview.html?mkcpgn=dipd-sbux7042",
    text: " and Starbucks® Rewards accounts to earn miles on Starbucks Card     reloads of $25 or more, plus Double Stars on travel days.",
  },
  {
    img: "bank-of-america.png",
    anchor: "Link your Bank of America",
    href: "https://promotions.bankofamerica.com/starbucks?cm_mmc=ESZ-EnterpriseSales-_-Cobrand_Site-_-ES35LT0004_StarbucksRewardsModuleBofA_SRModuleBofA-_-StarbucksPartnerMktg",
    text: "eligible card and Starbucks® Rewards account to earn 2% Cash Back and Bonus Stars on qualifying Starbucks in-app purchases.",
  },
  {
    img: "marriott-logo.png",
    anchor: "Link your Marriott Bonvoy®",
    href: "https://www.starbucks.com/rewards/partnerships/marriottbonvoy",
    text: "and Starbucks® Rewards accounts to earn Double Stars during eligible stays, points during any Marriott Bonvoy Week and more.",
  },
];

const resolveImage = (img) => {
  return new URL(`../../assets/images/rewards/${img}`, import.meta.url).href;
};
</script>

<template>
  <div
    class="relative bg-cover bg-origin-border md:p-10 mt-10"
    :style="{ backgroundImage: `url(${resolveImage('background.png')})` }"
  >
    <div
      class="flex flex-col gap-5 items-center py-10 bg-[#D4E9E2] px-5 md:px-10 text-center"
    >
      <h2 class="font-semibold">Keep the Rewards Coming</h2>
      <p class="md:max-w-150">
        The Rewards don't stop at your morning coffee. Join Starbucks® Rewards
        and unlock perks from our partners, all while earning more Stars.
      </p>
      <ul class="flex flex-col md:flex-row text-left gap-10 mt-10">
        <li
          v-for="(item, index) in data"
          class="flex flex-row md:flex-col items-center gap-5"
        >
          <img
            :src="resolveImage(item.img)"
            :alt="item.img"
            class="w-25 lg:w-40"
          />

          <div class="md:text-center">
            <a
              :href="item.href"
              target="_blank"
              class="text-sm lg:text-base text-[#006241] underline underline-offset-2"
              >{{ item.anchor }}
              <font-awesome-icon
                :icon="['fas', 'arrow-up-right-from-square']"
                class=""
            /></a>

            <p class="text-sm lg:text-base">
              {{ item.text }}<sup>{{ index + 1 }}</sup>
            </p>
          </div>
        </li>
      </ul>
      <RouterLink
        to="/"
        class="border rounded-full px-5 py-2 bg-[#00754A] text-white hover:opacity-50 mt-10"
        >Join Starbucks® Rewards</RouterLink
      >
    </div>
  </div>
</template>
