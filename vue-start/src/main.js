// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'

createApp(App).mount('#app')

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}
