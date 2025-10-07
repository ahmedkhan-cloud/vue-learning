<script setup>
import { ref } from "vue";

const emit = defineEmits(["closeAddTask", "addTask"]);
const newTask = ref("");

const submitTask = () => {
  if (newTask.value.trim()) {
    emit("addTask", newTask.value);
    newTask.value = "";
  }
};
</script>
<template>
  <div
    class="fixed z-[9] top-0 left-0 bg-[black] opacity-70 w-[100%] h-[100vh]"
  ></div>
  <div class="w-full z-[12] fixed flex justify-center h-[100vh]">
    <div
      class="bg-white relative w-[500px] h-[200px] pl-[50px] py-[80px] rounded-[32px]"
    >
      <p
        class="absolute top-[30px] right-[30px] font-bold cursor-pointer"
        @click="$emit('closeAddTask')"
      >
        X
      </p>
      <input
        v-model="newTask"
        type="text"
        class="border-b-[1px] focus:outline-0 w-[400px]"
        placeholder="Enter task here"
        name=""
        id=""
      />
      <button
        @click="submitTask"
        class="cursor-pointer mt-[30px] w-[400px] bg-[green] text-[white] h-[37px] rounded-[7px]"
      >
        Add Task
      </button>
    </div>
  </div>
</template>
