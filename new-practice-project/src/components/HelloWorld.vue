<script setup>
import { provide, ref } from "vue";
import SomeRandomComponent from "./SomeRandomComponent.vue";
import OtherRandomComponent from "./OtherRandomComponent.vue";

const count = ref(0);
const msg = "Hello from teleport!";
const name = ref("");
const status = ref("");
const currectComponent = ref(null);
provide('someMessage', msg)
const handleSubmit = () => {
  if (!name.value.trim()) {
    status.value = "Please enter the correct data";
  } else {
    status.value = "Form Submitted";
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" action="">
    <input type="text" placeholder="main" v-model="name" name="" id="" />
    {{ status }}
    <teleport to="body">
      <div>
        <h1>{{ msg }}</h1>

        <div class="card">
          <button type="button" @click="count++">count is {{ count }}</button>
          <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
          </p>
        </div>

        <p>
          Check out
          <a
            href="https://vuejs.org/guide/quick-start.html#local"
            target="_blank"
            >create-vue</a
          >, the official Vue + Vite starter
        </p>
        <p>
          Learn more about IDE Support for Vue in the
          <a
            href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
            target="_blank"
            >Vue Docs Scaling up Guide</a
          >.
        </p>
        <p class="read-the-docs">
          Click on the Vite and Vue logos to learn more
        </p>
      </div>
    </teleport>
    <br />
    <button type="button" @click="currectComponent = SomeRandomComponent">
      Click
    </button>
    <br />
    <button type="button" @click="currectComponent = OtherRandomComponent">
      Click
    </button>
    <keep-alive>
      <component :is="currectComponent" />
    </keep-alive>
  </form>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
