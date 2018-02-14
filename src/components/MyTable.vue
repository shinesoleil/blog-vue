<template>
  <div>
    <h1>my table</h1>
    <vcl-facebook></vcl-facebook>
    <table>
      <tr v-for="(item) in data" v-bind:key="item.name.toString()">
        <th>{{item.postId}}</th>
        <th>{{item.name}}</th>
        <th>{{item.email}}</th>
        <th>{{item.body}}</th>
      </tr>
    </table>
  </div>
</template>


<script> import { VclFacebook } from 'vue-content-loading';

export default {
  name: 'my-table',
  components: {
    VclFacebook,
  },
  data: () => ({
    data: [],
  }),
  async created() {
    const res = await fetch('http://jsonplaceholder.typicode.com/comments');
    this.data = await res.json();
  },
}; </script>

<style scoped>

</style>
