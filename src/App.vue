<template>
  <div id="app">
    <div class="head"></div>
    <div class="body-wrap">
      <div class="left"></div>
      <div class="center">
        <img src="./assets/logo.png">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script> export default {
  name: 'App',
}; </script>

<style>
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

  .left {
    height: 100%;
    width: 200px;
    position: fixed;
    background-color: #F9F9F9;
  }

  .center {
    height: 100%;
    margin-left: 200px;
    padding: 50px;
  }

</style>
