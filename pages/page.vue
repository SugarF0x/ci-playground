<script setup lang="ts">
import { useAsyncData } from '#imports'

const { data } = await useAsyncData('/api/hello', () => $fetch(`/api/hello`))
</script>

<template>
  <div>I am on another page!</div>
  <p>Server rendered data is: {{ data }}</p>
  <a href="/">back home</a>
</template>
