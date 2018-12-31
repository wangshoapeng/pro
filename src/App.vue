<template>
  <div id="app">
    <transition name="router-view">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('../src/assets/css/reset.css');
@import url('../src/assets/css/public.css');
@import url('../src/assets/css/public-animation.css');

html,
body,
#app,
#app > div {
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: Arial, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f7f9;
}
</style>
