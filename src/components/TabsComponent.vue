<template>
<div>
    <ul class="tabs__header flex space-x-5 mb-6">
        <li class="px-2 py-1 font-bold" v-for="(tab, index) in tabs" :key="tab.title" @click="selectTab(index)" :class='{"bg-yellow-800 text-white rounded-lg": (index == selectedIndex)}'>
           <button> {{ tab.title }}</button>
        </li>
    </ul>
    <slot></slot>
</div>
</template> 
<script>
export default {
    name: 'TabComponent',
    data() {
        return {
            selectedIndex: 0, // the index of the selected tab,
            tabs: [], // all of the tabs
        }
    },
    created() {
        this.tabs = this.$children
    },
    mounted() {
        this.selectTab(0)
    },
    methods: {
        selectTab(i) {
            this.selectedIndex = i

            // loop over all the tabs
            this.tabs.forEach((tab, index) => {
                tab.isActive = (index === i)
            })
        }
    }
}
</script>
