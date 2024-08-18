<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Blog</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
    </head>
    <body>
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">My Blog</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <div class="container my-5">
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Welcome to My Blog</h1>
            <p class="col-md-8 fs-4">
              Discover articles on various topics, from technology to lifestyle,
              written by passionate individuals.
            </p>
            <button class="btn btn-primary btn-lg" type="button">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <!-- Blog Posts -->
      <div class="container">
        <div class="row">
          <!-- Blog Post 1 -->
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img
                src="https://via.placeholder.com/350x150"
                class="card-img-top"
                alt="Post 1"
              />
              <div class="card-body">
                <h5 class="card-title">Blog Post Title 1</h5>
                <p class="card-text">
                  This is a short description of the blog post. It provides a
                  brief insight into the content of the post.
                </p>
                <a href="#" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          <!-- Blog Post 2 -->
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img
                src="https://via.placeholder.com/350x150"
                class="card-img-top"
                alt="Post 2"
              />
              <div class="card-body">
                <h5 class="card-title">Blog Post Title 2</h5>
                <p class="card-text">
                  This is a short description of the blog post. It provides a
                  brief insight into the content of the post.
                </p>
                <a href="#" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          <!-- Blog Post 3 -->
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img
                src="https://via.placeholder.com/350x150"
                class="card-img-top"
                alt="Post 3"
              />
              <div class="card-body">
                <h5 class="card-title">Blog Post Title 3</h5>
                <p class="card-text">
                  This is a short description of the blog post. It provides a
                  brief insight into the content of the post.
                </p>
                <a href="#" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="bg-light text-center py-4 mt-5">
        <p>&copy; 2024 My Blog. All Rights Reserved.</p>
        <p>
          <a href="#" class="text-decoration-none">Privacy Policy</a> |
          <a href="#" class="text-decoration-none">Terms of Service</a>
        </p>
      </footer>
    </body>
  </html>
</template>

<script>
export default {
  name: "App",
  components: {},
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
