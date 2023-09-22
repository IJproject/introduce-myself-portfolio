<script setup>
import { ref } from 'vue'

const props = defineProps(['hobby'])

</script>

<template>
    <div class="border-l-4 my-6 py-4">
        <h4 class="ml-12 text-xl font-bold">{{ hobby.title }}</h4>
        <p class="ml-8 mt-2 text-lg">{{ hobby.content }}</p>
    </div>
</template>