<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Upload />
    <ApolloExample />
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import ApolloExample from './components/ApolloExample.vue'
import Upload from './components/Upload.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ApolloExample,
    Upload
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
