<template>
  <div class="main_story">
    <div class="container">
      <div class="title pull-left">{{name}}</div>
      <div class="pull-right">
        <img src="~/assets/images/side_logo.png" class="img-responsive smImage_Line" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['name'],
  }
</script>
