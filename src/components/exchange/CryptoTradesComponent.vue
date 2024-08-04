<template>
    <div class="buy-sell-tabs border-t py-3 px-1 dark:border-gray-800 dark:bg-black">
        <div class="tabs py-1 space-x-10 ">
            <button class="text-sm " @click="trades_data = 1"
                :class="[trades_data === 1 ? 'text-yellow-600' : 'dark:text-white']">Market
                Trades</button>
            <button class="text-sm" @click="trades_data = 2"
                :class="[trades_data === 2 ? 'text-yellow-600' : 'dark:text-white']">My
                Trades</button>
        </div>

        <div class="content">
            <div v-if="trades_data === 1" class="tab-content">
                <MarketTradesComponent />
            </div>
            <div v-if="trades_data === 2" class="tab-content">
                <MyTradesComponent />
            </div>
        </div>
    </div>
</template>

<script>
import MyTradesComponent from '@/components/exchange/trades_component/MyTradesComponent'
import MarketTradesComponent from '@/components/exchange/trades_component/MarketTradesComponent'
export default {
    name: 'CryptoListComponent',
    components: {
        MyTradesComponent,
        MarketTradesComponent
    },
    data() {
        return {
            trades_data: 1,
        }
    },

}
</script>
