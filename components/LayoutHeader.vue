<template>
  <div>
    <div class="top_bar ">
      <div class="row row1 MLeft_right">
        <div class="pull-left">
          <div class="logo">
            <a href="/"><img src="~/assets/images/logo.png" class="img-responsive" /></a>
          </div>
        </div>
        <div class="pull-right PdTB">
          <div class="right_top">
            <ul>
              <li><a :href="headerData.facebooklink || 'http://www.facebook.com/theleadersmagazine/?ti=as'" target="blank"><img src="~/assets/images/icon_facebook.png" class="img-responsive" /></a></li>
              <li><a :href="headerData.twitterlink || 'https://twitter.com/TheLeadersMags'" target="blank"><img src="~/assets/images/icon_twitter.png" class="img-responsive" /></a></li>
            </ul>
          </div>
          <div class="pull-right">
            <div class="lOGO_TV">
              <div class="bottom_bar MtR_20">
                <img class="" src="~/assets/images/logo_tv.png" />
              </div>
              <div class="bottom_bar MtR_20">
                <img class="" src="~/assets/images/logo_small.png" />
              </div>
            </div>
            <div class="bottom_bar">
              <p id="dayshow">{{date}}</p>
              <form class="example frmSearch" action="/action_page.php" style="margin:auto;max-width:200px">
                <input type="text" placeholder="Search.." name="search2">
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="menu MLeft_right">

      <nav class="navbar" role="navigation">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"
                  style="background-color:#ED1B24">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">
          <ul class="nav navbar-nav">
            <li><nuxt-link exact to="/">Home</nuxt-link></li>
            <li v-for="category in categories"  v-bind:key="category._id">
              <nuxt-link :to="'/category/'+category._id">{{ category.title }}</nuxt-link>
            </li>
            <li style="border-right:none"><nuxt-link to="/about-us">About Us</nuxt-link></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </nav>

    </div>
  </div>
</template>

<script>
  import { getTimeHeader } from '../helpers/time';
  import { mapState } from 'vuex';
  export default {
    data () {
      return {
        date: getTimeHeader(),
      }
    },
    computed: {
      ...mapState({
        categories: state => state.categories,
        headerData: state => state.headerData,
      }),
    },
  };
</script>
