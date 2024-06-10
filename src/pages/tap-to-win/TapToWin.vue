<script setup>
import FortuneWheel from '../../components/Wheel.vue'
import { ref, computed, onMounted } from 'vue';
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import tapToWinSVG from "../../assets/images/tap-to-win.svg"
import sound from "../../assets/media/winner.mp3"
import { config } from "../../libs/config"
import axios from "axios"

const canvasVerify = ref(false)
const isWinner = ref(false)
const animationRef = ref(null)
const winingPrize = ref(null)
//const winingPrizeId = ref(null)
const currentSpin = ref(null)
const allPrize = ref(null) 
const audio = ref(sound)
const verifyDuration = 2
const canvasOptions = {
  btnWidth: 90,
  borderColor: '#f3f4f6',
  borderWidth: 15,
  lineHeight: 30
}
const endPoint = localStorage.getItem('url')


// const prizesCanvas = [
//   {
//     id: 1,
//     name: 'Computer', // Prize name
//     value: 'Banana\'s value', // Prize value
//     bgColor: '#45ace9', // Background color
//     color: '#ffffff', // Font color
//     probability: 0 // Probability, up to 4 decimal places
//   },
//   {
//     id: 2,
//     name: 'Laptop',
//     value: 'Laptop \'s value',
//     bgColor: 'green',
//     color: '#ffffff',
//     probability: 0
//   },
//   {
//     id: 3,
//     name: 'Orange',
//     value: 'Orange\'s value',
//     bgColor: 'orange',
//     color: '#ffffff',
//     probability: 0
//   },
//   {
//     id: 4,
//     name: 'Yellow',
//     value: 'Yellow\'s value',
//     bgColor: '#fef151',
//     color: '#ffffff',
//     probability: 0
//   },
//   {
//     id: 5,
//     name: 'Red',
//     value: 'red\'s value',
//     bgColor: 'red',
//     color: '#ffffff',
//     probability: 100
//   },
//   {
//     id: 6,
//     name: 'Blue',
//     value: 'Blue\'s value',
//     bgColor: 'blue',
//     color: '#ffffff',
//     probability: 0
//   }
// ]


const onToggleWinner = () => {
  isWinner.value = !isWinner.value;
}

const isModalVisible = computed(() => {
  return isWinner.value;
})

function testRequest(verified, duration) { // Parameter 1: Whether the verification passed, 2: Delay time
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(verified)
    }, duration)
  })
}

function onCanvasRotateStart(rotate) {
  if (canvasVerify.value) {
    const verified = true // true: Test passed verification, false: Test did not pass verification
    testRequest(verified, verifyDuration * 1000).then((verifiedRes) => {
      if (verifiedRes) {
        console.log('Verification passed, start rotating')
        rotate() // Call the callback to start rotating
        canvasVerify.value = false // Turn off verification mode
      } else {
        alert('Verification failed')
      }
    })
    return
  }
  console.log('onCanvasRotateStart')
}

async function saveWiningPrise (){
  try {
    const response = axios.get(`${config.apiUrl}/update-spinned-rewards/${currentSpin.value?.id}/${currentSpin.value?.hashId}`)
    
    console.log("update-spinned-rewards Response",response)
  } catch (error) {
    console.log("update-spinned-rewards",error)
  }
}


async function onRotateEnd(prize) {
  const element = animationRef.value
  winingPrize.value = prize.value;

  await saveWiningPrise();

  var duration = 1.5 * 1000;
  var end = Date.now() + duration;

  (function frame() {
    // launch a few confetti from the left edge
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
    });

    // keep going until we are out of time
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
  const playSound = new Audio(audio.value)
  playSound.play();
  isWinner.value = !isWinner.value;
}

onMounted(async () => {
  try {
    console.log("Get Spinner", `${config.apiUrl}${endPoint}?app_token=keos_app`)
    const response = await axios.get(`${config.apiUrl}${endPoint}?app_token=keos_app`)
    const labels = response?.data?.spinner_details?.spin_options?.labels
    const colors = response?.data?.spinner_details?.spin_options?.colors
    //winingPrize.val = response?.data?.currentSpin?.rewards

    const prizes = labels.map((label, index) => (
      {
        id: label,
        name: label,
        value: `${label}`,
        bgColor: colors[index % colors.length],
        color: '#ffffff',
        probability: index == 0 ? 100 : 0 // Change this as needed
      }
    ))
    allPrize.value = prizes
    currentSpin.value = response?.data?.currentSpin;

    console.log("Current REsponse",`${config.apiUrl}/update-spinned-rewards/${currentSpin.value?.id}/${currentSpin.value?.hashId}`)
    
  } catch (error) {
    console.log("Error : ", error)
  }
})


</script>

<template>
  <div class="relative">
    <div class="">
      <div class="flex justify-center items-center md:mt-[250px] mt-[120px]">
        <FortuneWheel 
        v-if="allPrize" 
        style="width: 385px; 
        max-width: 100%;" 
        :verify="canvasVerify"
          :canvas="canvasOptions" 
          :prizes="allPrize" 
          :prize-id="currentSpin?.rewards" 
          @rotateStart="onCanvasRotateStart"
          @rotateEnd="onRotateEnd" />
      </div>

      <audio src="../../assets/media/winner.mp3" autoplay loop></audio>

    </div>

    <transition name="fade" ref="animationRef" class="absolute left-0 md:top-[190px] top-[165px] right-0 z-50">
      <div v-if="isModalVisible" class="">
        <audio src="../../assets/media/winner.mp3" autoplay loop></audio>
        <div
          class="w-[93%] max-w-lg p-3 relative mx-auto my-auto rounded shadow-sm backdrop-blur-lg border border-white">
          <div class="mx-auto">
            <div class="">
              <img class="mx-auto" :src="tapToWinSVG" alt="">
            </div>
            <div class="text-center">
              <h3 class="text-xl font-semibold">🎉🎉Congratulation🎉🎉</h3>
              <p>Congratulation for joining out tap to win</p>
              <h2 class="text-3xl font-bold uppercase">{{ winingPrize ?? "Not Found" }}</h2>
              <RouterLink to="/" class="inline-block mt-2 px-2 py-[3px] rounded bg-blue-700 text-white">Tap To Win
              </RouterLink>
            </div>

            <small class="inline-block mt-3 text-left text-purple-700">KEOS
              <color class="text-slate-100">&copy; 2024</color>
            </small>
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>
<style lang="scss" scoped>
@import '../../assets/css/bootstrap-grid.min.css';
//@import '../../assets/css/style.scss';</style>
