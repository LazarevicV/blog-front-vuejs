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
        <router-link v-if="notLogged" to="/login" class="text-white"
          >Login</router-link
        >
        <router-link v-if="notLogged" to="/register" class="text-white"
          >Register</router-link
        >
        <button
          @click="logoutUser"
          v-if="!notLogged"
          to="/dashboard"
          class="text-white"
        >
          Logout
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    isLogged: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      notLogged: true,
    }
  },
  methods: {
    checkUser() {
      if (localStorage.getItem('user')) {
        this.notLogged = false
      } else {
        this.notLogged = true
      }
    },
    logoutUser() {
      localStorage.removeItem('user')
      location.reload()
    },
  },
  mounted() {
    this.checkUser()
  },
}
</script>

<style scoped></style>
