<script setup>
import { ref } from 'vue'
const props = defineProps(['section'])

// titleの編集
const titleArray = [
    props.section.title.charAt(0),
    props.section.title.slice(1)
]

const className = `text-${props.section.color}-400`

// contentの編集 
</script>

<template>
    <div class="text-center my-56">
        <h3 class="text-5xl font-bold my-4"><span :class=className>{{ titleArray[0] }}</span>{{ titleArray[1] }}</h3>
        <div class="my-16 text-lg">
            <p v-for="content in section.content" :key=content class="text-slate-300">{{ content }}</p>
        </div>
        <NuxtLink :to=section.url class="inline-block px-6 py-3 text-lg font-bold border-4 border-double border-white hover:bg-white hover:text-black duration-300">詳細はこちら</NuxtLink>
    </div>
</template>