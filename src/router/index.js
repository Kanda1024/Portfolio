import { createRouter, createWebHistory } from 'vue-router'
//import Contact from "@/views/Contact";
//import Profile from "@/views/Profile";
import Home from "@/views/Home";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  /*
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router