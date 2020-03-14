import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Start from '@/views/Start.vue';
import ChatRoom from '@/views/ChatRoom.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Start',
        component: Start,
      },
      {
        path: '/chat_room/:id',
        name: 'ChatRoom',
        component: ChatRoom,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
