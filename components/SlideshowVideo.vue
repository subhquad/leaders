<template>
  <div id="owl-demo" class="owl-theme">
    <carousel class="b-carousel" ref="carousel" :perPage="1" easing="ease" :scrollPerPage="true" paginationActiveColor="#869791" paginationColor="#98a09d">
      <slide v-for="(row, index) in videos" v-bind:key="index">
        <div class="slide">
          <div class="item imag" v-for="video of row" v-bind:key="video._id">
            <iframe width="280" height="150" :src="video.link" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p>{{video.title}}</p>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
  export default {
    props: ['videos'],
  }
</script>
<style>
  .VueCarousel-slide embed {
    /*width: 200px;*/

  }
  .slider-info a {
    color: black;
  }
  .slider-info a:hover {
    color: blue;
  }
  .slide {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .slide div {
    flex: 0.2;
    margin-Left: 5px;
    margin-Right: 5px;
  }
  .slide div embed{
    width: 100%;
  }
</style>
