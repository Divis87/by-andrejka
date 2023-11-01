<template>
    <div>
        <input type="text" v-model="name" placeholder="Meno">
        <input type="email" v-model="email" placeholder="E-mail">
        <input type="file" @change="onFileChange">
        <img v-if="imageUrl" :src="imageUrl" />
        <button @click="upload">Upload</button>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            password: '',
            email: '',
            image: null,
            imageUrl: '',
            message: ''

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
