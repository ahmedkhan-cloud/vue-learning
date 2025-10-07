<script setup>
import { ref } from "vue";
import IndividualTask from "../components/IndividualTask.vue";
import AddNewTask from "../components/AddNewTask.vue";
import { useTaskStore } from "../stores/tasksStore";

const addTask = ref(false);
const taskStore = useTaskStore();
const tasks = taskStore.tasks;

const handleAddNewTask = () => {
  addTask.value = false;
};
const handleDeleteTask = (index) => {
  taskStore.deleteTask(index);
};
const handleAddTask = (newTask) => {
  taskStore.addTask(newTask);
  addTask.value = false;
};
const handleEditTask = (index, title) => {
  taskStore.editTask(index, title);
};
</script>

<template>
  <main class="px-[80px] flex justify-between py-[50px]">
    <div class="w-[900px]">
      <h1 class="text-[24px] mb-[50px]">Pending Tasks:</h1>
      <div v-if="tasks.length > 0" class="flex flex-col gap-[4px]">
        <transition-group name="list" tag="ul">
          <IndividualTask
            v-for="(task, index) in tasks"
            :key="task"
            :title="task"
            :index="index"
            @updateTask="handleEditTask"
            @deleteTask="handleDeleteTask"
          />
        </transition-group>
      </div>
      <div v-else>
        <p>No tasks remaining.</p>
      </div>
    </div>
    <div
      @click="addTask = true"
      class="flex cursor-pointer flex-col w-[150px] h-[150px] border-[1px] justify-center items-center rounded-[13px] text-center"
    >
      Add New Task
      <span class="text-[54px]">+</span>
    </div>
  </main>
  <transition name="fade">
    <div v-if="addTask">
      <AddNewTask @closeAddTask="handleAddNewTask" @addTask="handleAddTask" />
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.list-enter-active, .list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.list-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
