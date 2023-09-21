<template>
  <div
    class="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
  >
    <router-link :to="getBlogLink" class="block">
      <img
        v-if="blog.image"
        :src="blog.image"
        alt="Blog Image"
        class="mb-4 rounded-lg object-cover w-full h-40"
      />

      <h2 class="text-xl font-bold mb-2">{{ blog.title }}</h2>
      <p class="text-gray-700">{{ blog.content }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getBlogLink() {
      return `/blog/${this.blog.id}`
    },
  },
}
</script>

<style scoped></style>
