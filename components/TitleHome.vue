<template>
  <div class="video_slider">
    <div class="">
      <div class="title pull-left">{{title}}</div>
      <div class="pull-right">
      <img src="~/assets/images/side_logo.png"  height="37px" />
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['title'],
  }
</script>
