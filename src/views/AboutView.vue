<script setup lang="ts">
defineProps({
  msg: String,
})
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    {{ msg }}
  </h1>
</template>

<style scoped></style>
