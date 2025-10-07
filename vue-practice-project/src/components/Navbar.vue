<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const handleLogout = () => {
  localStorage.setItem("auth", "false");
  router.push("/login");
};
</script>

<template>
  <header class="w-full flex justify-between px-[80px] py-[20px]">
    <h1 class="italic text-[24px] font-bold">Dashboard</h1>
    <button
      class="cursor-pointer bg-[red] px-[18px] py-[6px] rounded-[7px] text-white"
      @click="handleLogout"
    >
      Logout
    </button>
  </header>
</template>
