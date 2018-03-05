<template>
  <div>
    <h1>Blogs</h1>
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
import { getArticles } from '../../../static/articles';

export default {
  name: 'blog-list',
  data() {
    return {
      infos: getArticles(),
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
  @mixin shift($property: all, $duration: .3s, $ease: linear) {
    -webkit-transition: $property $duration $ease;
    -moz-transition: $property $duration $ease;
    -o-transition: $property $duration $ease;
    transition: $property $duration $ease;
  }

  .list {

    .item {
      height: 50px;
      line-height: 50px;
      width: 50%;
      min-width: 400px;
      margin: 0 auto 10px auto;
      background-color: #F9F9F9;
      text-align: center;
      border-left: 5px solid #52C08E;
      cursor: pointer;
      @include shift(background-color);

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
