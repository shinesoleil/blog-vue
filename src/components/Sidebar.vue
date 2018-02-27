<template>
  <ul class="menu">
    <li v-bind:class="['item', {active: isActive('blog')}]"
        @click="handleClick('blogs')">Blogs
    </li>
    <li v-bind:class="['item', {active: isActive('created')}]"
        @click="handleClick('table-test')">
      Work
    </li>
    <li v-bind:class="['item', {active: isActive('user')}]"
        @click="handleClick('user-home')">Contact
    </li>
    <li v-bind:class="['item', {active: isActive('home')}]"
        @click="handleClick('homepage')">Vue
    </li>
  </ul>
</template>

<script>import Router from '../router/index';

export default {
  name: 'sidebar',
  methods: {
    isActive(item) {
      if (this.$route.path === '/' && item === 'home') {
        return true;
      }
      return this.$route.path.includes(item);
    },
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

    .active {
      color: #52C08E;
      padding-right: 15px;
    }
  }

</style>
