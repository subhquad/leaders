<template>
  <div class="content">
    <div class="row row1">
      <div class="col-md-4 PdL0" v-for="subcategory of subcategories" v-bind:key="subcategory._id">
        <info-home :title="subcategory.title" :posts="posts" />
      </div>
      <!--<div class="col-md-4 PdL0">-->
        <!--<info-home title="Analysis" :posts="[]" />-->
      <!--</div>-->
      <div class="col-md-4 PdR0 PdL0">
        <info-home title="Popular Now" :posts="posts" />
      </div>
    </div>
  </div>
</template>

<script>
  import InfoHome from './InfoHome.vue';
  export default {
    name: 'subcategories',
    components: {
      InfoHome,
    },
    data() {
      return {
        data: [],
      }
    },

    computed: {
      subcategories: function () {
        return this.$store.state.subcategories
      },
    },

    created() {
      this.data = this.posts;
    },
    props: ['posts'],
  }
</script>

<style scoped>

</style>
