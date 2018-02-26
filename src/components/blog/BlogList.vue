<template>
  <div>
    <h1>The Blogs</h1>
    <ul v-for="info in infos" v-bind:key="info.title.toString()">
      <li @click="handleClick('123')">{{info.title}}</li>
    </ul>
  </div>
</template>

<script> import Router from '../../router/index';

export default {
  name: 'blog-list',
  data() {
    return {
      infos: [
        {
          title: 'China P3',
          url: 'https://raw.githubusercontent.com/shinesoleil/blog-vue/master/static/p3.md',
        },
        {
          title: 'English Community',
          url: 'https://raw.githubusercontent.com/shinesoleil/blog-vue/master/static/english-community.md',
        },
        {
          title: 'third',
          url: 'https://raw.githubusercontent.com/shinesoleil/blog-vue/master/static/p3.md',
        },
      ],
    };
  },
  methods: {
    handleClick: (id) => {
      Router.push({
        name: 'blog',
        params: {
          id,
        },
      });
    },
  },
}; </script>

<style scoped>

</style>
