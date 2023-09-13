<script setup>
import { ref } from 'vue'

const props = defineProps(['hobby'])

</script>

<template>
    <div>
        <h4>{{ hobby.title }}</h4>
        <p v-for="content in hobby.content" :key="content[0]">
            {{ content }}
        </p>
    </div>
</template>