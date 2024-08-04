<template>
<section class="login-page h-screen flex justify-center items-center">

    <div class="container flex items-center">
        <div class="login-form-box flex-auto">
            <h1 class="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 md:mb-6">Binance Account Login</h1>

            <TabsComponent>
                <TabComponent title="Tab 1">Hello From Tab 1</TabComponent>
                <TabComponent title="Tab 2">Hello From Tab 2</TabComponent>
                <TabComponent title="Tab 3">Hello From Tab 3</TabComponent>
                <TabComponent title="Tab 4">Hello From Tab 4</TabComponent>
            </TabsComponent>

        </div>
        <div class="qr-code">
            <img src="../../assets/images/foreground-image-light.png" class="max-w-md " alt="img">
        </div>

    </div>

</section>
</template>

<script>
import TabComponent from '@/components/TabComponent'
import TabsComponent from '@/components/TabsComponent'
export default {
    name: 'LoginView',
    components: {
        TabComponent,
        TabsComponent
    },
}
</script>
