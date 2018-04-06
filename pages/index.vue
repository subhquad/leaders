<template>
  <div >
    <title-page name="Main Story"/>
    <!--<slideshow />-->
    <div class="content">
      <div class="row row1">
        <div class="col-md-7" style="padding: 0px 26px 0px 0px;">
          <Slideshow :posts="posts"/>
        </div>
        <div class="col-md-5 PdR0">
          <ul class="Side_bar">
            <li v-for="post of posts" v-bind:key="post._id">
              <div class="row row1">
                <div class="col-md-4 PDLR0 ">
                  <a :href="'/post/'+ post.link">
                    <img :src="post.image" class="img-responsive ImageAlign_SideBar" />
                  </a>
                </div>
                <div class="col-md-8">
                  <a :href="'/post/'+ post.link">
                    <h5 style="color: #333333">{{post.title}}</h5>
                  </a>
                  <h6> {{post.created}}</h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <title-home title="Malaysia"/>
    <div class="content">
      <div class="row row1">
        <div class="col-md-8 Malasya_header">
          <div class="row row1">
            <div class="col-md-6 PdL0" style="border-right:3px solid #bbb">
              <ul class="Side_bar1">
                <li v-for="(post, i) of posts_malaysia" v-bind:key="post._id" v-if="i%2==0">
                  <div class="row row1">
                    <div class="col-md-4  ">
                      <a :href="'/post/'+ post.link">
                        <img :src="post.image" class="img-responsive ImageAlign_SideBar" />
                      </a>
                    </div>
                    <div class="col-md-8">
                      <a :href="'/post/'+ post.link">
                        <h5 style="color: #333333">{{post.title}} </h5>
                      </a>
                      <p>{{post.title}}<a :href="'/post/'+ post.link">More..</a></p>
                      <h6>{{post.created}}</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-6" >
              <ul class="Side_bar1" >
                <li v-for="(post, i) in posts_malaysia" v-bind:key="post._id" v-if="i%2==1">
                  <div class="row row1">
                    <div class="col-md-4 ">
                      <a :href="'/post/'+ post.link">
                        <img :src="post.image" class="img-responsive ImageAlign_SideBar" />
                      </a>
                    </div>
                    <div class="col-md-8">
                      <a :href="'/post/'+ post.link">
                        <h5 style="color: #333333">{{post.title}} </h5>
                      </a>
                      <p>{{post.title}}<a :href="'/post/'+ post.link">More..</a></p>
                      <h6>{{post.created}}</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4 Left_brd_clrRed PdR0">
          <info2-home title="Most Read" :posts="posts.filter((post, index) => index<6)"/>
        </div>
      </div>
    </div>
    <!-------------- malaysia------------>
    <!--<div class=" grey">-->
    <!--<div class="container" style="position:relative">-->
    <!--<div class="row row1">-->
    <!--<div class="col-md-1 logo_grey">-->
    <!--<img src="~/assets/images/logo_tv_grey.png" class="img-responsive" />-->
    <!--</div>-->
    <!--<div class="col-md-11">-->
    <!--<div id="owl-demo" class="owl-carousel owl-theme">-->
    <!--<div class="item imag" v-for="video of videos" v-bind:key="video._id">-->
    <!--<video controls="controls"><source :src="video.vdolink" /></video>-->
    <!--<p>{{video.title}}</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <div class=" grey MLeft_right">
      <div class="" style="position:relative;padding: 36px 0px 0px 0px;">
        <div class="row row1">
          <div class="col-md-1 TVLOGO" >
            <img src="~/assets/images/logo_tv_grey.png" style=" width: 84px; padding-top: 38px;" />
          </div>
          <div class="col-md-11">
            <!--<div class="owl-theme" style="width: 100%; position: relative">-->
            <!--<div class="item imag" v-for="video of videos" v-bind:key="video._id">-->
            <!--<video controls="controls"><source :src="video.vdolink" /></video>-->
            <!--<p>{{video.title}}</p>-->
            <!--</div>-->
            <!--</div>-->
            <slideshow-video :videos="videos"/>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="content">-->
      <!--<div class="row row1">-->
        <!--<div class="col-md-4 PdL0">-->
          <!--<info-home title="Article" :posts="posts.filter(post => post.categories && post.categories.find(o => o._ref === '42319d86-e76a-45d0-9fa8-3e3dcb58f45b'))"/>-->
        <!--</div>-->
        <!--<div class="col-md-4 PdL0">-->
          <!--<info-home title="Analysis" :posts="posts.filter(post => post.categories && post.categories.find(o => o._ref === '7a1a3960-f16f-4263-8d86-0ac4f2d02acd'))"/>-->
        <!--</div>-->
        <!--<div class="col-md-4 PdR0 PdL0">-->
          <!--<info-home title="Popular Now" :posts="posts.filter((post, index) => index<6)"/>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <subcategories :posts="posts"/>
    <title-home title="World"/>
    <div class="content ">
      <div class="row row1">
        <div class="col-md-8  Malasya_header">
          <div class="row row1">
            <div class="col-md-6 PdL0" style="border-right:3px solid #bbb">
              <ul class="Side_bar1">
                <li v-for="(post, i) in posts_world" v-bind:key="post._id" v-if="i%2==0">
                  <div class="row row1">
                    <div class="col-md-4 ">
                      <a :href="'/post/'+ post.link">
                        <img :src="post.image" class="img-responsive ImageAlign_SideBar" />
                      </a>
                    </div>
                    <div class="col-md-8">
                      <a :href="'/post/'+ post.link">
                        <h5 style="color: #333333">{{post.title}}</h5>
                      </a>
                      <p>{{post.title}}<a :href="'/post/'+ post.link">More..</a></p>
                      <h6>{{post.created}}</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-6" >
              <ul class="Side_bar1" >
                <li v-for="(post, i) in posts_world" v-bind:key="post._id" v-if="i%2==1">
                  <div class="row row1">
                    <div class="col-md-4 ">
                      <a :href="'/post/'+ post.link">
                        <img :src="post.image" class="img-responsive" />
                      </a>
                    </div>
                    <div class="col-md-8">
                      <a :href="'/post/'+ post.link">
                        <h5 style="color: #333333">{{post.title}}</h5>
                      </a>
                      <p>{{post.title}}<a :href="'/post/'+ post.link">More..</a></p>
                      <h6>{{post.created}}</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4 Left_brd_clrRed PdR0">
          <info2-home title="Editor's pick" :posts="posts.filter((post, index) => index<6)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import chunk from 'lodash/chunk';
  import sanity from '../sanity';
  import imageUrlBuilder from '@sanity/image-url';
  import Slideshow from '~/components/Slideshow.vue';
  import TitlePage from '~/components/TitlePage.vue';
  import TitleHome from '~/components/TitleHome.vue';
  import InfoHome from '~/components/InfoHome.vue';
  import Info2Home from '~/components/Info2Home.vue';
  import SlideshowVideo from '~/components/SlideshowVideo.vue';
  import Subcategories from '~/components/Subcategories.vue';

  import { getTime } from '../helpers/time'
  const builder = imageUrlBuilder(sanity);

  const queryPost = `*[_type == "post"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  categories,
  mainImage,
  _createdAt,
}[0...15]`;

  export default {
    fetch ({ store }) {
      return sanity.fetch(queryPost).then(data => {
        const posts = data.map(d => {
          return {
            ...d,
            image: builder.image(d.mainImage).url(),
            created: getTime(d._createdAt),
            link: typeof d.slug === 'object'? d.slug.current : 'null',
          };
        });
        store.commit('initPost', posts);
      });
    },
    computed: {
      ...mapState({
        posts: state => state.posts,
        videos: state => chunk(state.videos, 5),
        posts_malaysia: state => state.posts.filter(post => post.categories && post.categories.find(o => o && o._ref === '3250afcf-233a-47e7-be3e-bc04aaaa03fd')),
        posts_world: state => state.posts.filter(post => post.categories  && post.categories.find(o => o && o._ref === 'e0fe1064-dcfd-4f27-b543-28520d827b28')),
      }),
    },
    components: {
      Slideshow,
      TitlePage,
      TitleHome,
      InfoHome,
      Info2Home,
      SlideshowVideo,
      Subcategories
    },
    layout: 'default',
  }
</script>

<style>

</style>
