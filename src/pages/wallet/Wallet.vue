<script setup>
import walletImage from "../../assets/images/walletIcon.svg"


</script>


<template>
  <div class="screen-height bg-white">
    <div class="bg-white px-2 py-3 shadow">
      <div class="flex justify-between items-center">
        <h2 class="font-semibold">Wallet</h2>
        <div class="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="{1.5}"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="">
      <div class="flex flex-col justify-center items-center gap-5">
        <img class="md:mt-[350px] mt-[200px] w-[100px]" :src="walletImage" alt="">
        <!-- <button class="bg-blue-600 py-[6px] px-[30px] rounded-md text-white">Save</button> -->
        <RouterLink to="/walletdetails" class="bg-blue-600 py-[6px] px-[30px] rounded-md text-white">Save</RouterLink>
      </div>
    </div>
  </div>

</template>
<style scoped>
.screen-height {
  height: calc(100vh - 55px);
}
</style>
