<script setup>
import CareerItem from '/components/CareerItem.vue'
import HobbyItem from '/components/HobbyItem.vue'
const items = [
    {title: "sample title", year: '2021', month: '08'},
    {title: "sample title second", year: '2023', month: '12'}
]
const hobbys = [
    {title: 'サッカー観戦', content: ['content1', 'content2', 'content3']},
    {title: '野球観戦', content: ['content1', 'content2', 'content3']}
]
</script>

<template>
    <NuxtLayout>
        <div class="w-full">
            <h3 class="text-5xl font-bold my-10">経歴</h3>
            <CareerItem :item="items[0]" />
            <CareerItem :item="items[1]" />
        </div>
        <div class="w-full">
            <h3 class="text-5xl font-bold my-10">趣味</h3>
            <HobbyItem :hobby="hobbys[0]" />
            <HobbyItem :hobby="hobbys[1]" />
        </div>
    </NuxtLayout>
</template>