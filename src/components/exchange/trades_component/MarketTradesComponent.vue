<template>
<div>
    <!-- Header  -->
    <div class="market-trade-header flex border-b dark:border-gray-800 shadow-2xl bg-white dark:bg-black text-xs py-1 sticky top-0">
        <div class="basis-1/3">
            <p class="text-gray-500 dark:text-white font-normal border-y-4  border-white dark:border-black cursor-pointer">Price(BTC)</p>
        </div>
        <div class="basis-1/3">
            <p class="text-center text-gray-500 dark:text-white font-normal border-y-4  border-white dark:border-black marker:cursor-pointer">Amount(WRX)</p>
        </div>
        <div class="basis-1/3">
            <p class="text-gray-500 text-right dark:text-white font-normal border-y-4  border-white dark:border-black cursor-pointer">Time</p>
        </div>
    </div>
    <div class="my-trades h-[385px] lg:h-[343px] overflow-y-auto overflow-x-hidden text-xs">
        <!-- Data  -->
        <div class="py-1 market-trade-data flex shadow-2xl bg-white dark:bg-black hover:bg-gray-300 hover:cursor-pointer" v-for=" (data, index) in marketData" :key="index">
            <div class="basis-1/3 pl-1">
                <span :class="data.price > 0 ? 'text-green-600' : 'text-red-600'">
                    {{data.price}}
                </span>
            </div>
            <div class="text-center basis-1/3">
                <span class="dark:text-white">{{data.amount}}</span>
            </div>
            <div class="basis-1/3 text-right pr-1">
                <span class="dark:text-white">{{data.time}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import exchange_data from '@/assets/json/exchange_data.json';
export default {

    data() {
        return {
            marketData: exchange_data.marketData,
        }
    }

}
</script>

<style>

</style>
