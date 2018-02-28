<template>
  <div>
    <h2>Computed</h2>
    <input v-model="message"/>
    {{message}}
    <h3>method:</h3>
    {{timeMethod()}}
    <h3>computed: (does't change)</h3>
    {{timeComputed}}
  </div>
</template>

<script> export default {
  name: 'lab-computed',
  data() {
    return {
      message: 'Time: ',
    };
  },
  methods: {
    timeMethod() {
      return Date.now();
    },
  },
  computed: {
    timeComputed() {
      return Date.now();
    },
    // timeComputed: {
    //   cache: true,  //false to disable cache
    //   get() {
    //     return Date.now();
    //   },
    // },
  },
}
; </script>

<style scoped>

</style>
