<template>
  <div class="user-menu">
    <div class="user-info">
      <div class="avatar"></div>
      <div class="name">Hao Pan</div>
    </div>
    <div class="user-options">
      <div class="user-option">profile</div>
      <div class="user-option">settings</div>
      <div class="user-option">log out</div>
    </div>
  </div>
</template>

<script> export default {
  name: 'user-menu',
}; </script>

<style scoped lang="scss">
  .user-menu {
    height: 100%;
    width: 240px;
    float: right;
    opacity: 0.8;

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

  }
</style>
