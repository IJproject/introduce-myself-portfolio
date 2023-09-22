<script setup>
import CareerItem from '/components/CareerItem.vue'
import HobbyItem from '/components/HobbyItem.vue'
const items = [
    {title: "横浜国立大学に入学", year: '2021', month: '04'},
    {title: "WEBエンジニアの世界に飛び込む", year: '2022', month: '05'},
    {title: "インターンでWEBエンジニアとして働き始める", year: '2023', month: '06'},
]
const hobbys = [
    {title: 'サッカー観戦', content: '海外サッカーが特に好きで、アーセナルを推してます！ユニフォームを買いたいなと数年前からずっと思い続けていますが、未だに手が出ず、もどかしい日々を送っています、、ちなみにサッカーをプレイする方については走り回らないのであれば好きです！'},
    {title: 'YouTube', content: 'ただただ東海オンエアが大好きです！切り抜きも残さず観てしまおうとするぐらいには激推しです！いつか「特製ラーメン硬め濃いめ多め」食べたい、、'}
]
</script>

<template>
    <NuxtLayout>
        <div class="w-full">
            <h3 class="text-5xl font-bold my-10">経歴</h3>
            <CareerItem :item="items[0]" />
            <CareerItem :item="items[1]" />
            <CareerItem :item="items[2]" />
        </div>
        <div class="w-full">
            <h3 class="text-5xl font-bold my-10">趣味</h3>
            <HobbyItem :hobby="hobbys[0]" />
            <HobbyItem :hobby="hobbys[1]" />
        </div>
    </NuxtLayout>
</template>