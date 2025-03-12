<script setup>
import { ref, watch } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCircleXmark, faTrashCan);

const emit = defineEmits(["recipients"]);

const inputEmails = ref([]);
const recipients = ref([{ name: "", email: "", touched: false, valid: false }]);

const markTouched = (index) => {
  recipients.value[index].touched = true;
};

const validateEmail = (index) => {
  const email = recipients.value[index].email;
  recipients.value[index].valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  markTouched(index);
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

    <transition-group name="fade" tag="div" class="flex flex-col gap-7 w-full">
      <div
        v-for="(recipient, index) in recipients"
        :key="`recipient-${index}`"
        class="flex flex-col gap-7 w-full"
      >
        <div v-if="recipients.length > 1" class="flex justify-between w-full">
          <p>Recipient {{ index + 1 }}</p>
          <span @click="removeRecipient(index)" class="cursor-pointer"
            ><font-awesome-icon :icon="['far', 'trash-can']"
          /></span>
        </div>
        <!-- Name Input -->
        <div class="group transition-all duration-300 ease-in-out">
          <div class="relative">
            <input
              v-model="recipient.name"
              type="text"
              :id="'recipient-name-' + index"
              :class="[
                'peer custom-input',
                recipient.touched ? 'custom-invalid-input' : '',
              ]"
              @blur="markTouched(index)"
              required
            />
            <label
              :for="'recipient-name-' + index"
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
        <!-- Email Input -->
        <div class="group transition-all duration-300 ease-in-out">
          <div class="relative">
            <input
              v-model="recipient.email"
              type="email"
              :id="'recipient-email-' + index"
              :class="[
                'peer custom-input',
                recipient.touched ? 'custom-invalid-input' : '',
              ]"
              @blur="validateEmail(index)"
              required
            />
            <label
              :for="'recipient-email-' + index"
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
    </transition-group>
    <p>Maximum of 10 recipients</p>
    <button
      v-if="recipients.length < 10"
      class="bg-black text-white py-1 px-3 rounded-full cursor-pointer"
      @click="
        recipients.length < 10
          ? recipients.push({
              name: '',
              email: '',
              touched: false,
              valid: false,
            })
          : null
      "
    >
      Add another recipient
    </button>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
