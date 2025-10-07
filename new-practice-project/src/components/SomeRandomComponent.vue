<script setup>
import {inject, ref} from 'vue';

const msg = inject('someMessage')
</script>

<template>
    Original Component

    {{ msg }}
</template>