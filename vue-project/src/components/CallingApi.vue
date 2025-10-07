<script setup>
import { ref, onMounted } from "vue";
import { useFetch } from "../composables/useFetch";
const user = ref([]);

onMounted(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  user.value = await response.json();
});

const { data, error, loading } = useFetch(
  "https://jsonplaceholder.typicode.com/todos/"
);
</script>

<template>
  <h1 v-for="value in user" :key="value">
    {{ value.title }}
  </h1>
  <h1 class="mt-[100px]" v-for="value in users" :key="value">
    {{ value.title }}
  </h1>

  <div v-if="loading">loading.....</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <ul  v-else class="pl-[10px]">
    <li v-for="value in data" :key="data.id">
      {{ value.title }}
    </li>
  </ul>
</template>

<style scoped></style>
