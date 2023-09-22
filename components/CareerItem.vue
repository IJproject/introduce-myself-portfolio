<script setup>
import { ref } from 'vue'

const props = defineProps(['item'])

</script>

<template>
    <div class="text-xl py-4 border-l-4 relative">
        <p class="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-3xl">-</p>
        <p class="ml-10"> {{ item.year }} / {{ item.month }}</p>
        <p class="ml-8 mt-2">{{ item.title }}</p>
    </div>
</template>