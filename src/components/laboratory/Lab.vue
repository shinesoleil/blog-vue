<template>
  <div>
    <h1>VueJS Laboratory</h1>
    <div>
      <router-link to="/lab/">Home</router-link>
      <router-link to="/lab/table">Table</router-link>
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
