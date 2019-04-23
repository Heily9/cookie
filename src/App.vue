<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
    <bottom></bottom>
   <!-- <home></home> -->
  </div>
</template>

<script>
// import Home from './components/Home.vue'
import Top from './components/common/Top.vue'
import Bottom from './components/common/Bottom.vue'
export default {
  components : { Top , Bottom},
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin: 0;
  padding: 0;
}
</style>
