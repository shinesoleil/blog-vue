<template>
  <div>
    <div>User</div>
    <h2>The User ID is: {{id}}</h2>
    <div>
      <router-link to="/user/123">Home</router-link>
      <router-link to="/user/123/profile">Profile</router-link>
      <router-link to="/user/123/settings">Settings</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script> export default {
  name: 'user',
  props: ['id'],
}; </script>

<style scoped>

</style>
