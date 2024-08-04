<template>
<div class="flex flex-col">
    <div class="overflow-x-auto">
        <div class="py-2 inline-block sm:w-full overflow-x-auto">
            <div class="overflow-hidden">
                <table class="min-w-full text-center dark:text-white text-sm">
                    <thead class="border-b dark:border-gray-800">
                        <tr>
                            <td class="px-3 py-1 whitespace-nowrap">Currency</td>
                            <td class="px-3 py-1 whitespace-nowrap">Type</td>
                            <td class="px-3 py-1 whitespace-nowrap">Price</td>
                            <td class="px-3 py-1 whitespace-nowrap">Qty</td>
                            <td class="px-3 py-1 whitespace-nowrap">Total</td>
                            <td class="px-3 py-1 whitespace-nowrap">Completed</td>
                            <td class="px-3 py-1 whitespace-nowrap">Pending</td>
                            <td class="px-3 py-1 whitespace-nowrap">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-gray-500" v-for="(order, index) in open_orders" :key="index">
                            <td class="px-3 py-1 whitespace-nowrap">{{order.currency}}</td>
                            <td class="px-3 py-1 whitespace-nowrap">{{order.type}}</td>
                            <td class="px-3 py-1 whitespace-nowrap">{{order.price}}</td>
                            <td class="px-3 py-1 whitespace-nowrap">{{order.qty}}</td>
                            <td class="px-3 py-1 whitespace-nowrap">{{order.total}}</td>
                            <td class="px-3 py-1 whitespace-nowrap">{{order.completed}}</td>
                            <td class="px-3 py-1 whitespace-nowrap">{{order.pending}}</td>
                            <td class="px-3 py-1 whitespace-nowrap">
                                <ul class="flex justify-center space-x-2">
                                    <li><i class='bx bxs-edit text-blue-500 text-lg cursor-pointer'></i></li>
                                    <li><i class='bx bxs-trash text-red-500 text-lg cursor-pointer'></i></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import exchange_data from '@/assets/json/exchange_data'
export default {
    name: "TradeHistoryComponent",
    data() {
        return {
            open_orders: exchange_data.open_orders
        }
    }

}
</script>

<style>

</style>
