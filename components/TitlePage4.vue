<template>
  <div class="weather">
    <h3>{{title}}</h3>
    <img src="~/assets/images/left_white.png" class="img-responsive smImage_Line">
  </div>
</template>

<script>
  export default {
    name: 'title-page4',
    props: ['title']
  }
</script>
