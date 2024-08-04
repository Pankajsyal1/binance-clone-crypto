<template>
    <div id="app">
        <NavBar />
        <router-view />
        <MainFooter />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import MainFooter from '@/components/MainFooter';
export default {
    name: 'App',
    data() {
        return {

        }
    },
    components: {
        NavBar,
        MainFooter
    },
    mounted() {

    }
}
</script>

<style>
/* @font-face {
    font-family: 'binance';
    src: url(../src/assets/font-family/medium.woff2);
} */

body {
    /* font-family: binance; */
    font-family: 'Mulish', sans-serif;
}

p {
    margin: 0;
    line-height: normal;
}

#vue-trading-view {
    height: 450px;
}

/************************************Main Custom Scroll *************************************/
/* width */

::-webkit-scrollbar {
    width: 4px;
}

/* Track */

::-webkit-scrollbar-track {
    background: #eee;
}

/* Handle */

::-webkit-scrollbar-thumb {
    background: #aaa;
}

/* Handle on hover */

::-webkit-scrollbar-thumb:hover {
    background: #777;
    cursor: pointer;
}

/* 
:focus-visible {
    outline: unset !important;
}
:focus {
    all: unset;
} */
</style>
