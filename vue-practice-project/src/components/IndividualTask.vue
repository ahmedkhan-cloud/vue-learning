<script setup>
import edit from "../assets/edit.svg";
import deleteIcon from "../assets/deleteicon.svg";
import { defineProps, defineEmits, ref } from "vue";
const { title, index } = defineProps(["title", "index"]);
const editable = ref(false);
const editableTitle = ref(title);
const emit = defineEmits(["updateTask", "deleteTask"]);

const editTask = () => {
  editable.value = !editable.value;
};

const emitEditTask = () => {
  editable.value = false;
  emit("updateTask", index, editableTitle.value);
};
</script>

<template>
  <div class="flex mt-[6px] w-[700px] justify-between">
    <form @submit.prevent="emitEditTask" action="">
      <input
        v-if="editable"
        class="w-[400px] italic focus:outline-0 border-b-[1px] overflow-hidden"
        v-model="editableTitle"
      />
      <p
        v-else
        class="w-[400px] italic border-b-[1px] border-[transparent] overflow-hidden"
      >
        {{ title }}
      </p>
    </form>
    <div class="flex gap-[12px]">
      <button
        @click="editTask"
        v-if="!editable"
        class="cursor-pointer"
        title="edit task"
      >
        <img :src="edit" alt="" />
      </button>
      <button
        @click="$emit('deleteTask', index)"
        class="cursor-pointer"
        title="delete task"
      >
        <img :src="deleteIcon" alt="" />
      </button>
    </div>
  </div>
</template>
