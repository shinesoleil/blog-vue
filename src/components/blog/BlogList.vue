<template>
  <div>
    <h1>Blogs Catalog</h1>
    <ul class="list">
      <li class="item"
          v-for="info in infos"
          v-bind:key="info.title.toString()"
          @click="handleClick(info.id)">
        <span class="title">{{info.title}}</span>
        <span class="date">{{info.date}}</span>
      </li>
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

<style scoped lang="scss">
  .list {

    .item {
      height: 50px;
      line-height: 50px;
      width: 50%;
      min-width: 400px;
      margin: 0 auto 10px auto;
      /*margin-bottom: 10px;*/
      background-color: #F9F9F9;
      text-align: center;
      border-left: 5px solid #52C08E;
      cursor: pointer;

      &:hover {
        background-color: #EFEFEF;
      }

      .title {
        display: inline-block;
        width: 250px;
        font-weight: 500;
        text-align: left;
      }

      .date {
        font-size: 14px;
        font-style: italic;
      }
    }
  }
</style>
