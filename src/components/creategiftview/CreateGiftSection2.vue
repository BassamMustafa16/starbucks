<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faGreaterThan);
const giftAmount = ref("25");
</script>

<template>
  <div class="flex flex-col gap-5 w-full">
    <h2 class="font-semibold border-b-4 border-[#D4E9E2]">Gift amount</h2>

    <fieldset
      class="group relative focus-within:bg-[#F1F8F6] has-focus:border-[#00754a] border border-[#767676] rounded-xl"
    >
      <legend
        class="group-has-focus:text-[#00754A] text-sm ml-3 text-[#00000094]"
      >
        <span class="text-[#00754a]">*</span> Select gift amount
      </legend>
      <select
        class="py-2 px-5 appearance-none w-full outline-none cursor-pointer"
      >
        <option value="10">$10</option>
        <option value="25">$25</option>
        <option value="50">$50</option>
        <option value="100">$100</option>
        <option>Custom amount</option>
      </select>

      <!-- Custom Arrow -->
      <p
        class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none rotate-90 scale-x-50 border"
      >
        <font-awesome-icon
          class="transition-all duration-300 text-[#00754a]"
          :icon="['fas', 'greater-than']"
        />
      </p>
    </fieldset>
    <div>
      <input type="number" class="border border-[#767676] rounded-xl" />
    </div>
  </div>
</template>
