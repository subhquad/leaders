export function state () {
  return {
    videos: [],
    posts: [],
  }
}
export const mutations = {
  initVideo(state, videos) {
    state.videos = videos;
  },
  initPost(state, posts) {
    state.posts = posts;
  },
};
