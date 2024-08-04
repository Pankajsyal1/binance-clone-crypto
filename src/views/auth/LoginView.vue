<template>
    <div>
        <!-- Alert  -->
        <div class="bg-yellow-200 text-center py-2">
            <p class="m-0 flex justify-center items-center text-xs md:text-sm"><i
                    class='bx bxs-lock text-lg align-middle mr-1 text-green-500'></i> URL verification:
                <a href="#!" class="block">Binance Clone</a>
            </p>
        </div>
        <!-- Login Section  -->
        <section class="w-full login-page md:flex justify-center items-center py-10">
            <div class="lg:container">
                <div class=" w-full lg:w-2/3 mx-auto sm:flex items-center justify-center p-3 lg:p-5 gap-5">
                    <div class="login-form-box md:basis-1/2 xl:basis-2/5">
                        <h1 class="text-base font-bold lg:text-lg xl:text-xl mb-5">Binance Clone Account
                            Login</h1>
                        <!-- login_signup_tab -->
                        <div class="login_signup_tab flex space-x-10 mb-5">
                            <button class="text-base font-bold  py-1.5 rounded w-100" @click="login_signup = 1"
                                :class="[login_signup === 1 ? 'bg-yellow-600 text-white' : '']"><span class="px-4">Phone
                                    Number</span></button>
                            <button class="text-base font-bold py-1.5 rounded w-100" @click="login_signup = 2"
                                :class="[login_signup === 2 ? 'bg-yellow-600 text-white' : '']"><span
                                    class="px-4">Email</span></button>
                        </div>
                        <!-- login_signup_content -->
                        <div class="login_signup_content">
                            <div v-if="login_signup === 1">
                                <form action="">
                                    <!-- phone number  -->
                                    <div class="phone_number mb-3">
                                        <label for="" class="mb-2 inline-block font-bold">Phone Number</label>
                                        <div class="phone-number flex space-x-4">
                                            <!-- country  -->
                                            <span class="border p-2 rounded">
                                                <select name="" id="" class="outline-none">
                                                    <option selected>
                                                        <img :src="'https://flagpedia.net/data/flags/normal/' + country.code.toLowerCase() + '.png'"
                                                            alt="sss">
                                                        {{ country.number }}
                                                    </option>

                                                    <option v-for="(item, index) in country_list" :key="index">
                                                        <img :src="'https://flagpedia.net/data/flags/normal/' + item.code.toLowerCase() + '.png'"
                                                            alt="ss1" style="width:14px;height:14px;">
                                                        {{ item.number }}
                                                    </option>
                                                </select>
                                            </span>

                                            <!-- input-field  -->
                                            <input class="border px-3 rounded w-full py-2" type="tel"
                                                placeholder="Phone Number">

                                        </div>
                                    </div>
                                    <!-- password  -->
                                    <div class="password mb-6 relative w-full">
                                        <label for="" class="mb-2 inline-block font-bold">Password</label>
                                        <!-- input-field  -->
                                        <input class="border px-3 py-2 rounded w-full" :type="hidden ? 'password' : 'text'"
                                            placeholder="Password">
                                        <span class="eye absolute top-10 bottom-0 right-3">
                                            <span @click="hidden = !hidden" v-html="hidden ? show : hide"></span>
                                        </span>
                                    </div>
                                    <!-- Button  -->
                                    <div class="button mb-3">
                                        <button
                                            class="bg-yellow-600 px-3 py-3 rounded-md hover:bg-yellow-500 text-white w-full font-bold">Log
                                            In</button>
                                    </div>
                                    <!-- Or  -->
                                    <div class="or text-center relative mb-3">
                                        <span class="m-0 bg-white text-gray-500 px-2 font-bold">OR</span>
                                        <div
                                            class="line absolute top-0 bottom-0 left-0 right-0 w-full bg-gray-300 h-[1px] m-auto -z-10">
                                        </div>
                                    </div>
                                    <!-- Apple Button  -->
                                    <div class="button mb-4">
                                        <router-link to="/"
                                            class="flex justify-center items-center gap-1 text-center bg-black px-3 py-3 rounded-md hover:bg-gray-200 hover:text-black text-white w-full font-bold"><i
                                                class='bx bxl-apple align-middle'></i> <span>Continue with
                                                Apple</span></router-link>
                                    </div>
                                    <!-- Google Button  -->
                                    <div class="button mb-3">
                                        <router-link to="/"
                                            class="flex justify-center items-center gap-1 text-center border border-gray-200 bg-gray-200 px-3 py-3 rounded-md hover:bg-black text-black w-full hover:text-white font-bold"><i
                                                class='bx bxl-google align-middle'></i> <span>Continue with
                                                Google</span></router-link>
                                    </div>
                                    <!--Links -->
                                    <div class="button mt-5 mb-3">
                                        <router-link to="/forgot-password"
                                            class="block text-yellow-600 no-underline hover:underline font-bold">Forgot
                                            Password?</router-link>
                                        <router-link to="/register"
                                            class="block text-yellow-600 no-underline hover:underline font-bold">Register
                                            Now</router-link>
                                    </div>
                                </form>
                            </div>

                            <!-- Tab-2  -->
                            <div v-if="login_signup === 2">
                                <form action="">
                                    <!-- phone number  -->
                                    <div class="phone_number mb-3">
                                        <label for="" class="mb-2 inline-block font-bold">Phone Number</label>
                                        <div class="phone-number flex space-x-4">
                                            <!-- input-field  -->
                                            <input class="border px-3 rounded w-full py-2" type="email"
                                                placeholder="Email Address">
                                        </div>
                                    </div>
                                    <!-- password  -->
                                    <div class="password mb-5 relative">
                                        <label for="" class="mb-2 inline-block font-bold">Password</label>
                                        <!-- input-field  -->
                                        <input class="border px-3 py-2 rounded w-full" :type="hidden ? 'password' : 'text'"
                                            placeholder="Password">
                                        <div class="eye absolute top-10 bottom-0 right-3">
                                            <span @click="hidden = !hidden" v-html="hidden ? show : hide"></span>

                                        </div>
                                    </div>
                                    <!-- Button  -->
                                    <div class="button mt-6 mb-3">
                                        <router-link to="/login"
                                            class="bg-yellow-600 px-3 py-3 block text-center rounded-md hover:bg-yellow-500 text-white w-full font-bold">Log
                                            In</router-link>
                                    </div>
                                    <!-- Or  -->
                                    <div class="or text-center relative mb-3">
                                        <span class="m-0 bg-white text-gray-500 px-2 font-bold">OR</span>
                                        <div
                                            class="line absolute top-0 bottom-0 left-0 right-0 w-full bg-gray-300 h-[1px] m-auto -z-10">
                                        </div>
                                    </div>
                                    <!-- Apple Button  -->
                                    <div class="button mb-4">
                                        <router-link to="/"
                                            class="font-bold flex justify-center items-center gap-1 text-center bg-black px-3 py-3 rounded-md hover:bg-gray-200 hover:text-black text-white w-full"><i
                                                class='bx bxl-apple align-middle'></i> Continue with Apple</router-link>
                                    </div>
                                    <!-- Google Button  -->
                                    <div class="button mb-3">
                                        <router-link to="/"
                                            class="flex justify-center items-center gap-1 text-center border border-gray-200 bg-gray-200 px-3 py-3 rounded-md hover:bg-black text-black w-full hover:text-white font-bold">
                                            <i class='bx bxl-google align-middle'></i>
                                            <span> Continue with
                                                Google</span>
                                        </router-link>
                                    </div>
                                    <!--Links -->
                                    <div class="button mt-5 mb-3">
                                        <router-link to="/forgot-password"
                                            class="block text-yellow-600 no-underline hover:underline font-bold">Forgot
                                            Password?</router-link>
                                        <router-link to="/register"
                                            class="block text-yellow-600 no-underline hover:underline font-bold">Register
                                            Now</router-link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <!-- img box  -->
                    <div class="qr-code md:basis-1/2 xl:basis-3/5 text-center hidden md:block">
                        <img src="../../assets/images/websiteQRCode_noFrame.png" class="max-w-[150px] mx-auto" alt="img">
                        <p class="m-0 mb-5 font-bold text-base md:text-lg lg:text-xl">Log in with QR code</p>
                        <p class="font-semibold">can this code with the <router-link to="#!"
                                class=" text-yellow-600 font-semibold no-underline hover:underline">Binance Clone mobile
                                app</router-link><br /> to log in instantly.</p>
                    </div>
                </div>

            </div>

        </section>
    </div>
</template>

<script>
import te from '@/assets/json/te.json'
export default {
    name: 'LoginView',
    components: {},
    data() {
        return {
            hidden: true,
            show: "<i class='bx bxs-show text-gray-500 text-2xl' ></i>",
            hide: "<i class='bx bxs-hide text-gray-500 text-2xl' ></i>",
            login_signup: 1,
            country: {
                number: "+91",
                flag: "🇮🇳",
                code: "IN"
            },
            country_list: [],
            // country_code: te.sort((a, b) => parseFloat(a.number.substring(1)) - parseFloat(b.number.substring(1)))
        }
    },
    mounted() {
        this.country_list = te;
        console.log('this.country_list', this.country_list);
    }
}
</script>
