import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import MyTable from '@/components/MyTable';
import User from '@/components/user/User';
import UserHome from '@/components/user/UserHome';
import UserProfile from '@/components/user/UserProfile';
import UserSettings from '@/components/user/UserSettings';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello ThoughtWorks',
      component: HelloWorld,
    },
    {
      path: '/lifecycles/created',
      name: 'created',
      component: MyTable,
    },
    {
      // https://github.com/pillarjs/path-to-regexp#parameters
      path: '/user/:id(\\d+)',
      component: User,
      props: true,
      children: [
        {
          path: '',
          component: UserHome,
        },
        {
          path: 'profile',
          component: UserProfile,
        },
        {
          path: 'settings',
          component: UserSettings,
        },
      ],
    },
  ],
});
