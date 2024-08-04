<template>
<div class="currency_list_box py-3 px-3 bg-white dark:bg-black" >
   
    <!-- Search  -->
    <div >
        <div class="currency_search mb-3">
        <div class="flex items-center border dark:border-gray-800 px-2 py-1 space-x-2 rounded-sm">
            <span v-html="search_icon"></span>
            <input type="text" class="flex-1 outline-none text-xs dark:bg-black dark:text-white" placeholder="Search Coin">
        </div>
    </div>
    <div class="currency_list_heading">
        <!-- tabs -->
        <ul class="flex space-x-3 justify-between items-center">
            <li class="dark:text-white" v-for="(tab, index) in currency_tabs" :key="index">
                <button @click="showTab(tab)" :class="activeTab == tab ? 'text-yellow-600' : '' " class="text-sm" type="button">{{tab}}
                </button>
            </li>
        </ul>
    </div>
    <!-- search -->

    <div class="tab_content ">
        <!-- Table  -->
        <div class="currency_list_table">
            <!-- Header  -->
            <div class="currency-list-header flex border-b dark:border-gray-800 shadow-2xl bg-white dark:bg-black text-xs">
                <div class="basis-1/3">
                    <p class="text-gray-500 dark:text-white font-normal border-y-4  border-white dark:border-black cursor-pointer">Pair <i class='bx bx-sort-alt-2 text-sm align-middle'></i></p>
                </div>
                <div class="basis-1/3">
                    <p class="text-right text-gray-500 dark:text-white font-normal border-y-4  border-white dark:border-black cursor-pointer">Price <i class='bx bx-sort-alt-2 text-sm align-middle'></i></p>
                </div>
                <div class="basis-1/3">
                    <p class="text-gray-500 dark:text-white text-right font-normal border-y-4  border-white dark:border-black cursor-pointer">Change<i class='bx bx-sort-alt-2 text-sm align-middle cursor-pointer'></i><i class='bx bx-sort rotate-90 text-sm align-middle cursor-pointer'></i></p>
                </div>
            </div>
            <!-- Data  -->
            <div class="h-[900px] md:h-[350px] overflow-y-auto overflow-x-hidden text-xs">
                <div class="py-1 currency-list-data flex shadow-2xl bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-slate-800  hover:cursor-pointer" v-for=" (data, index) in tabData" :key="index">
                    <div class="basis-1/3 pl-1">
                        <ul class="currency_detail_text flex">
                            <li class="pr-1">
                                <i class='bx bxs-star text-gray-500 '></i>
                            </li>
                            <li class="dark:text-white">
                                {{data.pair}}
                            </li>
                        </ul>
                    </div>
                    <div class="text-right basis-1/3">
                        <span :class="data.price > 0 ? 'text-green-600' : 'text-red-600'"> {{data.price}}</span>
                    </div>
                    <div class="basis-1/3 text-right pr-1">
                        <span :class="data.change > 0 ? 'text-green-600' : 'text-red-600'">{{data.change}}%</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
</div>
</template>

<script>
import exchange_data from '@/assets/json/exchange_data.json';
export default {
    name: 'CryptoListComponent',
    data() {
        return {
            isActive: true,
            activeTab: '',
            tabData: [],
            currency_tabs: exchange_data.currency_tabs,
            favData: exchange_data.favData,
            btcData: exchange_data.btcData,
            ethData: exchange_data.ethData,
            bnbData: exchange_data.bnbData,
            usdtData: exchange_data.usdtData,
            market_icon: "<svg width='17' height='12' viewBox='0 0 17 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.27136 10.8439V0H3.5285V10.8439H4.34279V2.22439H7.59993V10.8439H8.41422V4.44878H11.6714V10.8439H12.4856V6.95122H15.7428V10.8439H16.0142C16.164 10.8439 16.2856 10.9682 16.2856 11.122C16.2856 11.2757 16.164 11.4 16.0142 11.4H15.7428H12.4856H11.6714H8.41422H7.59993H4.34279H3.5285H0.27136C0.121531 11.4 -6.86646e-05 11.2757 -6.86646e-05 11.122C-6.86646e-05 10.9682 0.121531 10.8439 0.27136 10.8439Z' fill='#FF9B17'/></svg>",
            search_icon: "<svg xmlns='http://www.w3.org/2000/svg' class='fill-gray-500' width='16' height='16' viewBox='0 0 24 24'><path d='M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z'></path></svg>"
        }
    },
    mounted() {
        this.tabData = this.favData;
        this.showTab("BTC");
    },
    methods: {
        showTab(tab) {
            this.activeTab = tab

            if (tab == "Fav") {
                this.tabData = this.favData
            }
            if (tab == "BTC") {
                this.tabData = this.btcData
            }
            if (tab == "ETH") {
                this.tabData = this.ethData
            }
            if (tab == "BNB") {
                this.tabData = this.bnbData
            }
            if (tab == "USDT") {
                this.tabData = this.usdtData
            }

        }
    }
}
</script>
