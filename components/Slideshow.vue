<template>
  <div>
    <carousel class="b-carousel" ref="carousel" :paginationEnabled="false" :perPage="1" :autoplay="true" :autoplayTimeout="5000" :loop="true" easing="ease">
      <slide v-for="post in posts" v-bind:key="post._id">
        <nuxt-link :to="'/post/'+ post.link">
          <img :src="post.image" class="img-responsive">
        </nuxt-link>
        <div class="slider-info">
          <a :href="'/post/'+ post.link">
            <h3>{{post.title}}</h3>
          </a>
          <h6> {{ post.created }}</h6>
        </div>
      </slide>
    </carousel>
  </div>

</template>

<style>
  .VueCarousel-slide img {
    width: 100%;
    height: 350px;
  }
  .slider-info a {
    color: black;
  }
  .slider-info a:hover {
    color: blue;
  }
</style>

<script>
  export default {
    props: ['posts'],
  }
</script>
