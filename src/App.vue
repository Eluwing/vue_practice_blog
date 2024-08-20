<template>
  <Navbar />
  <router-view :blogPosts="blogPosts"></router-view>
</template>

<script>
import Data from "./assets/blog.js"
import Navbar from './components/Navbar.vue';

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      blogPosts: Data,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
