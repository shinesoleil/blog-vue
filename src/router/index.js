import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import MyTable from '@/components/MyTable';

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
  ],
});
