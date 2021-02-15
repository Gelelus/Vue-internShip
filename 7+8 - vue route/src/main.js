import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/nav/NotFound.vue";
import Footer from "./components/users/Footer.vue";

const routes = [
  {
    path: "/",
    redirect: "/teams"
  },
  {
    name: "teams",
    path: "/teams",
    meta: { needsAuth: true },
    // component: TeamsList,
    components: { default: TeamsList, footer: Footer },
    // alias: "/",
    children: [
      // терь нужн для молышей
      {
        name: "team-members",
        path: ":teamId",
        component: TeamMembers,
        props: true // все params теперь пропсы
      }
    ]
  },
  {
    path: "/users",
    component: UsersList,
    beforeEnter(to, from, next) {
      console.log(to, from, "\nbeforeUsersRoute");
      next();
    }
  },
  { path: "/:notFound(.*)", component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_, _1, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }

  // linkActiveClass: 'some class',
  // linkExactActiveClass: 'actvie'
});

router.beforeEach(function(to, _from, next) {
  // console.log("global beforeEach");
  // console.log(to, from);
  // if (to.name === "team-members") {
  //   next();
  // } else {
  //   next({ name: "team-members", params: { teamId: "t2" } }); // редирект
  // }
  if (to.meta.needsAuth === true) {
    console.log("Needs auth!");
    next();
  } else {
    next();
  }
});

router.afterEach(function() {
  // тут только to и from, next отсутствует
  console.log("afterEach global hook ");
});

createApp(App)
  .use(router)
  .mount("#app");
