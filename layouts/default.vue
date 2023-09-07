<script setup>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
// 下にスクロールしたときは隠して、上にスクロールした時に出現させるのもアリ
</script>

<template>
    <!-- <header class="w-screen px-16 py-6 flex justify-between " >
        <NuxtLink to="/home">HOME</NuxtLink>
        <ul class="flex gap-x-12">
            <li><NuxtLink to="/profile">PROFILE</NuxtLink></li>
            <li><NuxtLink to="/skills/frontend">SKILLS</NuxtLink></li>
            <li><NuxtLink to="/works">WORKS</NuxtLink></li>
            <li><NuxtLink to="/contact">CONTACT</NuxtLink></li>
        </ul>
    </header> -->
    <header class="text-white text-2xl bg-slate-700 fixed top-0 left-0 z-10 w-screen">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div class="flex lg:flex-1 ml-6">
                <NuxtLink to="/home">HOME</NuxtLink>
            </div>
            <div class="flex lg:hidden mr-6">
                <button type="button" class="inline-flex items-center justify-center rounded-md" @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-8 w-8" aria-hidden="true" />
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12 mr-6">
                <NuxtLink to="/profile">PROFILE</NuxtLink>
                <NuxtLink to="/skills">SKILLS</NuxtLink>
                <NuxtLink to="/works">WORKS</NuxtLink>
                <NuxtLink to="/blog">BLOG</NuxtLink>
                <NuxtLink to="/contact">CONTACT</NuxtLink>
            </div>
        </nav>
    </header>

    <main class="px-8 pt-24 w-screen overflow-hidden">
        <slot />
    </main>
    
    <footer class="px-16 py-12 bg-white text-black">
        hjbjhbcjbdjbsjcヴァd
    </footer>
</template>

