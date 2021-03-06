import { createRouter, createWebHistory } from "vue-router";

import TeamsList from "../components/teams/TeamsList.vue";
import UsersList from "../components/users/UsersList.vue";
import TeamMembers from "../components/teams/TeamMembers.vue";
import NotFound from "../components/nav/NotFound.vue";


const routes = [
  {
    path: "/",
    redirect: "/teams"
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
  // здесь можно расположить логику для гвардов (например редерект на auth, компонент который нужно создать)
  // if (to.meta.needsAuth === true) {
  //   console.log("Needs auth!");
  //   next();
  // } else {
  //   next();
  // }
  next();
});

export default router;
