<script setup>
    import BottomFooter from "../components/Footer.vue"
</script>
<template>
    <div class="bg-gradient-to-r from-orange-100 to-green-100 h-screen flex justify-center items-center">
      <div class="max-w-[400px] bg-[rgba(0,0,0,0.09)] w-full border-amber-800 h-full rounded shadow-sm">
        <div class="">
          <router-view/>
        </div>
        <div class="">
          <BottomFooter />
        </div>
      </div>
    </div>
</template>