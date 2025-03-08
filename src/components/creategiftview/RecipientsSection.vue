<script setup>
import { ref, watch } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCircleXmark, faTrashCan);

const emit = defineEmits(["recipients"]);
const recipients = ref([{ name: "", email: "", touched: false }]);

const markTouched = (index) => {
  recipients.value[index].touched = true;
};

const removeRecipient = (index) => {
  recipients.value.splice(index, 1);
};

watch(
  recipients,
  (newValue) => {
    emit("recipients", newValue);
  },
  { deep: true }
);
</script>

<template>
  <div class="flex flex-col gap-7 w-full items-center">
    <h2 class="font-semibold border-b-4 pb-3 border-[#D4E9E2] w-full">
      Who are you gifting to?
    </h2>
    <div
      v-for="(recipient, index) in recipients"
      :key="recipient"
      class="flex flex-col gap-7 w-full"
    >
      <div v-if="recipients.length > 1" class="flex justify-between w-full">
        <p>Recipient {{ index + 1 }}</p>
        <span @click="removeRecipient(index)" class="cursor-pointer"
          ><font-awesome-icon :icon="['far', 'trash-can']"
        /></span>
      </div>

      <div class="group transition-all duration-300 ease-in-out">
        <div class="relative">
          <input
            v-model="recipient.name"
            type="text"
            :class="[
              'peer custom-input',
              recipient.touched ? 'custom-invalid-input' : '',
            ]"
            @blur="markTouched(index)"
            required
          />
          <label
            :class="[
              'custom-label peer-focus:md:text-sm peer-focus:text-xs peer-focus:top-0 -translate-y-1/2',
              recipient.name === ''
                ? ['top-1/2', 'md:text-lg']
                : ['top-0', 'md:text-sm', 'text-xs'],
              recipient.touched ? 'custom-invalid-label' : '',
            ]"
            >* Recipient Name</label
          >
        </div>
        <p
          v-if="recipient.touched"
          :class="recipient.touched ? 'error-message' : ''"
        >
          <font-awesome-icon :icon="['fas', 'circle-xmark']" class="" />
          Please enter the recipient's name.
        </p>
      </div>
      <div class="group transition-all duration-300 ease-in-out">
        <div class="relative">
          <input
            v-model="recipient.email"
            type="email"
            :class="[
              'peer custom-input',
              recipient.touched ? 'custom-invalid-input' : '',
            ]"
            @blur="markTouched(index)"
            required
          />
          <label
            :class="[
              'custom-label peer-focus:md:text-sm peer-focus:text-xs peer-focus:top-0 -translate-y-1/2',
              recipient.email === ''
                ? ['top-1/2', 'md:text-lg']
                : ['top-0', 'md:text-sm', 'text-xs'],
              recipient.touched ? 'custom-invalid-label' : '',
            ]"
            >* Recipient Email</label
          >
        </div>
        <p
          v-if="recipient.touched"
          :class="recipient.touched ? 'error-message' : ''"
        >
          <font-awesome-icon :icon="['fas', 'circle-xmark']" class="" />
          Please enter the recipient's email.
        </p>
      </div>
    </div>
    <p>Maximum of 10 recipients</p>
    <button
      v-if="recipients.length < 10"
      class="bg-black text-white py-1 px-3 rounded-full cursor-pointer"
      @click="
        recipients.length < 10 ? recipients.push({ name: '', email: '' }) : null
      "
    >
      Add another recipient
    </button>
  </div>
</template>
