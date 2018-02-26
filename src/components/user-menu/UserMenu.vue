<template>
  <div class="user-menu" v-on:mouseover="active=true" v-on:mouseleave="active=false">
    <div class="user-info">
      <div class="avatar"></div>
      <div class="name">Hao Pan</div>
    </div>
    <transition name="fade">
      <div class="user-options" v-show="active">
        <div class="user-option">profile</div>
        <div class="user-option">settings</div>
        <div class="user-option">log out</div>
      </div>
    </transition>
  </div>
</template>

<script> export default {
  name: 'user-menu',
  data() {
    return {
      active: false,
    };
  },
  methods: {},
}; </script>

<style scoped lang="scss">
  .user-menu {
    height: 100%;
    width: 240px;
    float: right;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }

    .user-info {
      height: 80px;
      line-height: 80px;

      .avatar {
        display: inline-block;
        width: 80px;
      }

      .name {
        display: inline-block;
        width: 155px;
      }
    }

    .user-options {
      cursor: pointer;

      .user-option {
        height: 40px;
        line-height: 40px;
        background-color: #E9E9E9;
        opacity: 0.8;

        &:hover {
          font-weight: bolder;
          opacity: 1;
        }
      }
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
      opacity: 0;
    }

  }
</style>
