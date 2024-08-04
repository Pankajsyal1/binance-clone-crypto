<template>
<div>
    <VueTradingView :options="chartOptions" class="-z-50"/>
</div>
</template>

<script>
import VueTradingView from 'vue-trading-view';
export default {
    name: 'ChartComponent',
    data() {
        return {
            chartOptions: {
                autosize: true,
            }
        }
    },
    components: {
        VueTradingView,
    }
}
</script>
