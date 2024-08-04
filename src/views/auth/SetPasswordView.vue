<template>
    <div>
        <!-- Alert  -->
        <div class="bg-yellow-200 text-center py-2">
            <p class="m-0 flex justify-center items-center text-xs md:text-sm"><i
                    class='bx bxs-lock text-lg align-middle mr-1 text-green-500'></i> URL verification:
                <a href="#!" class="block">Binance Clone</a>
            </p>
        </div>
        <section class="w-full md:h-[88vh] md:flex justify-center items-center py-10 md-py-0">
            <div class="lg:container">
                <div class="w-full md:w-5/6 lg:w-2/3 mx-auto sm:flex items-center justify-center p-3 lg:p-5 gap-5">

                    <div class="set-password-form-box lg:basis-1/2 xl:basis-2/5">
                        <h1 class="text-base font-bold lg:text-lg xl:text-xl mb-5">Set Password!</h1>
                        <form action="">
                            <!-- old password  -->
                            <div class="password mb-3 relative w-full">
                                <label for="" class="mb-2 block font-bold">Old Password</label>
                                <!-- input-field  -->
                                <input class="border px-3 py-2 rounded w-full" :type="hidden1 ? 'password' : 'text'"
                                    placeholder="Old Password">
                                <span class="eye absolute top-10 bottom-0 right-3">
                                    <span @click="hidden1 = !hidden1" v-html="hidden1 ? show : hide"></span>
                                </span>
                            </div>
                            <!-- New password  -->
                            <div class="password mb-3 relative w-full">
                                <label for="" class="mb-2 block font-bold">New Password</label>
                                <!-- input-field  -->
                                <input class="border px-3 py-2 rounded w-full" :type="hidden2 ? 'password' : 'text'"
                                    placeholder="New Password">
                                <span class="eye absolute top-10 bottom-0 right-3">
                                    <span @click="hidden2 = !hidden2" v-html="hidden2 ? show : hide"></span>
                                </span>
                            </div>
                            <!-- confirm password  -->
                            <div class="password mb-3 relative w-full">
                                <label for="" class="mb-2 block font-bold">Confirm Password</label>
                                <!-- input-field  -->
                                <input class="border px-3 py-2 rounded w-full" :type="hidden3 ? 'password' : 'text'"
                                    placeholder="Confirm Password">
                                <span class="eye absolute top-10 bottom-0 right-3">
                                    <span @click="hidden3 = !hidden3" v-html="hidden3 ? show : hide"></span>
                                </span>
                            </div>
                            <!-- Button  -->
                            <div class="button mt-6 mb-3">
                                <button
                                    class="bg-yellow-600 px-3 py-3 rounded-md hover:bg-yellow-500 text-white w-full font-bold">Set
                                    Password</button>
                            </div>
                        </form>
                        <!-- Or  -->
                        <div class="or text-center relative mb-3">
                            <span class="m-0 bg-white text-gray-500 px-2 font-bold">OR</span>
                            <div
                                class="line absolute top-0 bottom-0 left-0 right-0 w-full bg-gray-300 h-[1px] m-auto -z-10">
                            </div>
                        </div>

                        <!--Links -->
                        <div class="button mt-6 mb-3">
                            <p class="m-0 flex font-bold"><span class="mr-2">Already registered?</span>
                                <router-link to="/login" class="block text-yellow-600 no-underline hover:underline">
                                    Log In</router-link>
                            </p>
                        </div>
                    </div>
                    <!-- img-box  -->
                    <div class="img-box lg:basis-1/2 xl:basis-3/5 text-center hidden md:block">
                        <img src="../../assets/images/social-register-web.png" class="max-w-[250px] mx-auto" alt="img">
                        <p class="m-0 my-4 text-2xl font-bold">Buy Crypto in Minutes</p>
                        <p class="font-semibold">Enjoy the world’s largest cryptocurrency exchange <br />at your fingertips.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    </div>
</template>

<script>
export default {
    name: 'SetPasswordView',
    components: {},
    data() {
        return {
            hidden1: true,
            hidden2: true,
            hidden3: true,
            show: "<i class='bx bxs-show text-gray-500 text-2xl' ></i>",
            hide: "<i class='bx bxs-hide text-gray-500 text-2xl' ></i>",
            login_signup: 1,
        }
    }
}
</script>
