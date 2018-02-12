<template>
  <div>
    <h2>This is a todo Component</h2>
    <h3>{{title}}</h3>
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="index">
        <h4>{{todo}}</h4>
      </li>
    </ul>
  </div>
</template>

<script> export default {
  name: 'todo',
  props: ['todos'],
  data() {
    return {
      title: 'Todo List',
    };
  },
}; </script>

<style scoped>

</style>
