<template>
<div>
    <!-- Alert  -->
    <div class="bg-yellow-200 text-center py-2">
        <p class="m-0 flex justify-center items-center text-xs md:text-sm"><i class='bx bxs-lock text-lg align-middle mr-1 text-green-500'></i> URL verification:
            <a href="#!" class="block">binance Clone</a></p>
    </div>
    <section class="w-full login-page md:h-[80vh] md:flex justify-center items-center py-10 md-py-0">
        <div class="lg:container">
            <div class="login-form-box text-center">
                <h1 class="text-3xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-5">Error!!! 404 Page Not Found</h1>
                  <div class="button mt-10">
                        <router-link to="/" class=" text-center bg-black px-10 py-3 rounded-md hover:bg-gray-200 hover:text-black text-white w-full">Back to Home Page</router-link>
                    </div>
            </div>
          
        </div>

    </section>
</div>
</template>

<script>
export default {
    name: 'NotFoundView',
    components: {},
}
</script>
