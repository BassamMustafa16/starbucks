<script setup>

const props = defineProps(['title', 'links']);

</script>

<template>
  <div>
    <h2 class="text-l font-medium mb-5">{{ title }}</h2>
    <ul>
      <li v-for="link in links" class="py-3">
          <RouterLink to="/" class="block text-gray-600 hover:text-black">
            {{ link }}
          </RouterLink>
        </li>
    </ul>
  </div>
</template>
