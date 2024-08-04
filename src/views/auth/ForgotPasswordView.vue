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

                    <div class="Forgot-form-box lg:basis-1/2 xl:basis-2/5">
                        <h1 class="text-base font-bold lg:text-lg xl:text-xl mb-2">Security verification!</h1>
                        <span class="text-base inline-block mb-6 font-semibold">To secure your account, please complete the
                            following
                            verification.</span>
                        <form action="">

                            <!-- Email verification -->
                            <div class="password mb-3 relative w-full">
                                <label for="" class="mb-1 block font-bold">Email Verification Code</label>
                                <!-- input-field  -->
                                <input class="border px-3 py-2 rounded w-full" type="email" placeholder="Code">
                                <span class="absolute top-[35px] right-4">
                                    <Button class="text-sm text-yellow-600" type="button">Get Code</Button>
                                </span>
                                <span class="text-sm text-slate-600 mt-1 inline-block">Enter the 6-digit code sent to
                                    ******</span>
                            </div>
                            <!-- Email verification -->
                            <div class="password mb-4 relative w-full">
                                <label for="" class="mb-1 block font-bold font-bold">Phone Verification Code</label>
                                <!-- input-field  -->
                                <input class="border px-3 py-2 rounded w-full" type="tel" placeholder="Code">
                                <span class="absolute top-[35px] right-4">
                                    <Button class="text-sm text-yellow-600 font-bold" type="button">Get Code</Button>
                                </span>
                                <span class="text-sm text-slate-600 mt-1 inline-block">Enter the 6-digit code sent to
                                    ******</span>
                            </div>
                            <!-- Button  -->
                            <div class="button mb-3">
                                <router-link to="/set-password"
                                    class="bg-yellow-600 px-3 py-3 rounded-md hover:bg-yellow-500 text-white w-full inline-block text-center font-bold">Verification</router-link>
                                <!-- <button
                                    class="bg-yellow-600 px-3 py-3 rounded-md hover:bg-yellow-500 text-white w-full">Verification</button> -->
                            </div>
                        </form>
                        <!-- Or  -->
                        <div class="or text-center relative mb-3">
                            <span class="m-0 bg-white text-gray-500 px-2 font-bold">OR</span>
                            <div
                                class="line absolute top-0 bottom-0 left-0 right-0 w-full bg-gray-300 h-[1px] m-auto -z-10">
                            </div>
                        </div>
                        <!--  Button  -->
                        <div class="button mb-4">
                            <router-link to="/login"
                                class="block text-center bg-black px-3 py-3 rounded-md hover:bg-gray-200 hover:text-black text-white w-full font-bold">Back
                                to Log In Page</router-link>
                        </div>
                        <!--Links -->
                        <div class="button mt-6 mb-3">
                            <p class="m-0 flex font-bold"><span class="mr-2">Don't Have Account?</span>
                                <router-link to="/register" class="block text-yellow-600 no-underline hover:underline">
                                    Sign Up</router-link>
                            </p>
                        </div>
                    </div>

                    <!-- Img Box  -->
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
    name: 'ForgotPasswordView',

}
</script>
