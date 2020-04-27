import axios from 'axios'

const baseUrl = process.env.SERVICE_BASE_URL;

export default {
  getLinkBio (igAccount) {
    return axios.get(`${baseUrl}/link-bio-posts/${igAccount}`);
  }
}