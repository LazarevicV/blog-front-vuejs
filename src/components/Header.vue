<script setup lang="ts"></script>

<template>
  <header class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-white font-bold text-xl"
        >Blog</router-link
      >
      <nav class="space-x-4">
        <router-link to="/" class="text-white">Home</router-link>
        <router-link to="/about" class="text-white">About</router-link>
        <router-link to="/contact" class="text-white">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
