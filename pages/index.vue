<script setup>
import { ref, onMounted } from 'vue'

const isButtonDisplay = ref(false)

const displayButton = () => {
    isButtonDisplay.value = true;
}

onMounted(() => {
    const leader = document.getElementById('leader')
    const follower = document.getElementById('follower')
})
</script>

<template>
    <div class="h-screen w-screen">
        <div class="absolute top-0 left-0 h-screen w-screen flex justify-center items-center">
            <p class="px-8 py-4 text-4xl text-white font-bold bg-transparent">
                <span id="leader">W</span>
                <span id="follower">elcome</span>
            </p>
        </div>
        <div v-if="isButtonDisplay" class="absolute top-0 left-0 h-screen w-screen flex justify-center items-center">
            <NuxtLink to="/home" class="block px-8 py-4 text-4xl text-white font-bold bg-transparent border-y-2 border-white">Enter</NuxtLink>
        </div>
    </div>
</template>