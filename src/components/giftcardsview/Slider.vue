<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const cards = ref([
  {
    img: "card1.png",
    title: "Happy Birthday",
  },
  {
    img: "card2.png",
    title: "Thank You",
  },
  {
    img: "card3.png",
    title: "Congrats",
  },
  {
    img: "card4.png",
    title: "Holiday Special",
  },
  {
    img: "card5.png",
    title: "Holiday Special",
  },
  {
    img: "card6.png",
    title: "Holiday Special",
  },
  {
    img: "card7.png",
    title: "Holiday Special",
  },
  {
    img: "card8.jpg",
    title: "Holiday Special",
  },
]);

const resolveImage = (img) => {
  return new URL(`../../assets/images/gift/${img}`, import.meta.url).href;
};
</script>

<template>
  <div class="w-full flex justify-center">
    <swiper
      :modules="[Navigation]"
      :space-between="20"
      :breakpoints="{
        300: { slidesPerView: 2, slidesPerGroup: 2 }, // Mobile (1 slide)
        768: { slidesPerView: 3, slidesPerGroup: 3 }, // Tablets (2 slides)
        1024: { slidesPerView: 4, slidesPerGroup: 4 }, // Laptops (3 slides)
        1280: { slidesPerView: 5, slidesPerGroup: 5 }, // Large Screens (4 slides)
      }"
      :navigation="{
        disabledClass: 'swiper-button-hidden', // Use this to hide buttons
      }"
      class="w-full overflow-y-visible!"
    >
      <swiper-slide class="" v-for="(card, index) in cards" :key="index">
        <div
          class="relative cursor-pointer transition-transform duration-500 ease-in-out hover:translate-y-[-10px]"
        >
          <img
            :src="resolveImage(card.img)"
            :alt="card.title"
            class="rounded-lg shadow-lg"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
/* Custom navigation button styles */
.swiper-button-next,
.swiper-button-prev {
  background-color: rgba(255, 255, 255, 0.5); /* Background color */
  border-radius: 50%; /* Make it circular */
  width: 40px;
  height: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Shadow effect */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Change arrow color and size */
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 10px;
  font-weight: bold;
  color: rgb(85, 85, 85);
}

.swiper-button-next,
.swiper-button-prev {
  width: 40px;
  aspect-ratio: 1;
}

/* Hover effect */
.swiper-button-next:hover,
.swiper-button-prev:hover {
}

.test-hover {
  transition: transform 0.5s ease-in-out;
}

.test-hover:hover {
  transform: translateY(-10px);
}
</style>
