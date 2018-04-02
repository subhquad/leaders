import sanity from '../sanity';
import split from 'lodash/split'
export function state () {
  return {
    videos: [],
    posts: [],
    categories: [],
    team: [],
    ad: {},
    headerData: {},
    footerData: {},
    weathers: [
      { _id: '1', country: 'Kuala Lumpur', min: 18, max: 23 },
      { _id: '2', country: 'Kuala Terangganu', min: 20, max: 28 },
      { _id: '3', country: 'Seremban', min: 25, max: 32 },
      { _id: '4', country: 'Alor Setar', min: 30, max: 25 },
      { _id: '5', country: 'Kuantan', min: 18, max: 23 },
      { _id: '6', country: 'Johor Bahru', min: 20, max: 28 },
      { _id: '7', country: 'Kota Bahru', min: 25, max: 32 },
      { _id: '8', country: 'Kangar', min: 30, max: 32 },
      { _id: '9', country: 'Shah Alam', min: 30, max: 32 },
    ],
  }
}
export const mutations = {
  initPost(state, posts) {
    state.posts = posts;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
  setTeam(state, team) {
    state.team = team;
  },
  setVideo(state, videos) {
    state.videos = videos;
  },
  setAd(state, ad) {
    state.ad = ad;
  },
  setHeader(state, header) {
    state.headerData = header;
  },
  setFooter(state, footer) {
    state.footerData = footer;
  },
};
export const actions =  {
  async nuxtServerInit ({ commit }) {
    const query = `*[_type == "category"] {
      _id,
      title,
    }[0...50]`;
    const queryTeam = `*[_type == "team"] {
      _id,
      name,
      designation,
      email,
    }[0...50]`;
    const queryVideo = `*[_type == "vdopost"] {
      _id,
      title,
      vdolink,
    }[0...16]`;
    const queryAd = `*[_type == "ad"] {
      _id,
      title,
      ad,
      imagelink,
      mainImage,
    }`;
    const queryHeader = `*[_type == "header"] {
      _id,
      title,
      logo,
      facebooklink,
      twitterlink,
    }`;
    const queryFooter = `*[_type == "footer"] {
      _id,
      title,
      author,
      address,
      telephone1,
      telephone2,
      facebooklink,
      twitterlink,
    }`;
    await sanity.fetch(query).then(data => {
      commit('setCategories', data);
    }, error => {
      console.log(error);
    });
    await sanity.fetch(queryTeam).then(team => {
      commit('setTeam', team);
    }, error => {
      console.log(error);
    });
    await sanity.fetch(queryVideo).then(videos => {
      const dataVideo = videos.map(video => {
        const { vdolink } = video;
        const arrayVdo = split(vdolink, '=');
        const link = 'https://www.youtube.com/embed/' + arrayVdo[1];
        return {
          ...video,
          link: link,
        }
      })
      commit('setVideo', dataVideo);
    }, error => {
      console.log(error);
    });
    await sanity.fetch(queryAd).then(ad => {
      commit('setAd', ad[0] || {});
    }, error => {
      console.log(error);
    });
    await sanity.fetch(queryHeader).then(header => {
      commit('setHeader', header[0]|| {});
    }, error => {
      console.log(error);
    });
    await sanity.fetch(queryFooter).then(footer => {
      commit('setFooter', footer[0]|| {});
    }, error => {
      console.log(error);
    });
  }
}
