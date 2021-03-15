import { createRouter, createWebHistory } from "vue-router";

import TeamsList from "../components/teams/TeamsList.vue";
import UsersList from "../components/users/UsersList.vue";
import TeamMembers from "../components/teams/TeamMembers.vue";
import NotFound from "../components/nav/NotFound.vue";
import AuthComponent from "../components/auth/auth.vue";

const routes = [
  {
    path: "/",
    redirect: "/users"
  },
  {
    name: "auth",
    path: "/auth",
    component: AuthComponent
  },
  {
    name: "teams",
    path: "/teams",
    meta: { needsAuth: true },
    component: TeamsList,
    children: [
      {
        name: "team-members",
        path: ":teamId",
        component: TeamMembers,
        props: true
      }
    ]
  },
  {
    path: "/users",
    component: UsersList
  },
  { path: "/:notFound(.*)", component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(function(to, _from, next) {
  const auth = localStorage.getItem("auth");
  console.log(auth);
  if (to.meta.needsAuth === true) {
    if (auth) {
      next();
    } else {
      next({ name: "auth" });
    }
  } else {
    next();
  }
});

export default router;
