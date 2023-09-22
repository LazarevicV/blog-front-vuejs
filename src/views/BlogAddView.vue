<template>
  <div class="max-w-2xl mx-auto py-8">
    <h2 class="text-3xl font-bold mb-4">Add a New Blog</h2>

    <form @submit.prevent="addBlog">
      <div class="mb-4">
        <label for="title" class="block text-gray-700 text-sm font-bold mb-2"
          >Title</label
        >
        <input
          v-model="blog.title"
          type="text"
          id="title"
          placeholder="Enter the title"
          class="w-full rounded-lg py-2 px-3 border border-gray-300"
        />
      </div>

      <div class="mb-4">
        <label for="content" class="block text-gray-700 text-sm font-bold mb-2"
          >Content</label
        >
        <textarea
          v-model="blog.content"
          id="content"
          placeholder="Enter the content"
          class="w-full rounded-lg py-2 px-3 border border-gray-300"
          rows="5"
        ></textarea>
      </div>

      <div class="mb-4">
        <label for="image" class="block text-gray-700 text-sm font-bold mb-2"
          >Image URL</label
        >
        <input
          v-model="blog.image"
          type="text"
          id="image"
          placeholder="Enter the image URL"
          class="w-full rounded-lg py-2 px-3 border border-gray-300"
        />
      </div>

      <button
        type="submit"
        class="relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Blog
        <div v-if="loading" class="loader"></div>
      </button>
    </form>

    <div v-if="successMessage" class="mt-4 rounded overflow-hidden">
      <div
        class="bg-green-200 text-green-800 p-4 flex justify-between items-center transition duration-1000"
      >
        <div>{{ successMessage }}</div>
        <button @click="closeNotification" class="text-gray-700">
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        image: '',
      },
      successMessage: '',
      loading: false,
    }
  },
  methods: {
    async addBlog() {
      if (
        this.blog.title === '' ||
        this.blog.content === '' ||
        this.blog.image === ''
      ) {
        return
      }
      this.loading = true // Show the loader
      try {
        // Simulate an API call delay of half a second
        await new Promise((resolve) => setTimeout(resolve, 500))
        this.successMessage = 'Blog added successfully!'
        // Automatically close the notification after 5 seconds
        setTimeout(() => {
          this.successMessage = ''
        }, 5000)
      } catch (error) {
        console.error('Error adding the blog:', error)
      } finally {
        this.loading = false // Hide the loader
      }
    },
    closeNotification() {
      this.successMessage = ''
    },
  },
}
</script>

<style scoped>
/* Your styles for the BlogAdd component */

.loader {
  margin-left: 20vh;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  animation: spin 0.5s linear infinite;
  position: absolute;
  top: 45%;
  left: 55%; /* Adjusted left value */
  transform: translate(-50%, -50%);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
