<template>
    <div>
        <details v-for="(faq, index) in faqItems" :key="index" class="leading-8 text-gray-700 border-0 border-b-2">
            <summary @click="toggleDetails(index)" class="font-semibold py-5 border-gray-200 text-lg cursor-pointer list-none flex justify-between items-center transition hover:text-orange">
                <span>{{ faq.question }}</span>
                <i class="fas fa-chevron-down text-medium ml-3 transform transition-transform" :class="{ 'rotate-180': faq.isOpen }"></i>
            </summary>
            <div class="pb-6">
                <p>{{ faq.answer }}</p>
            </div>
        </details>
    </div>
</template>

<script>
export default {
    props: {
        faqItems: Array,
    },
    methods: {
        toggleDetails(index) {
            this.$emit('toggleDetails', index);
        },
    },
};
</script>
