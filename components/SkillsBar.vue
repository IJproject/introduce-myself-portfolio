<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['languages', 'title'])

const width = ref([])
for (let i = 0; i < props.languages.length; i++) {
    width.value.push(0);
}

onMounted(() => {
    const element = document.querySelector('.progressbar');
    console.log(element.clientWidth)

    let count = 0
    const progress = window.setInterval(() => {
        if (count < 100) {
            props.languages.forEach((obj, index) => {
                width.value[index] += obj.level / 100
            });
            count++; 
        } else {
            clearInterval(progress); 
        }
    }, 10)
})
</script>

<template>
    <div>
        <h4 class="text-3xl">{{ title }}</h4>
        <div v-for="(item, index) in props.languages" :key="item.name" class="my-6 mx-2">
            <h5 class="py-1 font-semibold">{{ item.name }}</h5>
            <div class="flex justify-start">
                <img :src="item.imgUrl" :alt="item.name" class="block h-14 w-14 mr-2">
                <div class="flex-1 leading-6 my-4 mx-2 progressbar">
                    <div class="text-center inline-block ring-2 ring-white h-full bg-white text-black" :style="{ width: width[index] + '%' }">|</div>
                    <a class="text-lg font-semibold inline-block ml-3 leading-6">{{ Math.round(width[index]) }}</a>
                </div>
            </div>
            <a v-if="item.workUrl" :href="item.workUrl" target="_blank" class="inline-block underline text-indigo-500 hover:text-indigo-400">{{ item.workUrl }}</a>
        </div>
    </div>
</template>