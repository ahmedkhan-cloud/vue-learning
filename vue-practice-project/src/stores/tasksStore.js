import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref(['']);

  const addTask = (newTask) => {
    if (newTask?.trim()) {
      tasks.value.push(newTask.trim());
    }
  };

  const editTask = (index, title) => {
    if (title?.trim()) {
      tasks.value[index] = title.trim();
    }
  };

  const deleteTask = (index) => {
    tasks.value.splice(index, 1);
  };

  
  return {
    tasks,
    addTask,
    editTask,
    deleteTask,
  };
});
