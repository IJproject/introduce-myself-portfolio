<script setup>
import { ref, onMounted } from 'vue';
import SkillsBar from '/components/SkillsBar.vue';

const JsTs = [
    { name: 'JavaScript(Vanilla)', level: 50, imgUrl: '/img/logo/javascript.png', workUrl: '' },
    { name: 'TypeScript', level: 30, imgUrl: '/img/logo/typescript.png', workUrl: 'https://github.com/IJproject/password-generator' },
    { name: 'Vue3', level: 70, imgUrl: '/img/logo/vue.png', workUrl: 'https://github.com/IJproject/chatgpt_app' },
    { name: 'Nuxt3', level: 50, imgUrl: '/img/logo/nuxt.png', workUrl: 'https://github.com/IJproject/introduce-myself-portfolio' },
    { name: 'React', level: 30, imgUrl: '/img/logo/react.png', workUrl: 'https://github.com/IJproject/todolist-react-typescript' },
    { name: 'Next', level: 10, imgUrl: '/img/logo/next.png', workUrl: '' },
]

const Css = [
    { name: 'Tailwind', level: 80, imgUrl: '/img/logo/tailwind.png', workUrl: 'https://github.com/IJproject/introduce-myself-portfolio' },
    { name: 'Bootstrap', level: 80, imgUrl: '/img/logo/bootstrap.png', workUrl: 'https://github.com/IJproject/shopping_reminder' },
]

const backendFramework = [
    { name: 'Laravel', level: 40, imgUrl: '/img/logo/laravel.png', workUrl: 'https://github.com/IJproject/class_management' },
    { name: 'Rails', level: 20, imgUrl: '/img/logo/rails.png', workUrl: 'https://github.com/IJproject/rails-kadai6' },
]

const purelanguages = [
    { name: 'Python', level: 30, imgUrl: '/img/logo/python.png', workUrl: 'https://github.com/IJproject/assign-cleaning-person' },
    { name: 'C', level: 10, imgUrl: '/img/logo/c.png', workUrl: '' },
]

const supportTool = [
    { name: 'Git/GitHub', level: 70, imgUrl: '/img/logo/git.png', workUrl: '' },
    { name: 'AWS', level: 10, imgUrl: '/img/logo/aws.png', workUrl: '' },
    { name: 'MySQL', level: 40, imgUrl: '/img/logo/mysql.png', workUrl: '' },
    { name: 'Docker', level: 5, imgUrl: '/img/logo/docker.png', workUrl: '' },
]

const others = [
    { name: 'Slack', level: 40, imgUrl: '/img/logo/slack.png', workUrl: '' },
    { name: 'Notion', level: 20, imgUrl: '/img/logo/notion.png', workUrl: '' },
]
</script>

<template>
    <NuxtLayout>
        <div class="w-full">
            <h3 class="text-5xl text-center font-bold my-10">フロントエンド</h3>
            <SkillsBar :languages=JsTs title="- JavaScript/TypeScript -" />
            <SkillsBar :languages=Css title="- CSSフレームワーク -" />
        </div>
        <hr>
        <div class="w-full">  
            <h3 class="text-5xl text-center font-bold my-10">バックエンド</h3>
            <SkillsBar :languages=backendFramework title="- WEB開発フレームワーク -" />
            <SkillsBar :languages=purelanguages title="- 純度100％ -" />
        </div>
        <hr>
        <div class="w-full">
            <h3 class="text-5xl text-center font-bold my-10">その他</h3>
            <SkillsBar :languages=supportTool title="- 開発関連 -" />
            <SkillsBar :languages=others title="- その他 -" />
        </div>
    </NuxtLayout>
</template>
