<script setup>
import { ref, defineEmits } from "vue";
import { useStore } from "vuex";

const emit = defineEmits(["close-modal"]);

const store = useStore();
const prodName = ref("");
const prodSize = ref("S");
const prodCat = ref("Men's wear");
const prodQuant = ref();
const prodCost = ref();
const prodPrice = ref();

const handleSubmit = async () => {
  const id = await crypto.randomUUID();
  const data = {
    productID: id,
    name: prodName.value,
    size: prodSize.value,
    category: prodCat.value,
    quantity: prodQuant.value,
    cost: prodCost.value,
    price: prodPrice.value,
  };

  store.dispatch("addNewProduct", data);
  setTimeout(() => {
    emit("close-modal");
  }, 500);
};
</script>

<template>
  <section
    class="fixed z-[9999] flex items-center justify-center w-full h-[100vh] top-0 left-0 bg-[#000000A1]"
  >
    <div class="w-[600px] max-sm:w-full max-sm:h-full max-sm:rounded-[0px] relative h-[350px] bg-white p-[30px] rounded-[13px]">
      <div class="flex justify-between items-center mb-[20px]">
        <h1 class="text-[20px]">Enter Product's Details</h1>
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
      <form @submit.prevent="" action="" class="flex flex-col gap-[24px]">
        <label for="" class="flex gap-[12px]">
          <p class="w-[70px] max-sm:w-[90px]">Name</p>
          :
          <input
            type="text"
            placeholder="SHIRT"
            v-model="prodName"
            class="border-b-[1px] w-full placeholder:italic focus:outline-0"
          />
        </label>
        <div class="flex max-sm:flex-col gap-[24px]">
          <label for="" class="flex gap-[12px] w-[290px] max-sm:w-full">
            <p class="w-[90px]">Size</p>
            :
            <select
              name="size"
              v-model="prodSize"
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
              id="category"
              v-model="prodCat"
              class="border-b-[1px] w-full placeholder:italic focus:outline-0"
            >
              <option value="Men's wear">Men's wear</option>
              <option value="Women's wear">Women's wear</option>
              <option value="Kid's wear">Kid's wear</option>
            </select>
          </label>
        </div>
        <div class="flex gap-[24px] max-sm:flex-col">
          <label for="" class="flex gap-[12px]">
            <p class="w-[90px]">Quantity</p>
            :
            <input
              type="number"
              placeholder="100"
              min="0"
              v-model="prodQuant"
              class="border-b-[1px] w-full placeholder:italic focus:outline-0"
            />
          </label>

          <label for="" class="flex w-[140px] max-sm:w-full gap-[12px]">
            <p class="w-[90px]">Cost</p>
            :
            <input
              type="number"
              placeholder="78"
              min="1"
              v-model="prodCost"
              class="border-b-[1px] w-full placeholder:italic focus:outline-0"
            />
          </label>
          <label for="" class="flex w-[140px] max-sm:w-full gap-[12px]">
            <p class="w-[90px]">Price</p>
            :
            <input
              type="number"
              placeholder="99"
              min="1"
              v-model="prodPrice"
              class="border-b-[1px] w-full placeholder:italic focus:outline-0"
            />
          </label>
        </div>
        <button
          @click="handleSubmit"
          class="mt-[49px] max-sm:absolute max-sm:w-[calc(100%-60px)] max-sm:bottom-[50px] max-sm:bg-[blue] max-sm:text-[white] border-[blue] hover:bg-[blue] hover:text-[white] transition-all py-[12px] text-[blue] border-[2px] cursor-pointer font-semibold rounded-[7px]"
        >
          Add Product
        </button>
      </form>
    </div>
  </section>
</template>
