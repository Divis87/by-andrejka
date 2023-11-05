<div >
<button @click="openModal2" class="bg-blue-500 text-white p-2">
    Otvoriť modálne okno
</button>
<div v-if="showModal2" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="bg-white w-1/2 p-4 shadow-lg relative">
        <div class="flex items-start justify-between">
            <div class="mr-3 flex h-7 items-center">
                <h2 class="text-lg font-medium text-gray-900">
                    Pre hoho to bude?
                </h2>
            </div>
            <div class="ml-3 flex h-7 items-center">
                <modal-close-button :icon-class="closeIconClose" @custom-click="closeModal2"></modal-close-button>
            </div>
        </div>
        <div class="mt-5 mb-5">
            <h2 class="text-lg font-medium text-gray-900">
                Pre hoho to bude?
            </h2>
        </div>
    </div>
</div>
</div>
<script setup>
import ModalCloseButton from "@/components/ModalIco.vue";
</script>