<template>
<div class="market-activity-box">
    <div class="market-header px-3 py-2">
        <ul class="flex justify-between items-center">
            <li class="text-sm">Market Activities</li>
            <li><i class='bx bx-chevrons-up text-gray-500 cursor-pointer'></i></li>
        </ul>
    </div>
    <div class="market-activity-log px-3 py-2 border-b last:border-b-0 hover:bg-gray-300 hover:cursor-pointer" v-for="(activity,index) in market_activity" :key="index">
        <ul class="flex justify-between items-center">
            <li class="text-sm leading-none">
                <p class="text-sm">{{activity.currency}}/<small>{{activity.pair}}</small></p>
                <span class="text-xs">15:36:05</span>
            </li>
            <li class="leading-none">
                <p class="text-sm">{{activity.change}}%</p>
                <span class="text-xs">{{activity.time}}</span>
            </li>
            <li class="leading-none">
                <span class=" px-4 py-1 rounded-md flex items-center justify-center text-white" :class="activity.change > 0 ? 'bg-green-600' : 'bg-red-600' ">
                  <i class='bx bx-up-arrow-alt rotate-45' v-if="activity.change > 0"></i>
                  <i class='bx bx-up-arrow-alt rotate-[-135deg]' v-else></i>
                </span>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import exchange_data from '@/assets/json/exchange_data'
export default {
    name: 'MarketActivities',
    data(){
        return{
            market_activity:exchange_data.market_activity
        }
    }

}
</script>

<style>

</style>
