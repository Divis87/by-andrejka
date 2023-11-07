<template>
    <div v-if="show" :class="{ 'show-modal': show }" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm animate-fade-in duration-300" @click="closeModal"></div>
        <div class="pointer-events-none fixed sm:inset-y-0 max-h-full overflow-x-scroll bottom-0 right-0 flex sm:max-w-full animate-fade-in sm:animate-slide-in duration-300">
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
    computed: {
        // Define a computed property to calculate the overall subtotal price based on the selected item
        subtotalPrice() {
            return this.selectedItem === 'item1' ? this.item1SubtotalPrice : this.item2SubtotalPrice;
        },
        subtotalDays() {
            return this.selectedItem === 'item1' ? this.item1Days : this.item2Days;
        },
    },
    methods: {
        openModal(step) {
            this.currentStep = step;
            this.showModal = true;
            this.updateSelectedItemText();
            this.addBodyHidden();
        },
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
