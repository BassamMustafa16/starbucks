<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const props = defineProps(["images", "title"]);
const cards = props.images;

const resolveImage = (img) => {
  return new URL(`../../assets/images/gift/${img}`, import.meta.url).href;
};

const isAllVisible = ref(false);
const swiperInstance = ref(null);

const checkVisibility = () => {
  if (swiperInstance.value) {
    const totalSlides = swiperInstance.value.slides.length;
    const visibleSlides = swiperInstance.value.params.slidesPerView;

    isAllVisible.value = totalSlides <= visibleSlides;
  }
};

const onSwiperInit = (swiper) => {
  swiperInstance.value = swiper;
  checkVisibility();
};

const onSlideChange = () => {
  checkVisibility();
};
</script>

<template>
  <div class="w-full flex flex-col gap-3 justify-center px-[8.333vw]">
    <!--Heaading-->
    <div class="flex flex-row justify-between items-center">
      <p class=" text-sm">{{ props.title }}</p>
      <RouterLink v-if="!isAllVisible" to="/" class="text-[#00754a]"
        >See all</RouterLink
      >
    </div>
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
      class="w-full"
      @swiper="onSwiperInit"
      @slideChange="onSlideChange"
      @breakpoint="checkVisibility"
    >
      <swiper-slide class="" v-for="(card, index) in cards" :key="index">
        <div
          class="relative cursor-pointer transition-transform duration-500 ease-in-out md:hover:translate-y-[-10px] md:mt-2.5"
        >
          <img
            :src="resolveImage(card)"
            :alt="card"
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
  background-color: rgba(255, 255, 255, 0.9); /* Background color */
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
  color: rgb(20, 20, 20);
}

.swiper-button-next,
.swiper-button-prev {
  width: 40px;
  aspect-ratio: 1;
}
</style>
