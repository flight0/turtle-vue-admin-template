<script setup lang="ts">
import PageError from "@/components/PageError.vue";
</script>

<template>
  <PageError
    :error="{
      code: 500,
      message: `Internal server error.`,
      content: `The server encountered something unexpected that didn't allow it to complete the request.`,
    }"
  />
</template>
