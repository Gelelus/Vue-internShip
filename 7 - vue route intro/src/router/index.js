import { createRouter, createWebHistory } from "vue-router";

import TeamMembers from "../components/teams/TeamMembers.vue";
import TeamsList from "../components/teams/TeamsList.vue";
import UsersList from "../components/users/UsersList.vue";

const routes = [
  {
    path: "/teams",
    component: TeamsList,
    children: [
      {
        path: ":teamId",
        component: TeamMembers,
        props: true
      }
    ]
  },
  {
    path: "/users",
    component: UsersList
  }
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
