export const state = () => ({
  loading: false,
  posts: []
});

export const mutations = {
  loading(state) {
    state.loading = true;
  },
  init(state, posts) {
    state.posts = posts;
    state.loading = false;
  },
};
