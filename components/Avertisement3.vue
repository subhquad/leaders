<template>
  <div>
    <title-page4 :title="title || 'Avertisement'"/>
    <div class="box5">
      <table style="width:100%">
        <tr v-for="weather of weathers" v-bind:key="weather._id">
          <td>{{weather.country}}</td>
          <td>{{weather.min}}-{{weather.max}} &#8451; </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import TitlePage4 from './TitlePage4';
  export default {
    name: 'avertisement3',
    props: ['title'],
    components: {
      TitlePage4,
    },
    computed: {
      weathers: function () {
        return this.$store.state.weathers
      }
    },
  }
</script>

<style scoped>

</style>
