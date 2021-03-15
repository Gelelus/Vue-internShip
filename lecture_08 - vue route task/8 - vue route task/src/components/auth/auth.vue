<template>
  <div class="form-wrapper">
    <form class="login" @submit.prevent="logIn">
      <h1>Sign in</h1>
      <div class="input-wrapper">
        <label>User name</label>
        <input required v-model="username" type="text" placeholder="Snoopy" />
      </div>
      <div class="input-wrapper">
        <label>Password</label>
        <input
          required
          v-model="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <hr />
      <button class = "gradient-button" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  inject:["logIn"],
  data() {
    return {
      username: "",
      password: "",
    };
  }
};
</script>

<style scoped>
.form-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
.login {
  border: 4px solid #11005c;
  border-radius:20px ;
  margin: 20px;
  padding: 0 40px 40px 40px ;
  width: 500px;
}

.gradient-button {
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 10px 20px;
  
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-color: #11005c;
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  transition: .5s;
}
.gradient-button:hover {
  background-position: right center;
}
</style>
