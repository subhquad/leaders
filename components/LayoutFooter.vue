<template>
  <footer>
    <div class="bottom">
      <div class="row row1">
        <div class="col-md-3">
          <a href="/"><img src="~/assets/images/logo.png" class="img-responsive logo_img"/></a>
        </div>
        <div class="col-md-6">
          <ul class="address">
            <li><p>The LEADERS Publication Sdn. Bhd.</p></li>
            <li><p>D1-3-09 U3A Solaris Dutamas,Blok D1,Jalan Dutamas 1,50480 Kuala Lumpur</p></li>
          </ul>
        </div>
        <div class="col-md-3">
          <div class="row row1">
            <div class="col-md-6">
              <ul class="social_links">
                <li style="float:left"><a href="#"><img src="~/assets/images/icon_facebook.png" class="img-responsive" /></a></li>
                <li><a href="#"><img src="~/assets/images/icon_twitter.png" class="img-responsive" /></a></li>
              </ul>
            </div>
            <div class="col-md-2">
              <ul class="contact">
                <li><i class="fa fa-phone"></i></li>
                <li><i class="fa fa-print"></i></li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="phone_number">
                <li><p>603-62113535</p></li>
                <li><p>603-62113535</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  import sanity from '../sanity';
  const query = `*[_type == "footer"]`;
  export default {
    data () {
      return {
        footer: {}
      }
    },
    mounted() {
      sanity.fetch(query).then(data => {
        this.footer = data;
      }, error => {
        this.error = error
      });
    },
  };
</script>
