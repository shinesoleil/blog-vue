<template>
  <div class="user-menu" v-on:mouseover="active=true" v-on:mouseleave="active=false">
    <div class="user-info">
      <div class="avatar">
        <span class="helper"></span>
        <img src="../../../static/profile.png"/>
      </div>
      <div class="name">Hao Pan</div>
    </div>
    <transition name="fade">
      <div class="user-options" v-show="active">
        <div class="user-option">Xi'an, Shaanxi, China</div>
        <div class="user-option">ThoughtWorks</div>
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
  $main-height: 80px;
  $option-height: 40px;

  .user-menu {
    height: $main-height;
    width: 240px;
    float: right;
    opacity: 0.5;
    text-align: center;

    @media screen and (max-width: 768px) {
      display: none;
    }

    &:hover {
      opacity: 1;
    }

    .user-info {
      height: $main-height;
      line-height: $main-height;

      .avatar {
        display: inline-block;
        width: 60px;
        height: 100%;

        .helper {
          display: inline-block;
          height: $main-height;
          vertical-align: middle;
        }

        img {
          width: 40px;
          vertical-align: middle;
        }
      }

      .name {
        display: inline-block;
        width: 100px;
        font-size: 18px;
      }
    }

    .user-options {
      cursor: pointer;

      .user-option {
        height: $option-height;
        line-height: $option-height;
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
