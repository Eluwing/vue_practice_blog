<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="(item, index) in blogPosts" :key="index">
        <div class="card mb-4 shadow-sm">
          <img
            src="https://via.placeholder.com/350x150"
            class="card-img-top"
            alt="Post 1"
          />
          <div class="card-body">
            <h5 class="card-title">
              {{ item.title }}
            </h5>
            <p class="card-text">
              {{ item.content }}
            </p>
            <a :href="`/detail/${item.number}`" class="btn btn-primary"
              >Read More</a
            >
          </div>
          <div class="card-footer text-muted">
            {{ item.date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListItem",
  props: {
    blogPosts: Object,
  },
};
</script>

<style>
</style>