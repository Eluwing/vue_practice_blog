<template>
  <p>Welcome Comment page!</p>
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
    <p>
      I found this very informative. Looking forward to more posts like this.
    </p>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
};
</script>

<style>
</style>