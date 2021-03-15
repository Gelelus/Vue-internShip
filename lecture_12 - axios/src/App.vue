<template>
  <base-container title="Vuex">
    <h3>{{ finalCounter }}</h3>
    <button @click="increment(50)">add One</button>
    <button @click="decrement(1)">minus One</button>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    BaseContainer,
  },
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
      //1) return this.$store.state.counter;
    },
    ...mapGetters("counter", ["finalCounter"]), //[халява]
  },
  methods: {
    ...mapMutations("counter", ["decrement"]),
    ...mapActions("counter", ["increment"]),
    addOne() {
      //1) this.$store.state.counter++;
      //3) this.$store.commit("increment", 10, 12)
      //3)this.$store.commit({
      //   type: "increment",
      //   property1: 123
      // })
      this.$store.dispatch("increment", 10);
    },
    minusOne() {
      this.$store.commit("decrement", 10);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
h3 {
  text-align: center;
}
</style>
