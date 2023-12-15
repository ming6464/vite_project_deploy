<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <a href="/vite_project_deploy/vue1">
    <h1>Hello chuyển trang</h1>
  </a>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
