<script setup>
import FooterDp from "./FooterDp.vue";

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
</script>

<template>
  <footer class="flex flex-col p-5">
    <div>
    <FooterDp
      v-for="menu in DropdownMenus"
      :title="menu.title"
      :links="menu.links"
    />
  </div>
    <div>
      <div>
        
      </div>
    </div>
  </footer>
</template>
