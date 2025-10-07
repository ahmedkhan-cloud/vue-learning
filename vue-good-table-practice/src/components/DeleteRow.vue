<script setup>
import { defineProps, defineEmits } from "vue";
import { useStore } from "vuex";

const rowData = defineProps({
  data: Object,
});

const emit = defineEmits(["close-modal"]);
const store = useStore();

const handleDelete = () => {
  store.dispatch("deleteProduct", rowData.data);
  emit("close-modal");
};
</script>

<template>
  <section
    class="fixed flex z-[999] items-center justify-center w-full h-[100vh] top-0 left-0 bg-[#000000A1]"
  >
    <div class="w-[600px] max-sm:w-full max-sm:h-full max-sm:rounded-[0px] relative h-[350px] bg-white p-[30px] rounded-[13px]">
      <div class="flex justify-between items-center mb-[20px]">
        <h1 class="text-[20px]"></h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          class="cursor-pointer"
          @click="$emit('close-modal')"
          width="24px"
          fill="#000000"
        >
          <path
            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
          />
        </svg>
      </div>
      <h1 class="text-[28px] px-[30px] max-sm:px-0 text-center">
        Are Your Sure You Want To Delete This Product?
      </h1>
      <p class="text-center mt-[20px] italic">{{ rowData.data.name }}</p>
      <div
        class="flex max-sm:flex-col gap-[24px] absolute bottom-[30px] w-full px-[30px] left-0 justify-center"
      >
        <button
          @click="handleDelete"
          class="border-[red] w-full hover:bg-[red] hover:text-[white] transition-all py-[12px] text-[red] border-[2px] cursor-pointer font-semibold rounded-[7px]"
        >
          Delete Product
        </button>
        <button
          @click="$emit('close-modal')"
          class="border-[blue] w-full hover:bg-[blue] hover:text-[white] transition-all py-[12px] text-[blue] border-[2px] cursor-pointer font-semibold rounded-[7px]"
        >
          Cancel
        </button>
      </div>
    </div>
  </section>
</template>
