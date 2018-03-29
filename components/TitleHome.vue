<template>
  <div class="video_slider">
    <div class="container">
      <h2>{{title}}</h2>
      <img src="~/assets/images/side_logo.png" class="img-responsive" />
    </div>
  </div>
</template>
<script>
  export default {
    props: ['title'],
  }
</script>
