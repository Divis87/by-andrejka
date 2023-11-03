<template>
    <button type="button" data-hs-overlay="#hs-overlay-unstyled" aria-controls="hs-overlay-unstyled" aria-label="Toggle navigation">
        Open sidebar
    </button>

    <div id="hs-overlay-unstyled" class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white pt-3 pb-5 overflow-y-auto lg:block lg:translate-x-0 lg:right-auto lg:bottom-0">
        <div class="flex justify-end px-3">
            <button type="button" class="w-8 h-8" data-hs-overlay="#hs-overlay-unstyled" aria-controls="hs-overlay-unstyled" aria-label="Toggle navigation">
                <span class="sr-only">Close Sidebar</span>
                <svg class="w-3 h-3" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </button>
        </div>
    </div>
    <div class="bg-orange p-10">
        <div class="step-1">
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
        </div>

        <div class="step-2">
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
        </div>

        <div class="step-3">
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
        </div>

        <div class="step-4">
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
