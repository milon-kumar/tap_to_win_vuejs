<script setup>
import { ref } from "vue"
import walletImage from "../../assets/images/walletIcon.svg"
const showImage = ref(false)
const toggleImageVisibility = () => {
  showImage.value = !showImage.value

  console.log("showImage", showImage.value)
}
</script>


<template>
  <div class="screen-height bg-white">
    <div class="bg-white px-2 py-3 shadow">
      <div class="flex justify-between items-center">
        <h2 class="font-semibold">Wallet Details</h2>
        <div class="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="{1.5}"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="screen-height overflow-hidden overflow-y-auto custom-scroll">
      <div v-for="item in 2" class="main-parent-card p-4 m-5 rounded-lg "
        style="box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;">
        <div>
          <div class="flex gap-3">
            <img class="h-[120px] object-cover rounded-[23px] w-[120px]"
              src="../../assets/images/walatesdetails-1.jpeg" />
            <div>
              <div class="flex justify-between gap-[70px] items-center">
                <img class="h-[15px] w-[40px]" src="../../assets/images/Layer_1.svg" />
                <h3 class="text-[#565656] text-[14px]">Mar 30, 2023</h3>
              </div>
              <div>
                <h2 class="text-black text-[20px] leading-[28px] font-medium mt-1 mb-0">Juana de Arco</h2>
                <h2 class="text-[#9E9E9E] text-[14px] ">juana@keos.com</h2>
              </div>
              <div class="flex items-center justify-between mt-3">
                <h4 class="text-[16px] font-medium text-blue-700">Everyday</h4>
                <div @click="toggleImageVisibility()">
                  <img class="h-[30px] object-cover w-[30px] cursor-pointer	" src="../../assets/images/qr.svg" />
                </div>
              </div>
            </div>
          </div>
          <!-- showImage === true -->
          <div
            :class="showImage === true ? 'hidden transition-all duration-300 ease-in-out' : 'block transition-all duration-300 ease-in-out'">
            <img class="h-[120px] object-cover w-[120px] mt-6 m-auto" src="../../assets/images/qr-images.png" />
          </div>
        </div>
      </div>

      <div class="main-parent-card p-4 m-5 rounded-lg" style="box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;">
        <div>
          <div class="flex gap-3">
            <img class="h-[120px] object-cover rounded-[23px] w-[120px]"
              src="../../assets/images/walatesdetails-2.jpeg" />
            <div>
              <div class="flex justify-between gap-[70px] items-center">
                <img class="h-[15px] w-[40px]" src="../../assets/images/Layer_1.svg" />
                <h3 class="text-[#565656] text-[14px]">Mar 30, 2023</h3>
              </div>
              <div>
                <h2 class="text-black text-[20px] leading-[28px] font-medium mt-1 mb-0">Juana de Arco</h2>
                <h2 class="text-[#9E9E9E] text-[14px] ">juana@keos.com</h2>
              </div>
              <div class="flex items-center justify-between mt-3">
                <h4 class="text-[16px] font-medium text-blue-700">Everyday</h4>
                <div @click="toggleImageVisibility()">
                  <img class="h-[30px] object-cover w-[30px] cursor-pointer	" src="../../assets/images/qr.svg" />
                </div>
              </div>
            </div>
          </div>

          <div
            :class="showImage === true ? 'hidden transition-all duration-300 ease-in-out' : 'block transition-all duration-300 ease-in-out'">
            <img class="h-[120px] object-cover w-[120px] mt-6 m-auto" src="../../assets/images/qr-images.png" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<style scoped>
.screen-height {
  height: calc(100vh - 20px);
}


.custom-scroll::-webkit-scrollbar {
  width: 3px;
}

.custom-scroll::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.main-parent-card:last-child {
  margin-bottom: 70px;
}
</style>
