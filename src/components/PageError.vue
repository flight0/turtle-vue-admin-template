<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';

defineProps(["error"]);

const router = useRouter()
const handleReturnBack = () => {
    router.back();
}
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-50">
    <div class="flex flex-col items-center text-gray-700">
      <h1 class="text-3xl font-medium">{{error.code}}</h1>
      <p class="mt-2 text-base">{{error.message}}</p>
      <p class="text-sm ">{{error.content}}</p>
      <div class="mt-4 text-sm">
        <RouterLink
          to="/"
          class="bg-indigo-600 text-white rounded-md inline-block py-2 px-6"
        >
          Go Home
        </RouterLink>
        <button
          class="bg-indigo-100 text-indigo-600 rounded-md py-2 px-6 ml-2"
          @click="handleReturnBack"
        >
          Return Back
        </button>
      </div>
    </div>
  </div>
</template>
