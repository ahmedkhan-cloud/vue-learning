<script setup>
import { ref, reactive } from "vue";

defineProps({
  msg: String,
});
const message = ref("Learning Vue");
const status = ref("");
const topics = reactive([
  "Introduction to Vuejs",
  "Vue CDN setup",
  "Vue Instance and Vue directives",
]);
const newTask = ref("");

const clickMe = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const handleSubmit = () => {
  if (newTask.value.trim() != "") {
    topics.push(newTask.value);
    newTask.value = "";
  }
};

const handleDelete = (index) => {
  topics.splice(index, 1);
};
</script>

<template>
  <main class="px-[80px] py-[110px]">
    <h1 class="text-[64px] mb-[24px]">{{ msg }}</h1>
    <h1 class="text-[48px] mb-[12px]">{{ message }}</h1>
    <p v-if="status === 'active'">Status: Active</p>
    <p v-else-if="status === 'inactive'">Status: Inactive</p>
    <p v-else>Status: Processing</p>
    <button
      @click="clickMe"
      class="my-[10px] border-[1px] text-[12px] font-semibold px-[8px] py-[3px] rounded-[7px] cursor-pointer hover:text-[white] hover:bg-[black] transition-all"
    >
      Change status
    </button>
    <h1 class="text-[24px] my-[6px]">Topics Covered:</h1>
    <ul>
      <li
        class="mb-[4px] ml-[12px] flex w-[500px] items-center justify-between"
        :key="topic"
        v-for="(topic, index) in topics"
      >
        <span>
          {{ topic }}
        </span>
        <button
          class="text-[12px] border-[1px] px-[12px] rounded-[4px] cursor-pointer hover:text-white hover:bg-black transition-all"
          @click="handleDelete(index)"
        >
          Delete Topic
        </button>
      </li>
    </ul>

    <form
      @submit.prevent="handleSubmit"
      class="flex items-center flex-col w-[500px]"
    >
      <input
        type="text"
        name=""
        id=""
        maxlength="30"
        class="focus:outline-0 border-b-[1px] my-[12px] w-[500px] pl-[12px]"
        placeholder="add topics covered here"
        v-model="newTask"
      />
      <button
        type="submit"
        class="text-[12px] w-[100px] border-[1px] px-[12px] rounded-[4px] cursor-pointer hover:text-white hover:bg-black transition-all"
      >
        Submit
      </button>
    </form>
    <button
      @keydown.s.ctrl="$emit('createAlert')"
      class="text-[12px] w-[150px] mt-[24px] border-[1px] px-[12px] rounded-[4px] cursor-pointer hover:text-white hover:bg-black transition-all"
    >
      Click to test emit
    </button>
  </main>
</template>

<style scoped></style>
<!-- <script>
  export default{
    data() {
          return {
            message: "Practicing Vue.js",
            age: 0,
            link: "https://google.com",
            status: false,
            list: ['item-1', 'item-2', 'item-3']
          };
        },
        methods: {
          onClick() {
            this.message = "Going good";
          },
          addAge() {
            this.age += 1;
          },
          changeStatus() {
            this.status = !this.status
          },
        },
  }
</script> -->
