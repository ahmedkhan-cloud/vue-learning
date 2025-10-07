<script setup>
import { ref } from "vue";
import view from "../assets/view.svg";
import hide from "../assets/hide.svg";
import { useRouter } from "vue-router";
import * as yup from "yup";
import { useForm, useField } from "vee-validate";

const viewPass = ref("password");
const router = useRouter();
const loginValidation = ref('')

const handlePasswordVisibility = () => {
  if (viewPass.value === "password") {
    viewPass.value = "text";
  } else {
    viewPass.value = "password";
  }
};

const schema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const { handleSubmit, errors } = useForm({ validationSchema: schema });

const { value: username } = useField("username");
const { value: password } = useField("password");

 
const onSubmit = handleSubmit((values) => {
  if (values.username !== "ahmed" || values.password !== "123321") {
    loginValidation.value = "Invalid username or password";
    return;
  }

  localStorage.setItem("auth", "true");
  router.push("/dashboard");
});
</script>
<template>
  <main class="bg-[black]">
    <form
      class="flex bg-white flex-col w-[490px] gap-[24px] relative justify-center items-start h-[100vh] px-[80px]"
      @submit.prevent="onSubmit"
    >
      <input
        type="text"
        placeholder="Enter username"
        class="focus:outline-0 border-b-[1px] w-[300px]"
        v-model="username"
      />
      <div class="relative">
        <input
          :type="viewPass"
          placeholder="Enter password"
          class="focus:outline-0 border-b-[1px] w-[300px]"
          name=""
          id=""
          v-model="password"
        />
        <img
          v-show="viewPass === 'password'"
          :src="hide"
          class="cursor-pointer absolute right-[0px] top-[0px]"
          @click="handlePasswordVisibility"
          alt=""
        />
        <img
          v-show="viewPass === 'text'"
          :src="view"
          @click="handlePasswordVisibility"
          class="cursor-pointer absolute right-[0px] top-[0px]"
          alt=""
        />
      </div>
      <p class="absolute mt-[20px] text-[red] text-[12px] italic">
        {{ errors.username }}
        <br>
        {{ errors.password }}
        <br>
        {{ loginValidation }}
      </p>
      <button
        class="w-[300px] cursor-pointer mt-[36px] bg-[green] h-[37px] rounded-[7px] text-[white]"
        type="submit"
      >
        Login
      </button>
    </form>
  </main>
</template>
