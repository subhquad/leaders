<template>
  <div>
    <h1>{{ title }}}</h1>
    <div v-html="content" />
  </div>
</template>
<script>
  import blocksToHtml from '@sanity/block-content-to-html';
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

  export default {
    asyncData ({ params }) {
      const query = `*[_type == "post" && slug.current == $slug] {
        title,
        body
      }`;
      return sanity.fetch(query, {
        slug: params.slug,
      }).then(post => {
        const article = post[0];
        const html = blocksToHtml({
          blocks: article.body,
          serializers: serializers
        });
        return {
          title: article.title,
          content: html,
        }
      });
    },
  }
</script>
