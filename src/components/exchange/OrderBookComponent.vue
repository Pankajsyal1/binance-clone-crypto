<template>
    <div class="order-book border-l dark:border-gray-800">
        <div class="order-book-header flex justify-between items-center px-3 dark:bg-black">
            <ul class="order-box-tabs flex items-center space-x-5 dark:text-white">
                <li class="hover:cursor-pointer" @click="buy_sell = 1" :class="[buy_sell === 1 ? 'text-yellow-600' : '']"
                    v-html="book_icon_1"></li>
                <li class="hover:cursor-pointer" @click="buy_sell = 2" :class="[buy_sell === 2 ? 'text-yellow-600' : '']"
                    v-html="book_icon_2"></li>
                <li class="hover:cursor-pointer" @click="buy_sell = 3" :class="[buy_sell === 3 ? 'text-yellow-600' : '']"
                    v-html="book_icon_3"></li>
            </ul>

            <ul class="flex items-center space-x-3 text-sm">
                <li>
                    <select name="" id="" class="outline-0 cursor-pointer dark:bg-black dark:text-white dark:border-white">
                        <option value="" selected>0.00000001</option>
                        <option value="">0.000001</option>
                        <option value="">0.0001</option>
                    </select>
                </li>
                <li><i class='bx bx-dots-vertical-rounded text-2xl text-gray-500 dark:text-white cursor-pointer'></i></li>
            </ul>
        </div>

        <!-- tabs-content  -->
        <div class="order-volume-content dark:bg-black">

            <!-- Tab-content-1 -->
            <div v-if="buy_sell === 1" class="tab-content text-center">

                <!-- header  -->
                <div class="flex text-xs border-b dark:border-gray-800 py-1 sticky top-0 bg-white dark:bg-black">
                    <div class="basis-1/3">
                        <span class="text-gray-500 dark:text-white font-normal">Price(BTC)</span>
                    </div>
                    <div class="basis-1/3">
                        <span class="text-gray-500 dark:text-white  font-normal">Amount(WRX)</span>
                    </div>
                    <div class="basis-1/3">
                        <span class="text-gray-500 dark:text-white  font-normal">Total</span>
                    </div>
                </div>
                <!-- data buy sell order box  -->
                <div class="h-80 lg:h-auto overflow-auto">
                    <!-- Buy Order book  -->
                    <div class="text-xs flex pb-0.5" v-for="(order_book_buy, index) in orders_book_buy.slice(0, 20)"
                        :key="index.buy">
                        <div class="basis-1/3"><span class="text-green-600">{{ order_book_buy.price }}</span></div>
                        <div class="basis-1/3 dark:text-white">{{ order_book_buy.amount }}</div>
                        <div class="basis-1/3 dark:text-white">{{ order_book_buy.total }}</div>
                    </div>

                    <!-- Current Price  -->
                    <div class="current-price text-center py-2">
                        <span class="text-red-600">0.00000220 <small
                                class="text-gray-500 dark:text-white text-xs">$0.091212</small></span>
                    </div>

                    <!-- Sell Order book  -->
                    <div class="text-xs flex pb-0.5" v-for="(order_book_sell, index) in orders_book_sell.slice(0, 20)"
                        :key="index.sell">
                        <div class="basis-1/3"><span class="text-red-600">{{ order_book_sell.price }}</span></div>
                        <div class="basis-1/3 dark:text-white">{{ order_book_sell.amount }}</div>
                        <div class="basis-1/3 dark:text-white">{{ order_book_sell.total }}</div>
                    </div>
                </div>

            </div>

            <!-- Tab-content-2 -->
            <div v-if="buy_sell === 2" class="tab-content text-center">
                <!-- header  -->
                <div class="flex text-xs border-b dark:border-gray-800 py-1">
                    <div class="basis-1/3">
                        <span class="text-gray-500 font-normal dark:text-white">Price(BTC)</span>
                    </div>
                    <div class="basis-1/3">
                        <span class="text-gray-500 font-normal dark:text-white">Amount(WRX)</span>
                    </div>
                    <div class="basis-1/3">
                        <span class="text-gray-500 font-normal dark:text-white">Total</span>
                    </div>
                </div>
                <!-- Current Price  -->
                <div class="current-price text-center py-2 sticky top-0 bg-white dark:bg-black shadow-sm">
                    <span class="text-red-600">0.00000220 <small
                            class="text-gray-500 text-xs dark:text-white">$0.091212</small></span>
                </div>
                <!-- Buy Order book  -->
                <div class="h-80 lg:h-[85vh] overflow-auto">
                    <div class="buy-order-book">
                        <div class="text-xs flex pb-0.5" v-for="(order_book_buy, index) in orders_book_buy"
                            :key="index.buy">
                            <div class="basis-1/3"><span class="text-green-600">{{ order_book_buy.price }}</span></div>
                            <div class="basis-1/3 dark:text-white">{{ order_book_buy.amount }}</div>
                            <div class="basis-1/3 dark:text-white">{{ order_book_buy.total }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tab-content-3 -->
            <div v-if="buy_sell === 3" class="tab-content text-center">

                <!-- header  -->
                <div class="flex text-xs border-b dark:border-gray-800 py-1">
                    <div class="basis-1/3">
                        <span class="text-gray-500 dark:text-white font-normal">Price(BTC)</span>
                    </div>
                    <div class="basis-1/3">
                        <span class="text-gray-500 dark:text-white font-normal">Amount(WRX)</span>
                    </div>
                    <div class="basis-1/3">
                        <span class="text-gray-500 dark:text-white font-normal">Total</span>
                    </div>
                </div>

                <!-- Current Price  -->
                <div class="current-price text-center py-2 sticky top-0 bg-white dark:bg-black  shadow-sm">
                    <span class="text-red-600">0.00000220 <small class="text-gray-500 text-xs">$0.091212</small></span>
                </div>

                <!-- Sell Order book  -->
                <div class="h-80 lg:h-[85vh] overflow-auto">
                    <div class="sell-order-book">
                        <div class="text-xs flex pb-0.5" v-for="(order_book_sell, index) in orders_book_sell"
                            :key="index.sell">
                            <div class="basis-1/3"><span class="text-red-600">{{ order_book_sell.price }}</span></div>
                            <div class="basis-1/3 dark:text-white">{{ order_book_sell.amount }}</div>
                            <div class="basis-1/3 dark:text-white">{{ order_book_sell.total }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import exchange_data from "@/assets/json/exchange_data";
export default {
    name: 'OrderBookComponent',
    data() {
        return {
            buy_sell: 1,
            orders_book_buy: exchange_data.orders_book_buy,
            orders_book_sell: exchange_data.orders_book_sell,
            book_icon_1: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20px" height="20px"><path d="M4 4h7v7H4V4z" fill="#ccc"></path><path d="M4 13h7v7H4v-7z" fill="#0ECB81"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z" fill="currentColor"></path></svg>',
            book_icon_2: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20px" height="20px"><path d="M4 4h7v16H4V4z" fill="#0ECB81"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z" fill="currentColor"></path></svg>',
            book_icon_3: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20px" height="20px"><path d="M4 4h7v16H4V4z" fill="#F6465D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z" fill="currentColor"></path></svg>'
        }
    }

}
</script>

<style></style>
