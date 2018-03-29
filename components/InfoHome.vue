<template>
  <div>
    <div class="head grey">
      <h5>{{title}}</h5>
      <img src="~/assets/images/grey_line.png" class="img-responsive" />
    </div>
    <div class="box">
      <ul>
        <li v-for="post of posts" v-bind:key="post._id" v-if="typeof post === 'object' ">
          <a :href="'/post/'+ post.link">
            <p style="color: #333333">{{post.title}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'info-home',
    props: ['title', 'posts']
  }
</script>
