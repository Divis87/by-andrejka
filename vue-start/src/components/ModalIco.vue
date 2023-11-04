<template>
    <button @click="handleClick" class="relative -m-2 py-2 px-3 text-gray-400 hover:text-gray-500 transition-color duration-300">
        <i :class="iconClass"></i>
    </button>
</template>

<script>
export default {
    props: {
        iconClass: String, // The class for the icon, e.g., "fa-solid fa-arrow-left"
    },
    methods: {
        handleClick() {
            this.$emit('custom-click'); // Emit a custom event for click action
        },
    },
};
</script>
