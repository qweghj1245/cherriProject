import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Start from '@/views/Start.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Start',
        component: Start,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
