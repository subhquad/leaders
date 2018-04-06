<template>
  <div>
    <title-page :name="contact.title"/>
    <div class="content">
      <div class="row row1">
        <div class="col-md-9" style="border-right:2px solid #ED1B24">
          <div class="box1" v-html="contact.content">
            <!--<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer-->
              <!--took a galley of type and scrambled it to make a type specimen book. It has survived not only five-->
              <!--centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was-->
              <!--popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more-->
              <!--recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>-->
            <!--<ul>-->
              <!--<li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown-->
                <!--printer took a galley of type and scrambled it to make a type specimen book. It has survived not only-->
                <!--five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.-->
              <!--</li>-->
              <!--<li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,-->
                <!--and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem-->
                <!--Ipsum.-->
              <!--</li>-->
            <!--</ul>-->
          </div>
          <div class="img_header">
            <a href="index.html"><img src="~/assets/images/logo.png" class="img-responsive"/></a>
          </div>
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16300249.536988571!2d100.53089380397682!3d4.110911839854261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3034d3975f6730af%3A0x745969328211cd8!2sMalaysia!5e0!3m2!1sen!2sin!4v1520509148685"
              width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
          <div class="contact1">
            <h5>Contact us</h5>
            <div class="form-group">
              <form @submit.prevent="onSubmit({txtName, txtmail, txtsub, text})">
                <input type="text" name="txtName" id="txtName" v-model="txtName" placeholder="Your Name" required
                       class="form-control">
                <input type="text" name="txtlast" id="txtmail" v-model="txtmail" placeholder="Your Mail" required
                       class="form-control">
                <input type="text" name="txtlast" id="txtsub" v-model="txtsub" placeholder="Subject" required
                       class="form-control">
                <button type="submit" name="btnSubmit" id="btnSubmit" class="btn btn-info pull-right">Submit</button>
                <input type="text" name="txtlast" id="text" v-model="text" placeholder="Your Message" required
                       class="form-control">
              </form>
            </div>
          </div>
          <menu-bottom/>
        </div>
        <div class="col-md-3">
          <avertisement1/>
          <avertisement2 title="the TEAMS" :showmembers="true"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import sanity from '~/sanity';
  import TitlePage from '../components/TitlePage.vue';
  import Avertisement1 from '../components/Avertisement1.vue';
  import Avertisement2 from '../components/Avertisement2.vue';
  import MenuBottom from '../components/MenuBottom.vue';
  import blocksToHtml from '@sanity/block-content-to-html';
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
  export default {
    components: {
      TitlePage,
      Avertisement1,
      Avertisement2,
      MenuBottom,
    },
    data() {
      return {
        txtName: '',
        txtmail: '',
        txtsub: '',
        text: '',
      };
    },
    async asyncData() {
      const query = `*[_type == "aboutus"] {
        _id,
        title,
        slug,
        author,
        body,
        publishedAt,
      }[0..50]`;

      return sanity.fetch(query).then(contact => {
        const info = contact[0];
        const html = blocksToHtml({
          blocks: info.body,
          serializers: serializers
        });
        return { contact: {...info, content: html,} };
      });
    },
    methods: {
      onSubmit(data) {
        const doc = {
          ...data,
          _type: 'contact',
        };
        sanity.create(doc).then(res => {
          console.log(`Bike was created, document ID is ${res._id}`);
        }, error => {
          console.log('error', error);
        });
      },
    },
  };
</script>
