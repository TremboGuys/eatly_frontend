import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/InitialScreenView.vue')
    },
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/DashboardView.vue')
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('@/views/SearchView.vue')
        },
        {
          path: 'favorites',
          name : 'favorites',
          component: () => import('@/views/FavoritesView.vue')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/views/ProfileView.vue')
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import("@/views/CartView.vue")
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
        },
      ],
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/auth/SignUpView.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('@/views/auth/SignInView.vue')
    },
    {
      path: '/registercategory',
      name: 'registerCategory',
      component: () => import('@/views/RegisterCategoryView.vue')
    },
    {
      path: '/registerowner',
      name: 'registerOwner',
      component: () => import('@/views/RegisterOwnerView.vue')
    },
    {
      path: '/registerrestaurant',
      name: 'registerRestaurant',
      component: () => import('@/views/RegisterRestaurantView.vue')
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (authStore.state.logged) {
      next();
    }
    else {
      if (authStore.verifyAuth()) {
        next();
      }
      else {
        next('/signin');
      }
    }
  }
  else {
    next();
  }
})

export default router