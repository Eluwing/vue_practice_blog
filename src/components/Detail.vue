<template>
  <div class="container mt-5">
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <h1 class="mb-4">{{blogPosts[$route.params.id].title}}</h1>
                <p class="text-muted">{{blogPosts[$route.params.id].date}}</p>
                <img src="https://via.placeholder.com/800x400" class="img-fluid rounded mb-4" alt="Blog Post Image">
                <p>{{blogPosts[$route.params.id].content}}</p>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailItem',
  props:{
    blogPosts: Object,
  },
  data(){
    return{

    }
  }
}
</script>

<style>

</style>