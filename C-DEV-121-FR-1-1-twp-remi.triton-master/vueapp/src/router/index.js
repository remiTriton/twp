import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import crudCom from "../views/crudCom.vue";
import Post from "@/views/Post.vue";
import category from "@/views/category.vue";
import Print from "@/views/Print.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/crudCom",
    name: "crudCom",
    component: crudCom,
  },
  {
    path: "/posts",
    name: "posts",
    component: Post,
  },
  {
    path: "/categories",
    name: "categories",
    component: category,
  },
  {
    path:"/Print/:id",
    name:"Print",
    component:Print,
    props:true,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
