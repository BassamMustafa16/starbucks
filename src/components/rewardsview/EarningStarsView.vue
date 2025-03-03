<script setup>
const data = [
  {
    title: "1★ Star per dollar",
    description: "Pay as you go",
    contents: [
      {
        img: "1A.png",
        title: "Scan and pay separately",
        description: "Use cash or credit/debit card at the register.",
      },
      {
        img: "1B.png",
        title: "Save payment in the app",
        description:
          "Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.",
      },
    ],
  },
  {
    title: "2★ Stars per dollar",
    description: "Add funds in the app",
    contents: [
      {
        img: "2A.png",
        title: "Preload",
        description:
          "To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.",
      },
      {
        img: "2B.png",
        title: "Register your gift card",
        description:
          "Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.",
      },
    ],
  },
];

const resolveImage = (img) => {
  return new URL(`../../assets/images/rewards/${img}`, import.meta.url).href;
};
</script>

<template>
  <div
    class="flex flex-col gap-5 items-center mt-10 pt-10 bg-[#F2F0EB] px-5 md:px-10 text-center"
  >
    <h2 class="font-semibold">Cash or card, you earn Stars</h2>
    <p class="md:max-w-150">
      No matter how you pay, you can earn Stars with your morning coffee. Those
      Stars add up to (really delicious) Rewards.
    </p>
    <ul class="flex flex-col text-left gap-10 mt-10 max-w-300">
      <li
        v-for="item in data"
        class="flex flex-col lg:flex-row lg:items-center pb-10 first:border-b border-gray-300"
      >
        <!--Heading---->
        <div class="flex-1">
          <p class="font-semibold">{{ item.title }}</p>
          <p>{{ item.description }}</p>
        </div>
        <div class="flex flex-col md:flex-row gap-5 mt-10 flex-3">
          <!--Content---->
          <div
            v-for="content in item.contents"
            class="flex flex-row gap-5 items-start flex-1"
          >
            <!--Image---->
            <img :src="resolveImage(content.img)" class="w-27" />
            <!--Text-->
            <div class="flex flex-col gap-5">
              <h4 class="font-semibold text-base">{{ content.title }}</h4>
              <p class="text-sm">
                {{ content.description }}
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
