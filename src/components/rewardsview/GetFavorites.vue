<script setup>
import { ref, onMounted, nextTick } from "vue";

const activeItem = ref(0);
const listItems = ref([]);
const underlineLeft = ref(0);
const underlineWidth = ref(0);

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
  <div class="max-w-lg mx-auto">
    <h2 class="text-center font-semibold text-lg">Get your favorites for free</h2>

    <!-- List of items -->
    <ul
      id="list"
      class="flex justify-center border-b-2 border-gray-300 relative"
    >
      <li
        v-for="(points, index) in [25, 100, 200, 300, 400]"
        :key="index"
        ref="listItems"
        class="py-4 px-2 text-lg font-semibold cursor-pointer transition-all duration-300"
        :class="activeItem === index ? 'text-black' : 'text-gray-500'"
        @click="changeActive(index)"
      >
        {{ points }}<span class="text-[#cba258]">★</span>
      </li>

      <!-- Moving bottom border -->
      <div
        class="absolute bottom-0 h-[2px] bg-black transition-all duration-300 ease-in-out"
        :style="{ width: `${underlineWidth}px`, left: `${underlineLeft}px` }"
      ></div>
    </ul>
  </div>
</template>
