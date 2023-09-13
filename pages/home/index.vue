<script setup>
import { ref, onMounted } from 'vue';
import HomeSection from '/components/HomeSection.vue';
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshStandardMaterial, Mesh, DirectionalLight, Color } from 'three';

const section = [
    {title: 'PROFILE', content: ['WEBエンジニアとしての経歴や趣味などを紹介', 'パブリックからプライベートまでなんでも'], url: 'profile', color: 'yellow'},
    {title: 'SKILLS', content: ['エンジニアとして保有するスキルの紹介', '仕事依頼の際や、採用の参考にご活用ください'], url: 'skills', color: 'green'},
    {title: 'WORKS', content: ['これまでの成果物を列挙', '現状では作品がほぼありませんが、、'], url: 'works', color: 'cyan'},
    {title: 'CONTACT', content: ['仕事の依頼などはこちらのGmailまで', 'その他SNSなども興味あれば'], url: 'contact', color: 'pink'},
]

let scene, sizes, camera, renderer, geometry, material, mesh, directionalLight, controls

// Three.jsの初期化関数
const init = () => {
    scene = new Scene()

    sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    camera = new PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(-1.2, 0, 3)
    scene.add(camera);

    renderer = new WebGLRenderer({ alpha: true })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(window.devicePixelRatio)

    geometry = new BoxGeometry( .8, .8, .8 ); 

    material = new MeshStandardMaterial();
    material.roughness = 0.7
    material.metalness = 0.5

    mesh = new Mesh(geometry, material);
    mesh.rotation.x = - Math.PI / 8
    mesh.rotation.y = - Math.PI / 8

    scene.add(mesh)

    directionalLight = new DirectionalLight("#000000", 3)
    directionalLight.position.set(0, 4, 8)
    scene.add(directionalLight)

    let moveX = 0
    let moveY = 0

    let startX = 0
    let startY = 0

    let currentX = 0
    let currentY = 0

    // パソコン用
    window.addEventListener('wheel', (event) => {
        moveX = event.deltaX
        moveY = event.deltaY
    })

    // スマホ用
    window.addEventListener('touchstart', function(event) {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
    });

    window.addEventListener('touchmove', function(event) {
        if (startY !== 0) {
            currentX = event.touches[0].clientX;
            currentY = event.touches[0].clientY;

            moveX = startX - currentX;
            moveY = startY - currentY;

            startY = currentY;
        }
});

    rot();

    function rot() {
        mesh.rotation.x += 0.007
        mesh.rotation.x -= moveY / 500
        mesh.rotation.y += 0.005
        mesh.rotation.y -= moveX / 500
        mesh.rotation.z += 0.003

        const xColor = Math.sin(mesh.rotation.x);
        const yColor = Math.sin(mesh.rotation.y);
        const zColor = Math.sin(mesh.rotation.z);
        
        directionalLight.color.set(new Color(xColor, yColor, zColor));

        const rgbColor = (x, y , z) => {
            const red = Math.round(x * 255);
            const green = Math.round(y * 255);
            const blue = Math.round(z * 255);
            return `rgb(${red}, ${green}, ${blue})`
        }

        document.documentElement.style.setProperty('--text-color', rgbColor(xColor, yColor, zColor));

        renderer.render(scene, camera);
        window.requestAnimationFrame(rot);

        moveX = 0;
        moveY = 0;

        startX = currentX;
        startY = currentY;
    }
}

onMounted(() => {
    init();

    const homeGL = document.getElementById('homeGL');
    homeGL.appendChild(renderer.domElement);
    renderer.render(scene, camera);

    // 画面のリサイズをスムーズ化
    window.addEventListener("resize", () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(window.devicePixelRatio);
    });
})



</script>

<template>
    <NuxtLayout>
        <div class="md:w-1/2 -mt-20">
            <div class="h-screen w-full flex justify-center items-center">
                <div class="">
                    <p class="text-center text-5xl font-bold title"><a class="gradient-text">Web Engineer</a></p>
                    <p class="text-center text-3xl font-bold mt-2 ml-10 title"><a class="gradient-text">- Junpei Iwata</a></p>
                    <p class="text-lg text-slate-300 mt-8">
                        自称フルスタックエンジニアの<br>
                        自己紹介ポートフォリオへようこそ<br>
                    </p>
                </div>
            </div>
            <HomeSection :section=section[0] />
            <HomeSection :section=section[1] />
            <HomeSection :section=section[2] />
            <HomeSection :section=section[3] />  
        </div>
        <div id="homeGL" class="fixed top-0 left-0 pointer-events-none"></div>
    </NuxtLayout>
</template>

<style>
.gradient-text {
    background: linear-gradient(45deg, var(--text-color, black), white);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
</style>





