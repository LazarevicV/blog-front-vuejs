<template>
  <div v-if="blog" class="max-w-2xl mx-auto py-8">
    <h2 class="text-3xl font-bold mb-4">{{ blog.title }}</h2>

    <!-- Add space for image -->
    <img
      v-if="blog.image"
      :src="blog.image"
      alt="Blog Image"
      class="mb-4 rounded-lg w-full"
    />

    <div class="text-gray-700 mb-4">{{ blog.content }}</div>
    <p class="text-gray-500">Blog ID: {{ id }}</p>
  </div>
  <div v-else class="max-w-2xl mx-auto py-8">
    <p class="text-xl">No blog data available.</p>
  </div>
</template>

<script>
import { fetchSingleBlog } from '@/functions.js'

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      blog: null,
    }
  },
  async mounted() {
    try {
      this.blog = await fetchSingleBlog(this.id)
      console.log('Blog Data:', this.blog)
    } catch (error) {
      console.error('Error fetching blog:', error)
    }
  },
}
</script>

<style scoped>
/* Additional styles for the BlogView component */
/* Adjust these styles as needed to achieve the desired appearance */

img {
  max-width: 100%; /* Ensure the image doesn't exceed its container */
}

/* Add more styles to format the blog content */
</style>
