<template>
    <div>
        <!-- Alert  -->
        <div class="bg-yellow-200 text-center py-2">
            <p class="m-0 flex justify-center items-center text-xs md:text-sm"><i
                    class='bx bxs-lock text-lg align-middle mr-1 text-green-500'></i> URL verification:
                <a href="#!" class="block">Binance Clone</a>
            </p>
        </div>
        <section class="w-full md:flex justify-center items-center py-10">
            <div class="lg:container">
                <div class="w-full md:w-5/6 lg:w-2/3 mx-auto sm:flex items-center justify-center p-3 lg:p-5 gap-5">
                    <div class="register-form-box lg:basis-1/2 xl:basis-2/5">
                        <h1 class="text-base font-bold lg:text-lg xl:text-xl mb-5">Welcome to Binance Clone!
                        </h1>

                        <form action="">
                            <!-- Full Name  -->
                            <div class="password mb-3 w-full">
                                <label for="" class="mb-2 block font-bold">Full Name</label>
                                <!-- input-field  -->
                                <input class="border px-3 py-2 rounded w-full" type="text" placeholder="Full Name">
                            </div>
                            <!-- Email Address  -->
                            <div class="password mb-3 w-full">
                                <label for="" class="mb-2 block font-bold">Email</label>
                                <!-- input-field  -->
                                <input class="border px-3 py-2 rounded w-full" type="email" placeholder="Email Address">
                            </div>
                            <!-- phone number  -->
                            <div class="phone_number mb-3">
                                <label for="" class="mb-2 inline-block font-bold">Phone Number</label>
                                <div class="phone-number flex space-x-4">
                                    <!-- country  -->
                                    <span class="border p-2 rounded">
                                        <select name="" id="" class="outline-none">
                                            <option selected>
                                                {{ country.number }}
                                            </option>
                                            <option v-for="(item, index) in country_list" :key="index">
                                                {{ item.number }}
                                            </option>
                                        </select>
                                    </span>

                                    <!-- input-field  -->
                                    <input class="border px-3 rounded w-full py-2" type="tel" placeholder="Phone Number">

                                </div>
                            </div>
                            <!-- password  -->
                            <div class="password mb-3 relative w-full">
                                <label for="" class="mb-2 block font-bold">Confirm Password</label>
                                <!-- input-field  -->
                                <input class="border px-3 py-2 rounded w-full" :type="hidden ? 'password' : 'text'"
                                    placeholder="Password">
                                <span class="eye absolute top-10 bottom-0 right-3">
                                    <span @click="hidden = !hidden" v-html="hidden ? show : hide"></span>
                                </span>
                            </div>
                            <!-- confirm password  -->
                            <div class="password mb-3 relative w-full">
                                <label for="" class="mb-2 block font-bold">Password</label>
                                <!-- input-field  -->
                                <input class="border px-3 py-2 rounded w-full" :type="hidden1 ? 'password' : 'text'"
                                    placeholder="Confirm Password">
                                <span class="eye absolute top-10 bottom-0 right-3">
                                    <span @click="hidden1 = !hidden1" v-html="hidden1 ? show : hide"></span>
                                </span>
                            </div>
                            <!-- T&C  -->
                            <div class="button mb-3 flex items-start space-x-2">
                                <label class="text-sm leading-normal font-semibold">
                                    <input type="checkbox" class="text-yellow-600 mr-1">
                                    <span>By creating an account you agree to our <router-link to=""
                                            class="text-yellow-600 hover:underline">Terms and Conditions</router-link> and
                                        <router-link to="" class="text-yellow-600 hover:underline">Data Protection
                                            Guidelines</router-link>.</span>
                                </label>
                            </div>
                            <!-- Button  -->
                            <div class="button mb-3">
                                <button
                                    class="bg-yellow-600 px-3 py-3 rounded-md hover:bg-yellow-500 text-white w-full font-bold">Sign
                                    Up</button>
                            </div>
                        </form>
                        <!-- Or  -->
                        <div class="or text-center relative mb-3">
                            <span class="m-0 bg-white text-gray-500 px-2 font-bold">OR</span>
                            <div
                                class="line absolute top-0 bottom-0 left-0 right-0 w-full bg-gray-300 h-[1px] m-auto -z-10">
                            </div>
                        </div>
                        <!-- Apple Button  -->
                        <div class="button mb-4">
                            <button
                                class="flex justify-center items-center gap-1 bg-black px-3 py-3 rounded-md hover:bg-gray-200 hover:text-black text-white w-full font-bold">
                                <i class='bx bxl-apple align-middle'>
                                </i>
                                <span> Continue with Apple</span>
                            </button>
                        </div>
                        <!-- Google Button  -->
                        <div class="button mb-3">
                            <button
                                class="flex justify-center items-center gap-1 border border-gray-200 bg-gray-200 px-3 py-3 rounded-md hover:bg-black text-black w-full hover:text-white font-bold">
                                <i class='bx bxl-google align-middle'></i>
                                <span>Continue with Google</span>
                            </button>
                        </div>
                        <!--Links -->
                        <div class="button mt-6 mb-3">
                            <p class="m-0 flex font-bold"><span class="mr-2">Already registered?</span>
                                <router-link to="/login" class="block text-yellow-600 no-underline hover:underline">
                                    Log In</router-link>
                            </p>
                        </div>
                    </div>
                    <!-- img box  -->
                    <div class="img-box lg:basis-1/2 xl:basis-3/5 text-center hidden md:block">
                        <img src="../../assets/images/social-register-web.png" class="max-w-[250px] mx-auto" alt="img">
                        <p class="m-0 my-4 text-2xl font-bold">Buy Crypto in Minutes</p>
                        <p class="font-semibold">Enjoy the world&apos;s largest cryptocurrency exchange <br />at your
                            fingertips.</p>
                    </div>
                </div>

            </div>

        </section>
    </div>
</template>

<script>
import te from '@/assets/json/te.json'
export default {
    name: 'RegisterView',
    components: {},
    data() {
        return {
            hidden: true,
            hidden1: true,
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
