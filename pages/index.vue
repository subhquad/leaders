<template>
  <div>
    <title-page name="Main Story"/>
    <!--<slideshow />-->
    <div class="content">
      <div class="row row1">
        <div class="col-md-7">
          <Slideshow :posts="posts"/>
        </div>
        <div class="col-md-5">
          <ul class="Side_bar">
            <li v-for="post of posts" v-bind:key="post._id">
              <div class="row row1">
                <div class="col-md-4 PDLR0">
                  <a :href="'/post/'+ post.link">
                    <img :src="post.image" class="img-responsive" />
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
        <div class="col-md-8">
          <div class="row row1">
            <div class="col-md-6" style="border-right:3px solid #bbb">
              <ul class="Side_bar1">
                <li v-for="post of posts" v-bind:key="post._id" v-if="post.categories && post.categories[0]._ref === `448b8759-13f1-4ac0-9c76-ef533913dc09`">
                  <div class="row row1">
                    <div class="col-md-4">
                      <a :href="'/post/'+ post.link">
                        <img :src="post.image" class="img-responsive" />
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
            <div class="col-md-6" style="border-right:#ED1B24 2px solid">
              <ul class="Side_bar1" >
                <li v-for="post of posts" v-bind:key="post._id" v-if="post.categories && post.categories[0]._ref === `448b8759-13f1-4ac0-9c76-ef533913dc09`">
                  <div class="row row1">
                    <div class="col-md-4">
                      <a :href="'/post/'+ post.link">
                        <img :src="post.image" class="img-responsive" />
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
        <div class="col-md-4">
          <info2-home title="Most Read" :posts="posts.map((post, index) => {if(index<6) {return post}})"/>
        </div>
      </div>
    </div>
    <!-------------- malaysia------------>
    <!--<div class="content grey">-->
      <!--<div class="container" style="position:relative">-->
        <!--<div class="row row1">-->
          <!--<div class="col-md-1 logo_grey">-->
            <!--<img src="~/assets/images/logo_tv_grey.png" class="img-responsive"/>-->
          <!--</div>-->
          <!--<div class="col-md-11">-->
            <!--<div id="owl-demo" class="owl-carousel owl-theme">-->
              <!--<div v-for="video of videos" v-bind:key="video.id" class="item imag">-->
                <!--<video controls="controls" :src="video.vdolink" style="width: 200px"/>-->
                <!--<p>{{video.title}}</p>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="content grey">
      <div class="container" style="position:relative">
        <div class="row row1">
          <div class="col-md-1 logo_grey">
            <img src="~/assets/images/logo_tv_grey.png" class="img-responsive" />
          </div>
          <div class="col-md-11">
            <div id="owl-demo" class="owl-carousel owl-theme">
              <div class="item imag" v-for="video of videos" v-bind:key="video._id">
                <video controls="controls"><source :src="video.vdolink" /></video>
                <p>{{video.title}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="row row1">
        <div class="col-md-4">
          <info-home title="Article" :posts="posts.map(post => {if(post.categories && post.categories[0]._ref ===`42319d86-e76a-45d0-9fa8-3e3dcb58f45b`) {return post;}})"/>
        </div>
        <div class="col-md-4">
          <info-home title="Analysis" :posts="posts.map(post => {if(post.categories && post.categories[0]._ref ===`7a1a3960-f16f-4263-8d86-0ac4f2d02acd`) {return post}})"/>
        </div>
        <div class="col-md-4">
          <info-home title="Popular Now" :posts="posts.map((post, index) => {if(index<6) {return post}})"/>
        </div>
      </div>
    </div>
    <title-home title="World"/>
    <div class="content">
      <div class="row row1">
        <div class="col-md-8">
          <div class="row row1">
            <div class="col-md-6" style="border-right:3px solid #bbb">
              <ul class="Side_bar1">
                <li v-for="post of posts" v-bind:key="post._id" v-if="post.categories && post.categories[0]._ref === `04af8082-54d7-4daf-8e50-3d11a919ab32`">
                  <div class="row row1">
                    <div class="col-md-4">
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
            <div class="col-md-6" style="border-right:#ED1B24 2px solid">
              <ul class="Side_bar1" >
                <li v-for="post of posts" v-bind:key="post._id" v-if="post.categories && post.categories[0]._ref === `04af8082-54d7-4daf-8e50-3d11a919ab32`">
                  <div class="row row1">
                    <div class="col-md-4">
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
        <div class="col-md-4">
          <info2-home title="Editor's pick" :posts="posts.map((post, index) => {if(index<6) {return post}})"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import sanity from '../sanity';
import imageUrlBuilder from '@sanity/image-url';
import Slideshow from '~/components/Slideshow.vue';
import TitlePage from '~/components/TitlePage.vue';
import TitleHome from '~/components/TitleHome.vue';
import InfoHome from '~/components/InfoHome.vue';
import Info2Home from '~/components/Info2Home.vue';

import { getTime } from '../helpers/time'
const builder = imageUrlBuilder(sanity);

const query = `*[_type == "vdopost"] {
  _id,
  title,
  vdolink,
}[0...16]`;

const queryPost = `*[_type == "post"] {
  _id,
  title,
  slug,
  categories,
  mainImage,
  publishedAt,
}[0...15]`;

export default {
  fetch ({ store }) {
    return sanity.fetch(queryPost).then(data => {
      const posts = data.map(d => {
        return {
          ...d,
          image: builder.image(d.mainImage).url(),
          created: getTime(d.publishedAt),
          link: typeof d.slug === 'object'? d.slug.current : 'null',
        };
      });
      store.commit('initPost', posts);
    });
  },
  computed: {
    ...mapState({
      videos: state => state.videos,
      posts: state => state.posts,
    }),
  },
  mounted() {
    sanity.fetch(query).then(data => {
      this.categories = data;
    }, error => {
      this.error = error
    });
  },
  components: {
    Slideshow,
    TitlePage,
    TitleHome,
    InfoHome,
    Info2Home,
  },
  layout: 'default',
}
</script>

<style>

</style>
