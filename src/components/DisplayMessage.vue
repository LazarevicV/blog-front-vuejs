<template>
  <div v-if="successMessage" class="notification">
    <div>{{ successMessage }}</div>
    <div @click="closeNotification" class="close-button">&times;</div>
  </div>
</template>

<script>
export default {
  props: {
    successMessage: String,
  },
  methods: {
    closeNotification() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
/* Your styles for the DisplayMessage component */

.notification {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e6ffed;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-top: 1rem;
}

.close-button {
  color: #155724;
  cursor: pointer;
}
</style>
