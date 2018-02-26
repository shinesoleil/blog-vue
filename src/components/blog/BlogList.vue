<template>
  <div>
    <h1>The Blogs</h1>
    <ul v-for="info in infos" v-bind:key="info.title.toString()">
      <li @click="handleClick(info.id)">{{info.title}}</li>
    </ul>
  </div>
</template>

<script> import Router from '../../router/index';
import articles from '../../../static/articles';

export default {
  name: 'blog-list',
  data() {
    return {
      infos: articles,
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
