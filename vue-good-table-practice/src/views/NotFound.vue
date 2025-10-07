<script setup>
import errorImg from "../assets/file.png";
</script>
<template>
  <main
    class="flex justify-center max-lg:px-[40px] max-md:flex-col max-md:gap-[20px] h-[100vh] items-center"
  >
    <img :src="errorImg" class="w-[400px] max-md:w-[50%]" alt="" />
    <div>
      <h1 class="text-[108px] max-lg:leading-[102%] max-sm:text-[56px] text-center">404 Error!</h1>
      <p class="text-[14px] italic opacity-[0.6] max-md:text-center">Page Not Found</p>
    </div>
  </main>
</template>
