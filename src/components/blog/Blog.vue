<template>
  <div>
    <div class="text" v-html="source"></div>
    <vcl-facebook v-show="isLoading"/>
    <h1 v-show="isError">Oops... Article Not Found...</h1>
  </div>
</template>

<script> import VueMarkdown from 'vue-markdown';
import { VclFacebook } from 'vue-content-loading';
import marked from 'marked';
import { getUrlById } from '../../../static/articles';

export default {
  name: 'blog',
  components: { VueMarkdown, VclFacebook },
  data() {
    return {
      source: '',
      isLoading: true,
      isError: false,
    };
  },
  async created() {
    const url = getUrlById(this.$route.params.id);
    try {
      const res = await fetch(url);
      if (res.status === 200) {
        const text = await res.text();
        this.source = marked(text);
        this.isLoading = false;
      } else {
        this.isLoading = false;
        throw new Error(res.statusText);
      }
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
