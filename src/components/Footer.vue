<script setup>
import qrImage from "../assets/images/qr.svg"
import walletImage from "../assets/images/wallet.svg"
import fireImage from "../assets/images/fire.svg"
import settingImage from "../assets/images/settings.svg"
</script>
<template>
  <div class="bottom-nav h-14 fixed bottom-0 bg-white w-full max-w-[400px]">
    <ul class="flex items-center justify-around mt-2">
      <div>
        <RouterLink to="/">
          <img :src="qrImage" alt="Wallet Icon" class="mx-auto" title="Scan"/>
          <li class="text-sm">Scan</li>
        </RouterLink>
      </div>
      <div>
        <RouterLink to="/wallet">
          <img :src="walletImage" alt="Wallet Icon" class="mx-auto" title="Scan"/>
          <li class="text-sm">Wallet</li>
        </RouterLink>
      </div>
      <div>
        <RouterLink to="/tap-to-win" class="">
          <img :src="fireImage" alt="Wallet Icon" class="mx-auto" title="Scan"/>
          <li class="text-sm">Tap To Win</li>
        </RouterLink>
      </div>
      <div>
        <RouterLink to="/setting" class="">
          <img :src="settingImage" alt="Wallet Icon" class="mx-auto" title="Scan"/>
          <li class="text-sm">Setting</li>
        </RouterLink>
      </div>
    </ul>
  </div>
</template>