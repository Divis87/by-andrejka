<template>
    <li class="mb-4">
        <input
            type="radio"
            :id="id"
            :value="value"
            :name="name"
            :checked="value === selectedValue"
            @change="onRadioChange"
            class="hidden peer"
        >
        <label
            :for="id"
            class="flex w-full p-5 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-100 hover:border-gray-300 transition duration-300 peer-checked:border-success peer-checked:text-green peer-checked:bg-gray-50"
        >
            <div class="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-2 border-gray-200">
                <img
                    :src="img"
                    :alt="value"
                    class="h-full w-full object-cover object-center"
                >
            </div>
            <div class="ml-4 flex items-center text-md leading-snug text-left">
                <h3 class="font-medium">
                    {{ label }}
                </h3>
            </div>
        </label>
    </li>
</template>

<script>
export default {
    props: {
        id: String,
        label: String,
        value: String,
        img: String,
        name: String,
        selectedValue: String,
    },
    methods: {
        onRadioChange() {
            this.$emit("update:selectedValue", this.value);
        },
    },
};
</script>
