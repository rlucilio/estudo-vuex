<template>
  <main>
    <h2>Itens</h2>
    <ul v-for="item in items" :key="item.id">
      <li>
        <p>{{ item.name }}</p>
        <button @click="add(item)">Add</button>
      </li>
    </ul>

    <h2>Carrinho</h2>
    <h2>Quantidade: {{ countItems }}</h2>
    <ul v-for="item in cart" :key="item.id">
      <li>
        <p>{{ item.name }}</p>
        <p>{{ item.qtd }}</p>
        <button @click="remove(item)">Remove</button>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data: () => ({
    items: [
      { id: 1, name: "Produto 1" },
      { id: 2, name: "Produto 2" },
      { id: 3, name: "Produto 3" },
      { id: 4, name: "Produto 4" },
      { id: 5, name: "Produto 5" },
    ],
  }),
  computed: {
    cart() {
      return this.$store.state.cart.items;
    },
    countItems() {
      return this.$store.state.cart.items.reduce(
        (result, item) => (result += item.qtd),
        0
      );
    },
  },
  methods: {
    add(item) {
      this.$store.commit("addItem", item);
    },
    remove(item) {
      this.$store.commit("removeItem", item);
    },
  },
};
</script>