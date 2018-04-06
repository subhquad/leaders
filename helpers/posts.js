export function getPostHome(posts = [], number = 10, id_category = '') {
  const data = [[],[]];
  let index = 0;
  posts.map(post => {
    if (data.length < number) {
      if (id_category === '' || (id_category !== '' && post.categories && post.categories[0]._ref === id_category)) {
        data[index].push(post);
        index = index === 0 ? 1 : 0;
      }
    }
  });
  return data
}
