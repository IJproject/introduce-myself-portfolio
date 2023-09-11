<script setup>
import { ref } from 'vue'
const props = defineProps(['section'])

// titleの編集
const titleArray = [
    props.section.title.charAt(0),
    props.section.title.slice(1)
]

const initialColor = ref(`text-${props.section.color}-400`)

const buttonColor = "inline-block px-6 py-3 text-lg font-bold border-4 border-double border-white duration-300 " + `hover:bg-${props.section.color}-200`

// contentの編集 
</script>

<template>
    <div class="text-center my-56">
        <h3 class="text-5xl font-bold my-4"><span :class=initialColor>{{ titleArray[0] }}</span>{{ titleArray[1] }}</h3>
        <p class="gradient-text">kokokok</p>
        <div class="my-16 text-lg">
            <p v-for="content in section.content" :key=content class="text-slate-300">{{ content }}</p>
        </div>
        <NuxtLink :to=section.url :class=buttonColor>詳細はこちら</NuxtLink>
    </div>
</template>