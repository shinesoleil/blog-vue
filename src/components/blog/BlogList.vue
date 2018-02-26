<template>
  <div>
    <h1>My Blogs</h1>
    {{data}}
  </div>
</template>

<script>export default {
  name: 'blog-list',
  data() {
    return {
      data: '',
    };
  },
  async created() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments');
      this.data = await res.json();
      this.isLoading = false;
    } catch (err) {
      this.isError = true;
    }
  },
}; </script>

<style scoped>

</style>
