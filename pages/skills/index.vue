<script setup>

</script>

<template>
    <NuxtLayout>
        <div class="text-center h-screen w-screen relative">
            <div class="absolute top-1/4 left-1/2 -translate-x-1/2">
                <h3 class="text-5xl font-bold">フロントエンド</h3>
                <p class="text-lg my-10">CSSフレームワークやJavaScriptフレームワークなど</p>
                <NuxtLink to="skills/frontend" class="inline-block mt-10 px-6 py-3 text-lg font-bold border-4 border-double border-white hover:bg-white hover:text-black duration-300">詳細はこちら</NuxtLink>
            </div>
            <div id="front-picture" class="">
                複数画像を画面に点々と表示＋スクロールで移動
            </div>
        </div>
        <hr>
        <div class="text-center h-screen w-screen relative">
            <div class="absolute top-1/4 left-1/2 -translate-x-1/2">
                <h3 class="text-5xl font-bold">バックエンド</h3>
                <p class="text-lg my-10">バックエンド言語のフレームワークなど</p>
                <NuxtLink to="skills/backend" class="inline-block mt-10 px-6 py-3 text-lg font-bold border-4 border-double border-white hover:bg-white hover:text-black duration-300">詳細はこちら</NuxtLink>
            </div>
            <div id="front-picture" class="">
                複数画像を画面に点々と表示＋スクロールで移動
            </div>
        </div>
        <hr>
        <div class="text-center h-screen w-screen relative">
            <div class="absolute top-1/4 left-1/2 -translate-x-1/2">
                <h3 class="text-5xl font-bold">その他</h3>
                <p class="text-lg my-10">プログラミング言語以外の技術</p>
                <NuxtLink to="skills/others" class="inline-block mt-10 px-6 py-3 text-lg font-bold border-4 border-double border-white hover:bg-white hover:text-black duration-300">詳細はこちら</NuxtLink>
            </div>
            <div id="front-picture" class="">
                複数画像を画面に点々と表示＋スクロールで移動
            </div>
        </div>
    </NuxtLayout>
</template>
