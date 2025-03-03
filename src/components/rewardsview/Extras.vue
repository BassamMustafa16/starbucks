<script setup>
const data = [
  {
    img: "1-fun-freebies.jpg",
    title: "Fun freebies",
    description:
      "Not only can you earn free food, drinks and more, look forward to a birthday treat on us.",
  },
  {
    img: "2-order-and-pay-ahead.jpg",
    title: "Order & pay ahead",
    description:
      "Master the art of ordering ahead with saved favorites and payment methods.",
  },
  {
    img: "3-get-to-free-faster.jpg",
    title: "Get to free faster",
    description:
      "Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.",
  },
];

const resolveImg = (img) => {
  return new URL(`../../assets/images/rewards/${img}`, import.meta.url).href;
};
</script>

<template>
  <div class="flex flex-col gap-10 px-5 md:px-10 items-center mt-20 text-center">
    <div class="flex flex-col gap-5 max-w-150">
      <h2 class="font-semibold">Endless Extras</h2>
      <p>
        Joining Starbucks® Rewards means unlocking access to benefits like quick
        and easy ordering, tasty Rewards and—yes, free coffee.
      </p>
    </div>
    <div class="flex flex-col md:flex-row gap-10">
      <div
        v-for="item in data"
        class="flex flex-row md:flex-col md:text-center gap-5 text-left items-start md:items-center max-w-100 flex-1"
      >
      <!--Image-->
        <RouterLink to="/">
          <div class="h-25 aspect-square md:h-40 rounded-full">
            <img :src="resolveImg(item.img)" />
          </div>
        </RouterLink>
        <!--Text Content-->
        <div class="flex flex-col gap-5">
          <p class="font-semibold">{{ item.title }}</p>
          <p class="">
            {{ item.description }}
          </p>
          <RouterLink to="/" class="text-[#006241] underline underline-offset-2"
            >Learn more</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
