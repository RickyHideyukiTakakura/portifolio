import axios from 'axios'

const gitHubApi = axios.create({
  baseURL: 'https://api.github.com'
})

export function getRepositories() {
  return gitHubApi.get('/users/RickyHideyukiTakakura/repos')
}
