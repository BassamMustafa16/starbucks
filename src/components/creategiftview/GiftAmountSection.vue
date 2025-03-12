<script setup>
import { ref, watch, nextTick } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGreaterThan,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faGreaterThan, faCircleXmark);

const customInputRef = ref(null); // Reference for custom input field

const dpValue = ref(25);
const isCustomAmount = ref(false);
const giftAmount = ref(25);

const emit = defineEmits(["giftAmount"]);
emit("giftAmount", giftAmount.value);

watch(dpValue, async (newValue) => {
  if (newValue === "Custom amount") {
    isCustomAmount.value = true;
    giftAmount.value = ""; // Reset the gift amount
    await nextTick(); // Wait until the DOM updates
    customInputRef.value?.focus(); // Focus the input safely
  } else {
    isCustomAmount.value = false;
    giftAmount.value = newValue;
  }
});

watch(giftAmount, (newValue) => {
  emit("giftAmount", newValue);
});
</script>

<template>
  <div class="flex flex-col gap-7 w-full">
    <h2 class="font-semibold border-b-4 pb-3 border-[#D4E9E2]">Gift amount</h2>

    <!--Select Gift Amount Dp-->
    <div
      class="relative has-focus:border-[#00754a] border border-[#767676] rounded-xl"
    >
      <select
        v-model="dpValue"
        class="peer py-3 md:text-lg px-5 appearance-none w-full outline-none cursor-pointer"
      >
        <option value="10">$10</option>
        <option value="25">$25</option>
        <option value="50">$50</option>
        <option value="100">$100</option>
        <option>Custom amount</option>
      </select>

      <label
        class="peer-focus:text-[#00754A] text-xs md:text-sm text-[#00000094] absolute top-0 left-2 -translate-y-1/2 bg-white px-1"
      >
        * Select gift amount
      </label>

      <!-- Custom Arrow -->
      <p
        class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none rotate-90 scale-x-50"
      >
        <font-awesome-icon
          class="transition-all duration-300 text-[#00754a]"
          :icon="['fas', 'greater-than']"
        />
      </p>
    </div>

    <!--Custom Amount-->
    <transition
      name="roll"
      @before-enter="(el) => (el.style.maxHeight = '0px')"
      @enter="(el) => (el.style.maxHeight = el.scrollHeight + 'px')"
      @before-leave="(el) => (el.style.overflow = 'hidden')"
      @leave="(el) => (el.style.maxHeight = '0px')"
      @after-leave="(el) => (el.style.display = 'none')"
    >
      <div
        v-if="isCustomAmount"
        class="group transition-all duration-300 ease-in-out"
      >
      <!-- Custom Amount Input -->
        <div class="relative">
          <input
            id="custom-amount"
            v-model="giftAmount"
            type="number"
            inputmode="numeric"
            min="5"
            max="100"
            step="1"
            ref="customInputRef"
            class="peer custom-invalid-input custom-input"
            required
          />
          <label
            for="custom-amount"
            :class="[
              'custom-label custom-invalid-label peer-focus:md:text-sm peer-focus:text-xs peer-focus:top-0 -translate-y-1/2',
              giftAmount === ''
                ? ['top-1/2', 'md:text-lg']
                : ['top-0', 'md:text-sm', 'text-xs'],
            ]"
            >* Enter custom dollar amount</label
          >
        </div>
        <!-- Error Message -->
        <p class="error-message">
          <font-awesome-icon :icon="['fas', 'circle-xmark']" class="" />
          Please enter a whole amount between $5 and $100
        </p>
      </div>
    </transition>
  </div>
</template>
