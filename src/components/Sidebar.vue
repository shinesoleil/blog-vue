<template>
  <div>

    <ul class="title">
      <li class="sub-title">Tech @ Core</li>
      <li class="sub-title">Social @ Heart</li>
      <hr class="divider">

    </ul>

    <ul class="menu">
      <li v-for="target in targets"
          v-bind:key="target.value"
          v-bind:class="['item', {active: isActive(target.value)}]"
          @click="handleClick(target.value)">{{target.name}}
      </li>
    </ul>

    <div class="footer">
      <div>© Hao Pan 2018</div>
      <div>All rights reserved.</div>
    </div>
  </div>
</template>

<script>import Router from '../router/index';
import UserMenu from '../components/user-menu/UserMenu';

export default {
  name: 'sidebar',
  components: { UserMenu },

  // Prop definitions should be as detailed as possible.
  props: {
    targets: {
      type: Array,
      required: true,
      validator() {
        return true;
      },
    },
  },

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

  .title {

    .sub-title {
      font-size: 30px;
    }

    .divider {
      width: 70%;
      border-top: 1px solid rgba(255, 255, 255, 0.14);
    }
  }

  .menu {

    margin-top: 30px;

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

  .footer {
    width: 100%;
    font-size: 14px;
    position: absolute;
    bottom: 120px;
    margin: 0 auto;
    text-align: center;

    @media screen and (max-width: 768px) {
      bottom: 40px;
    }
  }

</style>
