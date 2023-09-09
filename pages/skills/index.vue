<script setup>
import { ref, onMounted } from 'vue';
const JsTs = ref([
    { name: 'JavaScript(Vanilla)', level: 50, imgUrl: '/img/javascript.png', workUrl: '' },
    { name: 'TypeScript', level: 30, imgUrl: '/img/typescript.png', workUrl: 'https://github.com/IJproject/password-generator' },
    { name: 'Vue3', level: 70, imgUrl: '/img/vue.png', workUrl: 'https://github.com/IJproject/chatgpt_app' },
    { name: 'Nuxt3', level: 50, imgUrl: '/img/nuxt.png', workUrl: 'https://github.com/IJproject/introduce-myself-portfolio' },
    { name: 'React', level: 30, imgUrl: '/img/react.png', workUrl: 'https://github.com/IJproject/todolist-react-typescript' },
    { name: 'Next', level: 10, imgUrl: '/img/next.png', workUrl: '' },
])

const JsTsWidth = ref([])
for (let i = 0; i < JsTs.value.length; i++) {
    JsTsWidth.value.push(0);
}

const css = [
    { name: 'Tailwind', level: 90, imgUrl: '#', workUrl: '#' },
    { name: 'Bootstrap', level: 80, imgUrl: '#', workUrl: '#' },
]

onMounted(() => {
    const element = document.querySelector('.progressbar');
    console.log(element.clientWidth)

    let JsTsCount = 0
    const JsTsProgress = window.setInterval(() => {
        if (JsTsCount < 100) {
            JsTs.value.forEach((obj, index) => {
                JsTsWidth.value[index] += obj.level / 100
            });
            JsTsCount++; 
        } else {
            clearInterval(JsTsProgress); 
        }
    }, 10)
})

</script>

<template>
    <NuxtLayout>
        <div class="w-full">
            <h3 class="text-5xl text-center font-bold my-10">フロントエンド</h3>
            <div>
                <h4 class="text-3xl">- JavaScript/TypeScript -</h4>
                <div v-for="(item, index) in JsTs" :key="item.name" class="my-6 mx-2">
                    <h5 class="py-1 font-semibold">{{ item.name }}</h5>
                    <div class="flex justify-start">
                        <img :src="item.imgUrl" :alt="item.name" class="block h-14 w-14 mr-2">
                        <div class="flex-1 leading-6 my-4 mx-2 progressbar">
                            <div class="text-center inline-block ring-2 ring-white h-full bg-white text-black" :style="{ width: JsTsWidth[index] + '%' }">|</div>
                            <a class="text-lg font-semibold inline-block ml-3 leading-6">{{ Math.round(JsTsWidth[index]) }}</a>
                        </div>
                    </div>
                    <a v-if="item.workUrl" :href="item.workUrl" target="_blank" class="inline-block underline text-indigo-500 hover:text-indigo-400">{{ item.workUrl }}</a>
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
