<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import NavBar from "@/components/common/Navs/NavBar.vue";
import Section1 from "@/components/creategiftview/CreateGiftSection1.vue";
import GiftAmountSection from "@/components/creategiftview/GiftAmountSection.vue";
import Recipients from "@/components/creategiftview/RecipientsSection.vue";
import NoteSection from "@/components/creategiftview/NoteSection.vue";
import SenderSection from "@/components/creategiftview/SenderSection.vue";
import FooterSection from "@/components/common/Footers/FooterSection.vue";

const route = useRoute();
const showModal = ref(false);
const closeModal = () => {
  showModal.value = false;
};
const card = route.query.card;

const giftAmount = ref("");
const recipients = ref([]);
const note = ref("");
const sender = ref({ name: "", email: "", touched: false });

const errors = ref([]);

const validateData = () => {
  errors.value = [];

  if (!giftAmount.value) {
    errors.value.push("Please select a gift amount");
  }
  if (giftAmount.value < 5 || giftAmount.value > 100){
    errors.value.push("Gift amount should be between $5 and $100");
  }
  if (recipients.value.length === 0) {
    errors.value.push("Please add at least one recipient");
  }
  if (!sender.value.name || !sender.value.email) {
    errors.value.push("Please fill in the sender's name and email");
  }
  if (!sender.value.valid) {
    errors.value.push("Please enter a valid sender email address");
  }
  recipients.value.forEach((recipient) => {
    if (!recipient.name || !recipient.email) {
      errors.value.push("Please fill in all recipient's name and email");
      return;
    } else if (!recipient.valid) {
      errors.value.push("Please enter a valid recipient email address");
      return;
    }
  });

  if (errors.value.length === 0) {
    showData();
  } else {
    showModal.value = true;
  }
};
const showData = () => {
  window.alert(
    `You're about to send a gift of $${giftAmount.value} to ${
      recipients.value.length
    } recipiants as the follwing details: \n\n${recipients.value
      .map((recipient) => `Recipient: ${recipient.name} - ${recipient.email}`)
      .join("\n")}\n\nPersonal Note: ${note.value}\n\nSender: ${
      sender.value.name
    } - ${sender.value.email}`
  );
};
</script>

<template>
  <NavBar />
  <main
    class="flex flex-col items-center gap-10 max-md:px-[8.333vw] mx-auto max-w-150"
  >
    <Section1 :card="card" />
    <GiftAmountSection @giftAmount="(amount) => (giftAmount = amount)" />
    <Recipients @recipients="(data) => (recipients = data)" />
    <NoteSection @personalNote="(data) => (note = data)" />
    <SenderSection @sender="(data) => (sender = data)" />
    <button
      class="fixed bg-[#00754a] cursor-pointer py-2 lg:py-3 px-6 lg:px-10 text-white rounded-full text-lg md:text-2xl shadow-lg shadow-gray-500 bottom-10 right-5 z-20 transition-all duration-300 ease-in-out active:scale-95"
      @click="validateData"
    >
      Checkout ${{
        recipients.length > 0 ? Number(giftAmount) * recipients.length : 0
      }}
    </button>
  </main>
  <FooterSection />
  <!-- Modal -->
  <div
    v-if="showModal"
    class="fixed inset-0 flex items-center justify-center bg-[#00000090] z-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 class="text-xl font-semibold mb-4">Validation Errors</h2>
      <ul class="list-disc list-inside text-red-500">
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
      <button
        class="mt-4 bg-[#00754a] cursor-pointer text-white py-2 px-4 rounded"
        @click="closeModal"
      >
        Close
      </button>
    </div>
  </div>
</template>
