<template>
  <div>
    <title-page :name="category.title"/>
    <div class="content">
      <div class="row row1">
        <div class="col-md-9 article" style="border-right:2px solid #ED1B24">
          <div class="box7">
            <ul>

              <li><div class="row row1"><div class="col-md-4"><img src="img/category/1.png" class="img-responsive" /></div> <div class="col-md-8"><a href="#" class="head_category">Measets satellite scraps RM702mil contract with Astro</a><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p> <a href="#" class="more">More... </a></div></div></li>
              <li><div class="row row1"><div class="col-md-8"><a href="#" class="head_category">Measets satellite scraps RM702mil contract with Astro</a><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p> <a href="#" class="more">More... </a></div><div class="col-md-4"><img src="img/category/2.png" class="img-responsive" /></div></div></li>
              <li><div class="row row1"><div class="col-md-4"><img src="img/category/3.png" class="img-responsive" /></div> <div class="col-md-8"><a href="#" class="head_category">Measets satellite scraps RM702mil contract with Astro</a><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p> <a href="#" class="more">More... </a></div></div></li>
              <li><div class="row row1"><div class="col-md-8"><a href="#" class="head_category">Measets satellite scraps RM702mil contract with Astro</a><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p> <a href="#" class="more">More... </a></div><div class="col-md-4"><img src="img/category/4.png" class="img-responsive" /></div></div></li>
              <li><div class="row row1"><div class="col-md-4"><img src="img/category/5.png" class="img-responsive" /></div> <div class="col-md-8"><a href="#" class="head_category">Measets satellite scraps RM702mil contract with Astro</a><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p> <a href="#" class="more">More... </a></div></div></li>
              <li><div class="row row1"><div class="col-md-8"><a href="#" class="head_category">Measets satellite scraps RM702mil contract with Astro</a><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p> <a href="#" class="more">More... </a></div><div class="col-md-4"><img src="img/category/6.png" class="img-responsive" /></div></div></li>
              <li><div class="row row1"><div class="col-md-4"><img src="img/category/1.png" class="img-responsive" /></div> <div class="col-md-8"><a href="#" class="head_category">Measets satellite scraps RM702mil contract with Astro</a><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p> <a href="#" class="more">More... </a></div></div></li>
              <li><div class="row row1"><div class="col-md-8"><a href="#" class="head_category">Measets satellite scraps RM702mil contract with Astro</a><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p> <a href="#" class="more">More... </a></div><div class="col-md-4"><img src="img/category/2.png" class="img-responsive" /></div></div></li>
              <li><div class="row row1"><div class="col-md-4"><img src="img/category/3.png" class="img-responsive" /></div> <div class="col-md-8"><a href="#" class="head_category">Measets satellite scraps RM702mil contract with Astro</a><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p> <a href="#" class="more">More... </a></div></div></li>
              <li><div class="row row1"><div class="col-md-8"><a href="#" class="head_category">Measets satellite scraps RM702mil contract with Astro</a><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p> <a href="#" class="more">More... </a></div><div class="col-md-4"><img src="img/category/4.png" class="img-responsive" /></div></div></li>
            </ul>
          </div>
          <div class="bottom_menu">
            <ul class="last_menu">
              <li><a href="#">Home</a><span>|</span></li>
              <li><a href="#">Sitemap</a><span>|</span></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">General</a><span>|</span></li>
              <li><a href="#">Politics</a><span>|</span></li>
              <li><a href="#">Business</a><span>|</span></li>
              <li><a href="#">Sports</a><span>|</span></li>
              <li><a href="#">Features</a><span>|</span></li>
              <li><a href="#">World</a><span>|</span></li>
              <li><a href="#">Full News List</a><span>|</span></li>
              <li><a href="#">Archieved News</a><span>|</span></li>
              <li><a href="#">RSS Feeds</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import sanity from '~/sanity';
  import TitlePage from '../../components/TitlePage.vue';
  export default {
    async asyncData ({ params }, callback) {
      const query = `*[_type == "post" && categories[0]._ref == "${params.id}"] {
        _id,
        title,
        slug,
        categories,
        mainImage,
        publishedAt,
      }[0..50]`;
      const queryCategory = `*[_type == "category" && _id == "${params.id}"] {
        _id,
        title,
      }`;
      let category = {};
      await sanity.fetch(queryCategory).then(valueCategory => {
        category = valueCategory[0];
      }, error => {
        console.log(error);
        category = {title: 'Categories'};
      });
      sanity.fetch(query).then(posts => {
        callback(null, { posts: posts, category: category })
      }, error => {
        callback({ statusCode: 404, message: error })
      })
    },
    components: {
      TitlePage,
    }
  }
</script>
