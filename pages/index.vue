<script setup>
import { ref, onMounted } from 'vue'
import { Scene, PerspectiveCamera, WebGLRenderer, MeshStandardMaterial, Mesh, DirectionalLight } from "three";

// ***THREE.jsの記述はここから***
const init = () => {
    const scene = new Scene();

    const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    };

    const camera = new PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100);
    camera.position.y = 1;
    camera.position.z = 5;
    scene.add(camera);

    const frontRenderer = new WebGLRenderer({ alpha: true });
    frontRenderer.setSize(sizes.width, sizes.height);
    frontRenderer.setPixelRatio(window.devicePixelRatio);
}

onMounted(() => {
    init();
})

</script>

<template>
    <div class="h-screen flex justify-center items-center">
        <div id="frontendGL"></div>
        <NuxtLink to="/home" class="block px-8 py-4 text-4xl text-white font-bold bg-transparent border-y-2 border-white">Enter</NuxtLink>
    </div>
</template>