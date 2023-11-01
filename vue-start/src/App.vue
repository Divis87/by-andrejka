<template>
    <div class="dark:bg-black p-10">
        <input type="text" v-model="name" placeholder="Meno">
        <input type="email" v-model="email" placeholder="E-mail">
        <textarea v-model="text" placeholder="Správa"></textarea>
        <select v-model="selectedItem">
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
        </select>
        <input type="text" v-model="size" placeholder="Veľkosť">
        <input type="file" @change="onFileChange">
        <img v-if="imageUrl" :src="imageUrl" />
        <button @click="upload" class="text-green">Upload</button>
        <p v-if="message" class="text-green">{{ message }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
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
                console.log('File uploaded successfully.')
            }).catch(err => {
                console.error(err);
                this.message = 'An error occurred while uploading the file.';
            });
        }
    }
}
</script>
