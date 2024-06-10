<script setup>
import { QrcodeStream } from "vue-qrcode-reader"
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios"
import { getUrlEndpoint } from "../../libs/helper";

const router = useRouter();
const scanValue = ref()
const onDetact = async (event) => {
  if (event[0]?.rawValue) {
    scanValue.value = event[0]?.rawValue;

    if (scanValue.value) {
      console.log(scanValue.value)
      localStorage.setItem('url',getUrlEndpoint(scanValue.value))
      const response = await axios.get(`${scanValue.value}?app_token=keos_app`)

      if (response.data.data === false) {
        router.push('/setting')
      } else {
        router.push('/tap-to-win')
      }
    }
  } else {
    alert("Sonething Want wrong . Try again")
    console.log('Something want wrong');
  }
}

const formates = [
  {
    "boundingBox": {
      "x": 82,
      "y": 70,
      "width": 178,
      "height": 188,
      "top": 70,
      "right": 260,
      "bottom": 258,
      "left": 82
    },
    "rawValue": "https://wikipedia.org",
    "format": "qr_code",
    "cornerPoints": [
      { "x": 82, "y": 91 },
      { "x": 244, "y": 70 },
      { "x": 260, "y": 240 },
      { "x": 94, "y": 258 }
    ]
  },
  {
    "boundingBox": {
      "x": 322,
      "y": 135,
      "width": 244,
      "height": 240,
      "top": 135,
      "right": 566,
      "bottom": 375,
      "left": 322
    },
    "rawValue": "Hello, world!",
    "format": "qr_code",
    "cornerPoints": [
      { "x": 322, "y": 160 },
      { "x": 542, "y": 135 },
      { "x": 566, "y": 359 },
      { "x": 342, "y": 375 }
    ]
  }
]
</script>
<template>
  <div class="md:mt-[250px] mt-[120px]">
    <h3 class="text-center text-white mb-8">Point the camera toward the QR Code</h3>
    <QrcodeStream :formates="formates" @detect="onDetact"></QrcodeStream>
  </div>
</template>
