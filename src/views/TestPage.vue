<template>
  <div class="p-10 space-y-2" >
  <button
    class="transition ease-in-out duration-300 w-12 bg-gray-200 rounded-full focus:outline-none"
    :class="{ 'bg-green-300': toggle }"
    @click="toggle = !toggle"
  >
    <div
      class="transition ease-in-out duration-300 rounded-full h-6 w-6 bg-white shadow"
      :class="{ 'transform translate-x-full ': toggle }"
    ></div>
  </button>
  
  <button
    class="flex items-center transition ease-in-out duration-300 w-10 h-4 bg-gray-200 rounded-full focus:outline-none"
    :class="{ 'bg-red-300': toggle2 }"
    @click="toggle2 = !toggle2"
  >
    <div
      class="transition ease-in-out duration-300 rounded-full h-5 w-5 bg-white shadow border"
      :class="{ 'transform translate-x-full ': toggle2 }"
    ></div>
  </button>
<br>
<br>
  <button @click="toggle = !toggle">Toogle One</button>
  br
  <button @click="toggle2 = !toggle2">Toogle Two</button>
</div>
</template>

<script>
export default {
 name: "TestPage",
 data(){
   return {
     toggle: false,
    toggle2 :  false
   }
 }
}
</script>

<style>

</style>