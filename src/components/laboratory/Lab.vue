<template>
  <div>
    <h1>VueJS Laboratory</h1>
    <p>Test VueJS Framework Here</p>
    <div>
      <router-link to="/lab/">Home</router-link>
      <router-link to="/lab/table">Table</router-link>
      <router-link to="/lab/computed">Computed</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script> export default {
  name: 'user',
}; </script>

<style scoped>

</style>
