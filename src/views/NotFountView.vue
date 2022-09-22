<script setup lang="ts">
import PageError from "@/components/PageError.vue";
</script>

<template>
  <PageError
    :error="{
        code: 404,
        message: 'Page not found.',
        content: 'Sorry, the page you are looking for could not be found.',
      }"
  />
</template>
