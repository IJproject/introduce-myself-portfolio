<script setup>
import { ref } from 'vue'
const medias = ref([
    {name: 'GitHub', url: 'https://github.com/IJproject', img: '/img/sns/github.png', alt: 'GitHubのロゴ', content: 'これまでの作品のソースコードなど'},
    {name: 'X(旧Twitter)', url: 'https://twitter.com/Junpe_portfolio', img: '/img/sns/x.png', alt: 'Xのロゴ', content: 'エンジニア用のXアカウント'},
])
</script>

<template>
    <NuxtLayout>
        <div class="w-full">
            <div>
                メール
            </div>
            <div>
                <h3 class="text-5xl text-center font-bold my-10">SNS</h3>
                <div class="flex justify-start flex-wrap">
                    <a v-for="media in medias" :key="media.name" :href="media.url" class="block text-center flex-1">
                        <img :src="media.img" :alt="media.alt" class="w-20 h-20 mx-auto">
                        <p class="text-xl font-semibold my-4">{{ media.name }}</p>
                        <p class="whitespace-nowrap mb-10">{{ media.content }}</p>
                    </a>
                </div>
                
            </div>
            
        </div>
    </NuxtLayout>
</template>