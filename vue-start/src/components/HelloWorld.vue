<template>
    <div class="hello h-screen w-screen flex bg-gray text-2xl text-blue dark:bg-darkblue">
        <i class="fa-solid fa-mug-saucer dark:text-white"></i>
        <h1 class="dark:text-white">{{ msg }}</h1>
        <h1 class="dark:text-white">{{ perex }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String,
            perex: String
        }
    }
</script>
