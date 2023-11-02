<template>
    <div>
        <button @click="openModal" class="bg-blue-500 text-white p-2">
            Otvoriť modálne okno
        </button>
        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div class="bg-white w-1/2 p-4 shadow-lg relative">
                <button @click="closeModal" class="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3.293 4.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
                <h2 class="text-xl font-bold mb-4">Modálne okno</h2>
                <p>Tu môže byť obsah vášho modálneho okna.</p>
                <button @click="closeModal" class="bg-blue-500 text-white p-2 mt-4">Zavrieť</button>
            </div>
        </div>
    </div>

    <div class="bg-gray-500 p-10">
        <div class="mb-5">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vaše celé meno:</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                </div>
                <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       v-model="name"
                       placeholder="Meno Priezvisko"
                       required>
            </div>
        </div>
        <div class="mb-5">
            <label for="mail" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mailová adresa:</label>
            <input type="email" id="mail" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   v-model="email"
                   placeholder="mail@mail.sk"
                   required>
        </div>
        <select v-model="selectedItem">
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
        </select>
        <input type="text" v-model="size" placeholder="Veľkosť">
        <textarea v-model="text" placeholder="Správa"></textarea>
        <input type="file" @change="onFileChange">
        <img v-if="imageUrl" :src="imageUrl" />
        <button @click="upload" class="text-green">Upload</button>

        <!-- Success message -->
        <div v-if="message" class="fixed top-0 left-0 right-0 bg-green-500 text-white p-4 text-center">
            <strong>{{ message }}</strong>
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
            selectedItem: 'item1',
            size: '',
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

            axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                this.message = response.data.message;
                console.log('File uploaded successfully.');

                // Set a timer to automatically hide the message after 5 seconds
                setTimeout(() => {
                    this.message = '';
                }, 10000);
            }).catch(err => {
                console.error(err);
                this.message = 'An error occurred while uploading the file.';
            });
        }
    }
}
</script>
