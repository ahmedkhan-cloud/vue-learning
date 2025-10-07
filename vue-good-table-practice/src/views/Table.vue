<script setup>
import "vue-good-table-next/dist/vue-good-table-next.css";
import { VueGoodTable } from "vue-good-table-next";
import AddRow from "../components/AddRow.vue";
import EditRow from "../components/EditRow.vue";
import DeleteRow from "../components/DeleteRow.vue";
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const addNew = ref(false);
const editDetails = ref(false);
const deleteDetails = ref(false);
const selectedRow = ref("");
const role = localStorage.getItem("role");
const store = useStore();
const router = useRouter();

const row = computed(() => store.getters.allProducts);
const column = computed(() => store.getters.allColumns);
onMounted(async () => {
  await store.dispatch("getProducts");
  await store.dispatch("getColumns");
});
const onRowClick = (params) => {
  selectedRow.value = params.row;
};
const logout = async () => {
  try {
    const response = await axios.post("http://localhost:3000/logout");
    console.log(response.data);
    if (response.data.status === "ok") {
      localStorage.setItem("auth", false);
      localStorage.setItem("role", "");
      router.push("/login");
    }
  } catch (err) {
    console.log(err.message);
  }
};
</script>

<template>
  <main
    class="px-[80px] max-lg:px-[40px] max-md:px-[20px] max-sm:py-[80px] py-[50px]"
  >
    <button
      @click="logout"
      class="cursor-pointer absolute top-[30px] right-[30px] text-[16px] font-semibold border-[red] border-[1px] hover:bg-[red] hover:text-[white] transition-all py-[8px] px-[13px] text-[red] rounded-[13px]"
    >
      Log out
    </button>
    <h1 class="text-[32px] font-bold italic max-sm:text-[24px]">
      Product's DashBoard
    </h1>
    <section
      class="flex max-xl:flex-col-reverse w-full gap-[70px] justify-between mt-[50px]"
    >
      <vue-good-table
        class="w-full vgt-compact"
        v-on:row-click="onRowClick"
        :columns="column"
        max-height="460px"
        :fixed-header="true"
        :rows="row"
        :pagination-options="{
          enabled: true,
          perPage: 10,
          rowsPerPageLabel: 'products per page',
          ofLabel: 'products of',
        }"
        theme="polar-bear"
        
      >
        <template #table-row="props">
          <span class="cursor-pointer" v-if="props.row === selectedRow">
            <span class="text-[blue]">
              {{ props.formattedRow[props.column.field] }}
            </span>
          </span>
          <span v-else class="cursor-pointer">
            {{ props.formattedRow[props.column.field] }}
          </span>
        </template></vue-good-table
      >
      <aside
        v-if="role === 'admin'"
        class="flex flex-col max-xl:flex-row max-xl:flex-wrap gap-[40px] max-[800px]:gap-[20px]"
      >
        <div
          class="bg-white max-sm:w-[70px] max-sm:h-[70px] max-sm:flex max-sm:items-center max-sm:justify-center w-[210px] max-[800px]:w-[30%] font-semibold border-[2px] px-[30px] max-md:px-[12px] max-md:py-[8px] py-[20px] flex flex-col items-center gap-[12px] rounded-[13px] cursor-pointer hover:invert transition-all"
          @click="addNew = true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#000000"
          >
            <path
              d="M446.67-120v-326.67H120v-66.66h326.67V-840h66.66v326.67H840v66.66H513.33V-120h-66.66Z"
            />
          </svg>
          <p class="max-sm:hidden">Add Product</p>
        </div>
        <div
          v-if="selectedRow !== ''"
          class="bg-white max-sm:w-[70px] max-sm:flex max-sm:h-[70px] max-sm:items-center max-sm:justify-center w-[210px] max-md:px-[12px] max-md:py-[8px] max-[800px]:w-[30%] font-semibold border-[2px] px-[30px] py-[20px] flex flex-col items-center gap-[12px] rounded-[13px] cursor-pointer hover:invert transition-all"
          @click="editDetails = true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#000000"
          >
            <path
              d="M186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h389L509-773.33H186.67v586.66h586.66v-324.66L840-578v391.33q0 27-19.83 46.84Q800.33-120 773.33-120H186.67ZM480-480ZM360-360v-170l377-377q10-10 22.33-14.67 12.34-4.66 24.67-4.66 12.67 0 25.04 5 12.38 5 22.63 15l74 75q9.4 9.97 14.53 22.02 5.13 12.05 5.13 24.51 0 12.47-4.83 24.97-4.83 12.5-14.83 22.5L530-360H360Zm499-424.67-74.67-74.66L859-784.67Zm-432.33 358H502l246-246L710-710l-38.33-37.33-245 244.33v76.33ZM710-710l-38.33-37.33L710-710l38 37.33L710-710Z"
            />
          </svg>
          <p class="max-sm:hidden">Edit Product Details</p>
        </div>
        <button
          @click="deleteDetails = true"
          v-if="selectedRow !== ''"
          class="cursor-pointer max-sm:w-[70px] max-sm:h-[70px] max-sm:flex items-center justify-center max-md:px-[12px] max-md:py-[8px] w-[210px] max-[800px]:w-[30%] text-[20px] font-semibold border-[red] border-[2px] hover:bg-[red] hover:text-[white] transition-all py-[12px] text-[red] rounded-[13px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            class="hidden max-sm:block"
            viewBox="0 -960 960 960"
            width="40px"
            fill="red"
          >
            <path
              d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
            />
          </svg>
          <p class="max-sm:hidden">Delete Product</p>
        </button>
      </aside>
    </section>
  </main>
  <AddRow @close-modal="addNew = false" v-if="addNew" />
  <EditRow
    @close-modal="editDetails = false"
    v-if="editDetails"
    :data="selectedRow"
  />
  <DeleteRow
    @close-modal="deleteDetails = false"
    v-if="deleteDetails"
    :data="selectedRow"
  />
</template>

<style scoped></style>
