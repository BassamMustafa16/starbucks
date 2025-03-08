<script setup>
import {ref, watch} from 'vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCircleXmark);

const sender = ref({name: '', email: '', touched: false});
const emit = defineEmits(['sender']);
watch(sender, (newValue) => {
  emit('sender', newValue);
}, {deep: true});
</script>

<template>

<div class="flex flex-col gap-7 w-full items-center">
    <h2 class="font-semibold border-b-4 pb-3 border-[#D4E9E2] w-full">
      From
    </h2>
    <div class="group transition-all duration-300 ease-in-out w-full">
        <div class="relative">
          <input
            v-model="sender.name"
            type="text"
            :class="[
              'peer custom-input',
              sender.touched ? 'custom-invalid-input' : '',
            ]"
            @blur="sender.touched = true"
            required
          />
          <label
            :class="[
              'custom-label peer-focus:md:text-sm peer-focus:text-xs peer-focus:top-0 -translate-y-1/2',
              sender.name === ''
                ? ['top-1/2', 'md:text-lg']
                : ['top-0', 'md:text-sm', 'text-xs'],
              sender.touched ? 'custom-invalid-label' : '',
            ]"
            >* Sender Name</label
          >
        </div>
        <p
          v-if="sender.touched"
          :class="sender.touched ? 'error-message' : ''"
        >
          <font-awesome-icon :icon="['fas', 'circle-xmark']" class="" />
          Please enter the sender's name.
        </p>
      </div>

      <div class="group transition-all duration-300 ease-in-out w-full">
        <div class="relative">
          <input
            v-model="sender.email"
            type="email"
            :class="[
              'peer custom-input',
              sender.touched ? 'custom-invalid-input' : '',
            ]"
            @blur="sender.touched = true"
            required
          />
          <label
            :class="[
              'custom-label peer-focus:md:text-sm peer-focus:text-xs peer-focus:top-0 -translate-y-1/2',
              sender.email === ''
                ? ['top-1/2', 'md:text-lg']
                : ['top-0', 'md:text-sm', 'text-xs'],
              sender.touched ? 'custom-invalid-label' : '',
            ]"
            >* Sender Email</label
          >
        </div>
        <p
          v-if="sender.touched"
          :class="sender.touched ? 'error-message' : ''"
        >
          <font-awesome-icon :icon="['fas', 'circle-xmark']" class="" />
          Please enter the sender's email.
        </p>
      </div>
</div>
</template>
