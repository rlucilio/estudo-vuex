<template>
  <main>
    <form>
      <div>
        <label for="name">Nome</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="lastname">Sobrenome</label>
        <input type="text" id="lastname" v-model="lastName" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="text" id="email" v-model="email" />
      </div>
    </form>

    <section>
      <p>Nome: {{ name }}</p>
      <p>Sobrenome: {{ lastName }}</p>
      <p>Email: {{ email }}</p>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    name: {
      get() {
        return this.$store.state.user.name;
      },
      set(value) {
        this.$store.commit("setName", value);
      },
    },
    lastName: {
      get() {
        return this.$store.state.user.name;
      },
      set(value) {
        this.$store.commit("setLastName", value);
      },
    },
    email: {
      get() {
        return this.$store.state.user.name;
      },
      set(value) {
        this.$store.commit("setEmail", value);
      },
    },
  },
};
</script>