import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
},
{
    path: '*',
    name: 'NotFoundView',
    component: () =>
        import('../views/NotFoundView.vue')
},
{
    path: '/test',
    name: 'TestPage',
    component: () =>
        import('../views/TestPage.vue')
},
{
    path: '/about',
    name: 'about',
    component: () =>
        import('../views/AboutView.vue')
},
{
    path: '/exchange',
    name: 'ExchangeView',
    component: () =>
        import('../views/ExchangeView.vue')
},
{
    path: '/login',
    name: 'LoginView',
    component: () =>
        import('../views/auth/LoginView.vue')
},
{
    path: '/register',
    name: 'RegisterView',
    component: () =>
        import('../views/auth/RegisterView.vue')
},
{
    path: '/forgot-password',
    name: 'ForgotPasswordView',
    component: () =>
        import('../views/auth/ForgotPasswordView.vue')
},
{
    path: '/set-password',
    name: 'SetPasswordView',
    component: () =>
        import('../views/auth/SetPasswordView.vue')
},
{
    path: '/verify',
    name: 'VerificationView',
    component: () =>
        import('../views/auth/VerificationView.vue')
}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router