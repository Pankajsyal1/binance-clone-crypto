<template>
    <div class="home">
        <!-- Hero -->
        <section
            class="banner bg-slate-100 bg-no-repeat bg-center bg-cover py-6 min-h-[450px] lg:min-h-[700px] flex justify-center items-center">
            <div class="container px-1 flex items-center flex-col-reverse md:flex-row">
                <!-- banner-content -->
                <div class="banner-content text-center md:text-left w-11/12 md:w-1/2">
                    <!-- Heading  -->
                    <h1 class="font-bold mx-auto text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 md:mb-6">
                        Buy, trade, and hold
                        600+ cryptocurrencies on Binance</h1>
                    <!-- Input field  -->
                    <div class="flex flex-col justify-center md:justify-start sm:flex-row md:flex-col lg:flex-row">
                        <input type="text" placeholder="Email/Phone number"
                            class="mb-4 sm:mb-0 md:mb-4 lg:mb-0 py-2 border border-1 pl-5 pr-10 outline-gray-300">
                        <router-link to="/register"
                            class="bg-yellow-600 px-4 py-2 rounded-md sm:rounded-none hover:bg-yellow-500 text-white font-bold text-center">
                            Get Started
                        </router-link>
                    </div>

                </div>
                <!-- banner-img -->
                <div class="banner-img w-4/5 md:w-1/2">
                    <img src="../assets/images/foreground-image-light.png" class="md:max-w-full mx-auto drop-shadow-lg"
                        alt="image">
                </div>
                <!-- listed-coins  -->
            </div>
        </section>

        <!-- Exchange detail  -->
        <section class="Exchange-detail bg-white py-8 md:py-12">
            <div class="container">
                <div class="listed-coins">
                    <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center">
                        <div class="mb-5 w-100 sm:text-center">
                            <h2 class="font-extrabold text-lg md:text-xl lg:text-2xl">$76 billion</h2>
                            <p class="font-semibold text-sm md:text-base">24h trading volume on Binance exchange</p>
                        </div>
                        <div class="mb-5 w-100 sm:text-center">
                            <h2 class="font-extrabold text-lg md:text-xl lg:text-2xl">600+</h2>
                            <p class="font-semibold text-sm md:text-base">Cryptocurrencies listed</p>
                        </div>
                        <div class="mb-5 w-100 sm:text-center">
                            <h2 class="font-extrabold text-lg md:text-xl lg:text-2xl">90 million</h2>
                            <p class="font-semibold text-sm md:text-base">Registered users who trust Binance</p>
                        </div>
                        <div class="mb-5 w-100 sm:text-center">
                            <h2 class="font-extrabold text-lg md:text-xl lg:text-2xl">&lt;0.10%</h2>
                            <p class="font-semibold text-sm md:text-base">Lowest transaction fees</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Market Trend  -->
        <section class="market-trend bg-slate-100 py-8 md:py-10">
            <div class="container">
                <div class="heading-box">
                    <div class="flex justify-between gap-1">
                        <h2 class="font-extrabold text-lg md:text-xl lg:text-2xl">Market Trend</h2>
                        <router-link to="" class="hover:text-yellow-600 font-bold flex items-center">View more markets <i
                                class='bx bx-chevron-right'></i>
                        </router-link>
                    </div>
                </div>
                <div class="market-trend-table mt-6 md:mt-10 overflow-x-auto">
                    <table class="table-auto w-full whitespace-nowrap">
                        <thead class="">
                            <tr class="border-separate border-b">
                                <th class="text-sm font-bold pb-3 pr-10 text-left">Name</th>
                                <th class="text-sm font-bold pb-3 pr-10 text-center">Last Price</th>
                                <th class="text-sm font-bold pb-3 pr-10 text-center">24 Change</th>
                                <th class="text-sm font-bold pb-3 pr-10 text-right">Market Cap</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(market, index) in market_trend" :key="index"
                                class="hover:bg-slate-200 cursor-pointer">
                                <td class="py-3">
                                    <ul class="flex items-center md:space-x-5 justify-start">
                                        <li><img :src="require(`@/assets/${market.image}`)" class="w-[22px] " alt="coin">
                                        </li>
                                        <li class="mx-1 text-sm font-semibold">{{ market.name }}</li>
                                        <li class="text-gray-500 text-sm font-semibold">{{ market.pair }}</li>
                                    </ul>
                                </td>
                                <td class="font-semibold pb-2 pr-10 text-sm text-center">&dollar;{{ market.price }}</td>
                                <td class="text-sm pr-10 text-center font-semibold"
                                    :class="market.price > 0 ? 'text-green' : 'text-red'">
                                    {{ market.change }}%</td>
                                <td class="text-sm pr-10 text-right text-semibold">{{ market.cap }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="signup-btn mt-10 text-center">
                    <h2 class="font-extrabold text-lg md:text-xl lg:text-2xl mb-4">Sign up now to build your own portfolio
                        for
                        free!</h2>
                    <button type="submit"
                        class="font-bold bg-yellow-600 px-6 py-2 rounded-md hover:bg-yellow-500 text-white">
                        Get Started
                    </button>
                </div>
            </div>
        </section>

        <!-- Crypto Portfolio  -->
        <section class="crypto-portfolio py-8 md:py-10">
            <div class="container flex flex-col-reverse md:flex-row items-center justify-center space-x-5">
                <!-- content  -->
                <div class="portfolio-content md:w-1/2 text-center md:text-left">
                    <div class="heading mb-12 text-center md:text-left">
                        <h2 class="font-extrabold text-lg md:text-xl lg:text-2xl">Build your crypto portfolio</h2>
                        <p class="font-semibold">Start your first trade with these easy steps.</p>
                    </div>

                    <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1">
                        <dic class="flex flex-col items-center md:flex-row md:items-start space-x-4 mb-8"
                            v-for="(portfolio, index) in portfolio_data" :key="index">
                            <div class="icon-portfolio">
                                <img :src="require(`@/assets/${portfolio.image}`)" class="max-w-2xl mb-2 md:mb-0"
                                    alt="icon">
                            </div>
                            <div class="icon-content text-center md:text-left">
                                <h4 class="m-0 mb-1 font-extrabold text-lg lg:text-xl">{{ portfolio.title }}</h4>
                                <p class="font-semibold text-gray-500">{{ portfolio.des }}</p>
                            </div>
                        </dic>
                    </div>

                    <div class="signup-btn mt-10 text-center md:text-left">
                        <button type="submit"
                            class="bg-yellow-600 px-10 py-2 rounded-md hover:bg-yellow-500 text-white font-bold">
                            Get Started
                        </button>
                    </div>

                </div>
                <!-- image  -->
                <div class="portfolio-image w-1/2 sm:w-2/5 md:w-2/2 mb-6 md:mb-10">
                    <img src="../assets/images/portfolio-section.png" class=" w-3/4 md:max-w-xs mx-auto" alt="img">
                </div>
            </div>
        </section>

        <!-- crypto explore  -->
        <section class="crypto-explore bg-slate-100 py-8 md:py-10">
            <div class="container">
                <!-- heading  -->
                <div class="heading mb-12 text-center md:text-left">
                    <h2 class="font-extrabold text-lg md:text-xl lg:text-2xl">Explore endless possibilities with Binance
                    </h2>
                </div>
                <!-- cards  -->
                <div class="crypto-card-box grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    <div class="border card card-explore p-10 hover:shadow-lg hover:cursor-pointer mb-4 md:mb-0"
                        v-for="(explore, index) in explore_crypto" :key="index">
                        <div class="card-explore-img">
                            <img :src="require(`@/assets/${explore.image}`)" class="w-3/4 mb-10 mx-auto" alt="img">
                        </div>
                        <div class="card-explore-content">
                            <h4
                                class="m-0 text-lg md:text-lg lg:text-xl mb-1 font-bold text-ellipsis overflow-hidden whitespace-nowrap">
                                {{
                                    explore.title }}</h4>
                            <p class="font-semibold text-gray-500 mb-2 text-sm md:text-base">{{ explore.des }}</p>
                            <div class="link-explore mt-auto">
                                <router-link to="" class="text-yellow-600 font-bold  text-sm md:text-base">Learn More <i
                                        class='bx bx-chevron-right align-middle'></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- crypto trade  -->
        <section class="crypto-trade py-8 md:py-10">
            <div class="container">
                <!-- heading  -->
                <div class="flex flex-col md:flex-row justify-between mb-20">
                    <div class="heading-box flex-1 mb-3 md:mb-0">
                        <h2 class="font-extrabold text-lg md:text-xl lg:text-2xl">Trade on the go. Anywhere, anytime.</h2>
                        <p class="font-semibold">Stay in the know with our app and desktop client.</p>
                    </div>
                    <router-link to="" class="hover:text-yellow-600 flex items-center font-bold">More download options
                        <i class='bx bx-chevron-right'></i>
                    </router-link>
                </div>

                <div class="flex flex-col md:flex-row items-center md:space-x-10">

                    <div class="crypto-trade-img flex-1">
                        <img src="../assets/images/download-section.png" class="w-3/4 max-w-xl h-auto mx-auto mb-5 md:mb-0"
                            alt="img">
                    </div>

                    <div class="crypto-trade-content flex-1">
                        <div class="flex flex-col md:flex-row md:space-x-4 items-center mb-10">
                            <div class="qr-code">
                                <img src="../assets/images/websiteQRCode_noFrame.png" class="w-32" alt="icon">
                            </div>
                            <div class="qr-code-content">
                                <span class="text-gray-500 text-sm font-bold">Scan to Download</span>
                                <h5 class="text-xl font-bold">iOS & Android</h5>
                            </div>
                        </div>

                        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-4">
                            <div class="hover:bg-slate-200 cursor-pointer px-4 xl:px-8 py-4 text-center"><i
                                    class='bx bxl-apple text-5xl'></i>
                                <p class="text-sm font-semibold">App store</p>
                            </div>
                            <div class="hover:bg-slate-200 cursor-pointer px-4 xl:px-8 py-4 text-center"><i
                                    class='bx bxl-android text-5xl'></i>
                                <p class="text-sm font-semibold">Android Apk</p>
                            </div>
                            <div class="hover:bg-slate-200 cursor-pointer px-4 xl:px-8 py-4 text-center">
                                <i class='bx bxl-play-store text-5xl'></i>
                                <p class="text-sm font-semibold">Google Play</p>
                            </div>
                            <div class="hover:bg-slate-200 cursor-pointer px-4 xl:px-8 py-4 text-center"><i
                                    class='bx bxl-apple text-5xl'></i>
                                <p class="text-sm font-semibold">MacOs</p>
                            </div>
                            <div class="hover:bg-slate-200 cursor-pointer px-4 xl:px-8 py-4 text-center">
                                <i class='bx bxl-windows text-5xl'></i>
                                <p class="text-sm font-semibold">Windows</p>
                            </div>
                            <div class="hover:bg-slate-200 cursor-pointer px-4 xl:px-8 py-4 text-center"><i
                                    class='bx bxl-apple text-5xl'></i>
                                <p class="text-sm font-semibold">Linux</p>
                            </div>
                            <div class="hover:bg-slate-200 cursor-pointer px-4 xl:px-8 py-4 text-center">
                                <i class='bx bxs-pointer text-5xl'></i>
                                <p class="text-sm font-semibold">Api</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- crypto trusted  -->
        <section class="crypto-trusted bg-slate-100 py-8 md:py-10">
            <div class="container">
                <div class="flex flex-col md:flex-row justify-between mb-20">
                    <div class="heading-box flex-1 mb-3 md:mb-0">
                        <h2 class="text-xl lg:text-2xl font-extrabold">Your trusted crypto exchange</h2>
                        <p class="font-semibold">Here at Binance, we are committed to user protection with strict protocols
                            and industry-leading
                            technical measures.</p>
                    </div>
                    <router-link to="" class="hover:text-yellow-600 flex items-center font-bold">Learn more
                        <i class='bx bx-chevron-right'></i>
                    </router-link>
                </div>

                <div class="container flex flex-col-reverse md:flex-row items-center justify-center space-x-5">
                    <!-- content  -->
                    <div class="portfolio-content md:w-1/2 text-center md:text-left">
                        <div class="grid grid-cols-1">
                            <div class="flex flex-col items-center lg:flex-row md:items-start lg:space-x-4 mb-8"
                                v-for="(trusted, index) in trusted_data" :key="index">
                                <div class="icon-portfolio">
                                    <img :src="require(`@/assets/${trusted.image}`)" class="max-w-2xl mb-2 md:mb-0"
                                        alt="icon">
                                </div>
                                <div class="icon-content">
                                    <h4 class="m-0 mb-1 text-lg lg:text-xl font-bold">{{ trusted.title }}</h4>
                                    <p class="font-semibold text-gray-500">{{ trusted.des }}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- image  -->
                    <div class="portfolio-image md:w-1/2 mb-10">
                        <img src="../assets/images/trusted-section.png" class=" w-3/4 md:max-w-2xl mx-auto" alt="img">
                    </div>
                </div>

            </div>
        </section>

        <!-- Need Help  -->
        <section class="need-help mb-12 py-8 md:py-10">
            <div class="container">
                <!-- heading  -->
                <div class="heading md:mb-12 mb-8 text-center">
                    <h2 class="text-lg md:text-xl lg:text-2xl font-extrabold">Need help?</h2>
                </div>
                <!-- cards  -->
                <div class="crypto-card-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="flex flex-col lg:space-x-5 lg:flex-1 border p-6 md:p-10 hover:border-yellow-600 hover:cursor-pointer"
                        v-for="(need, index) in need_help" :key="index">
                        <div class="card-explore-img">
                            <img :src="require(`@/assets/${need.image}`)" class="max-w-2xl" alt="img">
                        </div>
                        <div class="card-explore-content">
                            <h4 class="m-0 text-lg lg:text-xl mb-2 font-bold">{{ need.title }}</h4>
                            <p class="text-gray-500 text-base font-semibold mb-2">{{ need.des }}</p>

                            <div class="link-explore mt-auto">
                                <router-link to="" class="text-yellow-600 font-bold">{{ need.link }} <i
                                        class='bx bx-chevron-right align-middle'></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- crypto trusted  -->
        <section class="crypto-trusted bg-slate-100 py-8 md:py-10">
            <div class="container text-center">
                <h2 class="text-lg md:text-xl lg:text-2xl mb-5 font-bold">Your trusted crypto exchange</h2>
                <button type="submit" class="bg-yellow-600 px-6 py-2 rounded-md hover:bg-yellow-500 text-white font-bold">
                    Signup Now
                </button>
            </div>
        </section>
    </div>
</template>

<script>
import exchange_data from '@/assets/json/exchange_data'
export default {
    name: 'HomeView',
    components: {},
    data() {
        return {
            market_trend: exchange_data.market_trend,
            portfolio_data: exchange_data.portfolio_data,
            explore_crypto: exchange_data.explore_crypto,
            trusted_data: exchange_data.trusted_data,
            need_help: exchange_data.need_help
        }
    }
}
</script>

<style>
.banner {
    background-image: url('../assets/images/web-background-image.png');
}

input:focus,
input:focus-visible,
input:focus-within {
    border: 1px solid rgb(166, 166, 166);
}
</style>
