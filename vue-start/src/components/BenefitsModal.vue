<template>
    <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
        <div class="flex-1 overflow-y-auto">
            <div class="flex items-start justify-between p-4 bg-gray-100 sticky top-0">
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
            <div class="text-md text-gray-600 p-4">
                Ak nemáte vlastný nápad, alebo chcete niečo originálne a kreatívne,
                <span class="font-medium">môžete si u nás objednať aj službu navrhovania dizajnu za skvelú cenu.</span>
                Stačí nám napísať do poznámky v našom konfigurátory vašu predstavu a my vám vytvorím niekoľko návrhov na výber.
                <h3 class="text-md font-medium text-orange mt-8 mb-4">
                    Objednávajte si jedinečný kúsok od by-andrejka a získajte tieto výhody:
                </h3>
                <ul role="list" class="list-none space-y-3">
                    <li class="flex">
                        <span class="pr-3">🎨</span>
                        <span>
                          <span class="font-medium">Ručne maľované: </span> Každý kus je originál a jedinečný. Nie je to masová produkcia, ale umelecké dielo, ktoré vytváram s láskou a pozornosťou k detailom.
                        </span>
                    </li>
                    <li class="flex">
                        <span class="pr-3">🌈</span>
                        <span>
                          <span class="font-medium">Originálne a jedinečné oblečenie,</span> ktoré vám dodá štýl a osobnosť.
                        </span>
                    </li>
                    <li class="flex">
                        <span class="pr-3">👍</span>
                        <span>
                          <span class="font-medium">Kvalitné a trvanlivé materiály,</span> ktoré vyrždia dlho a nevyblednú.
                        </span>
                    </li>
                    <li class="flex">
                        <span class="pr-3">🚚</span>
                        <span>
                          <span class="font-medium">Rýchla a bezpečná doprava,</span> vaše ručne maľované oblečenie priamo domov. Neplatíte žiadne poplatky ani dodatočné náklady.
                        </span>
                    </li>
                </ul>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
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

