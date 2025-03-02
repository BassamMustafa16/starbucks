<script setup>
import { ref, onMounted, nextTick } from "vue";

const activeItem = ref(0);
const listItems = ref([]);
const underlineLeft = ref(0);
const underlineWidth = ref(0);
const rewards = ref([
  // rewards data
  {
    img: "25.png",
    title: "Customize your drink",
    description:
      "Make your drink just right with an extra espresso shot or a dash of your favorite syrup.",
  },
  {
    img: "100.png",
    title:
      "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
    description:
      "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.",
  },
  {
    img: "200.png",
    title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
    description:
      "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.",
  },
  {
    img: "300.png",
    title: "Sandwich, protein box or at-home coffee",
    description:
      "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.",
  },
  {
    img: "400.png",
    title: "Select Starbucks® merchandise",
    description:
      "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.",
  },
]);

// Function to resolve image path
const resolveImage = (img) => {
  return new URL(`../../assets/images/rewards/${img}`, import.meta.url).href;
};

// Function to update the underline position
const updateUnderline = () => {
  if (listItems.value[activeItem.value]) {
    const item = listItems.value[activeItem.value];
    underlineLeft.value = item.offsetLeft; // Position relative to <ul>
    underlineWidth.value = item.offsetWidth; // Match width of <li>
  }
};

// Handle click event
const changeActive = (index) => {
  activeItem.value = index;
  nextTick(updateUnderline); // Update underline after Vue updates DOM
};

// Ensure the underline is positioned correctly after mount
onMounted(() => {
  nextTick(updateUnderline);
});
</script>

<template>
  <div class="flex flex-col bg-[#F1F8F5] mt-10 pt-15">
    <h2 class="text-center font-semibold text-lg mb-5 lg:text-2xl">
      Get your favorites for free
    </h2>

    <!-- List of items -->
    <ul
      id="list"
      class="flex justify-center border-b-2 lg:gap-10 border-gray-300 relative"
    >
      <li
        v-for="(points, index) in [25, 100, 200, 300, 400]"
        :key="index"
        ref="listItems"
        class="py-4 px-2 text-lg font-semibold cursor-pointer transition-all duration-300 lg:text-xl"
        :class="activeItem === index ? 'text-black' : 'text-gray-500'"
        @click="changeActive(index)"
      >
        {{ points }}<span class="text-[#cba258]">★</span>
      </li>

      <!-- Moving bottom border -->
      <div
        class="absolute bottom-0 h-[3px] bg-[#00754a] transition-all duration-300 ease-in-out"
        :style="{ width: `${underlineWidth}px`, left: `${underlineLeft}px` }"
      ></div>
    </ul>

    <div
      class="flex flex-col gap-5 bg-[#D4E9E2] relative h-110 md:h-80 overflow-hidden"
    >
      <transition
        mode="out-in"
        enter-active-class="transition-opacity duration-300 ease-in-out"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-300 ease-in-out"
        leave-to-class="opacity-0"
      >
        <div
          v-if="rewards[activeItem]"
          :key="activeItem"
          class="flex flex-col items-center md:flex-row absolute inset-0 justify-center"
        >
          <!--Image-->
          <div class="max-w-100">
            <img
              :src="resolveImage(rewards[activeItem].img)"
              :alt="rewards[activeItem].title"
              class="w-full object-contain"
            />
          </div>
          <!--Text Content-->
          <div class="flex flex-col gap-5 max-md:items-center px-5 max-w-100">
            <h3 class="font-semibold text-center md:text-left">
              {{ rewards[activeItem].title }}
            </h3>
            <p class="text-center md:text-left whitespace-pre-wrap">
              {{ rewards[activeItem].description }}
            </p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
