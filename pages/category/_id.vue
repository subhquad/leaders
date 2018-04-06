<template>
  <div>
    <title-page :name="category.title"/>
    <div class="content">
      <div class="row row1">
        <div class="col-md-9 article" style="border-right:2px solid #ED1B24">
          <div class="box7" v-if="posts.length > 0">
            <ul>
              <li v-for="(post, index) in posts" v-bind:key="post._id">
                <div class="row row1" v-if="index%2===0">
                  <div class="col-md-4">
                    <a :href="'/post/'+ post.link">
                      <img :src="post.image" class="img-responsive" />
                    </a>
                  </div>
                  <div class="col-md-8">
                    <a :href="'/post/'+ post.link" class="head_category">{{post.title}}</a>
                    <p>{{post.title}}</p>
                    <a :href="'/post/'+ post.link" class="more">More... </a>
                  </div>
                </div>
                <div class="row row1" v-else>
                  <div class="col-md-8">
                    <a :href="'/post/'+ post.link" class="head_category">{{post.title}}</a>
                    <p>{{post.title}}</p>
                    <a :href="'/post/'+ post.link" class="more">More... </a>
                  </div>
                  <div class="col-md-4">
                    <a :href="'/post/'+ post.link">
                      <img :src="post.image" class="img-responsive" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="box7" v-else style="display: flex; flexDirection: column; justifyContent: center; alignItems: center">Empty category</div>
          <menu-bottom />
        </div>
        <div class="col-md-3">
          <avertisement1 />
          <!--<avertisement2 :posts="posts" />-->
          <avertisement3 title="Weather"/>
          <div class="quote">
            <img class="img-responsive" src="~assets/images/quote.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import sanity from '~/sanity';
  import imageUrlBuilder from '@sanity/image-url';
  import TitlePage from '../../components/TitlePage.vue';
  import MenuBottom from '../../components/MenuBottom.vue';
  import Avertisement1 from '../../components/Avertisement1.vue';
  import Avertisement2 from '../../components/Avertisement2.vue';
  import Avertisement3 from '../../components/Avertisement3.vue';
  import { getTime } from '../../helpers/time'
  const builder = imageUrlBuilder(sanity);
  export default {
    asyncData ({ params }) {
      const query = `*[_type == "post" && categories[0]._ref == "${params.id}"] | order(_createdAt desc) {
        _id,
        title,
        slug,
        categories,
        mainImage,
        _createdAt,
      }[0..50]`;
      return sanity.fetch(query).then(posts => {
        const data = posts.map(d => {
          return {
            ...d,
            image: builder.image(d.mainImage).url(),
            created: getTime(d._createdAt),
            link: typeof d.slug === 'object'? d.slug.current : 'null',
          };
        });
        return { posts: data, categoryId:  params.id};
      });
    },
    computed: {
      categories: function (a) {
        return this.$store.state.categories
      },
      category: function() {
        const existCategory = this.$store.state.categories.find(c => c._id === this.categoryId)
        if (existCategory) {
          return existCategory.title;
        } else {
          return 'Category'
        }
      },
    },
    components: {
      TitlePage,
      MenuBottom,
      Avertisement1,
      Avertisement2,
      Avertisement3,
    }
  }
</script>
