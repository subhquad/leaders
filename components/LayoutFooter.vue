<template>
  <footer>
    <div class="bottom">
      <div class="row row1 MLeft_right">
        
        <div class="col-md-9 PdL0">
          <div class="address">
          <div style="float:left;">
          <a href="/"><img src="~/assets/images/logo.png" class="img-responsive logo_img"/></a>
          </div>
          <div style="float:left;" class="Add_txt">
            <p>The LEADERS Publication Sdn. Bhd.</p>
            <p>{{footerData.address || 'D1-3-09 U3A Solaris Dutamas,Blok D1,Jalan Dutamas 1,50480 Kuala Lumpur'}}</p>
          </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="row row1">
            <div class="col-md-4 PdL0">
              <ul class="social_links">
                <li style="float:left"><a :href="footerData.facebooklink || 'http://www.facebook.com/theleadersmagazine/?ti=as'" target="blank"><img src="~/assets/images/icon_facebook.png" class="img-responsive" /></a></li>
                <li><a :href="footerData.twitterlink || 'https://twitter.com/TheLeadersMags'" target="blank"><img src="~/assets/images/icon_twitter.png" class="img-responsive" /></a></li>
              </ul>
            </div>
            
            <div class="col-md-8 PdR0">
              <ul class="phone_number">
                <li><p><i class="fa fa-phone Social_Fa"></i>{{footerData.telephone1 || '603-62113535'}}</p></li>
                <li><p><i class="fa fa-print Social_Fa"></i>{{footerData.telephone2 || '603-62113535'}}</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState({
        footerData: state => state.footerData,
      }),
    },
  };
</script>
