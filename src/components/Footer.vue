<script lang="ts">
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<template>
  <footer class="bg-gray-800 text-white p-4">
    <div class="container mx-auto text-center">
      &copy; {{ currentYear }} Blog. All rights reserved.
    </div>
  </footer>
</template>

<style scoped></style>
