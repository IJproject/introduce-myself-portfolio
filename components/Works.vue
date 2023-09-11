<script setup>
const props = defineProps(['works'])
</script>

<template>
    <div v-if="works.length !== 0">
        <div v-for="work in works" :key="work.title" class="text-center">
            <img :src=work.imgUrl  class="block mx-auto h-auto w-72 col-span-1" />
            <h4>{{ work.title }}</h4>
            <p>{{ work.content }}</p>
        </div>
    </div>
    <div v-else>
        <h4 class="text-center my-10">まだ作品がありません</h4>
    </div>
</template>