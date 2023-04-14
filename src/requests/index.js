import axios from 'axios'

export const fetchUsers = (page) => {
    console.log('fetching...')
    return axios.get(`https://randomuser.me/api/?seed=bristol&page=${page}&results=10`)
    .then(({data:{info, results}}) => {
        return results
    })
}
    