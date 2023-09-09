<script setup>
import { ref, onMounted } from 'vue'
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshStandardMaterial, Mesh, DirectionalLight, Color } from 'three'

let scene, sizes, camera, renderer, geometry, material, mesh, directionalLight

// Three.jsの初期化関数
const init = () => {
    scene = new Scene()

    sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    camera = new PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(1.2, -0.3, 3)
    scene.add(camera);

    renderer = new WebGLRenderer({ alpha: true })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(window.devicePixelRatio)

    geometry = new BoxGeometry( 1, 1, 1 ); 

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

    rot();

    function rot() {
        mesh.rotation.x += 0.007
        mesh.rotation.y += 0.005
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
        <div>
            <div class="h-screen w-full grid grid-cols-2">
                <div class="col-span-1 h-full relative">
                    <div class="absolute top-1/4 left-1/2 -translate-x-1/2">
                        <p class="text-center text-5xl font-bold"><a class="gradient-text">Web Engineer</a></p>
                        <p class="text-center text-3xl font-bold mt-2 ml-10"><a class="gradient-text">- Junpei Iwata</a></p>
                        <p class="text-lg mt-8">
                            自称フルスタックエンジニアの<br>
                            自己紹介ポートフォリオへようこそ<br>
                        </p>
                    </div>
                </div>
                <div id="homeGL" class="col-span-1 overflow-hidden"></div>
            </div>
            <hr>
            <div class="my-8 text-center">
                <div class="grid grid-cols-2">
                    <div class="col-span-1 order-1 my-auto">
                        <h3 class="text-5xl font-bold my-4"><span class="text-yellow-400">P</span>ROFILE</h3>
                        <p class="my-20 text-lg">WEBエンジニアとしての経歴や趣味などを紹介<br>パブリックからプライベートまでなんでも</p>
                        <NuxtLink to="profile" class="inline-block px-6 py-3 text-lg font-bold border-4 border-double border-white hover:bg-white hover:text-black duration-300">詳細はこちら</NuxtLink>
                    </div>
                    <img src="/img/no-image.png" alt="profile photo" class="block col-span-1 order-2 mx-auto my-auto h-3/5" />
                </div>
            </div>
            <hr>
            <div class="my-8 text-center">
                <div class="grid grid-cols-2">
                    <div class="col-span-1 order-2 my-auto">
                        <h3 class="text-5xl font-bold my-4"><span class="text-green-400">S</span>KILLS</h3>
                        <p class="my-20 text-lg">エンジニアとして保有するスキルの紹介<br>仕事依頼の際や、採用の参考にご活用ください</p>
                        <NuxtLink to="skills" class="inline-block px-6 py-3 text-lg font-bold border-4 border-double border-white hover:bg-white hover:text-black duration-300">詳細はこちら</NuxtLink>
                    </div>
                    <img src="/img/no-image.png" alt="profile photo" class="block col-span-1 order-1 mx-auto my-auto h-3/5" />
                </div>
            </div>
            <hr>
            <div class="my-8 text-center">
                <div class="grid grid-cols-2">
                    <div class="col-span-1 order-1 my-auto">
                        <h3 class="text-5xl font-bold my-4"><span class="text-cyan-400">W</span>ORKS</h3>
                        <p class="my-20 text-lg">これまでの成果物を列挙<br>現状では作品がほぼありませんが、、</p>
                        <NuxtLink to="works" class="inline-block px-6 py-3 text-lg font-bold border-4 border-double border-white hover:bg-white hover:text-black duration-300">詳細はこちら</NuxtLink>
                    </div>
                    <img src="/img/no-image.png" alt="profile photo" class="block col-span-1 order-2 mx-auto my-auto h-3/5" />
                </div>
            </div>
            <hr>
            <div class="my-8 text-center">
                <div class="grid grid-cols-2">
                    <div class="col-span-1 order-2 my-auto">
                        <h3 class="text-5xl font-bold my-4"><span class="text-pink-400">C</span>ONTACT</h3>
                        <p class="my-20 text-lg">仕事の依頼などはこちらのGmailまで<br>その他SNSなども興味あれば</p>
                        <NuxtLink to="contact" class="inline-block px-6 py-3 text-lg font-bold border-4 border-double border-white hover:bg-white hover:text-black duration-300">詳細はこちら</NuxtLink>
                    </div>
                    <img src="/img/no-image.png" alt="profile photo" class="block col-span-1 order-1 mx-auto my-auto h-3/5" />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<style scoped>
.gradient-text {
    background: linear-gradient(45deg, var(--text-color, black), white);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
</style>





