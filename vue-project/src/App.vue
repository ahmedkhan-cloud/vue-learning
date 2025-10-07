<script setup></script>

<template>
  <nav class="flex gap-[20px] justify-center items-center h-[100px]">
    <router-link to="/">Home</router-link>
    <router-link to="/calling-api">Data page</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/new-component">New page</router-link>
    <router-link to="/slot-practice">Slot example page</router-link>
  </nav>
  <router-view />
</template>

<style scoped></style>
