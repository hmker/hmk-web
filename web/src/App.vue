<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view class="container"/>
    <notifications group="foo" />
    <!-- Todo 增加加载条 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
// this.$notify({
//   group: 'foo',
//   title: 'Important message',
//   text: 'Hello user! This is a notification!'
// });
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
