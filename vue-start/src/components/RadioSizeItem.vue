<template>
    <li>
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
            class="flex w-full py-5 px-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-100 hover:border-gray-300 transition duration-300 peer-checked:border-success peer-checked:text-green peer-checked:bg-gray-50"
        >
            <div class="text-md leading-snug text-center w-full">
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
