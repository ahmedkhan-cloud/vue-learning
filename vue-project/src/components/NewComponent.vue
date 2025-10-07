<script setup>
import { ref, computed, watch, watchEffect } from "vue";

const number = ref(1);
const value = computed(() => number.value * number.value);

watch(number, (newValue, prevValue) => {
  console.log(prevValue, newValue);
});

watchEffect(() => {
  console.log("Number updated: ", number.value);
});

const handleIncrement = () => {
  number.value += 1;
};
</script>

<template>
  <main>
    <h1 class="text-[28px] mb-[12px]">
      practicing computed(), watch(), watchEffect()
    </h1>
    <p>Square of {{ number }} is</p>
    <p>{{ value }}</p>
    <button @click="handleIncrement">find square of {{ number + 1 }}</button>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  padding: 100px 80px;
}
</style>
