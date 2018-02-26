<template>
  <div>
    <h1>My Blogs</h1>
    <div class="text" v-html="source"></div>
  </div>
</template>

<script> import VueMarkdown from 'vue-markdown';
import marked from 'marked';

export default {
  name: 'blog-list',
  components: { VueMarkdown },
  data() {
    return {
      source: '',
    };
  },
  async created() {
    try {
      const res = await fetch('https://raw.githubusercontent.com/shinesoleil/blog-vue/master/static/p3.md');
      const text = await res.text();
      this.source = marked(text);
      this.isLoading = false;
    } catch (err) {
      this.isError = true;
    }
  },
}; </script>

<style scoped lang="scss">
  .text {
    text-align: left;
  }
</style>
