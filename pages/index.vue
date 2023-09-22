<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
    const leader = document.getElementById('leader')
    const follower = document.getElementById('follower')
})
</script>

<template>
    <div class="h-screen w-screen">
        <div class="h-screen w-screen flex justify-center items-center">
            <p>このページは作成中...</p>
            <p class="px-8 py-4 text-4xl text-white font-bold bg-transparent">
                <span id="leader">W</span>
                <span id="follower">elcome</span>
            </p>
            <!-- このdivタグは消す -->
            <div>
                <NuxtLink to="/home" class="block px-3 py-2 bg-white text-black font-semibold">HOMEページはこちらから</NuxtLink>
            </div>
        </div>
        
    </div>
</template>