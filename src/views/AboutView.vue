<template>
<div class="buy-sell-tabs border-y py-3">
    <div class="tabs px-5 space-x-10">
        <button class="text-sm" @click="buy_sell=1" :class="[ buy_sell === 1 ? 'text-yellow-600' : '' ]"><span v-html="book_icon_1"></span></button>
        <button class="text-sm" @click="buy_sell=2" :class="[ buy_sell === 2 ? 'text-yellow-600' : '' ]"><span v-html="book_icon_2"></span></button>
        <button class="text-sm" @click="buy_sell=3" :class="[ buy_sell === 3 ? 'text-yellow-600' : '' ]"><span v-html="book_icon_2"></span></button>
    </div>

    <div class="content">
      <!-- Tab-content-1 -->
        <div v-if="buy_sell === 1" class="tab-content min-h-[81vh] text-center">
            <!-- Buy Order book  -->
            <table class="text-xs w-full table-fixed">
                <thead class="sticky top-0 bg-white border-b shadow-2xl">
                    <tr>
                        <th class="text-gray-500 font-normal">Price(BTC)</th>
                        <th class="text-gray-500 font-normal">Amount(WRX)</th>
                        <th class="text-gray-500 font-normal">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(order_book_buy, index) in orders_book_buy.slice(0,20)" :key="index" >
                        <td class="text-green-600">{{order_book_buy.price}}</td>
                        <td>{{order_book_buy.amount}}</td>
                        <td>{{order_book_buy.total}}</td>
                    </tr>
                </tbody>
            </table>
            <!-- Current Price  -->
            <div class="current-price text-center py-2">
                <span class="text-red-600">0.00000220 <small class="text-gray-500 text-xs">$0.091212</small></span>
            </div>

            <!-- Sell Order book  -->
            <table class="text-xs w-full table-fixed">
                <tbody>
                    <tr v-for="(order_book_sell, index) in orders_book_sell.slice(0,20)" :key="index">
                        <td class="text-red-600">{{order_book_sell.price}}</td>
                        <td>{{order_book_sell.amount}}</td>
                        <td>{{order_book_sell.total}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

          <!-- Tab-content-2 -->
        <div v-if="buy_sell === 2" class="tab-content">

           <table class="text-xs w-full table-fixed">
                <thead class="sticky top-0 bg-white border-b shadow-2xl">
                    <tr>
                        <th class="text-gray-500 font-normal">Price(BTC)</th>
                        <th class="text-gray-500 font-normal">Amount(WRX)</th>
                        <th class="text-gray-500 font-normal">Total</th>
                    </tr>
                </thead>
           </table>
            <!-- Current Price  -->
            <div class="current-price text-center py-2">
                <span class="text-red-600">0.00000220 <small class="text-gray-500 text-xs">$0.091212</small></span>
            </div>
            <!-- Buy Order book  -->
            <table class="text-xs w-full table-fixed">
                <thead class="sticky top-0 bg-white border-b shadow-2xl">
                    <tr>
                        <th class="text-gray-500 font-normal">Price(BTC)</th>
                        <th class="text-gray-500 font-normal">Amount(WRX)</th>
                        <th class="text-gray-500 font-normal">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(order_book_buy, index) in orders_book_buy" :key="index">
                        <td class="text-green-600">{{order_book_buy.price}}</td>
                        <td>{{order_book_buy.amount}}</td>
                        <td>{{order_book_buy.total}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

          <!-- Tab-content-3 -->
        <div v-if="buy_sell === 3" class="tab-content">
            <!-- Current Price  -->
            <div class="current-price text-center py-2">
                <span class="text-red-600">0.00000220 <small class="text-gray-500 text-xs">$0.091212</small></span>
            </div>
            <!-- Sell Order book  -->
            <table class="text-xs w-full table-fixed">
                <tbody>
                    <tr v-for="(order_book_sell, index) in orders_book_sell" :key="index">
                        <td class="text-red-600">{{order_book_sell.price}}</td>
                        <td>{{order_book_sell.amount}}</td>
                        <td>{{order_book_sell.total}}</td>
                    </tr>
                </tbody>
            </table>
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
            buy_sell: 3,
            orders_book_buy: exchange_data.orders_book_buy,
            orders_book_sell: exchange_data.orders_book_sell,
            book_icon_1: '<svg class="opacity-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20px" height="20px"><path d="M4 4h7v7H4V4z" fill="#F6465D"></path><path d="M4 13h7v7H4v-7z" fill="#0ECB81"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z" fill="currentColor"></path></svg>',
            book_icon_2: '<svg class="opacity-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20px" height="20px"><path d="M4 4h7v16H4V4z" fill="#0ECB81"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z" fill="currentColor"></path></svg>',
            book_icon_3: '<svg class="opacity-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20px" height="20px"><path d="M4 4h7v16H4V4z" fill="#F6465D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z" fill="currentColor"></path></svg>'
        }
    }

}
</script>

<style>

</style>
