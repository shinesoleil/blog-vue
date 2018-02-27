<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/user/123">User</router-link>
        <router-link to="/lifecycles/created">Vue Table</router-link>
      </li>
    </ul>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>

    <span v-bind:title="message">
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
    </span>

    <div>
      <span v-if="seen">Now you see me</span>
    </div>
    <span v-for="(todo, index) in todos" v-bind:key="index">
      {{todo.text}}
    </span>
    <div>
      <button @click="hideText">Click Me!</button>
    </div>
    <div>
      <span>{{inputMessage}}</span>
      <input v-model="inputMessage"/>
    </div>

    <todo v-bind:todo="propForTodo"></todo>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import Todo from '../Todo.vue';

export default {
  components: { Todo },
  name: 'lab-home',
  data() {
    return {
      msg: 'Hello ThoughtWorks.',
      message: `You loaded this page on ${new Date().toLocaleString()}`,
      inputMessage: 'this is a two-way binding message',
      seen: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' },
      ],
      propForTodo: 'hahaha',
    };
  },
  methods: {
    hideText() {
      this.seen = !this.seen;
    },
  },
}; </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
