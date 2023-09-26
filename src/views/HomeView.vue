<script setup>
import MainContentHome from '../components/MainContentHome.vue'
import { fetchBlogs } from '@/functions.js'
import { ref, onMounted } from 'vue'
import DisplayMessage from '../components/DisplayMessage.vue'

const blogs = ref([])

onMounted(async () => {
  blogs.value = await fetchBlogs()
  console.log(blogs.value)
})

const removeMessage = () => {
  // Clear the success message after 5 seconds
  setTimeout(() => {
    clearSuccessMessage()
  }, 5000)
}
</script>

<template>
  <div>
    <DisplayMessage
      :successMessage="successMessage"
      @close="clearSuccessMessage"
    />
    <h1 class="text-3xl font-bold underline text-center p-5">
      Welcome to the best blog
    </h1>
    <MainContentHome :blogs="blogs" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MainContentHome from '../components/MainContentHome.vue'
import DisplayMessage from '../components/DisplayMessage.vue'

export default {
  components: {
    MainContentHome,
    DisplayMessage,
  },
  computed: {
    ...mapGetters(['successMessage']),
  },
  methods: {
    ...mapActions(['clearSuccessMessage']),
  },
  setup() {
    onMounted(() => {
      setTimeout(removeMessage, 5000)
    })
  },
}
</script>
