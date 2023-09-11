<script setup>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
// 下にスクロールしたときは隠して、上にスクロールした時に出現させるのもアリ
</script>

<template>
    <header class="text-white text-2xl bg-slate-700 fixed top-0 left-0 z-10 w-screen">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div class="flex lg:flex-1 ml-6">
                <NuxtLink to="/home">HOME</NuxtLink>
            </div>
            <div class="flex lg:hidden mr-6">
                <button type="button" class="inline-flex items-center justify-center rounded-md">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon v-if="!mobileMenuOpen" @click="mobileMenuOpen = true" class="h-8 w-8" aria-hidden="true" />
                    <XMarkIcon v-else @click="mobileMenuOpen = false" class="h-8 w-8" aria-hidden="true" />
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
        <div v-if="mobileMenuOpen" class="h-full bg-slate-700 my-8">
            <NuxtLink to="/profile" class="block text-center py-8">PROFILE</NuxtLink>
            <hr class="text-center mx-6"> 
            <NuxtLink to="/skills" class="block text-center py-8">SKILLS</NuxtLink>
            <hr class="text-center mx-6"> 
            <NuxtLink to="/works" class="block text-center py-8">WORKS</NuxtLink>
            <hr class="text-center mx-6"> 
            <NuxtLink to="/blog" class="block text-center py-8">BLOG</NuxtLink>
            <hr class="text-center mx-6"> 
            <NuxtLink to="/contact" class="block text-center py-8">CONTACT</NuxtLink>
        </div>
    </header>

    <main class="px-8 pt-24 w-screen min-h-screen overflow-hidden">
        <slot />
    </main>
    
    <footer class="px-16 py-12 bg-white text-black">
        hjbjhbcjbdjbsjcヴァd
    </footer>
</template>

