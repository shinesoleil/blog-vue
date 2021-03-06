/* eslint-disable import/extensions */
import Vue from 'vue';
import Router from 'vue-router';
import BlogList from '../components/blog/BlogList.vue';
import Blog from '../components/blog/Blog.vue';
import Lab from '../components/laboratory/Lab.vue';
import LabHome from '../components/laboratory/LabHome.vue';
import LabTable from '../components/laboratory/LabTable.vue';
import LabComputed from '../components/laboratory/LabComputed.vue';
import Contact from '../components/contact/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/blogs',
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogList,
    },
    {
      path: '/blogs/:id',
      name: 'blog',
      component: Blog,
      props: true,
    },
    {
      // https://github.com/pillarjs/path-to-regexp#parameters
      path: '/lab',
      component: Lab,
      props: true,
      children: [
        {
          path: '',
          name: 'lab',
          component: LabHome,
        },
        {
          path: 'table',
          name: 'table',
          component: LabTable,
        },
        {
          path: 'computed',
          name: 'computed',
          component: LabComputed,
        },
      ],
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
