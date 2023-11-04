<template>
    <div>
        <button @click="openModal" class="bg-blue-500 text-white p-2">
            Otvoriť modálne okno
        </button>

        <div v-if="showModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500"></div>

            <div class="fixed inset-0 overflow-hidden transform translate-x-0 transition-transform duration-500">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full transform translate-x-0 transition-transform">
                        <div class="pointer-events-auto w-screen max-w-md">
                            <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                        <div class="ml-3 flex h-7 items-center">
                                            <button @click="closeModal" type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                                <span class="absolute -inset-0.5"></span>
                                                <span class="sr-only">Close panel</span>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="mt-8">
                                        <div class="flow-root">
                                            <ul role="list" class="-my-6 divide-y divide-gray-200">
                                                <li class="flex py-6">
                                                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center">
                                                    </div>

                                                    <div class="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                                <h3>
                                                                    <a href="#">Throwback Hip Bag</a>
                                                                </h3>
                                                                <p class="ml-4">$90.00</p>
                                                            </div>
                                                            <p class="mt-1 text-sm text-gray-500">Salmon</p>
                                                        </div>
                                                        <div class="flex flex-1 items-end justify-between text-sm">
                                                            <p class="text-gray-500">Qty 1</p>

                                                            <div class="flex">
                                                                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="flex py-6">
                                                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="h-full w-full object-cover object-center">
                                                    </div>

                                                    <div class="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                                <h3>
                                                                    <a href="#">Medium Stuff Satchel</a>
                                                                </h3>
                                                                <p class="ml-4">$32.00</p>
                                                            </div>
                                                            <p class="mt-1 text-sm text-gray-500">Blue</p>
                                                        </div>
                                                        <div class="flex flex-1 items-end justify-between text-sm">
                                                            <p class="text-gray-500">Qty 1</p>

                                                            <div class="flex">
                                                                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div class="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>$262.00</p>
                                    </div>
                                    <p class="text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                    <div class="mt-6">
                                        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                            Checkout
                                        </a>
                                    </div>
                                </div>
                            </div>
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
