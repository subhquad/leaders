<template>
  <div>
    <div class="most_read">
      <h2>{{title}}</h2>
      <img src="~/assets/images/black_side_logo.png" class="img-responsive" />
    </div>
    <ul class="Side_bar2">
      <li v-for="post of posts" v-bind:key="post._id" v-if="typeof post === 'object'">
        <a :href="'/post/'+ post.link">
          <h5>{{post.title}}</h5>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'info2-home',
    props: ['title', 'posts']
  }
</script>
