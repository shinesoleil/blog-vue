<template>
  <div id="app">
    <div class="head">
      <div class="logo" @click="handleClick('blogs')">
        <span class="helper"/>
        <img src="../static/tw-logo.png">
      </div>
      <UserMenu/>
      <div class="nav-icon" @click="toggleSideBar()" >Menu</div>
    </div>
    <div class="body-wrap">
      <div class="sidebar" v-show="showSideBar">
        <sidebar :targets="targets" />
      </div>
      <div class="center">
        <div class="wrapper">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script> import Router from './router/index';
import UserMenu from './components/user-menu/UserMenu';
import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  components: { UserMenu, Sidebar },
  data() {
    return {
      targets: [
        { name: 'Blog', value: 'blogs' },
        { name: 'Vue Lab', value: 'lab' },
        { name: 'Contact', value: 'contact' },
      ],
      showSideBar: true,
    };
  },
  methods: {
    handleClick(routeName) {
      Router.push({
        name: routeName,
      });
    },
    toggleSideBar() {
      this.showSideBar = !this.showSideBar;
    },
  },
}; </script>

<style lang="scss">
  html, body {
    height: 100%;
    margin: 0;
  }

  ul {
    padding: 0;
    list-style-type: none;
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

    .logo {
      display: inline-block;
      height: 80px;
      width: 250px;
      position: absolute;
      left: 0;
      cursor: pointer;

      .helper {
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }

      img {
        width: 200px;
        vertical-align: middle;
      }
    }

    .nav-icon {
      display: none;
    }

    @media screen and (max-width: 768px) {
      .nav-icon {
        display: inline-block;
        height: 80px;
        line-height: 80px;
        width: 150px;
        float: right;
        opacity: 0.5;
        text-align: center;
      }
    }
  }

  .body-wrap {
    margin-top: 80px;
  }

  .sidebar {
    height: 100%;
    width: 250px;
    position: fixed;
    background-color: #F9F9F9;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 280px;
    }
  }

  .center {
    height: 100%;
    margin-left: 250px;
    padding: 40px 100px;

    @media screen and (max-width: 768px) {
      margin-left: 0;
      padding: 40px 30px;
    }

    .wrapper {
      max-width: 985px;
      margin: 0 auto;
    }
  }

</style>
