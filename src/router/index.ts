import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DemoView from '@/views/DemoView.vue'
import AboutView from '@/views/AboutView.vue'
import DownloadView from '@/views/DownloadView.vue'
import FeaturesView from '@/views/FeaturesView.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/demo',
      name: 'demo',
      component: DemoView,
    },
    {
      path: '/features',
      name: 'features',
      component: FeaturesView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/download',
      name: 'download',
      component: DownloadView,
      children: [
        {
          path: ':slug',
          name: 'version-details',
          component: () => import('@/components/DownloadVersionDetails.vue')
        }
      ]
    },
    {
      path: '/:catchAll(.*)', 
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

export default router
