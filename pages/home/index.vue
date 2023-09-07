<script setup>

</script>

<template>
    <NuxtLayout>
        <div>
            <div id="homeGL" class="h-screen w-screen">
                
            </div>
            <hr>
            <div class="my-8 text-center">
                <div class="grid grid-cols-2">
                    <div class="col-span-1 order-1 my-auto">
                        <h3 class="text-5xl font-bold my-4"><span class="text-yellow-400">P</span>ROFILE</h3>
                        <p class="my-20 text-lg">WEBエンジニアとしての経歴や趣味などを紹介<br>パブリックからプライベートまでなんでも</p>
                        <NuxtLink to="profile" class="inline-block px-6 py-3 text-lg font-bold border-4 border-double border-white hover:bg-white hover:text-black duration-300">詳細はこちら</NuxtLink>
                    </div>
                    <img src="/img/no-image.png" alt="profile photo" class="block col-span-1 order-2 mx-auto my-auto h-3/5" />
                </div>
            </div>
            <hr>
            <div class="my-8 text-center">
                <div class="grid grid-cols-2">
                    <div class="col-span-1 order-2 my-auto">
                        <h3 class="text-5xl font-bold my-4"><span class="text-green-400">S</span>KILLS</h3>
                        <p class="my-20 text-lg">エンジニアとして保有するスキルの紹介<br>仕事依頼の際や、採用の参考にご活用ください</p>
                        <NuxtLink to="skills/frontend" class="inline-block px-6 py-3 text-lg font-bold border-4 border-double border-white hover:bg-white hover:text-black duration-300">詳細はこちら</NuxtLink>
                    </div>
                    <img src="/img/no-image.png" alt="profile photo" class="block col-span-1 order-1 mx-auto my-auto h-3/5" />
                </div>
            </div>
            <hr>
            <div class="my-8 text-center">
                <div class="grid grid-cols-2">
                    <div class="col-span-1 order-1 my-auto">
                        <h3 class="text-5xl font-bold my-4"><span class="text-cyan-400">W</span>ORKS</h3>
                        <p class="my-20 text-lg">これまでの成果物を列挙<br>現状では作品がほぼありませんが、、</p>
                        <NuxtLink to="works" class="inline-block px-6 py-3 text-lg font-bold border-4 border-double border-white hover:bg-white hover:text-black duration-300">詳細はこちら</NuxtLink>
                    </div>
                    <img src="/img/no-image.png" alt="profile photo" class="block col-span-1 order-2 mx-auto my-auto h-3/5" />
                </div>
            </div>
            <hr>
            <div class="my-8 text-center">
                <div class="grid grid-cols-2">
                    <div class="col-span-1 order-2 my-auto">
                        <h3 class="text-5xl font-bold my-4"><span class="text-pink-400">C</span>ONTACT</h3>
                        <p class="my-20 text-lg">仕事の依頼などはこちらのGmailまで<br>その他SNSなども興味あれば</p>
                        <NuxtLink to="contact" class="inline-block px-6 py-3 text-lg font-bold border-4 border-double border-white hover:bg-white hover:text-black duration-300">詳細はこちら</NuxtLink>
                    </div>
                    <img src="/img/no-image.png" alt="profile photo" class="block col-span-1 order-1 mx-auto my-auto h-3/5" />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>