<template>
  <div>
    <div class="main_story">
      <div class="container">
        <div class="title pull-left">Business</div>
        <div class="pull-right">
          <img src="~/assets/images/side_logo.png" class="img-responsive smImage_Line" />
        </div>
      </div>
    </div>
    <div class="content">
      <div class="row row1">
        <div class="col-md-9 article" style="border-right:2px solid #ED1B24">
          <img :src="image" class="img-responsive article_img"/>
          <h3>{{title}}</h3>
          <h6>{{created}}</h6>
          <div class="box4" v-html="content" />
          <div class="icon1">
            <ul>
              <li><img src="~/assets/images/icon_facebook.png" class="img-responsive" /></li>
              <li><img src="~/assets/images/icon_twitter.png" class="img-responsive" /></li>
              <li><a href="#">Share</a></li>
            </ul>
          </div>
          <menu-bottom/>
        </div>
        <div class="col-md-3">
          <avertisement1 />
          <avertisement2 />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import MenuBottom from '../../components/MenuBottom.vue';
  import TitlePage3 from '../../components/TitlePage3.vue';
  import Avertisement1 from '../../components/Avertisement1.vue';
  import Avertisement2 from '../../components/Avertisement2.vue';
  import blocksToHtml from '@sanity/block-content-to-html';
  import imageUrlBuilder from '@sanity/image-url';
  import { getTime } from '../../helpers/time'
  import { mapState } from 'vuex';
  import sanity from '~/sanity';
  const h = blocksToHtml.h;
  const serializers = {
    types: {
      code: props => (
        h('pre', {className: props.node.language},
          h('code', props.node.code)
        )
      )
    }
  };
  const builder = imageUrlBuilder(sanity);
  export default {
    async asyncData ({ params }, callback) {
      if (params.slug === 'null') {
        callback({ statusCode: 404, message: "Not post" });
      }
      const query = `*[_type == "post" && slug.current == $slug] {
        _id,
        title,
        categories,
        body,
        mainImage,
        publishedAt,
      }`;
      sanity.fetch(query, {
        slug: params.slug,
      }).then(post => {
        const article = post[0];
        const html = blocksToHtml({
          blocks: article.body,
          serializers: serializers
        });
        callback( null, {
          title: article.title,
          image: builder.image(article.mainImage).url(),
          created: getTime(article.publishedAt),
          content: html,
        });
      }, error => {
        callback({ statusCode: 404, message: error });
      });
    },
    computed: {
      ...mapState({
        categories: state => state.categories,
      })
    },
    components: {
      MenuBottom,
      TitlePage3,
      Avertisement1,
      Avertisement2,
    }
  }
</script>
