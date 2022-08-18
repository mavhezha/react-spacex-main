import axios from 'axios'
const BASE_URL = 'https://api.spacexdata.com/v4/'

export default axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' }
})
