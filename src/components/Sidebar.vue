<template>
  <ul class="menu">
    <li class="item" @click="handleClick('homepage')">About</li>
    <li class="item" @click="handleClick('blogs')">Blogs</li>
    <li class="item" @click="handleClick('table-test')">Work</li>
    <li class="item" @click="handleClick('user-home')">Contact</li>
  </ul>
</template>

<script> import Router from '../router/index';

export default {
  name: 'sidebar',
  methods: {
    handleClick: (routeName) => {
      Router.push({
        name: routeName,
        params: {
          id: 123,
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

  .menu {
    list-style: none;

    .item {
      height: 50px;
      line-height: 50px;
      font-size: 25px;
      cursor: pointer;
      @include shift(padding-right);

      &:hover {
        color: #52C08E;
        padding-right: 15px;
      }
    }
  }

</style>
