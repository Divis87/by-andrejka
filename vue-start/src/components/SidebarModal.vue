<template>
    <div v-if="show" :class="{ 'show-modal': show }" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm animate-fade-in duration-300" @click="closeModal"></div>
        <div class="pointer-events-none fixed sm:inset-y-0 h-auto top-0 overflow-x-scroll bottom-0 right-0 flex sm:max-w-full animate-fade-in sm:animate-slide-in duration-300">
            <div class="pointer-events-auto w-screen sm:max-w-md">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: Boolean,
    },
    methods: {
        closeModal() {
            this.$emit('close-modal');
            this.enableBodyScroll();
        },
        enableBodyScroll() {
            document.body.style.overflow = 'auto';
        },
    },
};
</script>
