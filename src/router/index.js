import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import ContactView from '../views/ContactView.vue'
import BlogAddView from '../views/BlogAddView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
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
  ],
})

export default router
