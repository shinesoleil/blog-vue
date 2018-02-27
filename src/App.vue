<template>
  <div id="app">
    <div class="head">
      <div class="logo">
        <span class="helper"/>
        <img src="../static/tw-logo.png">
      </div>
      <UserMenu/>
    </div>
    <div class="body-wrap">
      <div class="sidebar">
        <sidebar/>
      </div>
      <div class="center">
        <div class="wrapper">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script> import UserMenu from './components/user-menu/UserMenu';
import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  components: { UserMenu, Sidebar },
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
  }

  .body-wrap {
    margin-top: 80px;
  }

  .sidebar {
    height: 100%;
    width: 250px;
    position: fixed;
    background-color: #F9F9F9;
  }

  .center {
    height: 100%;
    margin-left: 200px;
    padding: 40px 100px;

    .wrapper {
      max-width: 985px;
      margin: 0 auto;
    }
  }

</style>
