<template>
  <header>
    <nav>
      <ul>
        <div class="main-menu">
          <li>
            <router-link to="/teams" v-if="auth">Teams</router-link>
          </li>
          <li>
            <router-link to="/users">Users</router-link>
          </li>
        </div>
        <div>
          <li>
            <a v-if="auth" @click="logOut">Logout</a>
            <router-link v-else to="/auth">Login</router-link>
          </li>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: ["auth"],
  inject: ["logOut"],
  created(){
    console.log(this.auth, 'asd')
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li {
  margin: 0 2rem;
}
.main-menu {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

a {
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.router-link-active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>
