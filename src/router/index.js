import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore, usePaymentStore, useProfileStore } from '@/stores';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/InitialScreenView.vue'),
    },
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/HomeView.vue')
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
          path: 'restaurant/:idRestaurant/product/:idProduct',
          name: 'product',
          component: () => import('@/views/restaurant/ProductView.vue')
        },
        {
          path: '/restaurant/:id/reviews',
          name: 'reviews',
          component: () => import('@/views/restaurant/ReviewsView.vue')
        },
        {
          path: '/restaurant/reviews/create',
          name: 'createReview',
          component: () => import('@/views/restaurant/CreateReviewView.vue')
        },
        {
          path: '/coupon',
          name:'coupon',
          component: () => import('@/views/CouponView.vue')
        },
        {
          path: '/payment',
          name: 'payment',
          component: () => import('@/views/PaymentView.vue')
        },
        {
          path: '/orders',
          name: 'orders',
          component: () => import('@/views/OrdersView.vue')
        },
        {
          path: '/profile/changepassword',
          name: 'changePassword',
          component: () => import('@/views/profile/ChangePasswordView.vue'),
        },
        {
          path: '/address',
          name: 'address',
          component: () => import('@/views/AddressRegister.vue'),
        },
        {
          path: '/logout',
          name: 'logout',
          component: () => import('@/views/auth/LogoutView.vue')
        },
        {
          path: '/location',
          name: 'locationTracker',
          component: () => import('@/views/location/LocationTrackerView.vue')
        }
      ],
      meta: { requiresAuth: true } 
    },
    {
      path: '/profile/edit',
      name: 'editProfile',
      component: () => import('@/views/profile/EditProfileView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/auth/client/SignUpClientView.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('@/views/auth/client/SignInClientView.vue')
    },
    {
      path: '/verify-email',
      name: 'verifyEmail',
      component: () => import('@/views/auth/VerifyEmailView.vue')
    },
    {
      path: '/registercategory',
      name: 'registerCategory',
      component: () => import('@/views/RegisterCategoryView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/registerowner',
      name: 'registerOwner',
      component: () => import('@/views/auth/owner/SignUpOwnerView.vue'),
    },
    {
      path: '/registerrestaurant',
      name: 'registerRestaurant',
      component: () => import('@/views/RegisterRestaurantView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/order/:id',
      name: 'order',
      component: () => import('@/views/order/OrderRetrieveView.vue'),
      meta: { requiresAuth: true }
    }
  ],
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const paymentStore = usePaymentStore();
  const profileStore = useProfileStore();
  
  const isAuthenticated = await authStore.verifyAuth();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isAuthenticated) {
      if ((to.path == '/payment') && paymentStore.state.order == null) {
        next('/cart');
        return;
      }
      next();
    } else {
      next('/signin');
    }
    return;
  };

  if ((to.path === '/signin' || to.path === '/signup' || to.path === '/') && (isAuthenticated)) {
    next('/dashboard');
    return;
  };

  if ((to.path == '/profile/edit') && profileStore.profile == null) {
    next('/profile');
    return;
  }

  next();
});


export default router