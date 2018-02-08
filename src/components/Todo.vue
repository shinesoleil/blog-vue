<template>
  <div>
    <h2>This is a todo Component</h2>
    <h3>{{todo}}</h3>
    <h3>{{dataTodo}}</h3>
  </div>
</template>

<script> export default {
  name: 'todo',
  props: ['todo'],
  data() {
    return {
      dataTodo: 'hahaha',
    };
  },
}; </script>

<style scoped>

</style>
