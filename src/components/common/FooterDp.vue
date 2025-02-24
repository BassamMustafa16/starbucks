<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faGreaterThan);

const props = defineProps(['title', 'links']);
const isExpanded = ref(false);
const roteteDeg = ref(90);
const showContent = () => {
  isExpanded.value = !isExpanded.value;
  roteteDeg.value = roteteDeg.value === 90 ? 270 : 90;
};
</script>

<template>
  <div class="">
    <button
      class="flex flex-row items-center justify-between w-full cursor-pointer p-3 font-semibold"
      @click.self="showContent()"
    >
      {{ title }}
      <font-awesome-icon
        :style="{ transform: `rotate(${roteteDeg}deg) scaleX(0.5)` }"
        class="transition-all duration-300"
        :icon="['fas', 'greater-than']"
      />
    </button>

    <!-- Animated Dropdown using Vue Transition -->
    <transition
      name="roll"
      @before-enter="(el) => (el.style.maxHeight = '0px')"
      @enter="
        (el) => {
          el.style.maxHeight = el.scrollHeight + 'px';
        }
      "
      @leave="
        (el) => {
          el.style.maxHeight = '0px';
        }
      "
    >
      <ul v-if="isExpanded" class="overflow-hidden transition-all duration-300">
        <li v-for="link in links" class="p-3">
          <RouterLink to="/" class="block text-gray-600 hover:text-black">
            {{ link }}
          </RouterLink>
        </li>
      </ul>
    </transition>
  </div>
</template>
