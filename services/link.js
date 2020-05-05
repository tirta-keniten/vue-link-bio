import axios from 'axios'

const baseUrl = 'https://stage-cdb.astadala.net'

export default {
  getLinkBio (igAccount) {
    return axios.get(`${baseUrl}/link-bio-posts/${igAccount}`)
  }
}