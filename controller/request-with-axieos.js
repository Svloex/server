const { api } = require('../axios-parameter/instance-axios')
const login = async(data) => {
    const query = `grant_type=&username=${data.username}&password=${data.password}&scope=&client_id=&client_secret=`
        //console.log(query)
    return await api.post('/login', query, {})
}
module.exports = {
    login
}