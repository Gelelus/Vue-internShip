<template>
  <button @click="confirm">confirm</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem
  },
  methods: {
    confirm() {
      this.$router.push("/teams");
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("user list component in route");
    console.log(to, from);
    next();
  },
  inject: ["users"]
};
</script>

<style scoped>
button {
  display: block;
  margin: auto;
}

ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
