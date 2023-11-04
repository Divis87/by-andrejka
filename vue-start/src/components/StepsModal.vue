<template>
    <div v-if="show" :class="{ 'show-modal': show }" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75"></div>

        <div class="fixed inset-0 overflow-hidden">
            <div class="absolute inset-0 overflow-hidden">
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
};
</script>
