<script setup>

const props = defineProps(['title', 'links']);

</script>

<template>
  <div>
    <h3 class="text-xl font-medium mb-5">{{ title }}</h3>
    <ul>
      <li v-for="link in links" class="py-3">
          <RouterLink to="/" class="block text-gray-600 hover:text-black">
            {{ link }}
          </RouterLink>
        </li>
    </ul>
  </div>
</template>
