<script setup>
import { ref } from "vue";
import { config } from "../../libs/config"
import axios from "axios"
import { useRouter } from "vue-router";


const endPoint = localStorage.getItem('url')
const id = endPoint.split('/scaned/');
const router = useRouter();

const data = ref({
  email: null,
  phone: null,
  name: null,
  password: null,
  encript_id:id[1]
})

const errors = ref(null)

const submitData = async () => {

  try {
      const response = await axios.post(`${config.apiUrl}/get-spinner-info`, data.value)
      if(response.status === 200){

          console.log("Response Data afasdfasdf",response?.data?.data)
          router.push('/tap-to-win')
        if(response?.data?.data){
          router.push('/tap-to-win')
        }else{
          router.push('/scan')
        }
      } 

  } catch (error) {
    errors.value = error?.response?.data?.errors
  }

}


</script>

<template>
  <div class="screen-height bg-gradient-to-b from-slate-50 to-blue-300">
    <div class="bg-white px-2 py-3 shadow">
      <div class="flex justify-between items-center">
        <h2 class="font-semibold">Setting</h2>
        <div class="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="{1.5}"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </div>
      </div>
    </div>
    <form @submit.prevent="submitData()"> 
      <div class="p-4">
        <div class="mb-3">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input type="email" id="email" name="email" required v-model="data.email"
            class="mt-1 p-1 w-full border rounded" placeholder="johndoe@gmail.com" />
            <small v-if="errors?.email?.[0]" class="text-red-500">
              {{ errors?.email?.[0] }}
            </small>
        </div>
        <div class="mb-3">
          <label for="phone" class="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input type="tel" id="phone" name="phone" required v-model="data.phone" class="mt-1 p-1 w-full border rounded"
            placeholder="+57 3046 6601 89" />
            <small v-if="errors?.phone?.[0]" class="text-red-500">
              {{ errors?.phone?.[0] }}
            </small>
        </div>
        <div class="mb-3">
          <label for="name" class="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input type="text" id="name" name="name" required v-model="data.name" class="mt-1 p-1 w-full border rounded"
            placeholder="Armando Coronel" />
            <small v-if="errors?.name?.[0]" class="text-red-500">
              {{ errors?.name?.[0] }}
            </small>
        </div>
        <div class="mb-3">
          <label for="id" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input type="password" id="id" name="id" required v-model="data.password"
            class="mt-1 p-1 w-full border rounded" placeholder="*** *** ***" />
            <small v-if="errors?.password?.[0]" class="text-red-500">
              {{ errors?.password?.[0] }}
            </small>
        </div>
        <div class="mt-10">
          <button type="submit" class="bg-blue-500 text-white font-bold py-2 w-full rounded">
            Save
          </button>
        </div>
      </div>
    </form>
  </div>

</template>
<style scoped>
.screen-height {
  height: calc(100vh - 55px);
}
</style>