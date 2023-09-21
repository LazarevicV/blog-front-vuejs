<template>
  <div class="container mx-auto py-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <!-- Loop through blogs and display each one -->
      <BlogItem v-for="(blog, index) in blogs" :key="index" :blog="blog" />
    </div>
  </div>
</template>

<script>
import BlogItem from '@/components/BlogItem.vue'

export default {
  props: {
    blogs: {
      type: Array,
      required: true,
    },
  },
  components: {
    BlogItem,
  },
}
</script>

<style scoped>
/* Your styles for the MainContentHome component */
</style>
