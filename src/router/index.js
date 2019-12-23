import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Sample from '@/views/Sample.vue';
import Ascap from '@/views/Ascap.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/sample',
    name: 'sample',
    component: Sample,
  },
  {
    path: '/ascap',
    name: 'ascap',
    component: Ascap,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
