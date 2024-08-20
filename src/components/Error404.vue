<template>
  <div class="error-wapper">
    <div class="error-container">
      <div class="error-code">404</div>
      <p class="error-message">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a href="/" class="back-home">Go Back to Home</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404Item",
};
</script>

<style>
.error-wapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  color: #333;
  font-family: "Arial", sans-serif;
}
.error-container {
  text-align: center;
  max-width: 600px;
}
.error-code {
  font-size: 8rem;
  font-weight: bold;
  color: #ffc107;
}
.error-message {
  font-size: 1.5rem;
  margin-bottom: 30px;
}
.back-home {
  font-size: 1.2rem;
  text-decoration: none;
  color: #007bff;
  transition: color 0.3s;
}
.back-home:hover {
  color: #0056b3;
}
</style>