<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()
const handleClick = (value) =>{
    router.push(`dashboard/${value}`)
}
</script>
<template>
    Dashboard page
    <button @click="handleClick('setting')">Setting</button>
    <button @click="handleClick('profile')">Profile</button>
</template>