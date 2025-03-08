<script setup>
import { ref, watch } from 'vue';
const personalNote = ref('');
const emit = defineEmits(['personalNote']);
watch(personalNote, (newValue) => {
  emit('personalNote', newValue);
});

</script>

<template>

<div class="flex flex-col gap-7 w-full items-center">
    <h2 class="font-semibold border-b-4 pb-3 border-[#D4E9E2] w-full">
      Personal note to all
    </h2>
    <textarea
      v-model="personalNote"
      class="custom-input h-[150px]"
      placeholder="Write a personal note to all recipients">
    </textarea>
</div>
</template>