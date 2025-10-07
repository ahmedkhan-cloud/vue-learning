<script setup>
import errorImg from "../assets/file.png";
</script>
<template>
  <main class="flex justify-center h-[100vh] items-center">
    <img :src="errorImg" class="w-[400px]" alt="" />
    <div>
      <h1 class="text-[108px]">404 Error!</h1>
      <p class="text-[14px] italic opacity-[0.6]">Page Not Found</p>
    </div>
  </main>
</template>
