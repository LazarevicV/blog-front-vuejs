<script setup>
import MainContentHome from '../components/MainContentHome.vue'
import { fetchBlogs } from '@/functions.js'
import { ref, onMounted } from 'vue'

const blogs = ref([])

onMounted(async () => {
  blogs.value = await fetchBlogs()
  console.log(blogs.value)
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline text-center p-5">
      Welcome to the best blog
    </h1>
    <MainContentHome :blogs="blogs" />
  </div>
</template>
