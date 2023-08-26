<script setup>
import { ref, onMounted } from 'vue'
import { Scene, PerspectiveCamera, WebGLRenderer, MeshStandardMaterial, Mesh, DirectionalLight, OctahedronGeometry, Color } from "three";

// ***THREE.jsの記述はここから***
let scene, objectRenderer, camera, sizes, geometry, mesh, directionalLight, loader, material

const init = () => {
    scene = new Scene();

    sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    camera = new PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100);
    camera.position.x = 2;
    camera.position.y = -2;
    camera.position.z = 12;
    camera.lookAt(0, 0, 0);
    scene.add(camera);

    objectRenderer = new WebGLRenderer({ alpha: true });
    objectRenderer.setSize(sizes.width, sizes.height);
    objectRenderer.setPixelRatio(window.devicePixelRatio);

    geometry = new OctahedronGeometry( 5 ); 

    material = new MeshStandardMaterial();
    material.roughness = 0.7
    material.metalness = 0.7

    directionalLight = new DirectionalLight("#000000", 4)
    directionalLight.position.set(6, 0, 6)
    scene.add(directionalLight)

    mesh = new Mesh(geometry, material);
    mesh.position.set(0, 0, 0)

    scene.add(mesh)
}

onMounted(() => {
    const objectGL = document.getElementById("objectGL");

    init();
    
    objectGL.appendChild(objectRenderer.domElement);
    objectRenderer.render(scene, camera);


    // リサイズ対応
    window.addEventListener("resize", () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        objectRenderer.setSize(sizes.width, sizes.height);
        objectRenderer.setPixelRatio(window.devicePixelRatio);
    });

    // 回転量の取得
    let deltaX = 0;
    let deltaY = 0;
    let scaleChange = 1;

    function animate() {
        requestAnimationFrame(animate);

        if(scaleChange > 0) {
            scaleChange -= 0.005

            deltaX += 0.003
            deltaY += 0.003

            window.addEventListener("wheel", (event) => {
                deltaX += event.deltaY / 50000
                deltaY += event.deltaX / 50000
            });

            // スマートフォン用のタッチイベント
            let touchStartX = 0;
            let touchStartY = 0;

            window.addEventListener('touchstart', (event) => {
                touchStartX = event.touches[0].clientX;
                touchStartY = event.touches[0].clientY;
            });

            window.addEventListener('touchmove', (event) => {
                const touchX = event.touches[0].clientX;
                const touchY = event.touches[0].clientY;
                deltaX += (touchY - touchStartY) / 400000;
                deltaY += (touchX - touchStartX) / 400000;
            });

            mesh.rotation.x = -deltaX
            mesh.rotation.y = -deltaY

            mesh.scale.set(scaleChange, scaleChange, scaleChange);  

            directionalLight.color.setRGB(Math.sin(deltaX), Math.sin((deltaX + deltaY) / 2), Math.sin(deltaY))
        } 

        if(scaleChange <= 0 && scaleChange > -5) {
            scaleChange = -10;
            mesh.scale.set(1, 1, 1);  
        }

        objectRenderer.render(scene, camera);
    }
    animate();
})

</script>

<template>
    <div class="relative">
        <div id="objectGL"></div>
        <!-- <div class="absolute top-0 left-0 h-screen w-screen flex justify-center items-center">
            <NuxtLink to="/home" class="block px-8 py-4 text-4xl text-white font-bold bg-transparent border-y-2 border-white">Enter</NuxtLink>
        </div> -->
    </div>
</template>