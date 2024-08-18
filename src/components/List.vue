<template>
  <div v-for="(item, index) in blogPosts" :key="index">
    <h5>{{item.title}}</h5>
    <p>{{item.content}}</p>
    <p>{{item.date}}</p>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    blogPosts: Object,
  }
}
</script>

<style>

</style>