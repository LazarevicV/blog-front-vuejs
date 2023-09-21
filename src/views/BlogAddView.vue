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
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Blog
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        image: '',
      },
    }
  },
  methods: {
    addBlog() {
      // Here you can send the blog data to your server or perform the desired action
      // For this example, we'll just log the blog data
      console.log('New Blog Data:', this.blog)
    },
  },
}
</script>

<style scoped>
/* Your styles for the BlogAdd component */
</style>
