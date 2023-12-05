<template>
    <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
        <div class="flex-1 overflow-y-auto min-w-[320px]">
            <div class="flex items-start justify-between py-4 px-6 bg-gray-100 sticky top-0">
                <div class="mr-3 flex h-7 items-center">
                    <h2 class="text-lg font-medium text-gray-900">
                        <ModalCloseButton :icon-class="closeIconArrowLeft" @custom-click="closeModal3"></ModalCloseButton>
                    </h2>
                </div>
                <div class="flex h-7 items-center">
                    <h3 class="font-medium text-gray-600">Orientačná tabuľka veľkostí detských tričiek</h3>
                </div>
                <div class="ml-3 flex h-7 items-center">
                    <ModalCloseButton :icon-class="closeIconClose" @custom-click="closeModal3"></ModalCloseButton>
                </div>
            </div>
            <ul role="list" class="space-y-3 text-sm text-gray-700 p-6">
              <li><strong>98:</strong> pre deti vo veku 2 – 3 roky, výška 93 – 98 cm</li>
              <li><strong>104:</strong> pre deti vo veku 3 – 4 roky, výška 99 – 104 cm</li>
              <li><strong>110:</strong> pre deti vo veku 4 – 5 rokov, výška 105 – 111 cm</li>
              <li><strong>116:</strong> pre deti vo veku 5 – 6 rokov, výška 112 – 116 cm</li>
              <li><strong>122:</strong> pre deti vo veku 6 – 7 rokov, výška 117 – 122 cm</li>
              <li><strong>128:</strong> pre deti vo veku 7 – 8 rokov, výška 123 – 128 cm</li>
              <li><strong>134:</strong> pre deti vo veku 8 – 9 rokov, výška 129 – 134 cm</li>
              <li><strong>140:</strong> pre deti vo veku 9 – 10 rokov, výška 135 – 140 cm</li>
            </ul>
        </div>
    </div>
</template>

<script>
import ModalCloseButton from "@/components/ModalIco.vue";

export default {
    components: {
        ModalCloseButton,
    },
    props: {
        show: Boolean,
    },
    data() {
        return {
            showModal3: false,
            closeIconClose: "fa-solid fa-xmark text-md",
            closeIconArrowLeft: "fa-solid fa-arrow-left text-md",
        };
    },
    methods: {
        closeModal3() {
            this.showModal3 = false;
            this.$emit("close-modal");
            this.enableBodyScroll();
        },
        enableBodyScroll() {
            document.body.style.overflow = 'auto';
        },
    },
};
</script>

