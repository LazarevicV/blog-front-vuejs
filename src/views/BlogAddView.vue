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
      <DisplayMessage
        :successMessage="successMessage"
        @close="successMessage = ''"
      ></DisplayMessage>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DisplayMessage from '@/components/DisplayMessage.vue'

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
        console.log('Please fill in all the fields')
        this.loading = false
        this.successMessage = 'Please fill in all the fields'
        return
      }
      this.loading = true

      try {
        await new Promise((resolve) => setTimeout(resolve, 500))
        this.successMessage = 'You have successfully added a new blog!'
      } catch (error) {
        console.error('Error adding the blog:', error)
      } finally {
        this.loading = false
        setTimeout(() => {
          this.successMessage = ''
        }, 3000)
      }
    },
  },
  components: {
    DisplayMessage,
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
