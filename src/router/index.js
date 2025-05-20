import { createRouter, createWebHistory } from "vue-router";
import Register from "../pages/pages_used/Register.vue";
import Login from "../pages/pages_used/Login.vue";
import Profile from "../pages/pages_used/Profile.vue";
import UserList from "../pages/pages_unused/UserList.vue";
import ThemeSetting from "../pages/pages_used/ThemeSetting.vue";
import Home from "../pages/pages_used/Home.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/Register", component: Register },
  { path: "/userList", component: UserList },
  { path: "/ThemeSetting", component: ThemeSetting },
  { path: "/Home", component: Home },

  //   { path: "/Profile/:username", component: Profile },
];

const router = createRouter({
  // history 잡아줌 (stack)
  history: createWebHistory(),
  routes,
});

export default router;
