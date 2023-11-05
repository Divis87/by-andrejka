<button @click="openModal('step-1')"
        class="flex items-center justify-center w-full rounded-md border border-transparent bg-green hover:bg-green-700 px-6 py-3 text-base font-medium text-white shadow-sm transition-background-color duration-300">
Continue
</button>
<div class="bg-white">
<div class="pt-6">

    <!-- Product info -->
    <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 class="text-2xl font-bold tracking-tight text-orange sm:text-3xl">
                Objednajte si ručne maľované rifľové bundy, tričká a body pre deti. 🎨
            </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">
            <div class="step-1">
                <h2 class="text-lg font-medium text-gray-900 mb-7">
                    Máte záujem o:
                </h2>
                <ul>
                    <li class="mb-5">
                        <input type="radio"
                               id="item1"
                               name="product"
                               value="item1"
                               class="hidden peer"
                               v-model="selectedItem"
                               @change="selectedItemFilled = true; updateSelectedItemText">
                        <label for="item1"
                               class="flex w-full p-5 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-100 hover:border-gray-300 transition duration-300
                                         peer-checked:border-success peer-checked:text-green peer-checked:bg-gray-50">
                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-2 border-gray-200">
                                <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                     alt=""
                                     class="h-full w-full object-cover object-center">
                            </div>
                            <div class="ml-4 flex flex-1 flex-col text-md leading-snug">
                                <div>
                                    <div class="flex font-medium text-gray-900">
                                        <h3 class="-mt-1">
                                            Ručne maľovaná riflová bunda
                                        </h3>
                                    </div>
                                    <p class="mt-1 mb-2 text-gray-500 text-sm text-green leading-relaxed">
                                        <i class="fa-solid fa-check mr-1"></i> Malujem {{ item1Days }} prac. dni
                                        <br>
                                        <i class="fa-solid fa-check mr-1"></i> Dopravu máte zdarma
                                    </p>
                                </div>
                                <div class="flex flex-1 items-end justify-between">
                                    <div class="flex">
                                        <div class="font-medium text-gray-500">
                                            {{ item1SubtotalPrice }} €
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </li>
                    <li class="mb-5">
                        <input
                            type="radio"
                            id="item2"
                            name="product"
                            value="item2"
                            class="hidden peer"
                            v-model="selectedItem"
                            @change="selectedItemFilled = true; updateSelectedItemText">
                        <label for="item2"
                               class="flex w-full p-5 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-100 hover:border-gray-300 transition duration-300
                                         peer-checked:border-success peer-checked:text-green peer-checked:bg-gray-50">
                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-2 border-gray-200">
                                <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                     alt=""
                                     class="h-full w-full object-cover object-center">
                            </div>
                            <div class="ml-4 flex flex-1 flex-col text-md leading-snug">
                                <div>
                                    <div class="flex font-medium text-gray-900">
                                        <h3 class="-mt-1">
                                            Ručne maľované tričko
                                        </h3>
                                    </div>
                                    <p class="mt-1 mb-2 text-gray-500 text-sm text-green leading-relaxed">
                                        <i class="fa-solid fa-check mr-1"></i> Malujem {{ item2Days }} prac. dni
                                        <br>
                                        <i class="fa-solid fa-check mr-1"></i> Dopravu máte zdarma
                                    </p>
                                </div>
                                <div class="flex flex-1 items-end justify-between">
                                    <div class="flex">
                                        <div class="font-medium text-gray-500">
                                            {{ item2SubtotalPrice }} €
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </li>
                </ul>
                <button @click="openModal('step-2')"
                        :disabled="!selectedItemFilled"
                        :class="{ 'opacity-50 cursor-not-allowed': !selectedItemFilled }"
                        class="flex items-center justify-center w-full rounded-md border border-transparent bg-green px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 transition-background-color duration-300">
                    Continue
                </button>
            </div>
        </div>

        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <!-- Description and details -->
            <div>
                <div class="space-y-6 text-lg text-gray-900">
                    <p>
                        Ak máte vlastný nápad na dizajn, môžete si ho jednoducho nahrať cez náš konfigurátor a ja ho pre vás ručne namaľujem na vybraný kus oblečenia.
                        Máte na výber z viacerých farieb a veľkostí, takže si určite nájdete to, čo sa vám páči.
                    </p>
                </div>
            </div>

            <div class="mt-10">
                <h3 class="text-md font-medium text-orange">
                    Objednávajte si u mňa a získajte tieto výhody:
                </h3>

                <div class="mt-4 mb-10">
                    <ul role="list" class="list-none space-y-3 text-md text-gray-600">
                        <li class="flex">
                            <span class="pr-3">🎨</span>
                            <span>
                                        <span class="font-medium">Ručne maľované: </span> Každý kus je originál a jedinečný. Nie je to masová produkcia, ale umelecké dielo, ktoré vytváram s láskou a pozornosťou k detailom.
                                    </span>
                        </li>
                        <li class="flex">
                            <span class="pr-3">🌈</span>
                            <span>
                                        <span class="font-medium">Originálne a jedinečné oblečenie,</span> ktoré vám dodá štýl a osobnosť.
                                    </span>
                        </li>
                        <li class="flex">
                            <span class="pr-3">👍</span>
                            <span>
                                        <span class="font-medium">Kvalitné a trvanlivé materiály,</span> ktoré vydržia dlho a nevyblednú.
                                    </span>
                        </li>
                        <li class="flex">
                            <span class="pr-3">🚚</span>
                            <span>
                                        <span class="font-medium">Rýchla a bezpečná doprava,</span> vaše ručne maľované oblečenie priamo domov. Neplatíte žiadne poplatky ani dodatočné náklady.
                                    </span>
                        </li>
                    </ul>
                </div>

                <p class="flex text-md text-gray-600">
                    <span class="pr-3">💡</span>
                    <span>
                                Ak nemáte vlastný nápad, alebo chcete niečo originálne a kreatívne, <span class="font-medium">môžete si u mňa objednať aj službu navrhovania dizajnu za skvelú cenu.</span> Stačí nám napísať do poznámky v našom konfigurátory vašu predstavu a ja vám vytvorím niekoľko návrhov na výber.
                            </span>
                </p>
            </div>
        </div>
    </div>
</div>
</div>
<script setup>
</script>