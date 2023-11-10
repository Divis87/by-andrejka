<template>
    <header class="absolute inset-x-0 top-0">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
                </a>
            </div>
            <div class="flex gap-x-8 lg:gap-x-12">
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Product</a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                instagram
            </div>
        </nav>
    </header>
    <div class="relative isolate px-6 pt-14 lg:px-8">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
        <div class="mx-auto max-w-2xl py-32">
            <div class="text-center">
                <h1 class="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
                    Ručne maľované rifľové bundy, tričká alebo body pre deti.
                </h1>
                <p class="mt-7 text-md sm:text-lg leading-7 sm:leading-8 text-gray-700">
                    Ak máte vlastný nápad na dizajn, môžete si ho jednoducho nahrať cez náš konfigurátor a mi vám ho pre vás ručne namaľujeme na vybraný kus oblečenia.
                    Máte&nbsp;na výber z viacerých farieb a veľkostí, takže si určite nájdete to, čo sa vám páči.
                </p>
                <div class="my-7 flex justify-center">
                    <button @click="openModal2"  class="relative rounded-full w-full sm:w-auto leading-snug px-3 sm:px-5 py-3 text-sm leading-6 text-gray-700 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        💡 Nemáte vlastný design? <span class="font-semibold text-orange"><span class="absolute inset-0" aria-hidden="true"></span>Navrhneme Vám niekoľko návrhov za skvelú cenu.</span>
                    </button>
                </div>

                <div class="mx-auto sm:max-w-md">
                    <div class="step-1 mt-10">
                        <h2 class="text-2xl mb-8 font-bold tracking-tight text-gray-900 text-center">
                            Máte záujem o:
                        </h2>
                        <ul>
                            <li class="mb-4">
                                <input type="radio"
                                       id="item1"
                                       name="product"
                                       value="Ručne maľovaná riflová bunda"
                                       class="hidden peer"
                                       v-model="selectedItem"
                                       @change="updateSelectedItemText"
                                       @click="openModal('step-2')">
                                <label for="item1"
                                       class="flex w-full p-5 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer hover:text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition duration-300
                                     peer-checked:border-success peer-checked:text-green peer-checked:bg-gray-50">
                                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-2 border-gray-200">
                                        <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                             alt=""
                                             class="h-full w-full object-cover object-center">
                                    </div>
                                    <div class="ml-4 flex flex-1 flex-col text-md leading-snug text-left">
                                        <div>
                                            <div class="flex font-medium text-gray-900">
                                                <h3 class="-mt-1">
                                                    Ručne maľovaná riflová bunda
                                                </h3>
                                            </div>
                                            <p class="mt-1 mb-2 text-gray-500 text-sm text-green leading-relaxed">
                                                <i class="fa-solid fa-check mr-1"></i> Malovanie trvá {{ item1Days }} prac. dni
                                                <br>
                                                <i class="fa-solid fa-check mr-1"></i> Dopravu a balné máte zdarma
                                            </p>
                                        </div>
                                        <div class="flex flex-1 items-end justify-between">
                                            <div class="flex">
                                                <div class="font-medium text-gray-900">
                                                    {{ item1SubtotalPrice }} €
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ml-4 flex justify-center flex-3 flex-col text-md text-gray-500">
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                </label>
                            </li>
                            <li class="mb-4">
                                <input
                                    type="radio"
                                    id="item2"
                                    name="product"
                                    value="Ručne maľované tričko"
                                    class="hidden peer"
                                    v-model="selectedItem"
                                    @change="updateSelectedItemText"
                                    @click="openModal('step-2')">
                                <label for="item2"
                                       class="flex w-full p-5 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer hover:text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition duration-300
                                     peer-checked:border-success peer-checked:text-green peer-checked:bg-gray-50">
                                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-2 border-gray-200">
                                        <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                             alt=""
                                             class="h-full w-full object-cover object-center">
                                    </div>
                                    <div class="ml-4 flex flex-1 flex-col text-md leading-snug text-left">
                                        <div>
                                            <div class="flex font-medium text-gray-900">
                                                <h3 class="-mt-1">
                                                    Ručne maľované tričko
                                                </h3>
                                            </div>
                                            <p class="mt-1 mb-2 text-gray-500 text-sm text-green leading-relaxed">
                                                <i class="fa-solid fa-check mr-1"></i> Malovanie trvá {{ item2Days }} prac. dni
                                                <br>
                                                <i class="fa-solid fa-check mr-1"></i> Dopravu a balné máte zdarma
                                            </p>
                                        </div>
                                        <div class="flex flex-1 items-end justify-between">
                                            <div class="flex">
                                                <div class="font-medium text-gray-900">
                                                    {{ item2SubtotalPrice }} €
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ml-4 flex justify-center flex-3 flex-col text-md text-gray-500">
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div class="relative right-0 aspect-[1155/678] w-[45rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
    </div>

    <SidebarModal :show="showModal" @close-modal="showModal = false">

        <!-- step-2 -->
        <div class="step-2 flex h-full flex-col overflow-y-scroll bg-white shadow-xl min-w-[320px]"
             v-show="currentStep === 'step-2'">
            <div class="flex-1 overflow-y-auto">
                <div class="flex items-start justify-between py-4 px-6 bg-gray-100 sticky top-0">
                    <div class="mr-3 flex h-7 items-center">
                        <modal-close-button :icon-class="closeIconArrowLeft" @custom-click="closeModal"></modal-close-button>
                    </div>
                    <div class="flex h-7 items-center">
                        <h3 class="font-medium text-gray-700">
                            Pre hoho to bude?
                        </h3>
                    </div>
                    <div class="ml-3 flex h-7 items-center">
                        <modal-close-button :icon-class="closeIconClose" @custom-click="closeModal"></modal-close-button>
                    </div>
                </div>
                <div class="p-6">
                    <div class="mb-5">
                        <ul>
                            <RadioItem
                                id="gender-item1"
                                label="Pánske"
                                value="Pánske"
                                img="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                :name="genderItem"
                                :selectedValue="genderItem"
                                @update:selectedValue="genderItem = $event; genderFilled = true; updateSelectedItemText"
                            ></RadioItem>
                            <RadioItem
                                id="gender-item2"
                                label="Dámske"
                                value="Dámske"
                                img="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                :name="genderItem"
                                :selectedValue="genderItem"
                                @update:selectedValue="genderItem = $event; genderFilled = true; updateSelectedItemText"
                            ></RadioItem>
                            <RadioItem
                                id="gender-item3"
                                label="Detské"
                                value="Detské"
                                img="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                :name="genderItem"
                                :selectedValue="genderItem"
                                @update:selectedValue="genderItem = $event; genderFilled = true; updateSelectedItemText"
                            ></RadioItem>
                        </ul>
                    </div>
                    <div>
                        <button @click="nextStep('step-3')" v-show="currentStep === 'step-2'"
                                :disabled="!genderFilled"
                                :class="{ 'opacity-50 cursor-not-allowed': !genderFilled }"
                                class="flex items-center justify-center w-full rounded-md border border-transparent bg-green px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 transition-background-color duration-300">
                            Pokračovať na ďalší krok
                        </button>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-200 p-6 pt-4">
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Cena:</p>
                    <p>{{ subtotalPrice }} €</p>
                </div>
                <p class="mt-1 mb-1 text-gray-500 text-sm text-green leading-relaxed">
                    <i class="fa-solid fa-check mr-1"></i> {{ subtotalDays }} prac. dni, dopravu a balné máte zdarma
                </p>
                <p class="text-sm text-gray-500" v-html="selectedItemText">
                </p>
            </div>
        </div>

        <!-- step-3 -->
        <div class="step-3 flex h-full flex-col overflow-y-scroll bg-white shadow-xl min-w-[320px]"
             v-show="currentStep === 'step-3'">
            <div class="flex-1 overflow-y-auto">
                <div class="flex items-start justify-between py-4 px-6 bg-gray-100 sticky top-0">
                    <div class="mr-3 flex h-7 items-center">
                        <modal-close-button :icon-class="closeIconArrowLeft" @click="previousStep('step-2')" v-show="currentStep === 'step-3'"></modal-close-button>
                    </div>
                    <div class="flex h-7 items-center">
                        <h3 class="font-medium text-gray-700">
                            XXX
                        </h3>
                    </div>
                    <div class="ml-3 flex h-7 items-center">
                        <modal-close-button :icon-class="closeIconClose" @custom-click="closeModal"></modal-close-button>
                    </div>
                </div>
                <div class="p-6">
                    <div class="mb-5">
                        <div>
                            <label for="color-item1">Biela</label>
                            <input type="radio" id="color-item1" value="White" v-model="colorItem" @change="updateColorFilled">
                        </div>
                        <div>
                            <label for="color-item2">Sivá</label>
                            <input type="radio" id="color-item2" value="Gray" v-model="colorItem" @change="updateColorFilled">
                        </div>
                        <div>
                            <label for="color-item3">Čierna</label>
                            <input type="radio" id="color-item3" value="Black" v-model="colorItem" @change="updateColorFilled">
                        </div>
                    </div>
                    <div>
                        <button @click="nextStep('step-4')" v-show="currentStep === 'step-3'"
                                :disabled="!colorFilled"
                                :class="{ 'opacity-50 cursor-not-allowed': !colorFilled }"
                                class="flex items-center justify-center w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-background-color duration-300">
                            Continue
                        </button>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-200 p-6 pt-4">
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Cena:</p>
                    <p>{{ subtotalPrice }} €</p>
                </div>
                <p class="mt-1 mb-1 text-gray-500 text-sm text-green leading-relaxed">
                    <i class="fa-solid fa-check mr-1"></i> {{ subtotalDays }} prac. dni, dopravu a balné máte zdarma
                </p>
                <p class="text-sm text-gray-500" v-html="selectedItemText">
                </p>
            </div>
        </div>

        <!-- step-4 -->
        <div class="step-4 flex h-full flex-col overflow-y-scroll bg-white shadow-xl min-w-[320px]"
             v-show="currentStep === 'step-4'">
            <div class="flex-1 overflow-y-auto">
                <div class="flex items-start justify-between py-4 px-6 bg-gray-100 sticky top-0">
                    <div class="mr-3 flex h-7 items-center">
                        <modal-close-button :icon-class="closeIconArrowLeft" @click="previousStep('step-3')" v-show="currentStep === 'step-4'"></modal-close-button>
                    </div>
                    <div class="flex h-7 items-center">
                        <h3 class="font-medium text-gray-700">
                            XXX
                        </h3>
                    </div>
                    <div class="ml-3 flex h-7 items-center">
                        <modal-close-button :icon-class="closeIconClose" @custom-click="closeModal"></modal-close-button>
                    </div>
                </div>
                <div class="p-6">
                    <div v-if="genderItem === 'Kids'">
                        <div class="mb-5">
                            <div>
                                <label for="size-item1">122</label>
                                <input type="radio" id="size-item1" value="122" v-model="size" @change="updateSizeFilled">
                            </div>
                            <div>
                                <label for="size-item2">130</label>
                                <input type="radio" id="size-item2" value="130" v-model="size" @change="updateSizeFilled">
                            </div>
                            <div>
                                <label for="size-item3">136</label>
                                <input type="radio" id="size-item3" value="136" v-model="size" @change="updateSizeFilled">
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="mb-5">
                            <ul class="grid grid-cols-4 gap-4">
                                <RadioSizeItem
                                    id="size-item-xs"
                                    label="XS"
                                    value="XS"
                                    :name="size"
                                    :selectedValue="size"
                                    @update:selectedValue="size = $event; sizeFilled = true; updateSizeFilled"
                                ></RadioSizeItem>
                                <RadioSizeItem
                                    id="size-item-s"
                                    label="S"
                                    value="S"
                                    :name="size"
                                    :selectedValue="size"
                                    @update:selectedValue="size = $event; sizeFilled = true; updateSizeFilled"
                                ></RadioSizeItem>
                                <RadioSizeItem
                                    id="size-item-m"
                                    label="M"
                                    value="M"
                                    :name="size"
                                    :selectedValue="size"
                                    @update:selectedValue="size = $event; sizeFilled = true; updateSizeFilled"
                                ></RadioSizeItem>
                                <RadioSizeItem
                                    id="size-item-l"
                                    label="L"
                                    value="L"
                                    :name="size"
                                    :selectedValue="size"
                                    @update:selectedValue="size = $event; sizeFilled = true; updateSizeFilled"
                                ></RadioSizeItem>
                                <RadioSizeItem
                                    id="size-item-xl"
                                    label="XL"
                                    value="XL"
                                    :name="size"
                                    :selectedValue="size"
                                    @update:selectedValue="size = $event; sizeFilled = true; updateSizeFilled"
                                ></RadioSizeItem>
                                <RadioSizeItem
                                    id="size-item-xxl"
                                    label="XXL"
                                    value="XXL"
                                    :name="size"
                                    :selectedValue="size"
                                    @update:selectedValue="size = $event; sizeFilled = true; updateSizeFilled"
                                ></RadioSizeItem>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button @click="nextStep('step-5')" v-show="currentStep === 'step-4'"
                                :disabled="!sizeFilled"
                                :class="{ 'opacity-50 cursor-not-allowed': !sizeFilled }"
                                class="flex items-center justify-center w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-background-color duration-300">
                            Continue
                        </button>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-200 p-6 pt-4">
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Cena:</p>
                    <p>{{ subtotalPrice }} €</p>
                </div>
                <p class="mt-1 mb-1 text-gray-500 text-sm text-green leading-relaxed">
                    <i class="fa-solid fa-check mr-1"></i> {{ subtotalDays }} prac. dni, dopravu a balné máte zdarma
                </p>
                <p class="text-sm text-gray-500" v-html="selectedItemText">
                </p>
            </div>
        </div>

        <!-- step-5 -->
        <div class="step-5 flex h-full flex-col overflow-y-scroll bg-white shadow-xl min-w-[320px]"
             v-show="currentStep === 'step-5'">
            <div class="flex-1 overflow-y-auto">
                <div class="flex items-start justify-between py-4 px-6 bg-gray-100 sticky top-0">
                    <div class="mr-3 flex h-7 items-center">
                        <modal-close-button :icon-class="closeIconArrowLeft" @click="previousStep('step-4')" v-show="currentStep === 'step-5'"></modal-close-button>
                    </div>
                    <div class="flex h-7 items-center">
                        <h3 class="font-medium text-gray-700">
                            XXX
                        </h3>
                    </div>
                    <div class="ml-3 flex h-7 items-center">
                        <modal-close-button :icon-class="closeIconClose" @custom-click="closeModal"></modal-close-button>
                    </div>
                </div>
                <div class="p-6">
                    <div class="mb-5">
                        <div class="w-full">
                            <div>
                                <img class="h-full w-full mb-5" v-if="imageUrl" :src="imageUrl"/>
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
                    <div>
                        <button @click="nextStep('step-6')" v-show="currentStep === 'step-5'"
                                :disabled="!imageUploaded"
                                :class="{ 'opacity-50 cursor-not-allowed': !imageUploaded }"
                                class="flex items-center justify-center w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-background-color duration-300">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-200 p-6 pt-4">
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Cena:</p>
                    <p>{{ subtotalPrice }} €</p>
                </div>
                <div class="flex items-center">
                    <div v-if="imageUrl" class="w-12 rounded-md overflow-hidden mr-3 border border-2 border-gray-200 mt-2">
                        <img class="object-center" v-if="imageUrl" :src="imageUrl"/>
                    </div>
                    <div>
                        <p class="mt-1 mb-1 text-gray-500 text-sm text-green leading-relaxed">
                            <i class="fa-solid fa-check mr-1"></i> {{ subtotalDays }} prac. dni, dopravu a balné máte zdarma
                        </p>
                        <p class="text-sm text-gray-500" v-html="selectedItemText">
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- step-6 -->
        <div class="step-6 flex h-full flex-col overflow-y-scroll bg-white shadow-xl min-w-[320px]"
             v-show="currentStep === 'step-6'">
            <div class="flex-1 overflow-y-auto">
                <div class="flex items-start justify-between py-4 px-6 bg-gray-100 sticky top-0">
                    <div class="mr-3 flex h-7 items-center">
                        <modal-close-button :icon-class="closeIconArrowLeft" @click="previousStep('step-5')" v-show="currentStep === 'step-6'"></modal-close-button>
                    </div>
                    <div class="flex h-7 items-center">
                        <h3 class="font-medium text-gray-700">
                            XXX
                        </h3>
                    </div>
                    <div class="ml-3 flex h-7 items-center">
                        <modal-close-button :icon-class="closeIconClose" @custom-click="closeModal"></modal-close-button>
                    </div>
                </div>
                <div class="p-6">
                    <div class="mb-5">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Vaše celé meno:</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <i class="fa-regular fa-user text-gray-500"></i>
                            </div>
                            <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                                   v-model="name"
                                   placeholder="Meno Priezvisko"
                                   required
                                   @change="updateContact">
                        </div>
                    </div>
                    <div class="mb-5">
                        <label for="mail" class="block mb-2 text-sm font-medium text-gray-900">E-mailová adresa:</label>
                        <input type="email" id="mail" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               v-model="email"
                               placeholder="mail@mail.sk"
                               required
                               @change="updateContact">
                    </div>
                    <div class="mb-5">
                        <textarea v-model="text"
                                  placeholder="Adresa"
                                  @change="updateContact">
                        </textarea>
                    </div>
                    <div>
                        <button @click="upload"
                                :disabled="!contactFilled"
                                :class="{ 'opacity-50 cursor-not-allowed': !contactFilled }"
                                class="flex items-center justify-center w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-background-color duration-300">
                            Potvrdiť</button>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-200 p-6 pt-4">
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Cena:</p>
                    <p>{{ subtotalPrice }} €</p>
                </div>
                <div class="flex items-center">
                    <div v-if="imageUrl" class="w-12 rounded-md overflow-hidden mr-3 border border-2 border-gray-200 mt-2">
                        <img class="object-center" v-if="imageUrl" :src="imageUrl"/>
                    </div>
                    <div>
                        <p class="mt-1 mb-1 text-gray-500 text-sm text-green leading-relaxed">
                            <i class="fa-solid fa-check mr-1"></i> {{ subtotalDays }} prac. dni, dopravu a balné máte zdarma
                        </p>
                        <p class="text-sm text-gray-500" v-html="selectedItemText">
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- step-7 -->
        <div class="step-7 flex h-full flex-col overflow-y-scroll bg-white shadow-xl min-w-[320px]"
             v-show="currentStep === 'step-7'">
            <div class="flex-1 overflow-y-auto">
                <div class="flex items-start justify-between py-4 px-6 bg-gray-100 sticky top-0">
                    <div class="ml-3 flex h-7 items-center">
                    </div>
                    <div class="flex h-7 items-center">
                        <h3 class="font-medium text-gray-700">
                            Ďakujeme za objednávku.
                        </h3>
                    </div>
                    <div class="ml-3 flex h-7 items-center">
                        <modal-close-button :icon-class="closeIconClose" @custom-click="closeModal"></modal-close-button>
                    </div>
                </div>
                <div class="p-6 text-green text-lg font-bold">
                    <p>
                        V najbližšej dobe Vám bude zaslaná faktúra na uvedený e-mail.
                    </p>
                    <br><br><br><br><br>
                </div>
            </div>
            <div class="border-t border-gray-200 p-6 pt-4">
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Cena:</p>
                    <p>{{ subtotalPrice }} €</p>
                </div>
                <div class="flex items-center">
                    <div v-if="imageUrl" class="w-12 rounded-md overflow-hidden mr-3 border border-2 border-gray-200 mt-2">
                        <img class="object-center" v-if="imageUrl" :src="imageUrl"/>
                    </div>
                    <div>
                        <p class="mt-1 mb-1 text-gray-500 text-sm text-green leading-relaxed">
                            <i class="fa-solid fa-check mr-1"></i> {{ subtotalDays }} prac. dni, dopravu a balné máte zdarma
                        </p>
                        <p class="text-sm text-gray-500" v-html="selectedItemText">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </SidebarModal>

    <SidebarModal :show="showModal2" @close-modal="showModal2 = false">
        <BenefitsModal :show="showModal2" @close-modal="showModal2 = false" />
    </SidebarModal>

    <div class="elfsight-app-a213085d-300c-4ade-a8c6-78c653a577d3" data-elfsight-app-lazy></div>

    <div class="mx-auto max-w-4xl mt-16 sm:mt-20 lg:mt-24 leading-8">
        <h3 class="text-3xl mb-16 font-bold tracking-tight text-center">
            Objednávajte si jedinečný kúsok a získajte tieto výhody:
        </h3>
        <ul role="list" class="list-none space-y-5 mx-auto max-w-2xl text-gray-700">
            <li class="flex items-center">
                <span class="pr-7 text-2xl">🎨</span>
                <span>
                    <span class="font-medium">Ručne maľované: </span> Každý kus je originál a jedinečný, ktorý vám dodá štýl a osobnosť. Nie je to masová produkcia, ale umelecké dielo, ktoré vytváram s láskou a pozornosťou k detailom.
                </span>
            </li>
            <li class="flex items-center">
                <span class="pr-7 text-2xl">🌈</span>
                <span>
                  <span class="font-medium">Kvalitné farby na textil a trvanlivé materiály,</span> ktoré vyrždia dlho a nevyblednú.
                </span>
            </li>
            <li class="flex items-center">
                <span class="pr-7 text-2xl">🚚</span>
                <span>
                    <span class="font-medium">Vaše ručne maľované oblečenie priamo domov.</span> Neplatíte žiadne poplatky ani dodatočné náklady za balné a dopravu.
                </span>
            </li>
        </ul>
    </div>

    <div class="w-full mx-auto mx-auto max-w-2xl px-6 py-32">
        <h3 class="text-3xl mb-12 font-bold tracking-tight text-gray-900 text-center">
            Často kladené otázky
        </h3>
        <div>
            <FaqList :faqItems="faqItems" @toggleDetails="handleToggleDetails" />
        </div>


        <!--        Ako funguje konfigurátor na webe? Konfigurátor je nástroj, ktorý vám umožní vytvoriť vlastný produkt. Môžete si vybrať pohlavie, farbu a veľkosť produktu. Potom už len nahrajete obrázok, fotku alebo čokoľvek, čo chcete mať namaľované na produkte. -->

<!--        Kde budú maľby na produktoch? Maľby na rifľových bundách sú na chrbte a na tričkách a iných produktoch sú na prednej strane.-->

<!--        Aký je časový rámec pre maľovanie a odoslanie produktu? Produkt odosielame hneď po namalovaní. Pri každom produkte je predpokladaná doba maľovania.-->

<!--        Aké sú náklady na balné a dopravu? Balné a doprava sú zdarma. -->

<!--        Platí sa dodatočne za tričko alebo riflovú bundu? Nie, všetko je už zahrnuté v cene. Ponúkame len kvalitné materiály.-->

<!--        Ako sa staráte o produkty? Všetky naše produkty sú ručne maľované a vyrobené s najväčšou starostlivosťou.-->

<!--        Aké sú možnosti platby? Všetky informácie o platbe dostanete po objednaní e-mailom. Začíname maľovať až po prijatí platby na náš účet. Priamo na stánke nemáme zatial žiadnu platobnú bránu.-->

<!--        Aké sú možnosti vrátenia tovaru? (Doplniť podľa politiky vrátenia tovaru, ktorú ponúkate)-->

<!--        Čo znamená “Ručne maľované”? Každý kus je originál a jedinečný. Nie je to masová produkcia, ale umelecké dielo, ktoré vytváram s láskou a pozornosťou k detailom.-->

<!--        Aké sú výhody ručne maľovaného oblečenia? Ponúkame originálne a jedinečné oblečenie, ktoré vám dodá štýl a osobnosť. Používame kvalitné a trvanlivé materiály, ktoré vydržia dlho a nevyblednú.-->

<!--        Platí sa dodatočne za tričko alebo riflovú bundu? Nie, všetko je už zahrnuté v cene. Ponúkame len kvalitné materiály.-->

<!--        Ako prebieha doprava? Poskytujeme rýchlu a bezpečnú dopravu. Vaše ručne maľované oblečenie doručíme priamo domov. Neplatíte žiadne poplatky ani dodatočné náklady.-->
    </div>

    <!-- Success message -->
    <div v-if="message" class="transition fixed z-20 bottom-0 transform inset-x-0 px-4 py-6 sm:px-6">
            <div class="p-2 rounded-lg bg-green shadow-lg sm:p-3">
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

</template>

<script>
import axios from 'axios';
import SidebarModal from '@/components/SidebarModal.vue';
import ModalCloseButton from '@/components/ModalIco.vue';
import BenefitsModal from '@/components/BenefitsModal.vue';
import RadioItem from "@/components/RadioItem.vue";
import FaqList from '@/components/FaqList.vue';
import RadioSizeItem from "@/components/RadioSizeItem.vue";

export default {
    components: {
        SidebarModal,
        ModalCloseButton,
        BenefitsModal,
        RadioItem,
        FaqList,
        RadioSizeItem,
    },
    data() {
        return {
            currentStep: 'step-1',
            showModal: false,
            showModal2: false,
            name: '',
            password: '',
            text: '',
            email: '',
            image: null,
            imageUrl: '',
            message: '',
            selectedItem: '',
            size: '',
            genderItem: '',
            colorItem: '',
            closeIconClose: 'fa-solid fa-xmark text-md',
            closeIconArrowLeft: 'fa-solid fa-arrow-left text-md',
            selectedItemText: '',
            selectedItemFilled: false,
            genderFilled: false,
            sizeFilled: false,
            contactFilled: true,
            imageUploaded: false,
            colorFilled: false,
            item1SubtotalPrice: 50,
            item2SubtotalPrice: 20,
            item1Days: '1-3',
            item2Days: '1-2',
            faqItems: [
                { isOpen: false, question: "Ako funguje náš online konfigurátor na webe?", answer: "Konfigurátor je nástroj, ktorý vám umožní vytvoriť vlastný tričko alebo riflovú bundu. Môžete si vybrať pohlavie, farbu a veľkosť produktu. Potom už len nahrajete obrázok, fotku alebo čokoľvek, čo chcete mať namaľované na produkte." },
                { isOpen: false, question: "Ako funguje ďalší online konfigurátor na webe?", answer: "Ďalšia odpoveď na iný dôležitý dotaz. Tu môžeš poskytnúť viac informácií alebo detailov o inom aspekte tvojej služby alebo produktu." },
            ],
        }
    },
    computed: {
        // Define a computed property to calculate the overall subtotal price based on the selected item
        subtotalPrice() {
            return this.selectedItem === 'item1' ? this.item1SubtotalPrice : this.item2SubtotalPrice;
        },
        subtotalDays() {
            return this.selectedItem === 'item1' ? this.item1Days : this.item2Days;
        },
    },
    mounted() {
        document.addEventListener('keydown', this.onEscKeyPressed);
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.setAttribute('data-use-service-core', '');
        script.defer = true;

        document.head.appendChild(script);
    },
    beforeUnmount() {
        document.removeEventListener('keydown', this.onEscKeyPressed);
    },
    methods: {
        nextStep(step) {
            // You can add validation logic here if needed
            this.currentStep = step;
            this.updateSelectedItemText();
        },
        previousStep(step) {
            this.currentStep = step;
            this.updateSelectedItemText();
        },
        openModal(step) {
            this.currentStep = step;
            this.showModal = true;
            this.updateSelectedItemText();
            this.addBodyHidden();
        },
        openModal2() {
            this.showModal2 = true;
            this.addBodyHidden();
        },
        addBodyHidden() {
            document.body.style.overflow = 'hidden';
        },
        closeModal() {
            this.showModal = false;
            this.enableBodyScroll();
        },
        closeModal2() {
            this.showModal2 = false;
            this.enableBodyScroll();
        },
        enableBodyScroll() {
            document.body.style.overflow = 'auto';
        },
        onEscKeyPressed(event) {
            if (event.key === 'Escape') {
                if (this.showModal2) {
                    this.closeModal2();
                } else if (this.showModal) {
                    this.closeModal();
                }
            }
        },
        updateSelectedItemText() {
            if (this.currentStep === 'step-2') {
                // Display text for step-2
                this.selectedItemText = `Súhrn objednávky: ${this.selectedItem}`;
            } else if (this.currentStep === 'step-3') {
                // Display text for step-3
                this.selectedItemText = `Súhrn objednávky: ${this.selectedItem}, ${this.genderItem}`;
            } else if (this.currentStep === 'step-4') {
                // Display text for step-4 and step-5
                this.selectedItemText = `Súhrn objednávky: ${this.selectedItem}, ${this.genderItem}, Farba: ${this.colorItem}`;
            }
            else if (this.currentStep === 'step-5') {
                // Display text for step-4 and step-5
                this.selectedItemText = `Súhrn objednávky: ${this.selectedItem}, ${this.genderItem}, Farba: ${this.colorItem}, Veľkosť: ${this.size}`;
            }
        },
        updateColorFilled() {
            this.colorFilled = this.colorItem;
        },
        updateSizeFilled() {
            this.sizeFilled = this.size;
        },
        updateContact() {
            this.contactFilled = this.name && this.email && this.text;
        },
        onFileChange(e) {
            this.image = e.target.files[0];
            this.imageUrl = URL.createObjectURL(this.image);
            this.imageUploaded = true; // Image has been uploaded
        },
        handleToggleDetails(index) {
            this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
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
            formData.append('colorItem', this.colorItem);

            axios
                .post('http://localhost:3000/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((response) => {
                    this.message = response.data.message;
                    console.log('File uploaded successfully.');

                    // Set a timer to automatically hide the message after 10 seconds
                    setTimeout(() => {
                        this.message = ''; // Clear the message after 10 seconds
                    }, 10000);

                    // Display the success message in step-6
                    this.currentStep = 'step-7';
                })
                .catch((err) => {
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
