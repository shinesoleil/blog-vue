<template>
  <div>
    <h1>my table</h1>
    <vcl-bullet-list v-if="isLoading"></vcl-bullet-list>
    <h2 v-if="isError">error</h2>
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


<script> import { VclBulletList } from 'vue-content-loading';

export default {
  name: 'my-table',
  components: {
    VclBulletList,
  },
  data: () => ({
    data: [],
    isLoading: true,
    isError: false,
  }),
  async created() {
    try {
      const res = await fetch('http://jsonplaceholder.typicode.com/commentss');
      this.data = await res.json();
      this.isLoading = false;
    } catch (err) {
      this.isError = true;
    }
  },
}; </script>

<style scoped>

</style>
