<template>
  <div id="app">
    <Form />
    <hr />
    <Cart />
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Cart from "./components/Cart.vue";
export default {
  name: "App",
  components: { Form, Cart },
};
</script>

<style>
</style>
