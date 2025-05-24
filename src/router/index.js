import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/',
      chieldren: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/DashboardView.vue')
        },
      ]
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/auth/SignUpView.vue')
    },
    {
      path: '/initial',
      name: 'initial',
      component: () => import('@/views/InitialScreenView.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('@/views/auth/SignInView.vue')
    },
    {
      path: '/restaurant/:id',
      name: 'restaurant',
      component: () => import('@/views/restaurant/RestaurantView.vue')
    },
    {
      path: '/restaurant/:id/reviews',
      name: 'reviews',
      component: () => import('@/views/restaurant/ReviewsView.vue')
    },
    {
      path: '/restaurant/:id/reviews/create',
      name: 'createReview',
      component: () => import('@/views/restaurant/CreateReviewView.vue')
    }
  ],
})

export default router