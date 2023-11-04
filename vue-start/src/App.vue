<template>
    <div class="bg-orange p-10">
        <div class="step-1">
            <div class="mb-5">
                <div>
                    <label for="item1">Item 1</label>
                    <input type="radio" id="item1" value="item1" v-model="selectedItem" @change="selectedItemFilled = true; updateSelectedItemText">
                </div>
                <div>
                    <label for="item2">Item 2</label>
                    <input type="radio" id="item2" value="item2" v-model="selectedItem" @change="selectedItemFilled = true; updateSelectedItemText">
                </div>
            </div>
            <button @click="openModal('step-2')"
                    :disabled="!selectedItemFilled"
                    :class="{ 'opacity-50 cursor-not-allowed': !selectedItemFilled }"
                    class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Continue
            </button>
        </div>
    </div>

    <div>
        <div v-if="showModal" :class="{ 'show-modal': showModal }" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75"></div>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full animate-slide-in duration-300">
                        <div class="pointer-events-auto w-screen max-w-md">

                            <!-- step-2 -->
                            <div class="step-2 flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                                 v-show="currentStep === 'step-2'">
                                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <div class="mr-3 flex h-7 items-center">
                                            <modal-close-button :icon-class="closeIconArrowLeft" @custom-click="closeModal"></modal-close-button>
                                        </div>
                                        <div class="ml-3 flex h-7 items-center">
                                            <modal-close-button :icon-class="closeIconClose" @custom-click="closeModal"></modal-close-button>
                                        </div>
                                    </div>
                                    <div class="mt-5 mb-5">
                                        <h2 class="text-lg font-medium text-gray-900">
                                            Pre hoho to bude?
                                        </h2>
                                    </div>
                                    <div class="mb-5">
                                        <div>
                                            <label for="gender-item1">Mužské</label>
                                            <input type="radio" id="gender-item1" value="Men" v-model="genderItem" @change="genderFilled = true; updateSelectedGender">
                                        </div>
                                        <div>
                                            <label for="gender-item2">Ženské</label>
                                            <input type="radio" id="gender-item2" value="Women" v-model="genderItem" @change="genderFilled = true; updateSelectedGender">
                                        </div>
                                        <div>
                                            <label for="gender-item3">Detské</label>
                                            <input type="radio" id="gender-item3" value="Kids" v-model="genderItem" @change="genderFilled = true; updateSelectedGender">
                                        </div>
                                    </div>
                                </div>

                                <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div class="flex justify-between text-base font-medium text-gray-900">
                                        <p>Cena aj s poštovným</p>
                                        <p>{{ subtotalPrice }} €</p>
                                    </div>
                                    <p class="text-sm text-gray-500">
                                        {{ selectedItemText }}
                                    </p>
                                    <div class="mt-6">
                                        <button @click="nextStep('step-3')" v-show="currentStep === 'step-2'"
                                                :disabled="!genderFilled"
                                                :class="{ 'opacity-50 cursor-not-allowed': !genderFilled }"
                                                class="flex items-center justify-center w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-background-color duration-300">
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- step-3 -->
                            <div class="step-3 flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                                 v-show="currentStep === 'step-3'">
                                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <div class="mr-3 flex h-7 items-center">
                                            <modal-close-button :icon-class="closeIconArrowLeft" @click="previousStep('step-2')" v-show="currentStep === 'step-3'"></modal-close-button>
                                        </div>
                                        <div class="ml-3 flex h-7 items-center">
                                            <modal-close-button :icon-class="closeIconClose" @custom-click="closeModal"></modal-close-button>
                                        </div>
                                    </div>
                                    <div class="mt-5 mb-5">
                                        <h2 class="text-lg font-medium text-gray-900">
                                            Vyberte veľkosť
                                        </h2>
                                    </div>
                                    <div class="mb-5">
                                        <input type="text" v-model="size" placeholder="Veľkosť" @change="sizeFilled = true; updateSize">
                                    </div>
                                </div>

                                <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div class="flex justify-between text-base font-medium text-gray-900">
                                        <p>Cena aj s poštovným</p>
                                        <p>{{ subtotalPrice }} €</p>
                                    </div>
                                    <p class="text-sm text-gray-500">
                                        {{ selectedItemText }}
                                    </p>
                                    <div class="mt-6">
                                        <button @click="nextStep('step-4')" v-show="currentStep === 'step-3'"
                                                :disabled="!sizeFilled"
                                                :class="{ 'opacity-50 cursor-not-allowed': !sizeFilled }"
                                                class="flex items-center justify-center w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-background-color duration-300">
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="step-4 flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                                 v-show="currentStep === 'step-4'">
                                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <div class="mr-3 flex h-7 items-center">
                                            <modal-close-button :icon-class="closeIconArrowLeft" @click="previousStep('step-3')" v-show="currentStep === 'step-4'"></modal-close-button>
                                        </div>
                                        <div class="ml-3 flex h-7 items-center">
                                            <modal-close-button :icon-class="closeIconClose" @custom-click="closeModal"></modal-close-button>
                                        </div>
                                    </div>
                                    <div class="mt-5 mb-5">
                                        <h2 class="text-lg font-medium text-gray-900">
                                            step-4
                                        </h2>
                                    </div>
                                    <div class="mb-5">
                                        <div class="w-full">
                                            <div>
                                                <img class="h-full w-full mb-5" v-if="imageUrl" :src="imageUrl"/>
                                            </div>
                                            <label class="block">
                                                <span class="sr-only">Choose photo</span>
                                                <input type="file" @change="onFileChange"
                                                       class="block w-full text-sm text-gray
                                                            file:mr-4 file:py-3 file:px-5
                                                            file:rounded-full file:border-0
                                                            file:text-sm file:font-semibold
                                                            file:bg-violet-50 file:text-gray
                                                            hover:file:bg-violet-100
                                                          "/>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div class="flex justify-between text-base font-medium text-gray-900">
                                        <p>Cena aj s poštovným</p>
                                        <p>{{ subtotalPrice }} €</p>
                                    </div>
                                    <p class="text-sm text-gray-500">
                                        {{ selectedItemText }}
                                    </p>
                                    <div class="mt-6">
                                        <button @click="nextStep('step-5')" v-show="currentStep === 'step-4'"
                                                :disabled="!imageUploaded"
                                                :class="{ 'opacity-50 cursor-not-allowed': !imageUploaded }"
                                                class="flex items-center justify-center w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-background-color duration-300">
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="step-5 flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                                 v-show="currentStep === 'step-5'">
                                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <div class="mr-3 flex h-7 items-center">
                                            <modal-close-button :icon-class="closeIconArrowLeft" @click="previousStep('step-4')" v-show="currentStep === 'step-5'"></modal-close-button>
                                        </div>
                                        <div class="ml-3 flex h-7 items-center">
                                            <modal-close-button :icon-class="closeIconClose" @custom-click="closeModal"></modal-close-button>
                                        </div>
                                    </div>
                                    <div class="mt-5 mb-5">
                                        <h2 class="text-lg font-medium text-gray-900">
                                            Vaše kontaktné údaje
                                        </h2>
                                    </div>
                                    <div class="mb-5">
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Vaše celé meno:</label>
                                        <div class="relative">
                                            <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                                <i class="fa-regular fa-user text-gray-500"></i>
                                            </div>
                                            <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                                                   v-model="name"
                                                   placeholder="Meno Priezvisko"
                                                   required
                                                   @change="updateContact">
                                        </div>
                                    </div>
                                    <div class="mb-5">
                                        <label for="mail" class="block mb-2 text-sm font-medium text-gray-900">E-mailová adresa:</label>
                                        <input type="email" id="mail" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                               v-model="email"
                                               placeholder="mail@mail.sk"
                                               required
                                               @change="updateContact">
                                    </div>
                                    <div class="mb-5">
                                        <textarea v-model="text"
                                                  placeholder="Adresa"
                                                  @change="updateContact">
                                        </textarea>
                                    </div>
                                </div>
                                <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div class="flex justify-between text-base font-medium text-gray-900">
                                        <p>Cena aj s poštovným</p>
                                        <p>{{ subtotalPrice }} €</p>
                                    </div>
                                    <p class="text-sm text-gray-500">
                                        {{ selectedItemText }}
                                    </p>
                                    <div class="mt-6">
                                        <button @click="upload"
                                                :disabled="!contactFilled"
                                                :class="{ 'opacity-50 cursor-not-allowed': !contactFilled }"
                                                class="flex items-center justify-center w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-background-color duration-300">
                                            Potvrdiť</button>
                                    </div>
                                </div>
                            </div>

                            <div class="step-6 flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                                 v-show="currentStep === 'step-6'">
                                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <div class="ml-3 flex h-7 items-center">
                                            <modal-close-button :icon-class="closeIconClose" @custom-click="closeModal"></modal-close-button>
                                        </div>
                                    </div>
                                    <div class="mt-5 mb-5">
                                        <h2 class="text-lg font-medium text-gray-900">
                                            Ďakujeme za objednávku.
                                        </h2>
                                    </div>

                                    <div class="mb-5">
                                        V najbližšej dobe Vám bude zaslaná faktúra na uvedený e-mail.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Success message -->
        <div v-if="message" class="transition fixed z-20 bottom-0 transform inset-x-0 px-4 py-6 sm:px-6">
            <div class="p-2 rounded-lg bg-green shadow-lg sm:p-3">
                <div class="flex items-center justify-between flex-wrap">
                    <div class="w-0 flex-1 flex items-center">
                        <img class="h-6" src="/_next/static/media/tailwind-ui-logo-on-dark.e075f076d1193a2062dc60571c75a1d2.svg" alt="">
                        <p class="ml-3 font-medium text-white truncate">
                            <strong>{{ message }}</strong>
                        </p>
                    </div>
                    <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                        <button @click="hideMessage" type="button" class="-mr-1 flex p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800" aria-label="Hide banner">
                            <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
import ModalCloseButton from '@/components/ModalIco.vue'; // Import the ModalCloseButton component

export default {
    components: {
        ModalCloseButton,
    },
    data() {
        return {
            currentStep: 'step-1',
            showModal: false,
            name: '',
            password: '',
            text: '',
            email: '',
            image: null,
            imageUrl: '',
            message: '',
            selectedItem: '',
            size: '',
            genderItem: '',
            closeIconClose: 'fa-solid fa-xmark text-md',
            closeIconArrowLeft: 'fa-solid fa-arrow-left text-md',
            selectedItemText: '',
            selectedItemFilled: false,
            genderFilled: false,
            sizeFilled: false,
            contactFilled: false,
            imageUploaded: false,
        }
    },
    computed: {
        // Define a computed property to calculate the subtotal based on selected item
        subtotalPrice() {
            // Define a mapping of item values to their prices in Euros
            const itemPricesInEuros = {
                item1: 50, // Price in Euros
                item2: 20, // Price in Euros
            };

            // Get the price based on the selected item, default to 0 if not found
            const priceInEuros = itemPricesInEuros[this.selectedItem] || 0;

            return priceInEuros.toFixed(2); // Format the price as a string with 2 decimal places
        },
    },
    methods: {
        nextStep(step) {
            // You can add validation logic here if needed
            this.currentStep = step;
            this.updateSelectedItemText();
        },
        previousStep(step) {
            this.currentStep = step;
            this.updateSelectedItemText();
        },
        openModal(step) {
            this.currentStep = step;
            this.showModal = true;
            this.updateSelectedItemText();
        },
        closeModal() {
            this.showModal = false;
        },
        updateSelectedItemText() {
            if (this.currentStep === 'step-2') {
                // Display text for step-2
                this.selectedItemText = `Selected Item: ${this.selectedItem}`;
            } else if (this.currentStep === 'step-3') {
                // Display text for step-3
                this.selectedItemText = `Selected Item: ${this.selectedItem}, Gender: ${this.genderItem}`;
            } else if (this.currentStep === 'step-4' || this.currentStep === 'step-5') {
                // Display text for step-4 and step-5
                this.selectedItemText = `Selected Item: ${this.selectedItem}, Gender: ${this.genderItem}, Size: ${this.size}`;
            }
        },
        updateContact() {
            this.contactFilled = this.name && this.email && this.text;
        },
        onFileChange(e) {
            this.image = e.target.files[0];
            this.imageUrl = URL.createObjectURL(this.image);
            this.imageUploaded = true; // Image has been uploaded
        },
        upload() {
            let formData = new FormData();
            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('text', this.text);
            formData.append('selectedItem', this.selectedItem);
            formData.append('size', this.size);
            formData.append('image', this.image);
            formData.append('genderItem', this.genderItem);

            axios
                .post('http://localhost:3000/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((response) => {
                    this.message = response.data.message;
                    console.log('File uploaded successfully.');

                    // Set a timer to automatically hide the message after 10 seconds
                    setTimeout(() => {
                        this.message = ''; // Clear the message after 10 seconds
                    }, 10000);

                    // Display the success message in step-6
                    this.currentStep = 'step-6';
                })
                .catch((err) => {
                    console.error(err);
                    this.message = 'An error occurred while uploading the file.';
                });
        },
        hideMessage() {
            this.message = '';
        }
    }
}
</script>
