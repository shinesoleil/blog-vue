<template>
  <div>
    <h1>My Blog</h1>
    <div class="text" v-html="source"></div>
  </div>
</template>

<script> import VueMarkdown from 'vue-markdown';
import marked from 'marked';
import { getUrlById } from '../../../static/articles';

export default {
  name: 'blog',
  components: { VueMarkdown },
  data() {
    return {
      source: '',
    };
  },
  async created() {
    const url = getUrlById(this.$route.params.id);
    try {
      const res = await fetch(url);
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
