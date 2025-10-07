import { createStore } from "vuex";
import axios from "axios";

const API_URL = "http://localhost:3000/";

const fetchData = async () => {
  const response = await axios.get(API_URL);
  return response.data.row;
};
const fetchColumnData = async () => {
  const response = await axios.get(API_URL);
  return response.data.column;
};

const addData = async (product) => {
  await axios.post(API_URL, product);
};

const updateData = async (product) => {
  await axios.put(`${API_URL}${product.productID}`, product);
};

const deleteData = async (product) => {
  await axios.delete(`${API_URL}${product.productID}`);
};

export default createStore({
  state: {
    products: [],
    column: []
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_COLUMN(state, column) {
      state.column = column;
    },
  },
  actions: {
    async getColumns({ commit }) {
      const column = await fetchColumnData();
      commit("SET_COLUMN", column);
    },
    async getProducts({ commit }) {
      const products = await fetchData();
      commit("SET_PRODUCTS", products);
    },
    async addNewProduct({ dispatch }, product) {
      await addData(product);
      dispatch("getProducts");
    },
    async updateExistingProduct({ dispatch }, product) {
      await updateData(product);
      dispatch("getProducts");
    },
    async deleteProduct({ dispatch }, product) {
      await deleteData(product);
      dispatch("getProducts");
    },
  },
  getters: {
    allProducts: (state) => state.products,
    allColumns: (state) => state.column,
  },
});
