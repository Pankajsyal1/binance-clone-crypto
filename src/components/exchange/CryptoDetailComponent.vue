<template>
    <div>
        <!-- For Desktop  -->
        <div class="crypto-detail-bar border dark:bg-black dark:border-gray-800 flex justify-between items-center px-3"
            v-if="width > 767">
            <ul class="p-3 flex items-end justify-center space-x-3 space-y-3">
                <li class="border-r dark:border-gray-800 pr-3 xl:pr-5 leading-none relative flex-auto cursor-pointer"
                    @click="first(); second();">
                    <p class="font-medium text-lg leading-none dark:text-white">WRX/BTC<i
                            :class="toggle == true ? '-rotate-180' : 'rotate-0'"
                            class='bx bxs-down-arrow ml-2 inline-block lg:hidden text-xs'></i></p>
                    <span class="text-xs underline cursor-pointer dark:text-white"><i
                            class='bx bx-leaf text-gray-500 dark:text-white text-xs align-middle mr-1'></i> WRX</span>

                    <!-- laptop & Tabs  -->
                    <CryptoListComponent v-if="toggle"
                        class="absolute top-14 border dark:border-gray-800 w-96  hidden md:block lg:hidden z-50 shadow-2xl" />
                </li>

                <li class="leading-none flex-auto">
                    <p class="text-green-600 text-base -top-">0.00000218</p>
                    <span class="text-xs dark:text-white">$0.091553</span>
                </li>
                <li class="leading-none hidden md:block">
                    <p class="text-gray-500 dark:text-white text-xs">24h Change</p>
                    <span class="text-xs text-red-600">-4.58%</span>
                </li>
                <li class="leading-none flex-auto">

                    <p class="text-gray-500 dark:text-white text-xs">24h High</p>
                    <span class="text-xs dark:text-white">0.00000234</span>
                </li>
                <li class="leading-none flex-auto">

                    <p class="text-gray-500 dark:text-white text-xs">24h Low</p>
                    <span class="text-xs dark:text-white">0.00000217</span>
                </li>
                <li class="leading-none flex-auto">
                    <p class="text-gray-500 dark:text-white text-xs">24h Volume(WRX)</p>
                    <span class="text-xs dark:text-white">1,477,680.00</span>
                </li>
                <li class="leading-none flex-auto">
                    <p class="text-gray-500 dark:text-white text-xs">24h Volume(BTC)</p>
                    <span class="text-xs dark:text-white">3.32</span>
                </li>
            </ul>
            <div class="day-night-switch" @change="darkMode()">
                <div class="flex justify-center">
                    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" name="toggle" id="toggle"
                            class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                        <label for="toggle"
                            class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                </div>
            </div>
        </div>

        <!-- For Mobile  -->
        <div class="crypto-detail-bar border dark:border-gray-800 flex justify-between items-center px-1 space-x-3"
            v-if="width < 768">
            <ul class="p-1 flex justify-center space-y-3 flex-col">
                <li class="leading-none relative flex-auto cursor-pointer" @click="first(); second();">
                    <p class="font-medium text-lg leading-none dark:text-white whitespace-nowrap">WRX/BTC<i
                            :class="toggle == true ? '-rotate-180' : 'rotate-0'"
                            class='bx bxs-down-arrow ml-2 inline-block lg:hidden text-xs'></i></p>
                    <span class="text-xs underline cursor-pointer dark:text-white"><i
                            class='bx bx-leaf text-gray-500 dark:text-white text-xs align-middle mr-1'></i> WRX</span>
                </li>

                <div class="bg-white dark:bg-black block md:hidden">
                    <div :class="toggle1 == true ? 'add_animation' : 'remove_animation'" class="shadow-2xl">
                        <div
                            class="flex justify-between py-3 px-5 bg-white  dark:bg-black border-t dark:border-slate-600 Shadow-sm">
                            <span class="m-0 dark:text-white">Market</span>
                            <span @click="second()" class="m-0 dark:text-white cursor-pointer">X</span>
                        </div>
                        <CryptoListComponent />
                    </div>
                </div>
                <div :class="toggle1 == true ? 'overlay' : ''" @click="second()"></div>

                <li class="leading-none">
                    <p class="text-green-600 text-base">0.00000218</p>
                    <span class="text-xs dark:text-white">$0.091553</span>
                </li>
            </ul>

            <ul class="p-3 flex space-y-2 flex-wrap">
                <li class="leading-none hidden md:block">
                    <p class="text-gray-500 dark:text-white text-xs">24h Change</p>
                    <span class="text-xs text-red-600">-4.58%</span>
                </li>
                <li class="leading-none basis-1/2">
                    <p class="text-gray-500 dark:text-white text-xs">24h High</p>
                    <span class="text-xs dark:text-white">0.00000234</span>
                </li>
                <li class="leading-none basis-1/2">

                    <p class="text-gray-500 dark:text-white text-xs">24h Low</p>
                    <span class="text-xs dark:text-white">0.00000217</span>
                </li>
                <li class="leading-none basis-1/2">
                    <p class="text-gray-500 dark:text-white text-xs">24h Volume(WRX)</p>
                    <span class="text-xs dark:text-white">1,477,680.00</span>
                </li>
                <li class="leading-none basis-1/2">
                    <p class="text-gray-500 dark:text-white text-xs">24h Volume(BTC)</p>
                    <span class="text-xs dark:text-white">3.32</span>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
import CryptoListComponent from '@/components/exchange/CryptoListComponent'
export default {
    name: "CryptoDetailComponent",
    props: {

    },
    components: {
        CryptoListComponent
    },
    data() {
        return {
            toggle: false,
            toggle1: false,
            width: window.innerWidth,

        }
    },
    mounted() {
        document.addEventListener('click', this.close);
        let $this = this;
        window.addEventListener('resize', function () {
            $this.width = window.innerWidth;
        }, true);
    },

    methods: {
        darkMode() {
            var dark = document.getElementById('app');
            dark.classList.toggle('dark');
        },

        first() {
            this.toggle = !this.toggle
        },

        close(e) {
            if (!this.$el.contains(e.target)) {

                this.toggle = false
            }
        },
        second() {
            this.toggle1 = !this.toggle1;
            var overflow = document.getElementById('app');
            if (this.toggle1) {
                overflow.style.overflow = "hidden";
            } else {
                overflow.style.overflow = "visible";
            }
        }

    }

}
</script>

<style scoped>
.overlay {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    position: fixed;
    inset: 0px;
    top: -5px;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
    transition: all 0.3s linear;

}

.add_animation {
    min-width: 0px;
    z-index: 23;
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    /* padding-inline: 20px; */
    user-select: none;
    transition: all 0.3s linear;
    transform: translate3d(0px, -5%, 0px);

}

.remove_animation {
    min-width: 0px;
    z-index: -50;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    user-select: none;
    transition: all 0.3s linear;
    transform: translate3d(0px, 100%, 0px);
    opacity: 0;

}
</style>
