<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>

    <card-wrapper>
      <!-- <first-component v-if="activComponent == 'first-component'" />
      <second-component v-if="activComponent == 'second-component'" /> -->
      <keep-alive>
        <component v-bind:is="activComponent"></component>
      </keep-alive>

      <button @click="changeComponent">changeComponent</button>
    </card-wrapper>
  </div>
</template>

<script>
import BadgeList from "./components/BadgeList.vue";
import TheHeader from "./components/TheHeader.vue";
import UserInfo from "./components/UserInfo.vue";

import FirstComponent from "./components/firstComponent.vue";
import SecondComponent from "./components/secondComponent.vue";
import CardWrapper from "./components/CardWrapper.vue";

export default {
  components: {
    BadgeList,
    TheHeader,
    UserInfo,
    FirstComponent,
    SecondComponent,
    CardWrapper,
  },
  data() {
    return {
      activComponent: "first-component",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    changeComponent() {
      if (this.activComponent === "first-component") {
        this.activComponent = "second-component";
      } else {
        this.activComponent = "first-component";
      }
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
