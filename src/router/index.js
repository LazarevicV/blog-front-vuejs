import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import ContactView from '../views/ContactView.vue'
import BlogAddView from '../views/BlogAddView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      props: {
        msg: 'Welcome user!',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      props: {
        msg: 'Welcome user!',
      },
    },
    {
      path: '/blog/:id',
      name: 'Blog',
      component: BlogView,
      props: (route) => ({ id: route.params.id }),
    },

    {
      path: '/blog/add',
      name: 'BlogAdd',
      component: BlogAddView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: '/register',
      component: RegisterView,
    },
  ],
})

export default router
