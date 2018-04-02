<template>
  <div>
    <title-page3 :title="title || 'the TEAMS'"/>
    <div class="box6" v-if="posts && typeof posts === 'object' && posts.length > 0" >
      <ul>
        <li v-for="post of posts" v-bind:key="post._id">
          <a :href="'/post/'+ post.link">{{post.title}}</a>
        </li>
      </ul>
    </div>
    <div class="box3" v-if="showmembers && showmembers === true" >
      <ul>
        <li v-for="member of team" v-bind:key="member._id">
          <p>{{member.designation}}</p>
          <h6>{{member.name}}</h6>
          <i class="fa fa-envelope-o"><span>{{member.email}}</span></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import TitlePage3 from './TitlePage3';
  export default {
    name: 'avertisement2',
    props: ['title', 'posts', 'showmembers'],
    components: {
      TitlePage3,
    },
    computed: {
      team: function () {
        return this.$store.state.team
      }
    },
  }
</script>

<style scoped>

</style>
