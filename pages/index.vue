<script setup>
import { ref, onMounted } from 'vue'
import { Scene, PerspectiveCamera, WebGLRenderer, MeshNormalMaterial, Mesh, DirectionalLight, TorusGeometry } from "three";

// ***THREE.jsの記述はここから***
let scene, frontRenderer, camera, sizes

const init = () => {
    scene = new Scene();

    sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    camera = new PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100);
    camera.position.x = 0;
    camera.position.y = 5;
    camera.position.z = 12;
    camera.lookAt(0, 0, 0);
    scene.add(camera);

    frontRenderer = new WebGLRenderer({ alpha: true });
    frontRenderer.setSize(sizes.width, sizes.height);
    frontRenderer.setPixelRatio(window.devicePixelRatio);

    const geometry1 = new TorusGeometry( 3.2, 1, 16, 50, 5.5 ); 
    const geometry2 = new TorusGeometry( 3.2, 1, 16, 50, 5.5 ); 

    const material = new MeshNormalMaterial();
    material.roughness = 0.7
    material.metalness = 0.7

    const directionalLight = new DirectionalLight("#ffffff", 1)
    directionalLight.position.set(6, 0, 6)
    scene.add(directionalLight)

    const mesh1 = new Mesh(geometry1, material);
    const mesh2 = new Mesh(geometry2, material);

    mesh1.rotation.x = Math.PI / 2

    mesh1.position.set(1.5, 0, 0)
    mesh2.position.set(-1.5, 0, 0)
    
    scene.add(mesh1, mesh2)
}

onMounted(() => {
    const frontendGL = document.getElementById("frontendGL");
    init();
    frontendGL.appendChild(frontRenderer.domElement);
    frontRenderer.render(scene, camera);

    window.addEventListener("resize", () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        frontRenderer.setSize(sizes.width, sizes.height);
        frontRenderer.setPixelRatio(window.devicePixelRatio);
    });
})



</script>

<template>
    <div class="relative">
        <div id="frontendGL"></div>
        <div class="absolute top-0 left-0 h-screen w-screen flex justify-center items-center">
            <NuxtLink to="/home" class="block px-8 py-4 text-4xl text-white font-bold bg-transparent border-y-2 border-white">Enter</NuxtLink>
        </div>
    </div>
</template>