const axios = require('axios')
const api = axios.create({
        baseURL: 'http://79.143.31.216',
    })
    // api.interceptors.request.use(config => {
    //         config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    //         return config
    //     })
    //api.defaults.headers.common = '';
module.exports = {
    api
}