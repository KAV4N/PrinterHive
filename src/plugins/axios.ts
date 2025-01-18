import axios from 'axios'

const configData =  {
  baseURL: 'http://localhost',
}

export default axios.create({
    baseURL: configData.baseURL
})
