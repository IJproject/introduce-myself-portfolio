<script setup>
import { ref, onMounted } from 'vue'
import { Scene, PerspectiveCamera, WebGLRenderer, MeshNormalMaterial, Mesh, DirectionalLight, OctahedronGeometry } from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

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

    const FristGeometry = new OctahedronGeometry( 5 ); 

    const material = new MeshNormalMaterial();
    material.roughness = 0.7
    material.metalness = 0.7

    const directionalLight = new DirectionalLight("#ffffff", 1)
    directionalLight.position.set(6, 0, 6)
    scene.add(directionalLight)

    const firstMesh = new Mesh(FristGeometry, material);

    scene.add(firstMesh)
}

onMounted(() => {
    const frontendGL = document.getElementById("frontendGL");
    init();
    frontendGL.appendChild(frontRenderer.domElement);
    frontRenderer.render(scene, camera);
    const controls = new OrbitControls(camera, frontRenderer.domElement);
    controls.update();
    animate()

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        frontRenderer.render(scene, camera);
    }

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
        <!-- <div class="absolute top-0 left-0 h-screen w-screen flex justify-center items-center">
            <NuxtLink to="/home" class="block px-8 py-4 text-4xl text-white font-bold bg-transparent border-y-2 border-white">Enter</NuxtLink>
        </div> -->
    </div>
</template>