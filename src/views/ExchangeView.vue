<template>
    <div>
        <!-- Desktop  min-width:-1024-->
        <section class="py-1 dark:bg-gray-700 pt-6 pb-12" v-if="width > 1023">
            <div class="xl:container mx-auto px-1">
                <!-- left+right -->
                <div class="flex left+right">

                    <!-- Left Side  -->
                    <div class="w-3/4">
                        <!-- Crypto detail  -->
                        <div class="crypto-detail">
                            <CryptoDetailComponent />
                        </div>

                        <!-- order-book-chart-buy-sell Main box -->
                        <div class="order-book-chart-buy-sell flex">
                            <!-- order-book -->
                            <div class="w-1/3 border-b border-r dark:border-gray-800 dark:bg-black">
                                <OrderBookComponent />
                            </div>
                            <!-- Chart -->
                            <div class="chart-buy-sell-box w-2/3">
                                <div class="chart-box border-x dark:border-gray-800">
                                    <div class="chart-timeline">
                                        <ul
                                            class="p-4 flex items-center justify-end space-x-5 dark:bg-black  border-b dark:border-gray-800">
                                            <li class="leading-none text-sm text-gray-500 cursor-pointer">
                                                Original
                                            </li>
                                            <li class="leading-none text-sm text-gray-500 cursor-pointer">
                                                TradingView
                                            </li>
                                            <li class="leading-none text-sm text-yellow-600 cursor-pointer">
                                                Depth
                                            </li>
                                            <li class="leading-none text-2xl text-gray-500 cursor-pointer">
                                                <i class='bx bx-expand'></i>
                                            </li>
                                            <li class="leading-none text-2xl text-gray-500 cursor-pointer">
                                                <i class='bx bx-grid-alt'></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="chart-box">
                                        <ChartComponent />
                                    </div>
                                </div>
                                <!-- Buy-sell  -->
                                <div class="buy-sell">
                                    <div class="buy-sell-header">
                                        <ul class="flex items-center justify-between text-center">
                                            <li class="flex-1 px-8 py-2 bg-gray-200 text-sm border-r border-white 
                                         dark:border-gray-800 dark:bg-black"><button type="button"
                                                    class="w-full text-black dark:text-white">Buy</button></li>

                                            <li class="flex-1 px-8 py-2 bg-gray-200 text-sm dark:bg-black"><button
                                                    type="button" class="w-full text-black  dark:text-white">Sell</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex ">
                                        <BuySellComponent class="w-1/2 border-r" />
                                        <BuySellComponent class="w-1/2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right side  -->
                    <div class="w-1/4 border dark:border-gray-800">
                        <div class="crypto-list border-b dark:border-gray-800">
                            <CryptoListComponent />
                        </div>
                        <div class="trades-box border-b dark:border-gray-800">
                            <CryptoTradesComponent />
                        </div>
                        <div class="trades-box hidden">
                            <MarketActivities />
                        </div>
                    </div>
                </div>

                <!-- order order-history trade history  -->
                <div class="order-order_history-trade_history border dark:border-gray-700 dark:bg-black">
                    <div class="buy-sell-header border-b dark:border-gray-700">
                        <ul class="flex items-center space-x-5 text-center p-2 ">
                            <li class="cursor-pointer text-sm" @click="order_history = 1"
                                :class="[order_history === 1 ? 'text-yellow-600' : 'text-black dark:text-white']">
                                Open Orders(0)
                            </li>
                            <li class="cursor-pointer text-sm" @click="order_history = 2"
                                :class="[order_history === 2 ? 'text-yellow-600' : 'text-black dark:text-white']">
                                Order History
                            </li>
                            <li class="cursor-pointer text-sm" @click="order_history = 3"
                                :class="[order_history === 3 ? 'text-yellow-600' : 'text-black dark:text-white']">
                                Trade History
                            </li>
                        </ul>
                    </div>
                    <div class="content-buy-sell">
                        <div class="min-h-[250px]" v-if="order_history === 1">
                            <OpenOrdersComponent />
                        </div>
                        <div class="min-h-[250px]" v-if="order_history === 2">
                            <OrdersHistoryComponent />
                        </div>
                        <div class="min-h-[250px]" v-if="order_history === 3">
                            <TradeHistoryComponent />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Laptops and tabs width:768px to 1023px  -->
        <section class="py-1 dark:bg-black pt-6 pb-10" v-if="width < 1024 && width > 767">
            <div class="xl:container mx-auto px-1">
                <!-- Crypto detail  -->
                <div class="crypto-detail">
                    <CryptoDetailComponent />
                </div>
                <!-- chart & buy-sell  -->
                <div class="chart-buy-sell flex">
                    <!-- chart  -->
                    <div class="chart-box w-2/3 ">
                        <div class="chart-box border dark:border-gray-800">
                            <div class="chart-timeline">
                                <ul class="p-3 flex items-center justify-end space-x-5">
                                    <li class="leading-none text-sm text-gray-500 cursor-pointer">
                                        Original
                                    </li>
                                    <li class="leading-none text-sm text-gray-500 cursor-pointer">
                                        TradingView
                                    </li>
                                    <li class="leading-none text-sm text-yellow-600 cursor-pointer">
                                        Depth
                                    </li>
                                    <li class="leading-none text-2xl text-gray-500 cursor-pointer">
                                        <i class='bx bx-expand'></i>
                                    </li>
                                    <li class="leading-none text-2xl text-gray-500 cursor-pointer">
                                        <i class='bx bx-grid-alt'></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="chart-box">
                                <ChartComponent />
                            </div>
                        </div>

                        <!-- order-book & market-trades  -->
                        <div class="order-book-market-trades flex border dark:border-gray-800">
                            <!-- Market Trades  -->
                            <div class="market-trades w-1/2">
                                <MarketTradesComponent />
                            </div>
                            <div class="order-book w-1/2 border-t border-l dark:border-gray-800">
                                <OrderBookComponent />
                            </div>
                        </div>

                        <!-- order order-history trade history  -->
                        <div class="order-order_history-trade_history border dark:border-gray-800">
                            <div class="buy-sell-header border-b dark:border-gray-800">
                                <ul class="flex items-center space-x-5 text-center p-2 ">
                                    <li class="cursor-pointer text-sm" @click="order_history = 1"
                                        :class="[order_history === 1 ? 'text-yellow-600' : 'text-black dark:text-white']">
                                        Open Orders(0)
                                    </li>
                                    <li class="cursor-pointer text-sm" @click="order_history = 2"
                                        :class="[order_history === 2 ? 'text-yellow-600' : 'text-black dark:text-white']">
                                        Order History
                                    </li>
                                    <li class="cursor-pointer text-sm" @click="order_history = 3"
                                        :class="[order_history === 3 ? 'text-yellow-600' : 'text-black dark:text-white']">
                                        Trade History
                                    </li>
                                </ul>
                            </div>
                            <div class="content-buy-sell">
                                <div class="min-h-[250px]" v-if="order_history === 1">
                                    <OpenOrdersComponent />
                                </div>
                                <div class="min-h-[250px]" v-if="order_history === 2">
                                    <OrdersHistoryComponent />
                                </div>
                                <div class="min-h-[250px]" v-if="order_history === 3">
                                    <TradeHistoryComponent />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- buy-sell  -->
                    <div class="buy-sell-box w-1/3">
                        <div class="buy-sell-header">
                            <ul class="flex items-center justify-between text-center">
                                <li @click="buy_sell = 1"
                                    :class="[buy_sell === 1 ? 'bg-yellow-600 text-white' : 'bg-gray-200 dark:border-gray-800 text-black']"
                                    class="w-full flex-1 px-8 py-2  text-sm border-r border-white">
                                    Buy
                                </li>
                                <li @click="buy_sell = 2"
                                    :class="[buy_sell === 2 ? 'bg-yellow-600 text-white' : 'bg-gray-200 dark:border-gray-800 text-black']"
                                    class="flex-1 px-8 py-2 text-sm w-full">
                                    Sell
                                </li>
                            </ul>
                        </div>
                        <div class="content-buy-sell">
                            <BuySellComponent v-if="buy_sell === 1" />
                            <BuySellComponent v-if="buy_sell === 2" />
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Mobile width:320px to 767px-->
        <section class="py-1 dark:bg-black px-1 pb-8" v-if="width < 768">
            <div class="xl:container mx-auto">
                <!-- Crypto detail  -->
                <div class="crypto-detail">
                    <CryptoDetailComponent />
                </div>
                <!-- chart-order-book-trades  -->
                <div class="chart-order-book-trades w-full">
                    <ul class="flex text-center space-x-5 py-2">
                        <li class="cursor-pointer text-sm" @click="chart_order_traded = 1"
                            :class="[chart_order_traded === 1 ? 'text-yellow-600' : 'text-black dark:text-white']">
                            Chart
                        </li>
                        <li class="cursor-pointer text-sm" @click="chart_order_traded = 2"
                            :class="[chart_order_traded === 2 ? 'text-yellow-600' : 'text-black dark:text-white']">

                            Order Book
                        </li>
                        <li class="cursor-pointer text-sm" @click="chart_order_traded = 3"
                            :class="[chart_order_traded === 3 ? 'text-yellow-600' : 'text-black dark:text-white']">
                            Trades
                        </li>
                    </ul>
                    <div class="content-buy-sell">
                        <!-- chart  -->
                        <div class="chart" v-if="chart_order_traded === 1">
                            <div class="chart-box border dark:border-gray-800">
                                <div class="chart-timeline">
                                    <ul class="p-3 flex items-center justify-end space-x-5">
                                        <li class="leading-none text-sm text-gray-500 cursor-pointer">
                                            Original
                                        </li>
                                        <li class="leading-none text-sm text-gray-500 cursor-pointer">
                                            TradingView
                                        </li>
                                        <li class="leading-none text-sm text-yellow-600 cursor-pointer">
                                            Depth
                                        </li>
                                        <li class="leading-none text-2xl text-gray-500 cursor-pointer">
                                            <i class='bx bx-expand'></i>
                                        </li>
                                        <li class="leading-none text-2xl text-gray-500 cursor-pointer">
                                            <i class='bx bx-grid-alt'></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ChartComponent />
                        </div>
                        <!-- OrderBookComponent  -->
                        <div class="OrderBookComponent" v-if="chart_order_traded === 2">
                            <OrderBookComponent />
                        </div>
                        <!-- MarketTradesComponent  -->
                        <div class="MarketTradesComponent" v-if="chart_order_traded === 3">
                            <MarketTradesComponent />
                        </div>

                    </div>
                </div>

                <!-- order order-history trade history  -->
                <div class="w-full border-order_history-trade_history border dark:border-gray-800">
                    <div class="order-history-header border-b dark:border-gray-700">
                        <ul class="flex items-center space-x-3 text-center p-2 ">
                            <li class="cursor-pointer text-sm whitespace-nowrap" @click="order_history = 1"
                                :class="[order_history === 1 ? 'text-yellow-600' : 'text-black dark:text-white']">
                                Open Orders(0)
                            </li>
                            <li class="cursor-pointer text-sm whitespace-nowrap" @click="order_history = 2"
                                :class="[order_history === 2 ? 'text-yellow-600' : 'text-black dark:text-white']">
                                Order History
                            </li>
                            <li class="cursor-pointer text-sm whitespace-nowrap" @click="order_history = 3"
                                :class="[order_history === 3 ? 'text-yellow-600' : 'text-black dark:text-white']">
                                Trade History
                            </li>
                        </ul>
                    </div>
                    <div class="content-order-history">
                        <div class="min-h-[250px]" v-if="order_history === 1">
                            <OpenOrdersComponent />
                        </div>
                        <div class="min-h-[250px]" v-if="order_history === 2">
                            <OrdersHistoryComponent />
                        </div>
                        <div class="min-h-[250px]" v-if="order_history === 3">
                            <TradeHistoryComponent />
                        </div>
                    </div>
                </div>

                <!-- Buy-sell  -->

                <div class="buy-sell shadow-2xl bg-white dark:bg-black p-3"
                    :class="show == true ? 'add_animation' : 'remove_animation'">
                    <div class="border dark:border-gray-800">
                        <div class="text-right pr-2 py-1 cursor-pointer dark:text-white dark:bg-black"><span
                                @click="showBuySell()">X</span></div>
                        <div class="buy-sell-header">
                            <ul class="flex items-center justify-between text-center">
                                <li @click="buy_sell = 1"
                                    :class="[buy_sell === 1 ? 'bg-yellow-600 text-white' : 'bg-gray-200 dark:border-gray-800 text-black']"
                                    class="w-full flex-1 px-8 py-2  text-sm border-r border-white">
                                    Buy
                                </li>
                                <li @click="buy_sell = 2"
                                    :class="[buy_sell === 2 ? 'bg-yellow-600 text-white' : 'bg-gray-200 dark:border-gray-800 text-black']"
                                    class="flex-1 px-8 py-2 text-sm w-full">
                                    Sell
                                </li>
                            </ul>
                        </div>
                        <div class="content-buy-sell">
                            <BuySellComponent v-show="buy_sell === 1" />
                            <BuySellComponent v-show="buy_sell === 2" />
                        </div>
                    </div>
                </div>
                <div :class="show == true ? 'overlay' : ''" @click="showBuySell()"></div>

                <div
                    class="border dark:border-gray-800 buy-sell-buttons bg-white dark:bg-gray-800 fixed bottom-0 w-full shadow-2xl shadow-black dark:shadow-2xl dark:shadow-white flex p-2 space-x-3">
                    <button @click="showBuySell()" type="button" class="bg-green-600 flex-1 py-2 text-white">Buy</button>
                    <button @click="showBuySell()" class="bg-red-600 flex-1 py-2 text-white">Sell</button>
                </div>
                <!-- Buy-sell  -->
            </div>
        </section>

    </div>
</template>

<script>
import CryptoDetailComponent from "@/components/exchange/CryptoDetailComponent"
import OrderBookComponent from "@/components/exchange/OrderBookComponent"
import ChartComponent from "@/components/exchange/ChartComponent"
import CryptoListComponent from "@/components/exchange/CryptoListComponent"
import CryptoTradesComponent from "@/components/exchange/CryptoTradesComponent"
import MarketActivities from "@/components/exchange/MarketActivities"
import BuySellComponent from "@/components/exchange/BuySellComponent"
import MarketTradesComponent from "@/components/exchange/trades_component/MarketTradesComponent"
import OpenOrdersComponent from "@/components/exchange/OpenOrdersComponent"
import OrdersHistoryComponent from "@/components/exchange/OrdersHistoryComponent"
import TradeHistoryComponent from "@/components/exchange/TradeHistoryComponent"
export default {
    name: 'ExchangeView',
    components: {
        CryptoDetailComponent,
        OrderBookComponent,
        ChartComponent,
        CryptoListComponent,
        CryptoTradesComponent,
        MarketActivities,
        BuySellComponent,
        MarketTradesComponent,
        OpenOrdersComponent,
        OrdersHistoryComponent,
        TradeHistoryComponent
    },
    mounted() {
        let $this = this;
        window.addEventListener('resize', function () {
            $this.width = window.innerWidth;
        }, true);
    },
    data() {
        return {
            width: window.innerWidth,
            buy_sell: 1,
            chart_order_traded: 1,
            order_history: 1,
            show: false

        }
    },

    methods: {
        showBuySell() {
            this.show = !this.show;
            var overflow = document.getElementById('app');
            if (this.show) {
                overflow.style.overflow = "hidden";
            } else {
                overflow.style.overflow = "visible";
            }

        },

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
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
}

.add_animation {
    min-width: 0px;
    z-index: 23;
    position: fixed;
    margin: auto;
    padding-inline: 5px;
    left: 0;
    right: 0;
    user-select: none;
    transition: all 0.2s linear;
    transform: translate3d(0px, 0vh, 0px);
    bottom: 0;

}

.remove_animation {
    min-width: 0px;
    z-index: -50;
    position: absolute;
    margin: auto;
    padding-inline: 20px;
    left: 0;
    right: 0;
    user-select: none;
    transition: all 0.2s linear;
    transform: translate3d(0px, 0%, 0px);
    opacity: 0;
    bottom: -500px;

}
</style>
