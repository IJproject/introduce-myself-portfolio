<script setup>
// 下にスクロールしたときは隠して、上にスクロールした時に出現させるのもアリ
</script>

<template>
    <header class="w-screen px-16 py-6 flex justify-between text-white text-2xl bg-slate-700 fixed top-0 left-0">
        <NuxtLink to="/home">HOME</NuxtLink>
        <ul class="flex gap-x-12">
            <li><NuxtLink to="/profile">PROFILE</NuxtLink></li>
            <li><NuxtLink to="/skills/frontend">SKILLS</NuxtLink></li>
            <li><NuxtLink to="/works">WORKS</NuxtLink></li>
            <li><NuxtLink to="/contact">CONTACT</NuxtLink></li>
        </ul>
    </header>

    <div class="px-8 pt-24">
        <slot />
    </div>
    
    <footer class="px-16 py-12 bg-white text-black">
        hjbjhbcjbdjbsjcヴァd
    </footer>
</template>

