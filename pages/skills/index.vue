<script setup>
const JsTs = [
    { name: 'JavaScript(Vanilla)', level: 50, imgUrl: '/img/javascript.png', workUrl: '#' },
    { name: 'TypeScript', level: 30, imgUrl: '/img/typescript.png', workUrl: '#' },
    { name: 'Vue3', level: 70, imgUrl: '/img/vue.png', workUrl: '#' },
    { name: 'Nuxt3', level: 50, imgUrl: '/img/nuxt.png', workUrl: '#' },
    { name: 'React', level: 30, imgUrl: '/img/react.png', workUrl: '#' },
    { name: 'Next', level: 10, imgUrl: '/img/next.png', workUrl: '#' },
]

const css = [
    { name: 'Tailwind', level: 90, imgUrl: '#', workUrl: '#' },
    { name: 'Bootstrap', level: 80, imgUrl: '#', workUrl: '#' },
]
</script>

<template>
    <NuxtLayout>
        <div class="w-screen">
            <h3 class="text-5xl font-bold mt-10">フロントエンド</h3>
            <div>
                <h4>JS/TS</h4>
                <div v-for="item in JsTs" :key="item.name">
                    <img :src="item.imgUrl" :alt="item.name">
                </div>
            </div>
            <div>
                <h4>CSSフレームワーク</h4>
            </div>
        </div>
        <hr class="w-4/5 mx-auto">
        <div class="w-screen">  
            <h3 class="text-5xl font-bold mt-20">バックエンド</h3>
            <div>
                <h4>WEB開発フレームワーク</h4>
            </div>
            <div>
                <h4></h4>
            </div>
        </div>
        <hr class="w-4/5 mx-auto">
        <div class="w-screen">
            <h3 class="text-5xl font-bold mt-20">その他</h3>
            <p class="text-lg my-10">プログラミング言語以外の技術</p>
        </div>
    </NuxtLayout>
</template>
