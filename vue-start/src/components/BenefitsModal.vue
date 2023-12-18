<template>
    <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
        <div class="flex-1 overflow-y-auto min-w-[320px]">
            <div class="flex items-start justify-between py-4 px-6 bg-gray-100 sticky top-0">
                <div class="mr-3 flex h-7 items-center">
                    <h2 class="text-lg font-medium text-gray-900">
                        <ModalCloseButton :icon-class="closeIconArrowLeft" @custom-click="closeModal2"></ModalCloseButton>
                    </h2>
                </div>
                <div class="flex h-7 items-center">
                    <h3 class="font-medium text-gray-600">Nemáte vlastný nápad?</h3>
                </div>
                <div class="ml-3 flex h-7 items-center">
                    <ModalCloseButton :icon-class="closeIconClose" @custom-click="closeModal2"></ModalCloseButton>
                </div>
            </div>
            <div class="text-md text-gray-600 p-6">
                Ak nemáte vlastný nápad, alebo chcete niečo originálne a kreatívne,
                <span class="font-medium">môžete si u nás objednať aj službu navrhovania dizajnu za skvelú cenu.</span>
                Stačí nám napísať na náš <a href="https://www.instagram.com/by_andrejka/" target="_blank" title="instagram" class="font-medium text-orange"><u>instagram @by_andrejka</u></a> a vašu predstavu a my vám vytvorím niekoľko návrhov na výber.
                Následne si môžete vybrať ten, ktorý sa vám najviac páči.
              <br><br>
              Otvorení sme aj pre spoluprácu s firmami, ktoré by si chceli objednať väčšie množstvo tričiek s vlastným logom.
              <br><br>
              <a href="https://www.instagram.com/by_andrejka/" target="_blank" title="instagram" class="font-medium text-orange flex">
                <i class="fa-brands fa-instagram text-xl mr-2"></i> by_andrejka
              </a>
            </div>
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
            showModal2: false,
            closeIconClose: "fa-solid fa-xmark text-md",
            closeIconArrowLeft: "fa-solid fa-arrow-left text-md",
        };
    },
    methods: {
        closeModal2() {
            this.showModal2 = false;
            this.$emit("close-modal");
            this.enableBodyScroll();
        },
        enableBodyScroll() {
            document.body.style.overflow = 'auto';
        },
    },
};
</script>

