<template>
  <div data-v-40e91c7c="" class="spinner-wheel-table __entries-box vertical layout">
    <div data-v-40e91c7c="" class="spinner-wheel-table __label">
      <div data-v-27f8e8ca="" data-v-40e91c7c="" class="spinner-wheel-label _container --white" variant="white"
           style="background-color: rgb(202, 1, 111);">
        <div data-v-27f8e8ca="" class="spinner-wheel-label _text"> Entry 2</div>
      </div>
    </div>
    <div data-v-6dafa38c="" data-v-40e91c7c="" class="entries-box vertical layout entries flex">
      <div data-v-6dafa38c="" class="entries-box __blur"></div>
      <div data-v-6dafa38c="" class="entries-box __header horizontal layout center">
        <div data-v-6dafa38c="" class="flex entries-count"> Entries <span data-v-6dafa38c="">0</span></div>
      </div>
      <form data-v-6dafa38c="" class="entries-box __input-entry horizontal layout center">
        <div data-v-6dafa38c="" class="relative flex mr-2">
          <div data-v-75372ca6="" data-v-6dafa38c="" class="aha-input__wrapper w-full">
            <input data-v-75372ca6=""
                   type="text"
                   placeholder="entry1, entry2, ..."
                   maxlength="2500"
                   class="aha-input aha-input-md aha-input-limit light"><span
              data-v-75372ca6="" class="aha-input--char-counter"> 2500 </span>
            <div data-v-75372ca6="" class="aha-input__ghost-input" style="display: none;"></div>
          </div>
        </div>
        <button data-v-6dafa38c="" type="submit" class="aha-button aha-button-md aha-button-primary"><!----><span
            data-v-6dafa38c="">Add</span><!----></button>
      </form>
      <div data-v-6dafa38c="" class="flex entries-box __list"><p data-v-6dafa38c="" class="text-center text-base-60">
        Enter entries separated by a comma </p>
        <ul data-v-6dafa38c="" class="w-full"></ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>