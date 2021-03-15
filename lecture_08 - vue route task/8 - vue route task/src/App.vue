<template>
  <the-navigation :auth="auth"></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      auth: false,
      activePage: "teams-list",
      teams: [
        { id: "t1", name: "Frontend Engineers", members: ["u1", "u2"] },
        { id: "t2", name: "Backend Engineers", members: ["u1", "u2", "u3"] },
        { id: "t3", name: "Client Consulting", members: ["u4", "u5"] },
      ],
      users: [
        { id: "u1", fullName: "Max Schwarz", role: "Engineer" },
        { id: "u2", fullName: "Praveen Kumar", role: "Engineer" },
        { id: "u3", fullName: "Julie Jones", role: "Engineer" },
        { id: "u4", fullName: "Alex Blackfield", role: "Consultant" },
        { id: "u5", fullName: "Marie Smith", role: "Consultant" },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
      logOut: this.logOut,
      logIn: this.logIn,
    };
  },
  methods: {
    setActivePage(page) {
      this.activePage = page;
    },
    logOut() {
      console.log("logOut");
      localStorage.removeItem("auth");
      this.auth = false;
      this.$router.push("/auth");
    },
    logIn() {
      console.log("logIn");
      localStorage.setItem("auth", true);
      this.auth = true;
      this.$router.push("/teams");
    },
  },
  created() {
    let auth = localStorage.getItem("auth")
    if (auth) {
      this.logIn();
    }
  }
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
</style>
