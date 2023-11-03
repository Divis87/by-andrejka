<template>
    <div>
        <button @click="openModal" class="bg-blue-500 text-white p-2">
            Otvoriť modálne okno
        </button>
        <div v-if="showModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                </div>
                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button" @click="closeModal" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="bg-orange p-10">
        <div class="step-1" v-show="currentStep === 'step-1'">
            <div class="mb-5">
                <div>
                    <label for="item1">Item 1</label>
                    <input type="radio" id="item1" value="item1" v-model="selectedItem">
                </div>
                <div>
                    <label for="item2">Item 2</label>
                    <input type="radio" id="item2" value="item2" v-model="selectedItem">
                </div>
            </div>
            <button @click="nextStep('step-2')" v-show="currentStep === 'step-1'">Continue</button>
        </div>

        <div class="step-2" v-show="currentStep === 'step-2'">
            <div class="mb-5">
                <button @click="previousStep('step-1')" v-show="currentStep === 'step-2'">Back</button>
            </div>
            <div class="mb-5">
                <div>
                    <label for="gender-item1">Mužské</label>
                    <input type="radio" id="gender-item1" value="Men" v-model="genderItem">
                </div>
                <div>
                    <label for="gender-item2">Ženské</label>
                    <input type="radio" id="gender-item2" value="Women" v-model="genderItem">
                </div>
                <div>
                    <label for="gender-item3">Detské</label>
                    <input type="radio" id="gender-item3" value="Kids" v-model="genderItem">
                </div>
            </div>
            <div class="mb-5">
                <input type="text" v-model="size" placeholder="Veľkosť">
            </div>
            <button @click="nextStep('step-3')" v-show="currentStep === 'step-2'">Continue</button>
        </div>

        <div class="step-3" v-show="currentStep === 'step-3'">
            <div class="mb-5">
                <button @click="previousStep('step-2')" v-show="currentStep === 'step-3'">Back</button>
            </div>
            <div class="mb-5">
                <div class="w-full">
                    <div>
                        <img class="h-64 w-64 object-cover rounded-full mb-5" v-if="imageUrl" :src="imageUrl"/>
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
            <button @click="nextStep('step-4')" v-show="currentStep === 'step-3'">Continue</button>
        </div>

        <div class="step-4" v-show="currentStep === 'step-4'">
            <div class="mb-5">
                <button @click="previousStep('step-3')" v-show="currentStep === 'step-4'">Back</button>
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
                           required>
                </div>
            </div>

            <div class="mb-5">
                <label for="mail" class="block mb-2 text-sm font-medium text-gray-900">E-mailová adresa:</label>
                <input type="email" id="mail" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       v-model="email"
                       placeholder="mail@mail.sk"
                       required>
            </div>

            <div class="mb-5">
                <textarea v-model="text" placeholder="Správa"></textarea>
            </div>

            <div class="mb-5">
                <button @click="upload" class="text-green">Potvrdiť</button>
            </div>
        </div>

        <!-- Success message -->
        <div v-if="message" class="transition transform fixed z-100 bottom-0 inset-x-0 pb-2 sm:pb-5 opacity-100 scale-100 translate-y-0 ease-out duration-500">
            <div class="max-w-screen-xl mx-auto px-2 sm:px-4">
                <div class="p-2 rounded-lg bg-gray-900 shadow-lg sm:p-3">
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
    </div>

</template>


<script>
import axios from 'axios';

export default {
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
            genderItem: ''
        }
    },

    methods: {
        nextStep(step) {
            // You can add validation logic here if needed
            this.currentStep = step;
        },
        previousStep(step) {
            this.currentStep = step;
        },
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        onFileChange(e) {
            this.image = e.target.files[0];
            this.imageUrl = URL.createObjectURL(this.image);
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

            axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                this.message = response.data.message;
                console.log('File uploaded successfully.');

                // Set a timer to automatically hide the message after 10 seconds
                setTimeout(() => {
                    this.message = '';
                }, 10000);
            }).catch(err => {
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
