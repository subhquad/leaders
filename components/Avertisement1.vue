<template>
  <div>
    <title-page3 :title="ad.title || 'Issue Jan- Feb 2017'"/>
    <div class="box2">
      <img class="img-responsive" src="~/assets/images/person1.png" />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import TitlePage3 from './TitlePage3';
  export default {
    name: 'avertisement1',
    components: {
      TitlePage3,
    },
    computed: {
      ...mapState({
        ad: state => state.ad,
      }),
    }
  }
</script>

<style scoped>

</style>
