<template>
    <div class="buy-sell-tabs border-y dark:border-gray-800 py-3 dark:bg-black">
        <div class="tabs px-2 xl:px-5  space-x-10 dark:text-white flex justify-center dark:bg-black">
            <button class="text-sm" @click="buy_sell = 1" :class="[buy_sell === 1 ? 'text-yellow-600' : '']">Limit</button>
            <button class="text-sm" @click="buy_sell = 2" :class="[buy_sell === 2 ? 'text-yellow-600' : '']">Market</button>
            <button class="text-sm" @click="buy_sell = 3"
                :class="[buy_sell === 3 ? 'text-yellow-600' : '']">Stop-Limit</button>
        </div>

        <div class="content">
            <div class="tab-content">
                <div class="buy-form px-5 py-3 ">
                    <form action="">
                        <div class="flex justify-between mb-1">
                            <label class="text-xs text-black dark:text-white">Avl</label>
                            <label class="text-xs text-gray-500">-BTC</label>
                        </div>
                        <!-- Stop  -->
                        <div
                            class="mb-2 justify-between rounded-sm input-group-box flex items-center border dark:border-gray-800 py-1.5 px-2 space-x-2 focus:border-yellow-600">
                            <span class="text-gray-500 font-light text-sm">Stop</span>

                            <input :class="buy_sell == 1 || buy_sell == 2 ? 'cursor-not-allowed' : ''" type="text"
                                class="outline-none w-3/4 text-right text-sm dark:bg-black dark:text-white" placeholder=""
                                :disabled="buy_sell == 1 || buy_sell == 2">
                            <span class="font-light text-sm dark:text-white text-center d-block">BTC</span>
                        </div>
                        <!-- Limit  -->
                        <div
                            class="mb-2 justify-between rounded-sm input-group-box flex items-center border dark:border-gray-800 py-1.5 px-2 space-x-2 focus:border-yellow-600">
                            <span class="text-gray-500 font-light text-sm">Limit</span>
                            <input :class="buy_sell == 1 ? 'cursor-not-allowed' : ''" type="text"
                                class="outline-none w-3/4 text-right text-sm dark:bg-black dark:text-white" placeholder="0"
                                :disabled="buy_sell == 1">
                            <span class="font-light text-sm dark:text-white text-center d-block">BTC</span>
                        </div>
                        <!-- Amount  -->
                        <div
                            class="mb-2 justify-between rounded-sm input-group-box flex items-center border dark:border-gray-800 py-1.5 px-2 space-x-2 focus:border-yellow-600">
                            <span class="text-gray-500 font-light text-sm">Amount</span>
                            <input type="text" class="outline-none w-3/4 text-right text-sm dark:bg-black dark:text-white"
                                placeholder="">
                            <span class="font-light text-sm dark:text-white text-center d-block">WRX</span>
                        </div>
                        <!-- Percentage  -->
                        <div class="percentage mb-2">
                            <ul class="flex justify-between items-center">
                                <li class="text-sm text-gray-500 relative z-10 cursor-pointer">0%</li>
                                <li class="text-sm text-gray-500 relative z-10 cursor-pointer">25%</li>
                                <li class="text-sm text-gray-500 relative z-10 cursor-pointer">50%</li>
                                <li class="text-sm text-gray-500 relative z-10 cursor-pointer">75%</li>
                                <li class="text-sm text-gray-500 relative z-10 cursor-pointer">Max</li>
                            </ul>
                        </div>
                        <!-- Button  -->
                        <div class="bu-sell-btn">
                            <router-link to="/login"
                                class="bg-gray-500 w-full text-white py-2 px-3 rounded-sm inline-block text-center dark:bg-gray-700"><span
                                    class="text-yellow-500">Log In</span> or <span class="text-yellow-500">Register
                                    Now</span></router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BuySellComponent',

    data() {
        return {
            buy_sell: 1
        }
    },

}
</script>

<style></style>
