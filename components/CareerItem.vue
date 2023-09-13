<script setup>
import { ref } from 'vue'

const props = defineProps(['item'])

</script>

<template>
    <div class="flex justify-start">
        <div class="px-2 py-0 h-full">|</div>
        <div class="flex-1 flex justify-start text-xl py-3">
            <p class="mx-4">- {{ item.year }} / {{ item.month }}</p>
            <p class="ml-6">{{ item.title }}</p>
        </div>
    </div>
</template>