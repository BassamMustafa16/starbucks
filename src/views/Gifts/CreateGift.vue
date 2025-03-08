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
const card = route.query.card;

const giftAmount = ref("");
const recipients = ref([]);
const note = ref("");
const sender = ref({ name: "", email: "", touched: false });

const showData = () => {
  window.alert(`Gift Amount: ${giftAmount.value}
Recipients: ${JSON.stringify(recipients.value)}
Note: ${note.value}
Sender: ${JSON.stringify(sender.value)}`);
};
</script>

<template>
  <NavBar />
  <main
    class="flex flex-col items-center gap-10 px-[8.333vw] mx-auto max-w-150"
  >
    <Section1 :card="card" />
    <GiftAmountSection @giftAmount="(amount) => (giftAmount = amount)" />
    <Recipients @recipients="(data) => (recipients = data)" />
    <NoteSection @personalNote="(data) => (note = data)" />
    <SenderSection @sender="(data) => (sender = data)" />
    <button
      class="fixed bg-[#00754a] py-2 px-6 text-white rounded-full text-lg bottom-10 right-5 z-20"
      @click="showData"
    >
      Checkout ${{
        recipients.length > 0 ? Number(giftAmount) * recipients.length : 0
      }}
    </button>
  </main>
  <FooterSection />
</template>
