<template>
    <div v-if="show" :class="{ 'show-modal': show }" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
        <div class="fixed inset-0 overflow-hidden">
            <div class="absolute inset-0 overflow-hidden">
                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full animate-slide-in duration-300">
                    <div class="pointer-events-auto w-screen max-w-md">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: Boolean,
    },
};
</script>
