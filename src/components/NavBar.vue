<template>
    <header class="border-b dark:border-gray-800 sticky top-0 z-10">
        <nav class="bg-black py-3 text-white flex items-center justify-between px-5 text-sm	">
            <!-- left navigation -->
            <div class="logo_box flex items-center gap-10">
                <!-- logo box  -->
                <router-link to="/">
                    <h1 class="text-2xl">LOGO</h1>
                    <!-- <img src="../assets/images/logo.png" class="w-20" alt="logo"> -->
                </router-link>
                <ul class="space-x-5 hidden lg:flex">
                    <li>
                        <router-link to="/exchange" class="hover:bg-zinc-600 py-4 px-4">Buy Crypto</router-link>
                    </li>
                    <li>
                        <router-link to="/exchange" class="hover:bg-zinc-600  py-4 px-4">Markets</router-link>
                    </li>
                    <li>
                        <router-link to="/exchange" class="hover:bg-zinc-600  py-4 px-4">Trade</router-link>
                    </li>
                    <li>
                        <router-link to="/exchange" class="hover:bg-zinc-600  py-4 px-4">Earn</router-link>
                    </li>
                    <li>
                        <a href="https://nextjs-ant-nft.vercel.app/" target="_blank"
                            class="hover:bg-zinc-600  py-4 px-4">NFT</a>
                    </li>
                </ul>
            </div>
            <!-- Right  navigation -->
            <ul class="space-x-5 hidden lg:inline-flex">
                <li>
                    <router-link to="/login" class="hover:bg-zinc-600 py-4 px-4">Login</router-link>
                </li>
                <li>
                    <router-link to="/register"
                        class="bg-yellow-600 px-3 py-2 rounded-md hover:bg-yellow-500 fon-bold">Register</router-link>
                </li>
                <!-- <li>
                    <router-link to=""
                        class="disabled hover:bg-zinc-600  py-4 px-4 divide-x-2 divide-neutral-100">Downloads</router-link>
                </li> -->
                <!-- <li>
                    <router-link to="" class="disabled hover:bg-zinc-600  py-4 px-4">FAQ</router-link>
                </li> -->
            </ul>

            <!-- toggle-btn -->
            <div @click="toggle()" class="relative toogle flex flex-col gap-1.5 lg:hidden cursor-pointer">
                <span class="line w-6 bg-white h-0.5"></span>
                <span class="line w-6 bg-white h-0.5"></span>
                <span class="line w-6 bg-white h-0.5"></span>

                <div class="toggle-navigation lg:hidden">

                    <ul v-if="hide" class="p-3 absolute z-10 top-9 -right-5 bg-black space-y-4 block w-[320px] lg:hidden">
                        <li>
                            <router-link to="/exchange" class="hover:bg-zinc-600 py-3 px-4">Buy Crypto</router-link>
                        </li>
                        <li>
                            <router-link to="/exchange" class="hover:bg-zinc-600  py-3 px-4">Markets</router-link>
                        </li>
                        <li>
                            <router-link to="/exchange" class="hover:bg-zinc-600  py-3 px-4">Trade</router-link>
                        </li>
                        <li>
                            <router-link to="/exchange" class="hover:bg-zinc-600  py-3 px-4">Earn</router-link>
                        </li>
                        <li>
                            <router-link to="/exchange" class="hover:bg-zinc-600  py-3 px-4">NFT</router-link>
                        </li>
                        <li>
                            <router-link to="/login" class="hover:bg-zinc-600  py-3 px-4">Login</router-link>
                        </li>
                        <li class="mx-3">
                            <router-link to="/register"
                                class="bg-yellow-600 px-3 py-2 rounded-md hover:bg-yellow-500 fon-bold">Register
                            </router-link>
                        </li>
                        <!-- <li>
                            <router-link to=""
                                class="disabled hover:bg-zinc-600  py-3 px-4 divide-x-2 divide-neutral-100">Downloads</router-link>
                        </li> -->
                        <!-- <li>
                            <router-link to="" class="disabled hover:bg-zinc-600  py-3 px-4">FAQ</router-link>
                        </li> -->
                        <li>
                            <div class="day-night-switch" @click="darkMode()">
                                <p class="hover:bg-zinc-600 pb-2 px-4 m-0 inline-block">Light/Dark</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

    </header>
</template>

<script>
export default {
    name: 'NavBar',

    data() {
        return {
            hide: false,
            disable: true
        }
    },

    mounted() {
        document.addEventListener('click', this.close)
    },

    methods: {
        toggle() {
            this.hide = !this.hide
        },
        close(e) {
            if (!this.$el.contains(e.target)) {

                // console.log(e.target);
                this.hide = false
            }
        },
        darkMode() {
            var dark = document.getElementById('app');
            dark.classList.toggle('dark');
        }
    }

}
</script>

<style scoped>
.disabled {
    opacity: 0.5;
    pointer-events: none;
}
</style>
