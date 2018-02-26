<template>
  <div id="app">
    <div class="head">
      <UserMenu/>
    </div>
    <div class="body-wrap">
      <div class="sidebar">
        <ul class="menu">
          <li class="item" @click="handleClick('homepage')">About</li>
          <li class="item" @click="handleClick('blogs')">Blogs</li>
          <li class="item" @click="handleClick('table-test')">Work</li>
          <li class="item" @click="handleClick('user-home')">Contact</li>
        </ul>
      </div>
      <div class="center">
        <img src="./assets/logo.png">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script> import Router from './router/index';
import UserMenu from './components/user-menu/UserMenu';

export default {
  name: 'App',
  components: { UserMenu },
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

<style lang="scss">
  @mixin shift($property: all, $duration: .3s, $ease: linear) {
    -webkit-transition: $property $duration $ease;
    -moz-transition: $property $duration $ease;
    -o-transition: $property $duration $ease;
    transition: $property $duration $ease;
  }

  html, body {
    height: 100%;
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
  }

  .head {
    height: 80px;
    width: 100%;
    background-color: #52C08E;
    position: fixed;
    left: 0;
    top: 0;
  }

  .body-wrap {
    margin-top: 80px;
  }

  .sidebar {
    height: 100%;
    width: 200px;
    position: fixed;
    background-color: #F9F9F9;

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

  }

  .center {
    height: 100%;
    margin-left: 200px;
    padding: 50px;
  }

</style>
