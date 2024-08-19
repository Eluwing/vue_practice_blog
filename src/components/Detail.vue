<template>
  <div class="container mt-5">
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <h1 class="mb-4">{{blogPosts[$route.params.id].title}}</h1>
                <p class="text-muted">{{blogPosts[$route.params.id].date}}</p>
                <img src="https://via.placeholder.com/800x400" class="img-fluid rounded mb-4" alt="Blog Post Image">
                <p>{{blogPosts[$route.params.id].content}}</p>

                <!-- Comments Section -->
                <h4 class="mt-5">Comments</h4>
                <div class="mb-3">
                    <label for="comment" class="form-label">Leave a Comment</label>
                    <textarea class="form-control" id="comment" rows="3"></textarea>
                    <button type="button" class="btn btn-primary mt-3">Submit</button>
                </div>
                <div class="border p-3 rounded mb-3">
                    <strong>Jane Doe:</strong>
                    <p>This is a great post! Thanks for sharing.</p>
                </div>
                <div class="border p-3 rounded">
                    <strong>John Smith:</strong>
                    <p>I found this very informative. Looking forward to more posts like this.</p>
                </div>
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