<script setup>
import { ref } from 'vue'
import Works from '/components/Works.vue';

const business = []
</script>

<template>
    <NuxtLayout>
        <div class="w-full mb-20">
            <h3 class="text-5xl text-center font-bold my-10">業務</h3>
            <Works :works=business />
        </div>
    </NuxtLayout>
</template>