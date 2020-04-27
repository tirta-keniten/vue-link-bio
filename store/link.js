import serviceLink from '@/services/link'

export const state = () => {
  return {
    all: [
      {
        title: "Linktree layout",
        url: "/",
        picture: "https://source.unsplash.com/200x200/?tree",
        created_at: new Date
      },
      {
        title: "Lnk.bio layout",
        url: "/lnk-bio",
        picture: "https://source.unsplash.com/200x200/?floor",
        created_at: new Date
      },
      {
        title: "Olapic's tap.sh layout",
        url: "/tap-sh",
        picture: "https://source.unsplash.com/200x200/?twin",
        created_at: new Date
      },
      {
        title: "Unsplash: Beatiful free images & pictures",
        url: "https://unsplash.com/",
        picture: "https://source.unsplash.com/200x200/?unsplash",
        created_at: new Date
      }
    ],

    posts: [],

    setting: {}
  }
}

export const actions = {
  getLinks ({ commit }, igAccount) {
    serviceLink.getLinkBio(igAccount).then((res) => {
      commit('SET_ALL_LINKS', res.data.posts)
      commit('SET_SETTING', res.data.setting)
    })
  }
}

export const mutations = {
  SET_ALL_LINKS (state, payload) {
    state.posts = payload
  }, 

  SET_SETTING (state, payload) {
    state.setting = payload
  }, 
}