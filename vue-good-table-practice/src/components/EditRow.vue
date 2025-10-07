<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { useStore } from "vuex";

const rowData = defineProps({
  data: Object,
});

const store = useStore();
const emit = defineEmits(["close-modal"]);

const id = ref(rowData.data.productID);
const name = ref(rowData.data.name);
const size = ref(rowData.data.size);
const category = ref(rowData.data.category);
const quantity = ref(rowData.data.quantity);
const cost = ref(rowData.data.cost);
const price = ref(rowData.data.price);

const handleSubmit = () => {
  const data = {
    productID: id.value,
    name: name.value,
    size: size.value,
    category: category.value,
    quantity: quantity.value,
    cost: cost.value,
    price: price.value,
  };

  store.dispatch("updateExistingProduct", data);
  setTimeout(() => {
    emit("close-modal");
  }, 500);
};
</script>

<template>
  <section
    class="fixed z-[9999] flex items-center justify-center w-full h-[100vh] top-0 left-0 bg-[#000000A1]"
  >
    <div class="w-[600px] max-sm:w-full max-sm:h-full max-sm:rounded-[0px] h-[430px] bg-white p-[30px] rounded-[13px]">
      <div class="flex justify-between items-center mb-[20px]">
        <h1 class="text-[20px]">Edit Product's Details</h1>
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
      <form action="" class="flex flex-col gap-[24px]">
        <label for="" class="flex gap-[12px]">
          <p class="w-[90px]">Name</p>
          :
          <input
            type="text"
            placeholder="SHIRT"
            v-model="name"
            class="border-b-[1px] w-full placeholder:italic focus:outline-0"
          />
        </label>
        <label for="" class="flex gap-[12px]">
          <p class="w-[90px]">Size</p>
          :
          <select
            name="size"
            v-model="size"
            class="border-b-[1px] w-full placeholder:italic focus:outline-0"
            id="size"
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="XXXL">XXXL</option>
          </select>
        </label>
        <label for="" class="flex gap-[12px]">
          <p class="w-[90px]">Category</p>
          :
          <select
            name="category"
            v-model="category"
            class="border-b-[1px] w-full placeholder:italic focus:outline-0"
            id="category"
          >
            <option value="Men's wear">Men's wear</option>
            <option value="Women's wear">Women's wear</option>
            <option value="Kid's wear">Kid's wear</option>
          </select>
        </label>
        <label for="" class="flex gap-[12px]">
          <p class="w-[90px]">Quantity</p>
          :
          <input
            type="Number"
            placeholder="100"
            min="0"
            v-model="quantity"
            class="border-b-[1px] w-full placeholder:italic focus:outline-0"
          />
        </label>
        <div class="flex max-sm:flex-col max-sm:gap-[24px] gap-[30px]">
          <label for="" class="flex gap-[12px]">
            <p class="w-[120px] max-sm:w-[90px]">Cost</p>
            :
            <input
              type="number"
              placeholder="78"
              min="1"
              v-model="cost"
              class="border-b-[1px] w-full placeholder:italic focus:outline-0"
            />
          </label>
          <label for="" class="flex gap-[12px]">
            <p class="w-[70px] max-sm:w-[90px]">Price</p>
            :
            <input
              type="number"
              placeholder="99"
              min="1"
              v-model="price"
              class="border-b-[1px] w-full placeholder:italic focus:outline-0"
            />
          </label>
        </div>
        <button
          @click.prevent="handleSubmit"
          class="mt-[29px] max-sm:absolute max-sm:w-[calc(100%-60px)] max-sm:bottom-[50px] max-sm:bg-[blue] max-sm:text-[white] border-[blue] hover:bg-[blue] hover:text-[white] transition-all py-[12px] text-[blue] border-[2px] cursor-pointer font-semibold rounded-[7px]"
        >
          Update Details
        </button>
      </form>
    </div>
  </section>
</template>
