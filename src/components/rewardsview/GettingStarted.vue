<script setup>
const props = defineProps(["isMobile"]);
</script>
<template>
  
  <div class="mt-10 px-10 text-center flex flex-col gap-10">
    <!--Heading-->
    <div>
      <h2 class="font-semibold mb-5">Getting started is easy</h2>
      <p>Earn Stars and get rewarded in a few easy steps.</p>
    </div>
    <!--Numeric List-->
    <ul class="flex flex-col justify-center md:flex-row gap-10">
      <li class="flex flex-row md:flex-col md:items-center items-start gap-5 max-w-100">
        <!--Number---->
        <h3
          class="flex items-center justify-center text-[#00754a] border-2 rounded-full text-center aspect-square w-13 font-semibold shrink-0"
        >
          1
        </h3>
        <!--Text Content-->
        <div class="flex flex-col gap-3">
          <p class="text-left md:text-center font-semibold">
            {{ isMobile ? "Download the Starbucks® app" : "Create an account" }}
          </p>
          <p class="text-left md:text-center">
            <template v-if="isMobile">
              <RouterLink to="/" class="text-[#00754a] underline"
                >Join in the app</RouterLink
              >
              to get access to the full range of Starbucks® Rewards benefits.
              You can also<RouterLink to="/" class="text-[#00754a] underline"
                >join online</RouterLink
              >.
            </template>
            <template v-else>
              To get started,<RouterLink to="/" class="text-[#00754a] underline"
                >join now</RouterLink
              >. You can also
              <RouterLink to="/" class="text-[#00754a] underline"
                >Join in the app</RouterLink
              >
              to get access to the full range of Starbucks® Rewards benefits.
            </template>
          </p>
        </div>
      </li>
      <li class="flex flex-row md:flex-col md:items-center items-start gap-5 max-w-100">
        <h3
          class="flex items-center justify-center text-[#00754a] border-2 rounded-full text-center aspect-square w-13 font-semibold shrink-0"
        >
          2
        </h3>
        <div class="flex flex-col gap-3">
          <p class="text-left md:text-center font-semibold">
            Order and pay how you’d like
          </p>
          <p class="text-left md:text-center">
            Use cash, credit/debit card or save some time and pay right through
            the app. You’ll collect Stars all ways.
            <RouterLink to="/" class="text-[#00754a] underline"
              >Learn how</RouterLink
            >
          </p>
        </div>
      </li>
      <li class="flex flex-row md:flex-col md:items-center items-start gap-5 max-w-100">
        <h3
          class="flex items-center justify-center text-[#00754a] border-2 rounded-full text-center aspect-square w-13 font-semibold shrink-0"
        >
          3
        </h3>
        <div class="flex flex-col gap-3">
          <p class="text-left md:text-center font-semibold">
            Earn Stars, get Rewards
          </p>
          <p class="text-left md:text-center">
            As you earn Stars, you can redeem them for Rewards—like free food,
            drinks, and more. Start redeeming with as little as 25 Stars!
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
