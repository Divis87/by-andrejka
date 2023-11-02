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
<script setup>
</script>