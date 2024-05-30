<template>
  <div class="screen-height bg-gradient-to-b from-slate-50 to-blue-300">
    <div class="bg-white px-2 py-3 shadow">
      <div class="flex justify-between items-center">
        <h2 class="font-semibold">Setting</h2>
        <div class="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="{1.5}" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </div>
      </div>
    </div>
    <div class="p-4">
      <div class="mb-3">
        <label
            for="email"
            class="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
            type="email"
            id="email"
            name="email"
            class="mt-1 p-1 w-full border rounded"
            placeholder="johndoe@gmail.com"
        />
      </div>
      <div class="mb-3">
        <label
            for="phone"
            class="block text-sm font-medium text-gray-700"
        >
          Phone
        </label>
        <input
            type="tel"
            id="phone"
            name="phone"
            class="mt-1 p-1 w-full border rounded"
            placeholder="+57 3046 6601 89"
        />
      </div>
      <div class="mb-3">
        <label
            for="name"
            class="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
            type="text"
            id="name"
            name="name"
            class="mt-1 p-1 w-full border rounded"
            placeholder="Armando Coronel"
        />
      </div>
      <div class="mb-3">
        <label for="id" class="block text-sm font-medium text-gray-700">
          ID
        </label>
        <input
            type="text"
            id="id"
            name="id"
            class="mt-1 p-1 w-full border rounded"
            placeholder="36457283"
        />
      </div>
      <div  class="mt-10">
        <button class="bg-blue-500 text-white font-bold py-2 w-full rounded">
          Save
        </button>
      </div>
    </div>
  </div>

</template>
<style scoped>
  .screen-height{
    height: calc(100vh - 55px);
  }
</style>
<script setup lang="ts">
</script>