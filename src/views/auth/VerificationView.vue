<template>
<div>
    <!-- Alert  -->
    <div class="bg-yellow-200 text-center py-2">
        <p class="m-0 flex justify-center items-center text-xs md:text-sm"><i class='bx bxs-lock text-lg align-middle mr-1 text-green-500'></i> URL verification:
            <a href="#!" class="block">Binance Clone</a></p>
    </div>
    <section class="w-full md:h-[80vh] md:flex justify-center items-center py-10 md-py-0">
        <div class="lg:container">

            <div class="Verification-box text-center">
                <h1 class="text-3xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-5">Redirecting to Exchange Page!</h1>
                  <i class='bx bx-loader-alt animate-spin text-8xl text-yellow-600'></i>
            </div>
          
        </div>

    </section>
</div>
</template>

<script>
export default {
    name: 'VerificationView'
}
</script>
