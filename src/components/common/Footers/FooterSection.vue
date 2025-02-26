<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import FooterDp from "./FooterDp.vue";
import FooterCols from "./FooterCols.vue";
import { useResponsive } from "@/composables/useResponsive";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSpotify,
  faFacebook,
  faPinterest,
  faInstagram,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faSpotify,
  faFacebook,
  faPinterest,
  faInstagram,
  faYoutube,
  faXTwitter
);

const DropdownMenus = [
  {
    title: "About Us",
    links: [
      "Our Company",
      "Our Coffee",
      "About Starbucks",
      "Starbucks Archive",
      "Investor Relations",
      "Customer Service",
      "Contact Us",
    ],
  },
  {
    title: "Careers",
    links: [
      "Culture and Values",
      "Belonging at Starbucks",
      "College Achievement Plan",
      "Alumni Community",
      "U.S. Careers",
      "International Careers",
    ],
  },
  {
    title: "Social Impact",
    links: [
      "Communities",
      "Starbucks Foundation",
      "Sustainability",
      "Environmental and Social Impact Reporting",
    ],
  },
  {
    title: "For Business Partners",
    links: [
      "Landlord Support Center",
      "Suppliers",
      "Corporate Gift Card Sales",
      "Office and Foodservice faCoffee",
    ],
  },
  {
    title: "Order and Pick Up",
    links: [
      "Order on the App",
      "Order on the Web",
      "Delivery",
      "Order and Pick Up Options",
      "Explore and Find Coffee for Home",
    ],
  },
];
const socialMediaIcons = [
  {
    icon: ["fab", "spotify"],
    link: "#",
  },
  {
    icon: ["fab", "facebook"],
    link: "#",
  },
  {
    icon: ["fab", "pinterest"],
    link: "#",
  },
  {
    icon: ["fab", "instagram"],
    link: "#",
  },
  {
    icon: ["fab", "youtube"],
    link: "#",
  },
  {
    icon: ["fab", "x-twitter"],
    link: "#",
  },
];
const attachments = [
  "Privacy Notice",
  "Consumer Health Privacy Notice",
  "Terms of Use",
  "Do Not Share My Personal Information",
  "CA Supply Chain Act",
  "Accessibility",
  "Cookie Preferences",
];

const { isMobile } = useResponsive();
</script>

<template>
  <footer class="flex flex-col p-10 shadow-lg border-t-2 border-gray-300 shadow-black mt-10">
    <div class="flex flex-col lg:flex-row lg:justify-between">
      <FooterDp
        v-if="isMobile"
        v-for="menu in DropdownMenus"
        :title="menu.title"
        :links="menu.links"
      />
      <FooterCols
        v-if="!isMobile"
        v-for="menu in DropdownMenus"
        :title="menu.title"
        :links="menu.links"
        class="w-1/6"
      />
    </div>
    <hr class="text-gray-300 my-5" />
    <div class="flex flex-col gap-5 mt-5">
      <div class="flex justify-center items-center space-x-4 text-2xl md:text-3xl">
        <a
          v-for="item in socialMediaIcons"
          :href="item.link"
          class="w-10 md:w-15 h-10 md:h-15 flex justify-center items-center rounded-full bg-white text-black hover:bg-[#E9E9E9] transition-all duration-300"
        >
          <font-awesome-icon :icon="item.icon" />
        </a>
      </div>
      <div>
        <RouterLink
          v-for="attachment in attachments"
          to="/"
          class="py-3 block hover:underline"
          >{{ attachment }}</RouterLink
        >
      </div>
    </div>
    <p class="text-gray-600 mt-10">© 2025 Starbucks Coffee Company. All rights reserved.</p>
  </footer>
</template>
