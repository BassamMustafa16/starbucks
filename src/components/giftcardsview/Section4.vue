<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faArrowUpRightFromSquare);
</script>

<template>
  <div class="flex flex-col mt-10">
    <div
      class="bg-[#F9F9F9] flex flex-col px-[8.333vw] md:flex-row gap-5 md:gap-10 py-10 items-center"
    >
      <!--Image-->
      <div class="flex-1">
        <img
          src="../../assets/images/gift/bulk-gift-cards.jpg"
          class="rounded-lg"
        />
      </div>
      <!--Text Content-->
      <div class="flex flex-col gap-5 flex-1">
        <h2>Business gifting — simplified</h2>
        <p class="text-[#686868]">
          Bulk send physical or digital Starbucks Cards to gift, reward,
          incentivize, or show appreciation towards your customers, clients and
          team members. Minimum 15 cards per order.
        </p>
        <button
          class="border rounded-full px-5 py-1 w-fit cursor-pointer hover:bg-[#E0E0E0]"
        >
          Shop now
          <font-awesome-icon
            :icon="['fas', 'arrow-up-right-from-square']"
            class="text-sm"
          />
        </button>
      </div>
    </div>
    <div
      class="px-[8.333vw] py-10 flex flex-col md:flex-row gap-10 bg-[#EDEBE9]"
    >
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-3">
          <h3>About eGift cards</h3>
          <p class="text-sm">
            A Starbucks eGift card (also known as an “eGift”) is a Starbucks
            Gift Card that is purchased and sent digitally.
          </p>
          <p class="text-sm">
            For Senders of an eGift, go to eGift History when signed in to view,
            send, or resend eGifts you’ve purchased — or, to directly contact
            Starbucks eGift Support for help with your order.
          </p>
        </div>
        <div class="flex flex-col gap-3">
          <h3>Questions around eGift cards?</h3>
          <p class="text-sm">
            Check our Frequently Asked Questions — your question might already
            be answered. There, you’ll find answers for all Starbucks Gift Cards
            in general (including eGifts).
          </p>
          <button
            class="hover:bg-[#D5D3D1] border rounded-full px-5 py-1 w-fit cursor-pointer"
          >
            Card FAQs
            <font-awesome-icon
              :icon="['fas', 'arrow-up-right-from-square']"
              class="text-sm"
            />
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <h3>About Starbucks Gift Cards in general</h3>
        <p class="text-sm">
          Starbucks Gift Cards, including eGifts, can be used to pay in a
          Starbucks store or to join Starbucks® Rewards.
        </p>
        <p class="text-sm">
          Register Gift Cards and eGifts to a Starbucks® Rewards account and
          earn 2★ per dollar every time you pay with that card. Those Stars
          quickly add up to free food, drinks, and more!
        </p>
        <button
          class="hover:bg-[#D5D3D1] border rounded-full px-5 py-1 w-fit cursor-pointer"
        >
          Card Terms & Conditions
          <font-awesome-icon
            :icon="['fas', 'arrow-up-right-from-square']"
            class="text-sm"
          />
        </button>
      </div>
    </div>
  </div>
</template>
